'use server';

import { client } from '@/lib/prisma';

export const updateIntegration = (token: string, expire: Date, id: string) => {
  return client.instegrations.update({
    where: {
      id,
    },
    data: {
      token,
      expiresAt: expire,
    },
  });
};
