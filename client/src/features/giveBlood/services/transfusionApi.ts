import axios from "axios";
import { authHeader } from "../../../utils/authHeader";
import type {
  BloodGiveDetailPage,
  BloodGiveDetailPayload,
  PatientGiveListResponse,
  PatientGiveResponse,
  UpdateBloodGiveMapResponse,
} from "../types/transfusion.types";

const { VITE_API_PATH } = import.meta.env;

export const getGiveBloodList = async (): Promise<PatientGiveResponse[]> => {
  const response = await axios.get<PatientGiveListResponse>(
    VITE_API_PATH + "/addPatientTransfusion/getAllPatientTransfusionsInfo",
    {
      headers: authHeader.headers(),
    }
  );
  return response.data.data;
};

export const getBloodGiveById = async (
  bb_cross_macth_id: number
): Promise<BloodGiveDetailPage> => {
  const response = await axios.get<BloodGiveDetailPage>(
    VITE_API_PATH + "/addPatientTransfusion/getAllPatientTransfusions",
    {
      headers: authHeader.headers(),
      params: { bb_cross_macth_id: bb_cross_macth_id },
    }
  );
  return response.data;
};

export const putBloodGiveMap = async (
  formData: BloodGiveDetailPayload,
  bb_cross_macth_id: number
): Promise<UpdateBloodGiveMapResponse> => {
  const response = await axios.put(
    VITE_API_PATH + "/addPatientTransfusion/updatePatientTransfusions",
    {
      bagFromTag: formData.bagFromTag,
      bloodBagNo: formData.bloodBagNo,
      hn: formData.hn,
      bb_cross_macth_id: bb_cross_macth_id,
    },
    {
      headers: authHeader.headers(),
    }
  );
  return response.data;
};
