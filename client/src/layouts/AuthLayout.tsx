interface AuthLayoutProps {
    children: React.ReactNode;
}

export const AuthLayout = ({ children }: AuthLayoutProps) => {
    return (
        <div className="bg-[#FF7726] min-h-screen">
            <div className="grid grid-rows-3 min-h-screen">
                <div className="flex flex-col justify-center items-center my-10">
                    <div className="w-48 h-48 rounded-full overflow-hidden">
                        <img
                            alt="Tailwind CSS Navbar component"
                            src="https://thumbs.dreamstime.com/b/vector-illustration-red-blood-drop-bottle-hand-white-background-blood-bank-red-drop-cross-116932473.jpg"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="text-white text-2xl font-bold mt-2">Blood Bank</div>
                </div>
                <div className="row-span-2 items-start bg-white rounded-t-3xl py-6 px-10 ">
                    {children}
                </div>

            </div>
        </div>
    );
};
