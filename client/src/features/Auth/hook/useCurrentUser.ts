import { useEffect, useState } from "react";
import { getCurrentUser } from "../services/authApi";
import type { StaffResponse } from "../types/auth.types";

export const useCurrentUser = () => {
  const [user, setUser] = useState<StaffResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await getCurrentUser();
        setUser(res);
        setLoading(false);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);
  return { user, loading };
};
