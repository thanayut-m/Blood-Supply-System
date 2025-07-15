import axios from "axios";
import { authHeader } from "../../../utils/authHeader";
import type { OptionType, StaffOptionData } from "../types/auth.types";

const { VITE_API_PATH } = import.meta.env;

export const fetchStaffOptions = async (): Promise<OptionType[]> => {
  try {
    const response = await axios.get(VITE_API_PATH + "/Auth/staffInfo", {
      headers: authHeader.headers(),
    });
    const data = response.data.data;

    const staffOption: OptionType[] = Array.isArray(data)
      ? data.map((item: StaffOptionData) => ({
          label: item.staffName,
          value: item.staffId,
        }))
      : [
          {
            label: (data as StaffOptionData).staffName,
            value: (data as StaffOptionData).staffId,
          },
        ];

    return staffOption;
  } catch (error) {
    console.error("fetchStaffOptions error:", error);
    return [];
  }
};
