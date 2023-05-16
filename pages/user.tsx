import { signOut, useSession } from 'next-auth/react';

function user() {
  return (
    <div>
      user
      <div onClick={() => signOut()}>Sign Out</div>
    </div>
  );
}

export default user;
