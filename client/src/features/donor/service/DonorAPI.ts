import axios from "axios";
import { authHeader } from "../../../utils/authHeader";

const { VITE_API_PATH } = import.meta.env;

export const getDonorListById = async (debouncedSearch) => {
  const response = await axios.get(VITE_API_PATH + "/donor/getDonorList", {
    headers: authHeader.headers(),
    params: { search_donorList: debouncedSearch },
  });
  return response.data;
};
