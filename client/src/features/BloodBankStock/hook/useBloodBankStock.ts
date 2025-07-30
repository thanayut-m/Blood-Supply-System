import { useEffect, useState } from "react";
import { getBloodBankStock, getTotalBlood } from "../service/BloodBankStockAPI";

export const useBloodBankStock = (startDate, endDate, TypeName) => {
  const [data, setData] = useState([]);
  const [dataTotalBlood, setDataTotalBlood] = useState([]);
  const [loadingStock, setLoadingStock] = useState(false);
  const [loadingTotal, setLoadingTotal] = useState(false);

  const fetchBloodBankStock = async () => {
    setLoadingStock(true);
    try {
      const res = await getBloodBankStock(startDate, endDate, TypeName);
      if (res.success === true) {
        setData(res);
      } else {
        setData([]);
      }
    } catch (error) {
      console.error("Error fetching blood bank stock:", error);
      setData([]);
    } finally {
      setLoadingStock(false);
    }
  };

  const fetchTotalBlood = async () => {
    setLoadingTotal(true);
    try {
      const res = await getTotalBlood();
      if (res.success === true) {
        setDataTotalBlood(res || []);
      }
    } catch (error) {
      console.error("Error fetching total blood:", error);
      setDataTotalBlood([]);
    } finally {
      setLoadingTotal(false);
    }
  };

  useEffect(() => {
    fetchTotalBlood();

    if (!startDate || !endDate) return;
    fetchBloodBankStock();
  }, [startDate, endDate, TypeName]);

  return {
    data,
    dataTotalBlood,
    loading: loadingStock || loadingTotal,
    loadingStock,
    loadingTotal,
  };
};
