import { useEffect, useState } from "react";
import type { OptionType } from "../types/auth.types";
import { fetchStaffOptions } from "../services/staffApi";

export const useStaffOptions = () => {
  const [staffOptions, setStaffOptions] = useState<OptionType[]>([]);
  const [Loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const staff = await fetchStaffOptions();
        setStaffOptions(staff);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return { staffOptions, Loading };
};
