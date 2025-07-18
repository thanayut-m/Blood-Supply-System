import { useEffect, useState } from "react";
import { fetchViolenceOptions } from "../services/violencApi";
import type { OptionType } from "../../Auth/types/auth.types";

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
