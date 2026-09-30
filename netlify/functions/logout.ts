export default async (request: Request): Promise<Response> => {
  try {
    verifyRequestOrigin(request);
    await logout();
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
};

import { logout, verifyRequestOrigin } from '@netlify/identity';