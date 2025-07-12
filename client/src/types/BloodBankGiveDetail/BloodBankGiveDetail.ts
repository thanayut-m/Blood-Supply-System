import type { AntibodyData } from "./AntibodyCard";
import type { AutoControlData } from "./AutoControlCard";
import type { CrossMatchData } from "./BarcodeWarning";
import type { StatusData } from "./BloodStatusSteps";
import type { PatientData } from "./PatientInfoCard";

export interface CheckData {
  reCheckBloodGive: string;
}

export interface PatientTransfusionProps {
  patientData: PatientData;
  check: CheckData;
  antibody: AntibodyData;
  autoControl: AutoControlData;
  crossMatch: CrossMatchData;
  status: StatusData;
}
