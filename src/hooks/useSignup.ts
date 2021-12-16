import { useState, FC } from 'react';
import { projectAuth } from '../firebase/config';

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  interface IsignUp {
    email: string;
    password: string;
    displayName: string;
  }

  const signup = async ({ email, password, displayName }: IsignUp) => {
    setError(null);
    setIsPending(true);

    try {
      const res = await projectAuth.createUserWithEmailAndPassword(
        email,
        password
      );
      console.log(res.user);

      if (!res) {
        throw new Error('could not complete signup user');
      }

      await res.user?.updateProfile({ displayName });

      setError(null);
      setIsPending(false);
    } catch (error: any) {
      console.log(error);
      setError(error.message);
      setIsPending(false);
    }
  };
};
