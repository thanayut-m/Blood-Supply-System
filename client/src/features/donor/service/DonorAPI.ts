import axios from "axios";
import { authHeader } from "../../../utils/authHeader";
import type { getDonorListPage } from "../types/donor.type";

const { VITE_API_PATH } = import.meta.env;

export const getDonorListById = async (
  debouncedSearch: string
): Promise<getDonorListPage> => {
  const response = await axios.get(VITE_API_PATH + "/donor/getDonorList", {
    headers: authHeader.headers(),
    params: { search_donorList: debouncedSearch },
  });
  return response.data;
};
