import { useEffect, useState } from "react";
import {
  getBloodBankStock,
  getContaminatedBloodBags,
  getDeliveredBloodBags,
  getPendingBloodBags,
  getReadyBloodBags,
  getReservedBloodBags,
  getTotalBlood,
} from "../service/BloodBankStockAPI";

export const useBloodBankStock = (
  startDate,
  endDate,
  TypeName,
  selectedGroupLabel
) => {
  const [data, setData] = useState([]);
  const [dataTotalBlood, setDataTotalBlood] = useState([]);
  const [loadingStock, setLoadingStock] = useState(false);
  const [loadingTotal, setLoadingTotal] = useState(false);

  const [dataReadyBloodBags, setDataReadyBloodBags] = useState([]);
  const [loadingReadyBloodBags, setLoadingReadyBloodBags] = useState(false);

  const [dataPendingBloodBags, setDataPendingBloodBags] = useState([]);
  const [loadingPendingBloodBags, setLoadingPendingBloodBags] = useState(false);

  const [dataDeliveredBloodBags, setDataDeliveredBloodBags] = useState([]);
  const [loadingDeliveredBloodBags, setLoadingDeliveredBloodBags] =
    useState(false);

  const [dataContaminatedBloodBags, setDataContaminatedBloodBags] = useState(
    []
  );
  const [loadingContaminatedBloodBags, setLoadingContaminatedBloodBags] =
    useState(false);

  const [dataReservedBloodBags, setDataReservedBloodBags] = useState([]);
  const [loadingReservedBloodBags, setLoadingReservedBloodBags] =
    useState(false);

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
        setDataTotalBlood(res.data || []);
      }
    } catch (error) {
      console.error("Error fetching total blood:", error);
      setDataTotalBlood([]);
    } finally {
      setLoadingTotal(false);
    }
  };

  const fetchReadyBloodBags = async (selectedGroupLabel) => {
    setLoadingReadyBloodBags(true);
    try {
      const res = await getReadyBloodBags(selectedGroupLabel);
      if (res.success === true) {
        setDataReadyBloodBags(res.data || []);
      }
    } catch (error) {
      console.error("Error fetching total blood:", error);
      setDataReadyBloodBags([]);
    } finally {
      setLoadingReadyBloodBags(false);
    }
  };

  const fetchPendingBloodBags = async (selectedGroupLabel) => {
    setLoadingPendingBloodBags(true);
    try {
      const res = await getPendingBloodBags(selectedGroupLabel);
      if (res.success === true) {
        setDataPendingBloodBags(res.data || []);
      }
    } catch (error) {
      console.error("Error fetching total blood:", error);
      setDataPendingBloodBags([]);
    } finally {
      setLoadingPendingBloodBags(false);
    }
  };

  const fetchDeliveredBloodBags = async (selectedGroupLabel) => {
    setLoadingDeliveredBloodBags(true);
    try {
      const res = await getDeliveredBloodBags(selectedGroupLabel);
      if (res.success === true) {
        setDataDeliveredBloodBags(res.data || []);
      }
    } catch (error) {
      console.error("Error fetching total blood:", error);
      setDataDeliveredBloodBags([]);
    } finally {
      setLoadingDeliveredBloodBags(false);
    }
  };

  const fetchContaminatedBloodBags = async (selectedGroupLabel) => {
    setLoadingContaminatedBloodBags(true);
    try {
      const res = await getContaminatedBloodBags(selectedGroupLabel);
      if (res.success === true) {
        setDataContaminatedBloodBags(res.data || []);
      }
    } catch (error) {
      console.error("Error fetching total blood:", error);
      setDataContaminatedBloodBags([]);
    } finally {
      setLoadingContaminatedBloodBags(false);
    }
  };

  const fetchReservedBloodBags = async (selectedGroupLabel) => {
    setLoadingReservedBloodBags(true);
    try {
      const res = await getReservedBloodBags(selectedGroupLabel);
      if (res.success === true) {
        setDataReservedBloodBags(res.data || []);
      }
    } catch (error) {
      console.error("Error fetching total blood:", error);
      setDataReservedBloodBags([]);
    } finally {
      setLoadingReservedBloodBags(false);
    }
  };

  useEffect(() => {
    fetchReadyBloodBags(selectedGroupLabel);
    fetchTotalBlood();
    fetchPendingBloodBags(selectedGroupLabel);
    fetchDeliveredBloodBags(selectedGroupLabel);
    fetchContaminatedBloodBags(selectedGroupLabel);
    fetchReservedBloodBags(selectedGroupLabel);

    if (!startDate || !endDate) return;
    fetchBloodBankStock();
  }, [startDate, endDate, TypeName, selectedGroupLabel]);

  return {
    data,
    dataTotalBlood,
    dataReadyBloodBags,
    dataPendingBloodBags,
    dataDeliveredBloodBags,
    dataContaminatedBloodBags,
    dataReservedBloodBags,
    loading:
      loadingStock ||
      loadingTotal ||
      loadingReadyBloodBags ||
      loadingPendingBloodBags ||
      loadingDeliveredBloodBags ||
      loadingContaminatedBloodBags ||
      loadingReservedBloodBags,
    loadingStock,
    loadingTotal,
    loadingReadyBloodBags,
    loadingPendingBloodBags,
    loadingDeliveredBloodBags,
    loadingContaminatedBloodBags,
    loadingReservedBloodBags,
  };
};
