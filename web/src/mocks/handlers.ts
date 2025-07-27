// web/src/mocks/handlers.ts
import { http, HttpResponse } from 'msw';

export const handlers = [
  // 新規登録（/auth/signup）
  http.post('/auth/signup', async ({ request }) => {
    const { name, email, password } = await request.json() as { name?: string; email?: string; password?: string };
    if (!name || !email || !password) {
      return HttpResponse.json(
        { error: 'Missing signup fields' },
        { status: 400 }
      );
    }

    return HttpResponse.json(
      { token: 'mock-signup-token' },
      { status: 200 }
    );
  }),

  // ログイン（/auth/login）
  http.post('/auth/login', async ({ request }) => {
    const { email, password } = await request.json() as { email?: string; password?: string };
    if (email === 'test@example.com' && password === '123456') {
      return HttpResponse.json(
        { token: 'mock-login-token' },
        { status: 200 }
      );
    }

    return HttpResponse.json(
      { error: 'Invalid credentials' },
      { status: 401 }
    );
  }),
];