
import { MobilePrivateLayout } from "../../../layouts/MobilePrivateLayout"
import { CardList } from "./CardList";

export const MobileBloodBankGiveList = () => {

    const data = [
        { hn: "85652466", status: "รอจ่ายเลือด", patient: "นาย ทดสอบ ทดสอบ", bloodType: "PRC", bloodCode: "563235874563", resultCM: "Compatible", date: "27/06/2568 12:58", staffname: "นาย ทดสอบ ทดสอบ", hctb: "-", hcta: "-" },
        { hn: "85652466", status: "จ่ายเลือดแล้ว", patient: "นาย ทดสอบ ทดสอบ", bloodType: "PRC", bloodCode: "563235874563", resultCM: "Compatible", date: "27/06/2568 12:58", staffname: "นาย ทดสอบ ทดสอบ", hctb: "-", hcta: "-" },
        { hn: "85652466", status: "จ่ายเลือดแล้ว", patient: "นาย ทดสอบ ทดสอบ", bloodType: "PRC", bloodCode: "563235874563", resultCM: "Compatible", date: "27/06/2568 12:58", staffname: "นาย ทดสอบ ทดสอบ", hctb: "-", hcta: "-" },
        { hn: "85652466", status: "จ่ายเลือดแล้ว", patient: "นาย ทดสอบ ทดสอบ", bloodType: "PRC", bloodCode: "563235874563", resultCM: "Compatible", date: "27/06/2568 12:58", staffname: "นาย ทดสอบ ทดสอบ", hctb: "-", hcta: "-" },
        { hn: "85652466", status: "จ่ายเลือดแล้ว", patient: "นาย ทดสอบ ทดสอบ", bloodType: "PRC", bloodCode: "563235874563", resultCM: "Compatible", date: "27/06/2568 12:58", staffname: "นาย ทดสอบ ทดสอบ", hctb: "-", hcta: "-" }
    ]

    return (
        <MobilePrivateLayout>
            <div className="flex flex-col gap-3">
                <CardList
                    data={data}
                />
            </div>
        </MobilePrivateLayout>
    )
}
