import { onBoardUser } from '@/actions/user';
import { redirect } from 'next/navigation';
import React from 'react';

type Props = {};

const Page = async (props: Props) => {
  // user async because we want to fetch data from the server
  const user = await onBoardUser();

  if (user.status === 200 || user.status === 201) {
    redirect(`dashboard/${user.data.firstName}${user.data.lastName}`);
  }

  return redirect('/sign-in');
};

export default Page;
