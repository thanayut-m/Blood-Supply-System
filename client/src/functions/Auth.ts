import axios from "axios";
import Swal from "sweetalert2";
import { api } from "./api";

const { VITE_API_PATH, VITE_SET_TOKEN } = import.meta.env;

export const signIn = async (
  data: object,
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

      navigate("/");
    }
  } catch (error) {
    console.error("Sign in failed:", error);
  }
};

export const ResetPassword = async (
  data: object,
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

export const currentUser = async () => {
  try {
    const result = await axios.get(VITE_API_PATH + "/Auth/current-user", {
      headers: api.headers(),
    });

    return result.data;
  } catch (error) {
    console.log(error);
  }
};
