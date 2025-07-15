import axios from "axios";
import type {
  ForgetPasswordPayload,
  ForgetPasswordResponse,
  SignInPayload,
  SignInResponse,
  StaffData,
} from "../types/auth.types";
import { authHeader } from "../../../utils/authHeader";

const { VITE_API_PATH } = import.meta.env;

export const SignIn = async (data: SignInPayload): Promise<SignInResponse> => {
  const response = await axios.post(VITE_API_PATH + "/Auth/signIn", data);
  return response.data;
};

export const forgetPassword = async (
  data: ForgetPasswordPayload
): Promise<ForgetPasswordResponse> => {
  const response = await axios.put(VITE_API_PATH + "/Auth/resetPassword", data);
  return response.data;
};

export const getCurrentUser = async (): Promise<StaffData | null> => {
  const response = await axios.get(VITE_API_PATH + "/Auth/current-user", {
    headers: authHeader.headers(),
  });
  return response.data;
};
