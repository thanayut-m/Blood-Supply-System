import { useLocation } from "react-router";
import { getBloodGiveById, putBloodGiveMap } from "../services/transfusionApi";
import { useEffect, useState } from "react";
import type {
  BloodGiveDetailPage,
  BloodGiveDetailPayload,
} from "../types/transfusion.types";
import Swal from "sweetalert2";

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

  const updateBloodGiveMap = async (formData: BloodGiveDetailPayload) => {
    try {
      const crossMatch = data?.data.crossMatch;
      if (!crossMatch) return;

      const isBloodBagMatched = formData.bloodBagNo === crossMatch.bloodCode;
      const isBagFromTagMatched = formData.bagFromTag === crossMatch.bloodCode;
      const isHnMatched = formData.hn === crossMatch.crossHN;
      if (!isBloodBagMatched || !isBagFromTagMatched || !isHnMatched) {
        Swal.fire({
          title: "ข้อมูลไม่ตรงกัน",
          text: "กรุณาตรวจสอบข้อมูล Barcode อีกครั้ง",
          icon: "error",
          showConfirmButton: false,
          timer: 1000,
        });
        return;
      }

      const res = await putBloodGiveMap(formData, bb_cross_macth_id);
      if (res.success === true) {
        Swal.fire({
          title: "ยืนยันจ่ายโลหิตสำเร็จ",
          text: "ระบบทำการจัดจ่ายโลหิตจากระบบให้ผู้ขอโลหิตสำเร็จ",
          icon: "success",
          showConfirmButton: true,
          confirmButtonText: "ปิด",
        });
        fetchBloodGiveById();
      }
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (bb_cross_macth_id) {
      fetchBloodGiveById();
    }
  }, [bb_cross_macth_id]);

  return {
    data,
    updateBloodGiveMap,
    loading,
  };
};
