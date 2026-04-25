import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import bcrypt from 'bcryptjs';

const SESSION_COOKIE_NAME = 'starline_admin_session';

export async function login(password: string) {
  const envPassword = process.env.ADMIN_PASSWORD;
  const envHash = process.env.ADMIN_PASSWORD_HASH;

  let isValid = false;

  if (envHash) {
    isValid = await bcrypt.compare(password, envHash);
  } else if (envPassword) {
    // Fallback to plain text for backward compatibility before migration
    isValid = password === envPassword;
  }

  if (isValid) {
    const cookieStore = await cookies();
    cookieStore.set(SESSION_COOKIE_NAME, 'authenticated', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 1 week
    });
    return true;
  }
  return false;
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE_NAME);
  redirect('/admin/login');
}

export async function checkAuth() {
  const cookieStore = await cookies();
  const session = cookieStore.get(SESSION_COOKIE_NAME);
  return session?.value === 'authenticated';
}

export async function requireAuth() {
  const isAuthenticated = await checkAuth();
  if (!isAuthenticated) {
    redirect('/admin/login');
  }
}
