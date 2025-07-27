import axios from 'axios';
import type { User } from '../context/data-context';

const AuthService = {
  async isUserLoggedIn(): Promise<User | null>{
    try {
      const response = await axios.get('http://localhost:3001/user/whoami', {
        withCredentials: true, // if your backend uses cookies for auth
      });
     
      // Adjust based on your backend's response shape
      return response.data as User || null;
    } catch (error) {
      console.error('Error checking login status:', error);
      return null;
    }
  },

  async signUp({email, password}:{email:string, password: string}): Promise<User | null> {
    try {
      const response = await axios.post('http://localhost:3001/user/signUp', {
        email,
        password
      },{
        withCredentials: true
      });
     
      // Adjust based on your backend's response shape
      return response.data || null;
    } catch (error) {
      console.error('Error checking login status:', error);
      return null;
    }
  },
};

export default AuthService;
