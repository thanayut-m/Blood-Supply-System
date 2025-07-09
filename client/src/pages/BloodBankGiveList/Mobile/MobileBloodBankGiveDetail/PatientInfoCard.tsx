import type { Control, FieldValues, Path } from "react-hook-form"
import { Autocompletes } from "../../../../components/MUI/Autocompletes"

interface PatientInfoCardProps<T extends FieldValues> {
  control: Control<T>
}

export const PatientInfoCard = <T extends FieldValues>({
  control
}: PatientInfoCardProps<T>) => {

  return (
    <div className="bg-white rounded-lg py-4 px-3 shadow-xl/25">
      <label className="text-[#B5B5B5]">
        ข้อมูลผู้ขอโลหิต
      </label>
      <div className="grid grid-cols-12 px-3 gap-1 text-[0.600rem] mt-1">
        <div className="col-span-8 text-[#B5B5B5]">
          ชื่อผู้ป่วย <span className="text-black">
            นายทดสอบระบบ ล็อกอินส์
          </span>
        </div>
        <div className="col-span-4 text-[#B5B5B5]">
          HN <span className="text-black">
            650060141
          </span>
        </div>
        <div className="col-span-3 text-[#B5B5B5]">
          อายุ <span className="text-black">
            47
          </span>
        </div>
        <div className="col-span-3 text-[#B5B5B5]">
          เพศ <span className="text-black">
            ชาย
          </span>
        </div>
        <div className="col-span-3 text-[#B5B5B5]">
          หมู่เลือด <span className="text-black">
            O
          </span>
        </div>
        <div className="col-span-3 text-[#B5B5B5]">
          Rh <span className="text-black">
            +
          </span>
        </div>
        <div className="col-span-12 mt-1">
          <div className="grid grid-flow-col gap-1">
            <div className="row-span-3">
              <div className="text-[#B5B5B5]">
                วันที่ให้โลหิต <span className="text-black">
                  02/07/2568
                </span>
              </div>
              <div className="text-[#B5B5B5] mt-1">
                เวลาให้โลหิต <span className="text-black">
                  15:33:28
                </span>
              </div>
            </div>
            <div className="col-span-4 row-span-2">
              <Autocompletes
                control={control}
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