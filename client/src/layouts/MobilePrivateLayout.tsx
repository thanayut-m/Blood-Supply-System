import { MobileNavbar2 } from "../components/navbar/mobile/MobileNavbar2"

interface MobilePrivateLayout2Props {
    children: React.ReactNode
}


export const MobilePrivateLayout = ({
    children
}: MobilePrivateLayout2Props) => {
    return (
        <div className="relative h-[120px] bg-[#FF7726] px-2">
            <div className="fixed top-0 left-0 w-full z-50">
                <MobileNavbar2 />
            </div>
            <main className="pt-[80px]">
                {children}
            </main>
        </div>


    )
}