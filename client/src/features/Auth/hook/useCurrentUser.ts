import { useEffect, useState } from "react";
import { getCurrentUser } from "../services/authApi";
import type { StaffResponse } from "../types/auth.types";

export const useCurrentUser = () => {
  const [user, setUser] = useState<StaffResponse | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await getCurrentUser();
        setUser(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, []);
  return { user };
};
