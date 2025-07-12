import type { AutoControlCardProps } from "../../../../types/BloodBankGiveDetail/AutoControlCard";

export const AutoControlCard = ({
    data
}: AutoControlCardProps) => {
    const dataAutoControl = data.autoControl;
    return (
        <div className="bg-white rounded-lg py-4 px-3 shadow-xl/25">
            <p className="text-[#B5B5B5] text-[0.600rem]">
                auto Control and DAT
            </p>
            <hr className="text-[#B5B5B5] mt-5" />
            <p className="text-[#B5B5B5]">
                AC <span className="text-black">
                    {dataAutoControl.acResult ? dataAutoControl.acResult.toUpperCase() : "-"}
                </span>
            </p>
            <p className="text-[#B5B5B5]">
                DAT <span className="text-black">
                    {dataAutoControl.datResult ? dataAutoControl.datResult.toUpperCase() : "-"}
                </span>
            </p>
            <p className="text-[#B5B5B5]">
                O3 <span className="text-black">
                    {dataAutoControl.iatResult ? dataAutoControl.iatResult.toUpperCase() : "-"}
                </span>
            </p>
        </div>
    )
}