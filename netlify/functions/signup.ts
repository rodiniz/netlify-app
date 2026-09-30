import { AuthError, signup ,verifyRequestOrigin} from '@netlify/identity';


interface SignupRequest {
  email: string;
  password: string;
}

export default async (request: Request): Promise<Response> => {
  try {
    verifyRequestOrigin(request);
    const { email, password } = (await request.json()) as SignupRequest;
    const user = await signup(email, password);

    return Response.json({ success: true, email: user.email });
  } catch (error) {
    const identityError = error instanceof AuthError ? error : null;
    const identityUnavailable = identityError?.status === 404 || identityError?.status === undefined;

    return Response.json(
      {
        success: false,
        error: identityUnavailable
          ? 'Netlify Identity is not enabled or this project is not linked to a Netlify site.'
          : identityError.message,
      },
      { status: identityUnavailable ? 503 : identityError.status },
    );
  }
};