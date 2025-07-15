import type { AntibodyData } from "./AntibodyCard";
import type { AutoControlData } from "./AutoControlCard";
import type { CrossMatchData } from "./BloodBagInfoCard";
import type { StatusData } from "./BloodStatusSteps";
import type { PatientData } from "./PatientInfoCard";

export interface CheckData {
  reCheckBloodGive: string;
}

export interface PatientTransfusionProps {
  patient: PatientData;
  check: CheckData;
  antibody: AntibodyData;
  autoControl: AutoControlData;
  crossMatch: CrossMatchData;
  status: StatusData;
  currentStaff: CurrentStaff | null;
}

export interface CurrentStaff {
  staffId: number;
  staff: string;
}
