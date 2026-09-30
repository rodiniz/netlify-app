import type { Context } from '@netlify/functions';
import { signup } from '@netlify/identity';

interface SignupRequest {
  email: string;
  password: string;
}

export default async (request: Request, context: Context): Promise<Response> => {
  const { email, password } = (await request.json()) as SignupRequest;
  const user = await signup(email, password);

  return Response.json(
    { message: `Signup successful for user: ${user.email}` },
    { status: 200 },
  );
};