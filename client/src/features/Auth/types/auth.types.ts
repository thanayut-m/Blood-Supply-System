// กรอกข้อมูล SignIn
export interface SignInPayload {
  username: string;
  password: string;
}

// Res API SignIn
export interface SignInResponse {
  success: boolean;
  token: string;
  message?: string;
}

// กรอกข้อมูล ResetPassword
export interface ForgetPasswordPayload {
  username: string;
  lis_password: string;
  new_password: string;
}

// Res API ResetPassword
export interface ForgetPasswordResponse {
  success: boolean;
  message?: string;
}

// Res API currentUser
export interface StaffResponse {
  staffId: number;
  staff: string;
}

// Res API Staff
export interface StaffOptionResponse {
  staffId: number;
  staffName: string;
}

export interface OptionType {
  label: string;
  value: number;
}
