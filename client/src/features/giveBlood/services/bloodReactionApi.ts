import axios from "axios";
import { authHeader } from "../../../utils/authHeader";
import type { BloodReactionPage } from "../types/bloodReaction.types";

const { VITE_API_PATH } = import.meta.env;

export const getBloodReactionById = async (
  bb_cross_macth_id: number
): Promise<BloodReactionPage> => {
  const response = await axios.get(
    VITE_API_PATH + "/BloodReaction/getBloodReaction",
    {
      headers: authHeader.headers(),
      params: { bb_cross_macth_id: bb_cross_macth_id },
    }
  );
  return response.data;
};
