export interface statushData {
  isConfirmed: string;
  reportStatus: string;
  payStatus: string;
  hasReaction: string;
}

export interface BloodStatusStepsProps {
  data: {
    status: statushData;
  };
}
