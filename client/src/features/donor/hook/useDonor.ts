import { useEffect, useState } from "react";
import { getDonorListById } from "../service/DonorAPI";

export const useDonor = (debouncedSearch) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  const fetchDonorListById = async (debouncedSearch) => {
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
