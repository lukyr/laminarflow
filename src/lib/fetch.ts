import axios from 'axios';

export const refreshToken = async (token: string) => {
  const refreshToken = await axios.get(
    `${process.env.INSTAGRAM_BASE_URL}/refresh_access_token?grant_type=ig_refresh_token&access_token=${token}`
  );
  return refreshToken.data;
};

export const sendDM = async (userId: string, receiverId: string, prompt: string, token: string) => {
  return await axios.post(
    `${process.env.INSTAGRAM_BASE_URL}/v21.0/${userId}/messages`,
    {
      recipient: {
        id: receiverId,
      },
      message: {
        text: prompt,
      },
    },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
