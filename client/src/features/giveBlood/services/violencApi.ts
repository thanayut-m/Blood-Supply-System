import axios from "axios";
import { authHeader } from "../../../utils/authHeader";
import type { OptionType } from "../../../types/BloodBankGiveDetail/PatientInfoCard";
import type { ViolenceOptionResponse } from "../types/bloodReaction.types";

const { VITE_API_PATH } = import.meta.env;

export const fetchViolenceOptions = async (): Promise<OptionType[]> => {
  try {
    const response = await axios.get(
      VITE_API_PATH + "/BloodReaction/getViolence",
      {
        headers: authHeader.headers(),
      }
    );
    const data = response.data.data;

    const ViolenceOption: OptionType[] = Array.isArray(data)
      ? data.map((item: ViolenceOptionResponse) => ({
          label: item.violenceName,
          value: item.violenceId,
        }))
      : [
          {
            label: (data as ViolenceOptionResponse).violenceName,
            value: (data as ViolenceOptionResponse).violenceId,
          },
        ];

    return ViolenceOption;
  } catch (error) {
    console.error("fetchViolenceOptions error:", error);
    return [];
  }
};
