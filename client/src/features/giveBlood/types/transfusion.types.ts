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
