import type { AntibodyCardProps } from "../../../../types/BloodBankGiveDetail/AntibodyCard";

export const AntibodyCard = ({ data }: AntibodyCardProps) => {
    const dataAntibody = data.antibody;
    return (
        <div className="bg-white rounded-lg py-4 px-3 shadow-xl/25 ">
            <p className="text-[#B5B5B5] text-[0.600rem]">
                Antibody Screening
            </p>
            <p>{dataAntibody.antiResult ? dataAntibody.antiResult.toUpperCase() : "-"}</p>
            <hr className="text-[#B5B5B5]" />
            <p className="text-[#B5B5B5]">
                O1 <span className="text-black">
                    {dataAntibody.o1Result ? dataAntibody.o1Result.toUpperCase() : "-"}
                </span>
            </p>
            <p className="text-[#B5B5B5]">
                O2 <span className="text-black">
                    {dataAntibody.o2Result ? dataAntibody.o2Result.toUpperCase() : "-"}
                </span>
            </p>
            <p className="text-[#B5B5B5]">
                O3 <span className="text-black">
                    {dataAntibody.o3Result ? dataAntibody.o3Result.toUpperCase() : "-"}
                </span>
            </p>
        </div>
    )
}