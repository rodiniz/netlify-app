import { getUser} from '@netlify/identity';
export async function isUserLoggedIn(): Promise<boolean> {
       const user = await getUser();
       if (!user) return false;
       return true;
}   