import { type Control, type FieldValues, type Path } from "react-hook-form"
import { Autocompletes } from "../../../../components/MUI/Autocompletes"
import dayjs from 'dayjs';
import type { OptionType } from "../../../Auth/types/auth.types";
import type { PatientResponse } from "../../types/transfusion.types";


interface Props<T extends FieldValues> {
  control: Control<T>
  options: OptionType[];
  data: PatientResponse;
}

export const PatientInfoCard = <T extends FieldValues>({
  control,
  options,
  data
}: Props<T>) => {

  return (
    <div className="bg-white rounded-lg py-4 px-3 shadow-xl/25">
      <label className="text-[#B5B5B5]">
        ข้อมูลผู้ขอโลหิต
      </label>
      <div className="grid grid-cols-12 px-3 gap-1 text-[0.600rem] mt-1">
        <div className="col-span-8 text-[#B5B5B5]">
          ชื่อผู้ป่วย <span className="text-black">
            {data.patientName ? data.patientName : "-"}
          </span>
        </div>
        <div className="col-span-4 text-[#B5B5B5]">
          HN <span className="text-black">
            {data.hn ? data.hn : "-"}
          </span>
        </div>
        <div className="col-span-3 text-[#B5B5B5]">
          อายุ <span className="text-black">
            {data.age ? data.age : "-"}
          </span>
        </div>
        <div className="col-span-3 text-[#B5B5B5]">
          เพศ <span className="text-black">
            {data.sex ? data.sex : "-"}
          </span>
        </div>
        <div className="col-span-3 text-[#B5B5B5]">
          หมู่เลือด <span className="text-black">
            {data.bloodGroup ? data.bloodGroup : "-"}
          </span>
        </div>
        <div className="col-span-3 text-[#B5B5B5]">
          Rh <span className="text-black">
            {data.rhType ? data.rhType : "-"}
          </span>
        </div>
        <div className="col-span-12 mt-1">
          <div className="grid grid-flow-col gap-1">
            <div className="row-span-3">
              <div className="text-[#B5B5B5]">
                วันที่ให้โลหิต <span className="text-black">
                  {data.transfusionDate ? dayjs(data.transfusionDate).format("DD/MM/YYYY") : "-"}
                </span>
              </div>
              <div className="text-[#B5B5B5] mt-1">
                เวลาให้โลหิต <span className="text-black">
                  {data.transfusionTime ? data.transfusionTime : "-"}
                </span>
              </div>
            </div>
            <div className="col-span-4 row-span-2">
              <Autocompletes
                control={control}
                options={options}
                name={"blood_donor_name" as Path<T>}
                label="ผูให้โลหิต"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}