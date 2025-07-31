import { useForm } from "react-hook-form";
import { BasicTabs } from "../../../../components/MUI/BasicTabs";
import { DesktopPrivateLayout } from "../../../../layouts/DesktopPrivateLayout"
import { BloodDonationHistory } from "../../components/BloodDonationHistory";
import { Bloodstock } from "../../components/Bloodstock";
import { ContaminatedBloodBags } from "../../components/tabsData/ContaminatedBloodBags";
import { DeliveredBloodBags } from "../../components/tabsData/DeliveredBloodBags";
import { PendingBloodBags } from "../../components/tabsData/PendingBloodBags";
import { ReadyBloodBags } from "../../components/tabsData/ReadyBloodBags";
import { ReservedBloodBags } from "../../components/tabsData/ReservedBloodBags";
import { useEffect } from "react";



export const BloodBankStockList = () => {
    const { setValue, watch } = useForm()
    const selectedGroupLabel = watch("selectedGroupLabel");
    console.log(selectedGroupLabel)

    useEffect(() => {
        document.title = "คลังเลือด || Logins Medical";
    }, [])

    const tabsData = [
        {
            label: "ถุงเลือดพร้อมใช้",
            content: <ReadyBloodBags
                selectedGroupLabel={selectedGroupLabel}
            />
        },
        {
            label: "ถุงเลือดรอจ่าย",
            content: <PendingBloodBags
                selectedGroupLabel={selectedGroupLabel}
            />
        },
        {
            label: "ถุงเลือดจ่ายแล้ว",
            content: <DeliveredBloodBags
                selectedGroupLabel={selectedGroupLabel}
            />
        },
        {
            label: "ถุงเลือดติดเชื้อ",
            content:
                <ContaminatedBloodBags
                    selectedGroupLabel={selectedGroupLabel}
                />
        },
        {
            label: "ถุงจองแล้ว",
            content:
                <ReservedBloodBags
                    selectedGroupLabel={selectedGroupLabel}
                />
        },
    ];

    return (
        <DesktopPrivateLayout>
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-3">
                    <div className="bg-white rounded-2xl px-4 py-2">
                        <Bloodstock
                            selectedGroupLabel={selectedGroupLabel}
                            onSelectGroup={(val) => setValue("selectedGroupLabel", val)}
                        />
                        <BasicTabs
                            tabs={tabsData}
                        />
                    </div>
                </div>
                <div className="col-span-9">
                    <BloodDonationHistory />
                </div>
            </div>
        </DesktopPrivateLayout>
    )
}