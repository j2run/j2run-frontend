import { UserDto } from "../dtos/user";
import { axiosInstance } from "./axios"

export const userService = {
  info: () => {
    return axiosInstance.get<UserDto>('user/info')
      .then((rs) => rs.data);
  },
  resetPassword: (password: string) => {
    return axiosInstance.post('user/reset-password', { password })
      .then((rs) => rs.data);
  }
}