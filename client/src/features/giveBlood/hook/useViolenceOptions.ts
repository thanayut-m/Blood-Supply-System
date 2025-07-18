import { useEffect, useState } from "react";
import type { OptionType } from "../../../types/BloodBankGiveDetail/PatientInfoCard";
import { fetchViolenceOptions } from "../services/violencApi";

export const useViolenceOptions = () => {
  const [violenceOptions, setViolenceOptions] = useState<OptionType[]>([]);
  const [Loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const res = await fetchViolenceOptions();
        setViolenceOptions(res);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return { violenceOptions, Loading };
};
