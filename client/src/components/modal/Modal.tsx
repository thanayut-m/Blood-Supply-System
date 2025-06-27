import { useRef } from "react";

export const Modal = () => {
    const modalRef = useRef<HTMLDialogElement>(null);

    const openModal = () => {
        modalRef.current?.showModal();
    };

    return (
        <div>
            <button className="btn" onClick={openModal}>
                Open Modal
            </button>

            <dialog id="my_modal_1" className="modal" ref={modalRef}>
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">
                        Press ESC key or click the button below to close
                    </p>
                    <div className="modal-action">
                        {/* ปุ่ม close modal */}
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};
