import { Buttons } from "../../../components/Buttons"
import { MobilePrivateLayout } from "../../../layouts/MobilePrivateLayout"

export const MobileBloodBankGiveDetail = () => {
    return (
        <MobilePrivateLayout>
            <div className="p-2 bg-white rounded-lg shadow-md space-y-3 text-gray-800">
                <div>
                    <div className="text-lg font-semibold mb-2">ข้อมูลผู้ขอเลือด</div>
                    <div className="grid grid-cols-2 gap-y-2 text-sm">
                        <div className="col-span-2">
                            HN :&nbsp;
                            <span className="font-medium">
                                123456789
                            </span>
                        </div>
                        <div className="col-span-2">
                            ชื่อ-สกุล :&nbsp;
                            <span className="font-medium">
                                นายทดสอบ ทดสอบ
                            </span>
                        </div>
                        <div>
                            อายุ :&nbsp;
                            <span className="font-medium">
                                18
                            </span>
                        </div>
                        <div>
                            เพศ :&nbsp;
                            <span className="font-medium">
                                ชาย
                            </span>
                        </div>
                        <div>
                            หมู่เลือด :&nbsp;
                            <span className="font-medium">
                                O
                            </span>
                        </div>
                        <div>
                            Rh :&nbsp;
                            <span className="font-medium">
                                +
                            </span>
                        </div>
                        <div>
                            วันที่ให้โลหิต :&nbsp;
                            <span className="font-medium">
                                30/06/2568
                            </span>
                        </div>
                        <div>
                            เวลาที่ให้โลหิต :&nbsp;
                            <span className="font-medium">
                                10:51:50
                            </span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1s gap-6 text-sm">
                    <div className="bg-gray-50 p-2 rounded-lg border">
                        <div className="text-base font-semibold text-gray-700 mb-1">
                            Antibody Screening : <span className="text-green-600">Negative</span>
                        </div>
                        <div className="grid grid-cols-2 gap-y-1">
                            <div></div>
                            <div className="font-semibold">Result</div>

                            <div className="text-right pr-2">O1 :</div>
                            <div className="text-left pl-2">Negative</div>

                            <div className="text-right pr-2">O2 :</div>
                            <div className="text-left pl-2">Negative</div>

                            <div className="text-right pr-2">O3 :</div>
                            <div className="text-left pl-2">Negative</div>
                        </div>
                    </div>

                    <div className="bg-gray-50 p-2 rounded-lg border">
                        <div className="text-base font-semibold text-gray-700 mb-1">
                            Auto Control And DAT
                        </div>
                        <div className="grid grid-cols-2 gap-y-1">
                            <div></div>
                            <div className="font-semibold">Result</div>

                            <div className="text-right pr-2">AC :</div>
                            <div className="text-left pl-2">Negative</div>

                            <div className="text-right pr-2">DAT :</div>
                            <div className="text-left pl-2">Negative</div>

                            <div className="text-right pr-2">IAT :</div>
                            <div className="text-left pl-2">Negative</div>
                        </div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg border">
                        <div className="text-base font-semibold text-gray-700 mb-2">
                            สถานะถุงเลือด
                        </div>
                        <div className="grid grid-cols-2 items-center gap-4 p-3 border rounded-md bg-gray-50 text-sm">
                            <div className="font-medium text-gray-700">1201201223233</div>
                            <div className="text-yellow-600 font-semibold">รอการตรวจสอบ</div>
                        </div>

                    </div>
                </div>
                <Buttons
                    variant="secondary"
                >
                    ตรวจสอบเลือด
                </Buttons>
            </div>
        </MobilePrivateLayout>
    )
}