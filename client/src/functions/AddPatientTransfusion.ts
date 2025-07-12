import axios from "axios";
import { api } from "./api";

const { VITE_API_PATH } = import.meta.env;

export const getAllPatientTransfusions = async (
  setTransfusions: React.Dispatch<React.SetStateAction<any>>
) => {
  try {
    const result = await axios.get(
      VITE_API_PATH + "/addPatientTransfusion/getAllPatientTransfusionsInfo",
      {
        headers: api.headers(),
      }
    );
    setTransfusions(result.data.data);
  } catch (error) {
    console.log(error);
  }
};

export const PatientTransfusionDetail = async (bb_cross_macth_id) => {
  try {
    const result = await axios.get(
      VITE_API_PATH + "/addPatientTransfusion/getAllPatientTransfusions",
      {
        headers: api.headers(),
        params: { bb_cross_macth_id: bb_cross_macth_id },
      }
    );
    return result.data.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
