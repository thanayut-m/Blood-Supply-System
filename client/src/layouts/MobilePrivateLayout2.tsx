import { MobileNavbar2 } from "../components/navbar/mobile/MobileNavbar2"

interface MobilePrivateLayout2Props {
    children: React.ReactNode
}


export const MobilePrivateLayout2 = ({
    children
}: MobilePrivateLayout2Props) => {
    return (
        <div className="">
            <MobileNavbar2 />
            <main>{children}</main>
        </div>
    )
}