import { verifyRequestOrigin, login } from '@netlify/identity';

export default async (request: Request): Promise<Response> => {

  try {
    verifyRequestOrigin(request);
     
    const { email, password } = await request.json()
    await login(email, password)
    return Response.json({ success: true });
  } catch (error) {
    return Response.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Something went wrong. Please try again.',
      },
      { status: 500 },
    );
  }
}

