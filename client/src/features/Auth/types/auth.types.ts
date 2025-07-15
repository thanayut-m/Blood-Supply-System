// กรอกข้อมูล SignIn
export interface SignInPayload {
  username: string;
  password: string;
}

// กรอกข้อมูล ResetPassword
export interface ResetPasswordPayload {
  username: string;
  lis_password: string;
  new_password: string;
}

// Res API currentUser
export interface StaffData {
  staffId: number;
  staff: string;
}

export interface OptionType {
  label: string;
  value: number;
}

export interface StaffOptionData {
  staffId: number;
  staffName: string;
}
