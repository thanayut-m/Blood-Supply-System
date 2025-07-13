import axios from "axios";
import { api } from "./api";
import type { TransfusionData } from "../types/BloodBankGiveDetail/TransfusionData";
import Swal from "sweetalert2";

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

export const PatientTransfusionDetail = async (bb_cross_macth_id: string) => {
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

export const updatePatientTransfusion = async (
  data: TransfusionData,
  bb_cross_macth_id: string,
  fetchPatientTransfusion: () => void
) => {
  try {
    console.log(data);
    console.log(bb_cross_macth_id);

    const result = await axios.put(
      VITE_API_PATH + "/addPatientTransfusion/updatePatientTransfusions",
      {
        bagFromTag: data.bagFromTag,
        bloodBagNo: data.bloodBagNo,
        hn: data.hn,
        bb_cross_macth_id,
      },
      {
        headers: api.headers(),
      }
    );

    if (result.data.success === true) {
      fetchPatientTransfusion();
      console.log("Update success:", result.data);
      Swal.fire({
        title: "ข้อมูลถูกต้อง",
        icon: "success",
        text: "การระบุข้อมูลเพื่อยืนยันถุงโลหิตตรงกัน",
        confirmButtonText: "ปิด",
        timer: 1000,
      });
      return result.data;
    }
  } catch (error) {
    console.log(error);
  }
};
