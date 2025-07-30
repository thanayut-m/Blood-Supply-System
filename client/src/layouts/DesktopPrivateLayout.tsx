import { useState } from "react";
import { DesktopNavBar } from "../components/navbar/Desktop/DesktopNavBar"
import { Drawer } from "../components/sidebar/Drawer"

interface DesktopPrivateLayoutProps {
    children: React.ReactNode
}

export const DesktopPrivateLayout = (
    { children }: DesktopPrivateLayoutProps
) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-gray-50 h-screen">
            <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} />
            <DesktopNavBar setIsOpen={setIsOpen} />
            <main className="w-full max-w-11/12 mx-auto pt-5 ">
                {children}
            </main>
        </div>
    )
}