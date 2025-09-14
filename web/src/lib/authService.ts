import apiClient from './apiClient';

interface User {
  username: string;
}

export const getCurrentUser = async (): Promise<User> => {
  const response = await apiClient.get<User>('/auth/me');
  return response.data;
};