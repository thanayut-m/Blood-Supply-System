import type { Control, FieldValues } from "react-hook-form";

export interface OptionType {
  label: string;
  value: string;
}

export interface PatientData {
  patientName: string;
  hn: string;
  age: string | number;
  sex: string;
  bloodGroup: string;
  rh: string;
  transfusionDate: string;
  transfusionTime: string;
  staffId: number;
  staffName: string;
}

export interface PatientInfoCardProps<T extends FieldValues> {
  control: Control<T>;
  options: OptionType[];
  data: PatientData;
}
