export interface CrossMatchData {
  bloodCode: string;
}

export interface BarcodeWarningProps {
  data: {
    crossMatch: CrossMatchData;
  };
}
