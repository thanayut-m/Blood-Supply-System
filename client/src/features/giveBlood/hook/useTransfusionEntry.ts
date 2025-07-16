import { useLocation } from "react-router";
import { getBloodGiveById } from "../services/transfusionApi";
import { useEffect, useState } from "react";
import type {
  BloodGiveDetailPage,
  BloodGiveDetailPayload,
} from "../types/transfusion.types";

export const useTransfusionEntry = () => {
  const [data, setData] = useState<BloodGiveDetailPage>();
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const { bb_cross_macth_id } = location.state || {};

  const fetchBloodGiveById = async () => {
    setLoading(true);
    try {
      const res = await getBloodGiveById(bb_cross_macth_id);
      setData(res);
      setLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const updateBloodGiveMap = async (data: BloodGiveDetailPayload) => {
    try {
      // if (!isBloodBagMatched || !isBagFromTagMatched || !isHnMatched) {
      //   Swal.fire({
      //     title: "ข้อมูลไม่ตรงกัน",
      //     text: "กรุณาตรวจสอบข้อมูล Barcode อีกครั้ง",
      //     icon: "error",
      //     showConfirmButton: false,
      //     timer: 1000,
      //   });
      //   return;
      // }
      console.log(data);
      // const res = await putBloodGiveMap(data, bb_cross_macth_id);
      // console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBloodGiveById();
  }, [bb_cross_macth_id]);

  return {
    data,
    updateBloodGiveMap,
    loading,
  };
};
