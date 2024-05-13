import { useSession } from 'next-auth/react';
import LoginButton from '@/components/LoginButton';

export default function Home() {
  const session = useSession();

  if (!session) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  // if session is defined, proceed to check if user is logged in
  if (session.data) {
    return (
      <div>
        <p>Welcome, {session.data.user.name}!</p>
        { /* woooo */ }
      </div>
    );
  } else {
    // user is not logged in
    return (
      <div>
        <p>You are not logged in.</p>
        <LoginButton />
      </div>
    );
  }
}
