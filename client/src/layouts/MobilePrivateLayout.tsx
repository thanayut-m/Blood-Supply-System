import type React from "react"
import { MobileNavbar } from "../components/navbar/mobile/MobileNavbar"
import { MobileFooter } from "../components/footer/mobile/MobileFooter"

interface MobilePrivateLayoutProps {
    children: React.ReactNode
}

export const MobilePrivateLayout = ({
    children
}: MobilePrivateLayoutProps) => {
    return (
        <div className="relative min-h-screen bg-[#F5F5F5] pt-[50px] pb-[60px]">
            <div className="fixed top-0 left-0 right-0 z-50">
                <MobileNavbar />
            </div>

            <main className="p-4">
                {children}
            </main>

            <div className="fixed bottom-0 left-0 right-0 z-50">
                <MobileFooter />
            </div>
        </div>
    )
}