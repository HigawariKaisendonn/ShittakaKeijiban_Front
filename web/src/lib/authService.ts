import apiClient from './apiClient';
import { Profile } from '@/types/Profile';

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

export const getProfileByUserId = async (userId: string): Promise<Profile> => {
  try {
    console.log("API call: GET /profiles/" + userId);
    const response = await fetch(`http://localhost:8088/api/profiles/${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log("API response:", data);
    
    // APIレスポンスをProfile型に変換
    const profile: Profile = {
      user_id: data.id,
      username: data.name,
      display_name: data.name,
      created_at: new Date().toISOString(), // ダミーデータ
      updated_at: new Date().toISOString()  // ダミーデータ
    };
    
    return profile;
  } catch (error) {
    console.error("API error for /profiles/" + userId, error);
    throw error;
  }
};