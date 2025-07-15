import axios from "axios";
import type {
  OptionType,
  ResetPasswordPayload,
  SignInPayload,
  StaffData,
  StaffOptionData,
} from "../types/auth.types";
import Swal from "sweetalert2";
import { authHeader } from "../../../utils/authHeader";

const { VITE_API_PATH, VITE_SET_TOKEN } = import.meta.env;

export const SignIn = async (
  data: SignInPayload,
  navigate: (path: string) => void
) => {
  try {
    const result = await axios.post(VITE_API_PATH + "/Auth/signIn", data);

    if (result.data.success === true) {
      localStorage.setItem(VITE_SET_TOKEN, result.data.token);

      Swal.fire({
        icon: "success",
        title: "เข้าสู่ระบบสำเร็จ",
        timer: 1000,
        showConfirmButton: false,
      });

      navigate("/BloodBankGiveList");
    }
  } catch (error) {
    console.error("Sign in failed:", error);
  }
};

export const resetPassword = async (
  data: ResetPasswordPayload,
  navigate: (path: string) => void
) => {
  try {
    const result = await axios.put(VITE_API_PATH + "/Auth/resetPassword", data);

    if (result.data.success === true) {
      Swal.fire({
        icon: "success",
        title: "เปลี่ยนรหัสผ่านสำเร็จ",
        timer: 1000,
        showConfirmButton: false,
      });
      navigate("/");
    }
  } catch (error) {
    console.error("Reset password failed:", error);
  }
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
