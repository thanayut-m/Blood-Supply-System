import { useLocation } from "react-router";
import { getBloodGiveById } from "../services/transfusionApi";
import { useEffect, useState } from "react";
import type { BloodGiveDetailPage } from "../types/transfusion.types";

export const useTransfusionEntry = () => {
  const [data, setData] = useState<BloodGiveDetailPage>();
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const { bb_cross_macth_id } = location.state || {};

  useEffect(() => {
    const fetchBloodGiveById = async () => {
      const res = await getBloodGiveById(bb_cross_macth_id);
      setData(res);
      setLoading(false);
    };
    fetchBloodGiveById();
  }, [bb_cross_macth_id]);

  return { data, loading };
};
