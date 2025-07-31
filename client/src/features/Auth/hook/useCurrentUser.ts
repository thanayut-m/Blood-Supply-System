import { useEffect, useState } from "react";
import { getCurrentUser } from "../services/authApi";
import type { StaffResponse } from "../types/auth.types";
import { useNavigate } from "react-router";

export const useCurrentUser = () => {
  const [user, setUser] = useState<StaffResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await getCurrentUser();
        console.log(res.success);
        if (res.success) {
          setUser(res);
        } else {
          navigate("/");
        }
      } catch (error) {
        console.log(error);
        navigate("/");
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [navigate]);

  return { user, loading };
};
