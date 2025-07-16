import type { OptionType } from "../../Auth/types/auth.types";

export interface PatientGiveListResponse {
  success: boolean;
  data: PatientGiveResponse[];
}

export interface PatientGiveResponse {
  bb_cross_macth_id: number;
  blood_code: string;
  blood_type_sub_name: string;
  cm_result_name: string;
  hct: string;
  hct_after: string;
  hn: string;
  patient_name: string;
  patient_pay_date: string;
  patient_pay_staff_name: string;
  patient_pay_status: string;
}

// *******************************************************************************
export interface BloodGiveDetailPage {
  success: boolean;
  data: {
    antibody: AntibodyResponse;
    autoControl: AutoControlResponse;
    check: CheckResponse;
    crossMatch: CrossMatchResponse;
    patient: PatientResponse;
    status: StatusResponse;
  };
}

export interface BloodGiveDetailResponse {
  antibody: AntibodyResponse;
  autoControl: AutoControlResponse;
  check: CheckResponse;
  crossMatch: CrossMatchResponse;
  patient: PatientResponse;
  status: StatusResponse;
}

export interface AntibodyResponse {
  antiResult: string;
  o1Result: string;
  o2Result: string;
  o3Result: string;
}

export interface AutoControlResponse {
  acResult: string;
  datResult: string;
  iatResult: string;
}

export interface CheckResponse {
  patientPayStatus: string;
  reCheckBloodGive: string;
}

export interface CrossMatchResponse {
  bloodCode: string;
  bloodType: string;
  cmResult: string;
  confirmBy: string;
  confirmDate: string;
  confirmTime: string;
  crossBloodGroup: string;
  crossHN: string;
  crossMatchBy: string;
  crossMatchDate: string;
  crossMatchTime: string;
  crossRh: string;
  expireDate: string;
  volumeCC: number;
}

export interface PatientResponse {
  age: number;
  bloodGroup: string;
  hn: string;
  patientName: string;
  rhType: string;
  sex: string;
  staffId: number;
  staffName: string;
  transfusionDate: string;
  transfusionTime: string;
}

export interface StatusResponse {
  hasReaction: string;
  isConfirmed: string;
  payStatus: string;
  reportStatus: string;
}

export interface BloodGiveDetailPayload {
  blood_donor_name: OptionType;
}
