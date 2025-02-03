import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import HomeClient from './HomeClient';

export default async function Home() {
  const { userId } = await auth(); // Await the promise

  if (!userId) {
    redirect('/login');
  }

  return <HomeClient />;
}
