import { useEffect, useState } from "react";
import { Link } from "react-router";

interface DrawerProps {
    isOpen: boolean;
    onClose?: () => void;
}

export const Drawer = ({ isOpen, onClose }: DrawerProps) => {
    const [visible, setVisible] = useState(isOpen);

    useEffect(() => {
        if (isOpen) {
            setVisible(true);
        } else {
            const timer = setTimeout(() => {
                setVisible(false);
            }, 100);

            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    return (
        <div
            className={`fixed inset-0 z-50 flex transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"
                } ${visible ? "" : "pointer-events-none"}`}
        >
            {/* Overlay (fade) */}
            <div
                className="fixed inset-0 bg-black opacity-40"
                onClick={onClose}
            ></div>
            <div
                className={`relative bg-white w-64 shadow-md p-4 z-10 transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
                <div className="flex flex-col gap-3">
                    <div className="flex justify-center font-bold text-2xl">
                        Logins Medical
                    </div>
                    <Link to={"/DonorList"} className="hover:bg-gray-300 py-2 px-4 rounded-2xl">
                        ทะเบียนผู้บริจาคเลือด
                    </Link>
                    <Link to={"/BloodBankStock"} className="hover:bg-gray-300 py-2 px-4 rounded-2xl">
                        คลังเลือด
                    </Link>
                    <Link to={"/Setting/manageUser"} className="hover:bg-gray-300 py-2 px-4 rounded-2xl">
                        จัดการผู้ใช้
                    </Link>
                </div>
            </div>
        </div>
    );
};
