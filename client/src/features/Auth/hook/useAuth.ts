import { useEffect, useState } from "react";
import { getStaffInfo, postStaff, UpdateStaff } from "../services/staffApi";
import { forgetPassword } from "../services/authApi";
import { useNavigate } from "react-router";
import type {
  getStaffInfoResponse,
  postStaffPayload,
  ResetPassPayload,
  UpdateStaffPayload,
} from "../types/staff.types";

const { VITE_SET_TOKEN } = import.meta.env;

export const useAuth = (handleClose: () => void) => {
  const [staffInfo, setStaffInfo] = useState<getStaffInfoResponse[] | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      localStorage.removeItem(VITE_SET_TOKEN);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const fetchStaffInfo = async () => {
    setIsLoading(true);
    try {
      const res = await getStaffInfo();
      if (res?.success) {
        setStaffInfo(res.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdateStaff = async (data: UpdateStaffPayload) => {
    try {
      console.log(data);
      const res = await UpdateStaff({
        staffId: Number(data.staffId),
        username: data.username,
        staffName: data.staffName,
      });
      if (res.success) {
        fetchStaffInfo();
        handleClose();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleResetPassword = async (data: ResetPassPayload) => {
    try {
      const res = await forgetPassword({
        staffId: Number(data.staffId),
        re_password: data.re_password,
      });
      if (res.success) {
        fetchStaffInfo();
        handleClose();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignUp = async (data: postStaffPayload) => {
    try {
      const res = await postStaff({
        staffName: data.staffName,
        username: data.username,
        webPassword: data.webPassword,
      });
      if (res.success) {
        fetchStaffInfo();
        handleClose();
      }
      console.log(data.staffName);
      console.log(data.username);
      console.log(data.webPassword);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchStaffInfo();
  }, []);

  return {
    staffInfo,
    isLoading,
    handleUpdateStaff,
    handleResetPassword,
    handleSignUp,
    handleSignOut,
  };
};
