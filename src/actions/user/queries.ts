'use server';

import { client } from '@/lib/prisma';

export const findUser = async (clerkId: string) => {
  return await client.user.findUnique({
    where: {
      clerkId,
    },
    include: {
      subscription: true,
      integrations: {
        select: {
          id: true,
          name: true,
          token: true,
          expiresAt: true,
        },
      },
    },
  });
};

export const createUser = async (
  clerkId: string,
  email: string,
  firstName: string,
  lastName: string
) => {
  return await client.user.create({
    data: {
      clerkId,
      email,
      firstName,
      lastName,
      subscription: {
        create: {},
      },
    },
    select: {
      firstName: true,
      lastName: true,
    },
  });
};

export const updateSubscription = async (
  clerkId: string,
  props: {
    customerId?: string;
    plan?: 'PRO' | 'FREE';
  }
) => {
  return await client.user.update({
    where: {
      clerkId,
    },
    data: {
      subscription: {
        update: {
          ...props,
        },
      },
    },
  });
};
