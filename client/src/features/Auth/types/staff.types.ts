export interface getStaffInfoPage {
  success: boolean;
  data: getStaffInfoResponse;
}

export interface getStaffInfoResponse {
  staffId: number;
  staffName: string;
  username: string;
}

export interface UpdateStaffResponse {
  success: boolean;
  message: string;
}

export interface postStaffResponse {
  success: boolean;
  message: string;
}

export interface UpdateStaffPayload {
  staffId: number;
  username: string;
  staffName: string;
}

export interface postStaffPayload {
  staffName: string;
  username: string;
  webPassword: string;
}

export interface ResetPassPayload {
  staffId: number;
  re_password: string;
}
