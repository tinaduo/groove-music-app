import { useSession } from 'next-auth/react';
import LoginButton from '../components/LoginButton';

export default function Home() {
  const { data: session } = useSession();

  return (
    <div>
      {session ? (
        <div>
          <p>Welcome, {session.user.name}!</p>
          {/* Your authenticated content */}
        </div>
      ) : (
        <div>
          <p>You are not logged in.</p>
          <LoginButton />
        </div>
      )}
    </div>
  );
}
