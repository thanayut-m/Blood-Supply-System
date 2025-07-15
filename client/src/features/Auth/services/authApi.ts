import axios from "axios";
import type {
  ForgetPasswordPayload,
  ForgetPasswordResponse,
  OptionType,
  SignInPayload,
  SignInResponse,
  StaffData,
  StaffOptionData,
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

export const currentUser = async (): Promise<StaffData | null> => {
  try {
    const result = await axios.get(VITE_API_PATH + "/Auth/current-user", {
      headers: authHeader.headers(),
    });

    return result.data as StaffData;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const fetchStaffOptions = async (
  setStaff: (value: OptionType[]) => void
) => {
  try {
    const result = await axios.get(VITE_API_PATH + "/Auth/staffInfo", {
      headers: authHeader.headers(),
    });

    const data = result.data.data;

    const staffOption: OptionType[] = Array.isArray(data)
      ? data.map((item: StaffOptionData) => ({
          label: item.staffName,
          value: item.staffId,
        }))
      : [
          {
            label: (data as StaffOptionData).staffName,
            value: (data as StaffOptionData).staffId,
          },
        ];
    setStaff(staffOption);
  } catch (error) {
    console.log(error);
    return [];
  }
};
