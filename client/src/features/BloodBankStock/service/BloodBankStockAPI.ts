import axios from "axios";
import { authHeader } from "../../../utils/authHeader";

const { VITE_API_PATH } = import.meta.env;

export const getBloodBankStock = async (startDate, endDate, TypeName) => {
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

export const getBloodTypeOption = async () => {
  try {
    const response = await axios.get(
      VITE_API_PATH + "/BloodBankStock/getBloodTypeOption",
      {
        headers: authHeader.headers(),
      }
    );
    const data = response.data.data;

    const BloodTypeOption = Array.isArray(data)
      ? data.map((item) => ({
          label: item.typeName,
          value: item.typeId,
        }))
      : [
          {
            label: data.typeName,
            value: data.typeId,
          },
        ];

    return BloodTypeOption;
  } catch (error) {
    console.error("getBloodTypeOption error:", error);
    return [];
  }
};

export const getTotalBlood = async () => {
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

export const getReadyBloodBags = async (selectedGroupLabel) => {
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
    return [];
  }
};

export const getPendingBloodBags = async (selectedGroupLabel) => {
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
    return [];
  }
};

export const getDeliveredBloodBags = async (selectedGroupLabel) => {
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
    return [];
  }
};

export const getContaminatedBloodBags = async (selectedGroupLabel) => {
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
    return [];
  }
};

export const getReservedBloodBags = async (selectedGroupLabel) => {
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
    return [];
  }
};
