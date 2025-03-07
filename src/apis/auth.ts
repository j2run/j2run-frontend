import axios from "axios"
import { ForgotPasswordResponse, LoginResponseDto } from "../dtos/auth";

// const endpoint = process.env.NODE_ENV === 'development' ? 'http://localhost:8010/' : '/api/';
const endpoint = '/api/';

export const authService = {
  login: (email: string, password: string) => {
    return axios.post<LoginResponseDto>(endpoint + 'auth/login', {
      email,
      password
    }).then((rs) => rs.data);
  },
  register: (email: string, password: string) => {
    return axios.post<LoginResponseDto>(endpoint + 'auth/register', {
      email,
      password
    }).then((rs) => rs.data);
  },
  verify: (code: string, email: string) => {
    return axios.post(endpoint + 'auth/verify', {
      code,
      email,
    })
  },
  forgotPassword: (email: string) => {
    return axios.post<ForgotPasswordResponse>(endpoint + 'auth/forgot-password', {
      email,
    }).then((rs) => rs.data);
  },
  verifyForgotPassword: (email: string, code: string) => {
    return axios.post<LoginResponseDto>(endpoint + 'auth/verify-forgot-password', {
      code,
      email
    }).then((rs) => rs.data);
  },
}