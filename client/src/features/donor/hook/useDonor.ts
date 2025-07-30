import { useEffect, useState } from "react";
import { getDonorListById } from "../service/DonorAPI";

export const useDonor = (search) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  const fetchDonorListById = async () => {
    setLoading(true);
    try {
      const res = await getDonorListById(search);
      setData(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDonorListById();
  }, [search]);

  return {
    data,
    loading,
  };
};
