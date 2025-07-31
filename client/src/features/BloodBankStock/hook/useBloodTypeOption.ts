import { useEffect, useState } from "react";
import { getBloodTypeOption } from "../service/BloodBankStockAPI";
import type { OptionType } from "../../Auth/types/auth.types";

export const useBloodTypeOption = () => {
  const [BloodTypeOption, setBloodTypeOption] = useState<OptionType[]>([]);
  const [Loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const result = await getBloodTypeOption();
        setBloodTypeOption(result);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return { BloodTypeOption, Loading };
};
