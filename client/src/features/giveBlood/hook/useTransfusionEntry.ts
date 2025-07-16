import { useLocation, useNavigate } from "react-router";
import {
  getBloodGiveById,
  putBloodGiveMap,
  putPayBlood,
} from "../services/transfusionApi";
import { useCallback, useEffect, useState } from "react";
import type {
  BloodGiveDetailPage,
  BloodGiveDetailPayload,
} from "../types/transfusion.types";
import Swal from "sweetalert2";

export const useTransfusionEntry = () => {
  const [data, setData] = useState<BloodGiveDetailPage>();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const location = useLocation();
  const { bb_cross_macth_id } = location.state || {};

  const fetchBloodGiveById = useCallback(async () => {
    setLoading(true);
    try {
      const res = await getBloodGiveById(bb_cross_macth_id);
      setData(res);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [bb_cross_macth_id]);

  useEffect(() => {
    if (bb_cross_macth_id) {
      fetchBloodGiveById();
    }
  }, [bb_cross_macth_id, fetchBloodGiveById]);

  const updateBloodGiveMap = async (
    formData: BloodGiveDetailPayload,
    onSuccessCloseModal?: () => void
  ) => {
    try {
      if (!bb_cross_macth_id) {
        console.log("ไม่พบข้อมูล");
        navigate(-1);
        return;
      }

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
          title: "ข้อมูลถูกต้อง",
          icon: "success",
          text: "การระบุข้อมูลเพื่อยืนยันถุงโลหิตตรงกัน",
          confirmButtonText: "ปิด",
          timer: 1000,
        }).then((result) => {
          if (result.isConfirmed) {
            fetchBloodGiveById();
            onSuccessCloseModal?.();
          }
        });
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "เกิดข้อผิดพลาด",
        text: "ไม่สามารถโหลดข้อมูลได้ กรุณาลองใหม่",
        icon: "error",
      });
    }
  };

  const updatePayBlood = async (formData: BloodGiveDetailPayload) => {
    try {
      if (!bb_cross_macth_id) {
        console.log("ไม่พบข้อมูล");
        navigate(-1);
        return;
      }

      const checkStatus = data?.data.check;
      if (!checkStatus) {
        console.error("Check status is missing");
        return;
      }

      const res = await putPayBlood(formData, bb_cross_macth_id, checkStatus);

      if (res.message === "ข้อมูลไม่ครบ") {
        console.log("กรุณากรอกผู้ให้โลหิต");
      }

      if (res.success === true) {
        Swal.fire({
          title: "ยืนยันจ่ายโลหิตสำเร็จ",
          text: "ระบบทำการจัดจ่ายโลหิตจากระบบให้ผู้ขอโลหิตสำเร็จ",
          icon: "success",
          showConfirmButton: true,
          confirmButtonText: "ปิด",
        }).then((result) => {
          if (result.isConfirmed) {
            fetchBloodGiveById();
          }
        });
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "เกิดข้อผิดพลาด",
        text: "ไม่สามารถโหลดข้อมูลได้ กรุณาลองใหม่",
        icon: "error",
      });
    }
  };

  return {
    data,
    updateBloodGiveMap,
    updatePayBlood,
    loading,
  };
};
