interface DesktopAuthProps {
    children: React.ReactNode;
}

export const DesktopAuth = ({ children }: DesktopAuthProps) => {
    return (
        <div className="flex flex-col justify-center items-center h-screen bg-[#e7e7e7]">
            <main className="max-md:w-11/12 sm:w-8/12 md:w-6/12 xl:w-4/12 bg-white py-20 px-15 rounded-2xl shadow-2xl">
                {children}
            </main>
            <div>
                <p className="text-gray-500 text-sm mt-3">Copyright ©2025 Logins Medical. All rights reserved</p>
            </div>
        </div>
    )
}