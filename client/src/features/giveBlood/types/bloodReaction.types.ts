export interface BloodReactionPage {
  success: boolean;
  data: {
    bloodBag: BloodBagResponse;
    crossMatch: CrossMatchResponse;
    violence: ViolenceResponse;
    reaction: ReactionResponse;
    nurse: NurseResponse;
    staff: StaffResponse;
  };
}

export interface BloodBagResponse {
  bloodCode: string;
  groupName: string;
  rh: string;
  ccBalance: number;
  typeName: string;
  resourceName: string;
  receiveDate: string;
  readyDate: string;
  expireDate: string;
}

export interface CrossMatchResponse {
  patientName: string;
  hn: string;
  bloodGroupName: string;
  rh: string;
  patientPayDate: string;
}

export interface ViolenceResponse {
  violenceId: number;
  violenceName: string;
}

export interface ReactionResponse {
  reactionStatus: string;
  reactionBloodCC: number;
  reactionBlood_Time: string;
  reactionBloodTime: string;
  reactionFluTemp: number;
  reactionCold: string;
  reactionRash: string;
  reactionHeadache: string;
  reactionBp: string;
  reactionNausea: string;
  reactionVolmit: string;
  reactionBackache: string;
  reactionBreath: string;
  reactionGreen: string;
  reactionShock: string;
  reactionNote: string;
}

export interface NurseResponse {
  nurseName: string;
  nurseDate: string;
  nurseTime: string;
}

export interface StaffResponse {
  staffId: number;
  staffName: string;
  staffDate: string;
  staffTime: string;
}
