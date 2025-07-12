import dayjs from 'dayjs';
import donorIcon1 from '../../../../assets/icon/donor_Icon1.png';

interface crossMatchData {
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

interface Props {
    data: {
        crossMatch: crossMatchData;
    };
}


export const BloodBagInfoCard = ({
    data
}: Props) => {
    const dataCrossMatch = data.crossMatch;
    return (
        <div className="grid grid-cols-12">
            <div className="col-span-4">
                <div className="flex justify-center">
                    <img src={donorIcon1} className="w-full h-full object-contain" alt="Icon" />
                </div>
            </div>
            <div className="col-span-8 flex flex-col gap-1">
                <div className="grid grid-cols-12 gap-3">
                    <p className="col-span-5 text-end text-[#B5B5B5]">
                        เลชที่ถุง
                    </p>
                    <p className="col-span-7 text-start">
                        {dataCrossMatch.bloodCode ? dataCrossMatch.bloodCode : "-"}
                    </p>
                </div>
                <div className="grid grid-cols-12 gap-3">
                    <p className="col-span-5 text-end text-[#B5B5B5]">
                        หมู่เลือด
                    </p>
                    <p className="col-span-7 text-start">
                        {dataCrossMatch.crossBloodGroup ? dataCrossMatch.crossBloodGroup : "-"}
                    </p>
                </div>
                <div className="grid grid-cols-12 gap-3">
                    <p className="col-span-5 text-end text-[#B5B5B5]">
                        Rh
                    </p>
                    <p className="col-span-7 text-start">
                        {dataCrossMatch.crossRh ? dataCrossMatch.crossRh : "-"}
                    </p>
                </div>
                <div className="grid grid-cols-12 gap-3">
                    <p className="col-span-5 text-end text-[#B5B5B5]">
                        ประเภทโลหิต
                    </p>
                    <p className="col-span-7 text-start">
                        {dataCrossMatch.bloodType ? dataCrossMatch.bloodType : "-"}
                    </p>
                </div>
                <div className="grid grid-cols-12 gap-3">
                    <p className="col-span-5 text-end text-[#B5B5B5]">
                        วันที่หมดอายุ
                    </p>
                    <p className="col-span-7 text-start">
                        {dataCrossMatch.expireDate ?
                            dayjs(dataCrossMatch.expireDate).format("DD/MM/YYYY") : "-"}
                    </p>
                </div>
                <div className="grid grid-cols-12 gap-3">
                    <p className="col-span-5 text-end text-[#B5B5B5]">
                        ปริมาณ (cc)</p>
                    <p className="col-span-7 text-start">
                        {dataCrossMatch.volumeCC ? dataCrossMatch.volumeCC : "-"}
                    </p>
                </div>
                <div className="grid grid-cols-12 gap-3">
                    <p className="col-span-5 text-end text-[#B5B5B5]">
                        result
                    </p>
                    <p className="col-span-7 text-start">
                        {dataCrossMatch.cmResult ? dataCrossMatch.cmResult : "-"}
                    </p>
                </div>
                <div className="grid grid-cols-12 gap-3">
                    <p className="col-span-5 text-end text-[#B5B5B5]">
                        ผู้ทำ
                    </p>
                    <p className="col-span-7 text-start">
                        {dataCrossMatch.crossMatchBy ? dataCrossMatch.crossMatchBy : "-"}
                    </p>
                </div>
                <div className="grid grid-cols-12 gap-3">
                    <p className="col-span-5 text-end text-[#B5B5B5]">
                        วัน/เวลา ที่ทำ
                    </p>
                    <p className="col-span-7 text-start">
                        {dataCrossMatch.crossMatchDate ? dayjs(dataCrossMatch.crossMatchDate).format("DD/MM/YYYY") : "-"}&nbsp;
                        {dataCrossMatch.crossMatchTime ? dataCrossMatch.crossMatchTime : "-"}
                    </p>
                </div>
                <div className="grid grid-cols-12 gap-3">
                    <p className="col-span-5 text-end text-[#B5B5B5]">
                        ผู้คล้อง
                    </p>
                    <p className="col-span-7 text-start">
                        {dataCrossMatch.confirmBy ? dataCrossMatch.confirmBy : "-"}
                    </p>
                </div>
                <div className="grid grid-cols-12 gap-3">
                    <p className="col-span-5 text-end text-[#B5B5B5]">
                        วัน/เวลา คล้อง
                    </p>
                    <p className="col-span-7 text-start">
                        {dataCrossMatch.confirmDate ? dayjs(dataCrossMatch.confirmDate).format("DD/MM/YYYY") : "-"}&nbsp;
                        {dataCrossMatch.confirmTime ? dataCrossMatch.confirmTime : "-"}
                    </p>
                </div>
                <div className="grid grid-cols-12 gap-3">
                    <p className="col-span-5 text-end text-[#B5B5B5]">
                        หมายเหตุ
                    </p>
                    <p className="col-span-7 text-start">
                        -
                    </p>
                </div>
            </div>
        </div>
    )
}