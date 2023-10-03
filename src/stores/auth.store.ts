import { defineStore } from 'pinia';
import { authService } from '../apis/auth';
import { clearToken, setAccessToken, setRefreshToken } from '../apis/axios';
import { router } from '../router';
import { UserDto } from '../dtos/user';
import { LoginResponseDto } from '../dtos/auth';
import { userService } from '../apis/user';

const getUser = () => {
  try {
    return JSON.parse(localStorage.getItem('user') as string)
  } catch (e) {
    console.error(e);
    return null;
  }
}

export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        user: getUser() as UserDto,
    }),
    actions: {
      async login(email: string, password: string) {
        const rs = await authService.login(email, password);
        this.setDataLogin(rs);
      },
      logout() {
        this.user = null as any;
        localStorage.removeItem('user');
        clearToken();
        router.push('/login');
      },
      setDataLogin(rs: LoginResponseDto) {
        localStorage.setItem('user', JSON.stringify(rs.user));
        setAccessToken(rs.accessToken);
        setRefreshToken(rs.refreshToken);
        this.user = rs.user;
        router.push('/manage');
      },
      async reloadInfo() {
        console.log('reload info');
        const user = await userService.info();
        this.user = user;
        localStorage.setItem('user', JSON.stringify(user));
      }
    }
});