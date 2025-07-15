import { useEffect, useState } from "react";
import type { OptionType } from "../types/auth.types";
import { fetchStaffOptions } from "../services/staffApi";

export const useStaffOptions = () => {
  const [staffOptions, setStaffOptions] = useState<OptionType[]>([]);
  useEffect(() => {
    const load = async () => {
      const staff = await fetchStaffOptions();
      setStaffOptions(staff);
    };
    load();
  }, []);

  return { staffOptions };
};
