import Swal from "sweetalert2";
import { forgetPassword } from "../services/authApi";
import type { ForgetPasswordPayload } from "../types/auth.types";
import { useNavigate } from "react-router";

export const useForgetPassword = () => {
  const navigate = useNavigate();

  const handleForgetPassword = async (data: ForgetPasswordPayload) => {
    try {
      const res = await forgetPassword(data);
      console.log(res);

      if (res.success === true) {
        Swal.fire({
          icon: "success",
          title: "เปลี่ยนรหัสผ่านสำเร็จ",
          timer: 1000,
          showConfirmButton: false,
        });
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return { handleForgetPassword };
};
