import { useEffect, useState } from "react";
import { getGiveBloodList } from "../services/transfusionApi";
import type { PatientGiveResponse } from "../types/transfusion.types";

export const usePatientGiveList = () => {
  const [data, setData] = useState<PatientGiveResponse[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPatientGiveList = async () => {
      const res = await getGiveBloodList();
      setData(res);
      setLoading(false);
    };
    fetchPatientGiveList();
  }, []);

  return { data, loading };
};
