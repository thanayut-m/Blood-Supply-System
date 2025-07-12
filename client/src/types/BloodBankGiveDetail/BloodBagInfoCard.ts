export interface crossMatchData {
  bloodCode: string;
  bloodType: string;
  cmResult: string;
  confirmBy: string;
  confirmDate: string;
  confirmTime: string;
  crossBloodGroup: string;
  crossMatchBy: string;
  crossMatchDate: string;
  crossMatchTime: string;
  crossRh: string;
  expireDate: string;
  volumeCC: string;
}

export interface BloodBagInfoCardProps {
  data: {
    crossMatch: crossMatchData;
  };
}
