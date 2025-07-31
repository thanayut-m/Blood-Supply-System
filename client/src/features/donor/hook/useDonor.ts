import { useEffect, useState } from "react";
import { getDonorListById } from "../service/DonorAPI";
import type { getDonorListResponse } from "../types/donor.type";

export const useDonor = (debouncedSearch: string) => {
  const [data, setData] = useState<getDonorListResponse>();
  const [loading, setLoading] = useState(false);

  const fetchDonorListById = async (debouncedSearch: string) => {
    setLoading(true);
    try {
      const res = await getDonorListById(debouncedSearch);
      setData(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDonorListById(debouncedSearch || "");
  }, [debouncedSearch]);

  return {
    data,
    loading,
  };
};
