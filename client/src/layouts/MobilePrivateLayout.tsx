import { MobileNavbar2 } from "../components/navbar/mobile/MobileNavbar2"

interface MobilePrivateLayout2Props {
    children: React.ReactNode
}


export const MobilePrivateLayout = ({
    children
}: MobilePrivateLayout2Props) => {
    return (
        <div className="relative px-2">
            <div className="fixed top-0 left-0 w-full h-[120px] bg-[#FF7726] -z-10" />

            <div className="fixed bg-[#FF7726] top-0 left-0 w-full z-50">
                <MobileNavbar2 />
            </div>

            <main className="pt-[80px] relative z-0 pb-8">
                {children}
            </main>
        </div>
    )
}