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
import type {
  getBloodBankStockResponse,
  getContaminatedBloodBagsResponse,
  getDeliveredBloodBagsResponse,
  getPendingBloodBagsResponse,
  getReadyBloodBagsResponse,
  getReservedBloodBagsResponse,
  getTotalBloodResponse,
} from "../types/bloodbankstock.type";

export const useBloodBankStock = (
  startDate: string | null,
  endDate: string | null,
  TypeName: string | null,
  selectedGroupLabel: string | null
) => {
  const [data, setData] = useState<getBloodBankStockResponse | []>([]);
  const [dataTotalBlood, setDataTotalBlood] =
    useState<getTotalBloodResponse | null>(null);

  const [dataReadyBloodBags, setDataReadyBloodBags] = useState<
    getReadyBloodBagsResponse[] | null
  >(null);
  const [dataPendingBloodBags, setDataPendingBloodBags] = useState<
    getPendingBloodBagsResponse[] | null
  >(null);
  const [dataDeliveredBloodBags, setDataDeliveredBloodBags] = useState<
    getDeliveredBloodBagsResponse[] | null
  >(null);
  const [dataReservedBloodBags, setDataReservedBloodBags] = useState<
    getReservedBloodBagsResponse[] | null
  >(null);
  const [dataContaminatedBloodBags, setDataContaminatedBloodBags] = useState<
    getContaminatedBloodBagsResponse[] | null
  >(null);

  const [loadingStock, setLoadingStock] = useState(false);
  const [loadingTotal, setLoadingTotal] = useState(false);
  const [loadingReadyBloodBags, setLoadingReadyBloodBags] = useState(false);
  const [loadingPendingBloodBags, setLoadingPendingBloodBags] = useState(false);
  const [loadingDeliveredBloodBags, setLoadingDeliveredBloodBags] =
    useState(false);
  const [loadingContaminatedBloodBags, setLoadingContaminatedBloodBags] =
    useState(false);
  const [loadingReservedBloodBags, setLoadingReservedBloodBags] =
    useState(false);

  const fetchBloodBankStock = async () => {
    if (!startDate || !endDate || !TypeName) {
      return;
    }
    setLoadingStock(true);
    try {
      const res = await getBloodBankStock(startDate, endDate, TypeName);
      console.log(res);
      if (res.success === true) {
        setData(res.data);
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
      if (!Array.isArray(res) && res.success) {
        setDataTotalBlood(res.data);
      } else {
        setDataTotalBlood(null);
      }
    } catch (error) {
      console.error("Error fetching total blood:", error);
      setDataTotalBlood(null);
    } finally {
      setLoadingTotal(false);
    }
  };

  const fetchReadyBloodBags = async (selectedGroupLabel: string) => {
    setLoadingReadyBloodBags(true);
    try {
      const res = await getReadyBloodBags(selectedGroupLabel);
      if (res?.success) {
        setDataReadyBloodBags(res.data);
      } else {
        setDataReadyBloodBags(null);
      }
    } catch (error) {
      console.error("Error fetching ready blood bags:", error);
      setDataReadyBloodBags(null);
    } finally {
      setLoadingReadyBloodBags(false);
    }
  };

  const fetchPendingBloodBags = async (selectedGroupLabel: string) => {
    setLoadingPendingBloodBags(true);
    try {
      const res = await getPendingBloodBags(selectedGroupLabel);
      if (res?.success) {
        setDataPendingBloodBags(res.data);
      } else {
        setDataPendingBloodBags(null);
      }
    } catch (error) {
      console.error("Error fetching:", error);
      setDataPendingBloodBags(null);
    } finally {
      setLoadingPendingBloodBags(false);
    }
  };

  const fetchDeliveredBloodBags = async (selectedGroupLabel: string) => {
    setLoadingDeliveredBloodBags(true);
    try {
      const res = await getDeliveredBloodBags(selectedGroupLabel);
      if (res?.success) {
        setDataDeliveredBloodBags(res.data || []);
      }
    } catch (error) {
      console.error("Error fetching total blood:", error);
      setDataDeliveredBloodBags(null);
    } finally {
      setLoadingDeliveredBloodBags(false);
    }
  };

  const fetchContaminatedBloodBags = async (selectedGroupLabel: string) => {
    setLoadingContaminatedBloodBags(true);
    try {
      const res = await getContaminatedBloodBags(selectedGroupLabel);
      if (res?.success) {
        setDataContaminatedBloodBags(res.data);
      }
    } catch (error) {
      console.error("Error fetching total blood:", error);
      setDataContaminatedBloodBags(null);
    } finally {
      setLoadingContaminatedBloodBags(false);
    }
  };

  const fetchReservedBloodBags = async (selectedGroupLabel: string) => {
    setLoadingReservedBloodBags(true);
    try {
      const res = await getReservedBloodBags(selectedGroupLabel);
      if (res?.success) {
        setDataReservedBloodBags(res.data);
      }
    } catch (error) {
      console.error("Error fetching total blood:", error);
      setDataReservedBloodBags(null);
    } finally {
      setLoadingReservedBloodBags(false);
    }
  };

  useEffect(() => {
    if (selectedGroupLabel) {
      fetchReadyBloodBags(selectedGroupLabel);
      fetchPendingBloodBags(selectedGroupLabel);
      fetchDeliveredBloodBags(selectedGroupLabel);
      fetchContaminatedBloodBags(selectedGroupLabel);
      fetchReservedBloodBags(selectedGroupLabel);
    }

    fetchTotalBlood();

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
