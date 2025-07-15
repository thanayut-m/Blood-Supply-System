import type { SignInPayload } from "../types/auth.types";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import { SignIn } from "../services/authApi";

const { VITE_SET_TOKEN } = import.meta.env;

export const useSignIn = () => {
  const navigate = useNavigate();

  const handleSignIn = async (data: SignInPayload) => {
    const token = await SignIn(data);
    localStorage.setItem(VITE_SET_TOKEN, token);

    Swal.fire({
      icon: "success",
      title: "เข้าสู่ระบบสำเร็จ",
      timer: 1000,
      showConfirmButton: false,
    });

    navigate("/BloodBankGiveList");
  };

  return { handleSignIn };
};
