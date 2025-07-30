import { DesktopNavBar } from "../components/navbar/Desktop/DesktopNavBar"

interface DesktopPrivateLayoutProps {
    children: React.ReactNode
}

export const DesktopPrivateLayout = (
    { children }: DesktopPrivateLayoutProps
) => {
    return (
        <div className="bg-gray-50 h-screen">
            <DesktopNavBar />
            <main className="w-full max-w-11/12 mx-auto pt-5 ">
                {children}
            </main>
        </div>
    )
}