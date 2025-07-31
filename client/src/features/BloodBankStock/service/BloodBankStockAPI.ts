import axios from "axios";
import { authHeader } from "../../../utils/authHeader";
import type {
  getBloodBankStockPage,
  getBloodTypeOptionResponse,
  getContaminatedBloodBagsPage,
  getDeliveredBloodBagsPage,
  getPendingBloodBagsPage,
  getReadyBloodBagsPage,
  getReservedBloodBagsPage,
  getTotalBloodPage,
} from "../types/bloodbankstock.type";
import type { OptionType } from "../../Auth/types/auth.types";

const { VITE_API_PATH } = import.meta.env;

export const getBloodBankStock = async (
  startDate: string,
  endDate: string,
  TypeName: string
): Promise<getBloodBankStockPage | null> => {
  const response = await axios.get(
    VITE_API_PATH + "/BloodBankStock/getBloodBankStock",
    {
      headers: authHeader.headers(),
      params: {
        startDate: startDate,
        endDate: endDate,
        bloodSubType: TypeName,
      },
    }
  );
  return response.data;
};

export const getBloodTypeOption = async (): Promise<OptionType[]> => {
  try {
    const response = await axios.get(
      VITE_API_PATH + "/BloodBankStock/getBloodTypeOption",
      {
        headers: authHeader.headers(),
      }
    );
    const data = response.data.data;

    const BloodTypeOption: OptionType[] = Array.isArray(data)
      ? data.map((item: getBloodTypeOptionResponse) => ({
          label: item.typeName,
          value: item.typeId,
        }))
      : [
          {
            label: (data as getBloodTypeOptionResponse).typeName,
            value: (data as getBloodTypeOptionResponse).typeId,
          },
        ];

    return BloodTypeOption;
  } catch (error) {
    console.error("getBloodTypeOption error:", error);
    return [];
  }
};

export const getTotalBlood = async (): Promise<getTotalBloodPage | []> => {
  try {
    const response = await axios.get(
      VITE_API_PATH + "/BloodBankStock/getTotalBlood",
      {
        headers: authHeader.headers(),
      }
    );

    return response.data;
  } catch (error) {
    console.error("getBloodTypeOption error:", error);
    return [];
  }
};

export const getReadyBloodBags = async (
  selectedGroupLabel: string
): Promise<getReadyBloodBagsPage | null> => {
  try {
    const response = await axios.get(
      VITE_API_PATH + "/BloodBankStock/getReadyBloodBags",
      {
        headers: authHeader.headers(),
        params: { bloodGroup: selectedGroupLabel },
      }
    );

    return response.data;
  } catch (error) {
    console.error("getBloodTypeOption error:", error);
    return null;
  }
};

export const getPendingBloodBags = async (
  selectedGroupLabel: string
): Promise<getPendingBloodBagsPage | null> => {
  try {
    const response = await axios.get(
      VITE_API_PATH + "/BloodBankStock/getPendingBloodBags",
      {
        headers: authHeader.headers(),
        params: { bloodGroup: selectedGroupLabel },
      }
    );

    return response.data;
  } catch (error) {
    console.error("getBloodTypeOption error:", error);
    return null;
  }
};

export const getDeliveredBloodBags = async (
  selectedGroupLabel: string
): Promise<getDeliveredBloodBagsPage | null> => {
  try {
    const response = await axios.get(
      VITE_API_PATH + "/BloodBankStock/getDeliveredBloodBags",
      {
        headers: authHeader.headers(),
        params: { bloodGroup: selectedGroupLabel },
      }
    );

    return response.data;
  } catch (error) {
    console.error("getBloodTypeOption error:", error);
    return null;
  }
};

export const getContaminatedBloodBags = async (
  selectedGroupLabel: string
): Promise<getContaminatedBloodBagsPage | null> => {
  try {
    const response = await axios.get(
      VITE_API_PATH + "/BloodBankStock/getContaminatedBloodBags",
      {
        headers: authHeader.headers(),
        params: { bloodGroup: selectedGroupLabel },
      }
    );

    return response.data;
  } catch (error) {
    console.error("getBloodTypeOption error:", error);
    return null;
  }
};

export const getReservedBloodBags = async (
  selectedGroupLabel: string
): Promise<getReservedBloodBagsPage | null> => {
  try {
    const response = await axios.get(
      VITE_API_PATH + "/BloodBankStock/getReservedBloodBags",
      {
        headers: authHeader.headers(),
        params: { bloodGroup: selectedGroupLabel },
      }
    );

    return response.data;
  } catch (error) {
    console.error("getBloodTypeOption error:", error);
    return null;
  }
};
