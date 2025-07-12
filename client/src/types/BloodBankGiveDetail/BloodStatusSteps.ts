export interface StatusData {
  isConfirmed: string;
  reportStatus: string;
  payStatus: string;
  hasReaction: string;
}

export interface BloodStatusStepsProps {
  data: {
    status: StatusData;
  };
}
