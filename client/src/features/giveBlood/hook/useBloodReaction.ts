import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router";
import type { BloodReactionPage } from "../types/bloodReaction.types";
import { getBloodReactionById } from "../services/bloodReactionApi";

export const useBloodReaction = () => {
  const [data, setData] = useState<BloodReactionPage>();
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const { bb_cross_macth_id } = location.state || {};

  const fetchBloodReactionById = useCallback(async () => {
    setLoading(true);
    try {
      const res = await getBloodReactionById(bb_cross_macth_id);
      setData(res);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [bb_cross_macth_id]);

  useEffect(() => {
    if (bb_cross_macth_id) {
      fetchBloodReactionById();
    }
  }, [bb_cross_macth_id, fetchBloodReactionById]);
  return { data, loading };
};
