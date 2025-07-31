export interface getDonorListPage {
  success: boolean;
  data: {
    donorCode: number;
    donorName: string;
    donorAge: number;
    bloodGroupName: string;
    rh: string;
    donateNo: string;
    visitDate: Date;
    bloodCode: number;
    cId: number;
    telePhone: number;
    reactive: string;
    bbDonorResourceName: string;
    addrpart: string;
    staffName: string;
    aboDiscrepancy: string;
  };
}
