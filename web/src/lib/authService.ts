import apiClient from './apiClient';

interface User {
  username: string;
}

export const getCurrentUser = async (): Promise<User> => {
  const response = await apiClient.get<User>('/auth/me');
  return response.data;
};

export const getUserById = async (userId: string): Promise<User> => {
  const response = await apiClient.get<User>(`/auth/me?user_id=${userId}`);
  return response.data;
};