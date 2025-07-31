export interface getBloodBankStockPage {
  success: boolean;
  data: getBloodBankStockResponse[];
}

export interface getBloodBankStockResponse {
  bloodTypeSubName: string;
  bloodGroupName: string;
  rh: string;
  bloodCode: number;
  hn: string;
  patientName: string;
  cmResultName: string;
  bbCrossPayStaff: string;
  payDate: string;
}

export interface getBloodTypeOptionResponse {
  typeName: string;
  typeId: number;
}

export interface getTotalBloodPage {
  success: boolean;
  data: getTotalBloodResponse;
}

export interface getTotalBloodResponse {
  bloodTypeName: string;
  groupA: number;
  groupB: number;
  groupAB: number;
  groupO: number;
  groupNon: number;
}

export interface getReadyBloodBagsPage {
  success: boolean;
  data: getReadyBloodBagsResponse[];
}

export interface getReadyBloodBagsResponse {
  bloodTypeName: string;
  bloodCode: string;
  bloodCC: number;
  bloodCCTotal: number;
  daysUntilExpire: string;
  expireDate: string;
}

export interface getPendingBloodBagsPage {
  success: boolean;
  data: getPendingBloodBagsResponse[];
}

export interface getPendingBloodBagsResponse {
  bloodTypeName: string;
  bloodCode: number;
  daysUntilExpire: null;
  hn: number;
  patientName: string;
}

export interface getDeliveredBloodBagsPage {
  success: boolean;
  data: getDeliveredBloodBagsResponse[];
}

export interface getDeliveredBloodBagsResponse {
  bloodTypeName: string;
  bloodCode: number;
  bloodCC: number;
  bloodExpireDate: string;
  bbSupplyDate: string;
  hn: number;
  patientName: string;
}

export interface getContaminatedBloodBagsPage {
  success: boolean;
  data: getContaminatedBloodBagsResponse[];
}

export interface getContaminatedBloodBagsResponse {
  bloodTypeName: string;
  bloodCode: number;
  bloodCC: number;
  bloodExpireDate: string;
}

export interface getReservedBloodBagsPage {
  success: boolean;
  data: getReservedBloodBagsResponse[];
}

export interface getReservedBloodBagsResponse {
  bloodTypeName: string;
  bloodCode: string;
  bloodCC: number;
  bloodExpireDate: string;
}
