import { Buttons } from "../../../components/Buttons"
import { useForm } from "react-hook-form";
import { MobilePrivateLayout2 } from "../../../layouts/MobilePrivateLayout2";
import { PatientInfoCard } from "./MobileBloodBankGiveDetail/PatientInfoCard";
import { AntibodyCard } from "./MobileBloodBankGiveDetail/AntibodyCard";
import { AutoControlCard } from "./MobileBloodBankGiveDetail/AutoControlCard";
import { BloodStatusSteps } from "./MobileBloodBankGiveDetail/BloodStatusSteps";
import { BloodBagInfoCard } from "./MobileBloodBankGiveDetail/BloodBagInfoCard";
import { BarcodeWarning } from "./MobileBloodBankGiveDetail/BarcodeWarning";

export const MobileBloodBankGiveDetail = () => {
    const { control } = useForm({});
    return (
        <div>
            <MobilePrivateLayout2>
                <div className="flex flex-col gap-2">

                    <PatientInfoCard
                        control={control}
                    />

                    <div className="grid grid-cols-2 gap-2 text-center text-[0.800rem]">
                        <AntibodyCard />
                        <AutoControlCard />
                    </div>

                    <div className="bg-white rounded-lg py-4 px-3 shadow-xl/25 text-[0.600rem]">
                        <div className="flex flex-col gap-3">
                            <BloodBagInfoCard />
                            <BloodStatusSteps />
                        </div>
                    </div>

                    <Buttons
                        className="bg-[#FF7726] text-white py-5 px-5 rounded-xl"
                    >
                        <div className="flex flex-col">
                            <p className="text-[0.800rem]">ตรวจสอบการจ่ายโลหิต</p>
                            <p className="text-[0.600rem]">กรุณากดปุ่มเพื่อ Scan Barcode หน้าถุงโลหิต</p>
                        </div>
                    </Buttons>

                    <BarcodeWarning />

                    <Buttons
                        className="bg-gray-300 text-white py-3 px-5 rounded-3xl"
                    >
                        จ่ายโลหิต
                    </Buttons>
                </div>
            </MobilePrivateLayout2>
        </div>
    )
}