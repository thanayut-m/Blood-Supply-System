import type { AntibodyResponse } from "../../../types/transfusion.types";

interface Props {
    data: AntibodyResponse
}

export const AntibodyCard = ({ data }: Props) => {
    return (
        <div className="bg-white rounded-lg py-4 px-3 shadow-xl/25 ">
            <p className="text-[#B5B5B5] text-[0.600rem]">
                Antibody Screening
            </p>
            <p>{data.antiResult ? data.antiResult.toUpperCase() : "-"}</p>
            <hr className="text-[#B5B5B5]" />
            <p className="text-[#B5B5B5]">
                O1 <span className="text-black">
                    {data.o1Result ? data.o1Result.toUpperCase() : "-"}
                </span>
            </p>
            <p className="text-[#B5B5B5]">
                O2 <span className="text-black">
                    {data.o2Result ? data.o2Result.toUpperCase() : "-"}
                </span>
            </p>
            <p className="text-[#B5B5B5]">
                O3 <span className="text-black">
                    {data.o3Result ? data.o3Result.toUpperCase() : "-"}
                </span>
            </p>
        </div>
    )
}