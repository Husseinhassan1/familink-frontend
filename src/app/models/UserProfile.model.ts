export interface UserProfile {
  id: number;
  nickname: string;
  email: string;
  bio: string;
  followers: number;
  following: number;
  photos: string[];
}
