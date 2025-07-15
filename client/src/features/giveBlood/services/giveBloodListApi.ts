import axios from "axios";
import { authHeader } from "../../../utils/authHeader";

const { VITE_API_PATH } = import.meta.env;

export const fetchPatientGiveList = async () => {
  try {
    const result = await axios.get(
      VITE_API_PATH + "/addPatientTransfusion/getAllPatientTransfusionsInfo",
      {
        headers: authHeader.headers(),
      }
    );

    return result.data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
