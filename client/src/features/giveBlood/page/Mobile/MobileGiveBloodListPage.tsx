import { useState } from "react";
import { MobilePrivateLayout } from "../../../../layouts/MobilePrivateLayout"
import { PatientGiveItemCard } from "../../components/giveBloodList/Mobile/PatientGiveItemCard";
import { usePatientGiveList } from "../../hook/usePatientGiveList"
import { Modals } from "../../../../components/modal/Modals";
import { GiveBloodMenu } from "../../components/giveBloodList/Mobile/GiveBloodMenu";
import type { PatientGiveResponse } from "../../types/transfusion.types";
import { useNavigate } from "react-router";

export const MobileGiveBloodListPage = () => {
    const navigate = useNavigate();
    const { data, loading } = usePatientGiveList();
    const [openModal, setOpenModal] = useState<string | null>(null);
    const [selectRow, setSelectRow] = useState<PatientGiveResponse | null>(null);

    const handleOpen = (modal: string, row: PatientGiveResponse) => {
        setSelectRow(row)
        setOpenModal(modal);
    };

    const handleClose = () => {
        setOpenModal(null);
    };

    const handleGiveBlood = async (actionType: "give" | "reaction") => {
        try {
            if (!selectRow) return;

            if (actionType === "give") {
                navigate("/BloodBankGiveDetail", { state: { bb_cross_macth_id: selectRow.bb_cross_macth_id } });
            } else {
                navigate("/BloodBankReaction");
            }
        } catch (error) {
            console.log(error)
        }
    }

    if (loading) return <p>กำลังโหลด...</p>;
    return (
        <div>
            <MobilePrivateLayout>
                <div className="flex flex-col gap-3">
                    {data.map((item, index) => (
                        <PatientGiveItemCard
                            key={index}
                            item={item}
                            onClick={() => handleOpen("openMenuBloodBank", item)}
                        />
                    ))}
                </div>
            </MobilePrivateLayout>
            {selectRow && (
                <Modals
                    open={openModal === "openMenuBloodBank"}
                    width="w-[80%]"
                    infoList={[
                        { label: "HN", value: selectRow.hn },
                        { label: "ชื่อ", value: selectRow.patient_name },
                        { label: "ถุงเลือด", value: selectRow.blood_code },
                    ]}
                    content={
                        <GiveBloodMenu
                            onGiveBlood={handleGiveBlood}
                            onClick={handleClose}
                        />
                    }
                    actions={null}
                />
            )}

        </div>
    )
}