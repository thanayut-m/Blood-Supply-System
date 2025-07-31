import { useEffect, useState } from "react";
import { getStaffInfo, postStaff, UpdateStaff } from "../services/staffApi";
import { forgetPassword } from "../services/authApi";
import { useNavigate } from "react-router";

const { VITE_SET_TOKEN } = import.meta.env;

export const useAuth = (handleClose) => {
  const [staffInfo, setStaffInfo] = useState(null);
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
      if (res.data?.success) {
        setStaffInfo(res.data.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdateStaff = async (data) => {
    try {
      const res = await UpdateStaff({
        staffId: data.staffId,
        username: data.username,
        staffname: data.Staffname,
      });
      if (res.data.success) {
        fetchStaffInfo();
        handleClose();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleResetPassword = async (data) => {
    try {
      const res = await forgetPassword({
        staffId: data.staffId,
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

  const handleSignUp = async (data) => {
    try {
      const res = await postStaff({
        staffName: data.staffName,
        username: data.username,
        webPassword: data.webPassword,
      });
      if (res.data.success) {
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
