export interface CrossMatchData {
  bloodCode: string;
  bloodType: string;
  cmResult: string;
  confirmBy: string;
  confirmDate: string | Date;
  confirmTime: string;
  crossBloodGroup: string;
  crossMatchBy: string;
  crossMatchDate: string | Date;
  crossMatchTime: string;
  crossRh: string;
  expireDate: string;
  volumeCC: string;
  crossHN: string;
}

export interface BloodBagInfoCardProps {
  data: CrossMatchData;
}
