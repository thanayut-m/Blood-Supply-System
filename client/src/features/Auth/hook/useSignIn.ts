import type { SignInPayload } from "../types/auth.types";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import { SignIn } from "../services/authApi";
import axios from "axios";

const { VITE_SET_TOKEN } = import.meta.env;

export const useSignIn = () => {
  const navigate = useNavigate();

  const handleSignIn = async (data: SignInPayload) => {
    try {
      const res = await SignIn(data);

      if (res.success === true) {
        const token = res.token;
        localStorage.setItem(VITE_SET_TOKEN, token);

        Swal.fire({
          icon: "success",
          title: "เข้าสู่ระบบสำเร็จ",
          timer: 1000,
          showConfirmButton: false,
        }).then(() => {
          navigate("/DonorList");
        });
      }
    } catch (error: unknown) {
      let message = "เกิดข้อผิดพลาด";

      if (axios.isAxiosError(error)) {
        message = error.response?.data?.message || error.message;
      } else if (error instanceof Error) {
        message = error.message;
      }

      Swal.fire({
        icon: "error",
        title: "ผิดพลาด",
        text: message,
      });
    }
  };
  return { handleSignIn };
};
