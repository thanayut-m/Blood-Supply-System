import { useEffect, useState } from "react";

interface ModalsProps {
    open: boolean;
    onClose: () => void;
    title?: string;
    content?: React.ReactNode;
    actions?: React.ReactNode;
    width?: string;
    high?: string;
    infoList?: { label: string; value: string }[];
    titleClassName?: string;
}

export const Modals = ({
    open,
    onClose,
    width,
    high,
    title,
    content,
    actions,
    infoList,
    titleClassName
}: ModalsProps) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (open) {
            setTimeout(() => setShow(true), 5);
        } else {
            setShow(false);
        }
    }, [open]);

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div
                className={`absolute inset-0 bg-black transition-opacity duration-300 ease-in-out ${show ? "opacity-50" : "opacity-0"
                    }`}
            // onClick={onClose}
            ></div>

            <div
                className={`relative bg-white rounded-lg p-6 shadow-lg  ${width} ${high} transform transition-all duration-300 ease-in-out ${show ? "opacity-100 scale-100" : "opacity-0 scale-95"
                    }`}
            >
                {title && (
                    <h3 className={`font-bold text-lg py-2 ${titleClassName ?? ""}`}>
                        {title}
                    </h3>
                )}

                {infoList?.length ? (
                    <div className=" py-2">
                        {infoList.map((item, index) => (
                            <p key={index} className="text-sm">
                                {item.label} : {item.value}
                            </p>
                        ))}
                    </div>
                ) : null}



                {content && (
                    <div >
                        {content}
                    </div>
                )}
                <div>
                    {actions ? (
                        actions
                    ) : (
                        <button className="btn" onClick={onClose}>
                            Close
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};