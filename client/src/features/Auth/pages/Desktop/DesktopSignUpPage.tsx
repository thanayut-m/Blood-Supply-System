import { TableCell } from "@mui/material"
import { StickyTable } from "../../../../components/MUI/StickyTable"
import { DesktopPrivateLayout } from "../../../../layouts/DesktopPrivateLayout"
import { Modals } from "../../../../components/modal/Modals"
import { useEffect, useState } from "react"
import { FormInput } from "../../../../components/MUI/Inputs/FormInput"
import { useForm } from "react-hook-form"
import { useAuth } from "../../hook/useAuth"
import type { getStaffInfoResponse } from "../../types/staff.types"
import dayjs from "dayjs"
import { Buttons } from './../../../../components/Buttons';
import { IoMdPersonAdd } from "react-icons/io";

const columns = [
    { id: 'id', label: 'ลำดับ', minWidth: 20 },
    { id: 'username', label: 'username', minWidth: 20 },
    { id: 'name', label: 'ชื่อ-นามสกุล', minWidth: 20 },
    { id: 'status_admin', label: 'สถานะ', minWidth: 20 },
    { id: 'status', label: 'สถานะใช้งาน', minWidth: 20 },
    { id: 'update_at', label: 'เข้าสู่ระบบล่าสุด', minWidth: 20 },
    { id: 'action', label: 'Action', minWidth: 20 },
]


export const DesktopSignUpPage = () => {
    const { register, reset, handleSubmit } = useForm({
        defaultValues: {
            staffId: 0,
            username: "",
            staffName: "",
            webPassword: "",
            re_password: "",
        },
    });
    const [openModal, setOpenModal] = useState<string | null>(null);
    const [selectedUser, setSelectedUser] = useState<getStaffInfoResponse | null>(null)

    const handleClose = () => {
        setOpenModal(null);
        setSelectedUser(null)
        reset()
    };

    const { staffInfo, handleUpdateStaff, handleResetPassword, handleSignUp, isLoading } = useAuth(handleClose);

    const handleOpen = (modal: string, user: getStaffInfoResponse | null = null) => {
        setOpenModal(modal);
        setSelectedUser(user);

        if (modal === "openEditUser" && user) {
            reset({
                staffId: user.staffId,
                username: user.username,
                staffName: user.staffName,
            });
        }

        if (modal === "openRegister") {
            reset({
                username: "",
                staffName: "",
                webPassword: ""
            });
        }
        if (modal === "openReSetPassword" && user) {
            reset({
                staffId: user.staffId,
                re_password: ""
            });
        }
    }

    useEffect(() => {
        document.title = "จัดการผู้ใช้ || Logins Medical";
    }, [])

    if (isLoading) return <p>กำลังโหลด...</p>;
    return (
        <DesktopPrivateLayout>
            <div className="p-4 bg-white rounded-2xl ">
                <p className="text-2xl mb-4">จัดการผู้ใช้งาน</p>
                <div className="flex justify-end mb-3">
                    <Buttons
                        onClick={() => handleOpen("openRegister")}
                        className="flex justify-center p-2 text-xl bg-blue-500 hover:bg-blue-300 items-center w-[250px] rounded-xl">
                        <IoMdPersonAdd /><span className="ml-2">เพิ่มผู้ใช้งาน</span>
                    </Buttons>
                </div>
                <StickyTable
                    columns={columns}
                    rows={staffInfo}
                    renderRow={(row, index) => (
                        <>
                            <TableCell align="center">{index + 1}</TableCell>
                            <TableCell align="center">{row.username}</TableCell>
                            <TableCell align="center">{row.staffName}</TableCell>
                            <TableCell align="center">
                                {row.administrator === 'Y' ? "ผู้ดูแลระบบ" : "สมาชิก"}
                            </TableCell>
                            <TableCell align="center">
                                {row.staffStatus === 'Y'
                                    ? <p className="font-bold text-green-500">เปิดใช้งาน</p> : <p className="font-bold text-red-500">ปิดใช้งาน</p>}
                            </TableCell>
                            <TableCell align="center">
                                {row.update_at ? dayjs(row.update_at).format("DD-MM-YYYY HH:MM:ss") : "-"}
                            </TableCell>
                            <TableCell align="center">
                                <div className="flex gap-2 justify-center flex-wrap">
                                    <button
                                        onClick={() => handleOpen("openEditUser", row)}
                                        className="btn btn-sm btn-outline btn-primary">
                                        แก้ไข
                                    </button>
                                    <button
                                        onClick={() => handleOpen("openReSetPassword", row)}
                                        className="btn btn-sm btn-outline btn-error">
                                        Reset Password
                                    </button>
                                </div>
                            </TableCell>

                        </>
                    )}
                />
            </div>

            <Modals
                open={openModal === "openRegister"}
                width="w-[30%]"
                titleClassName="flex text-xl justify-start mb-4"
                title="สร้างผู้ใช้งาน"
                content={
                    <div className="flex flex-col gap-3">
                        <FormInput
                            register={register}
                            name="staffName"
                            label="ชื่อ-นามสกุล"
                            variant="outlined"
                            size="small"
                        />
                        <FormInput
                            register={register}
                            name="username"
                            label="ชื่อบัญชีผู้ใช้"
                            variant="outlined"
                            size="small"
                        />
                        <FormInput
                            register={register}
                            name="webPassword"
                            label="รหัสผ่าน"
                            variant="outlined"
                            size="small"
                        />
                    </div>
                }
                actions={
                    <div className="flex flex-row justify-end gap-3 mt-3">
                        <Buttons
                            className="bg-[#FF7726] text-white py-3 px-5 rounded-xl"
                            onClick={handleClose}
                        >
                            ยกเลิก
                        </Buttons>
                        <Buttons
                            className="bg-blue-500 text-white py-3 px-5 rounded-xl"
                            onClick={handleSubmit(handleSignUp)}
                        >
                            ยืนยัน
                        </Buttons>
                    </div>
                }
            />

            {openModal === "openEditUser" && selectedUser && (
                <Modals
                    open={openModal === "openEditUser"}
                    width="w-[30%]"
                    titleClassName="flex text-xl justify-start mb-4"
                    title="สร้างผู้ใช้งาน"
                    content={
                        <div className="flex flex-col gap-3">
                            <FormInput
                                register={register}
                                name="username"
                                label="ชื่อบัญชีผู้ใช้ "
                                variant="outlined"
                                size="small"
                            />
                            <FormInput
                                register={register}
                                name="staffName"
                                label="ชื่อ-นามสกุล"
                                variant="outlined"
                                size="small"
                            />
                        </div>
                    }
                    actions={
                        <div className="flex flex-row justify-end  gap-3 mt-3">
                            <Buttons
                                className="bg-[#FF7726] text-white py-3 px-5 rounded-xl"
                                onClick={handleClose}
                            >
                                ยกเลิก
                            </Buttons>
                            <Buttons
                                className="bg-blue-500 text-white py-3 px-5 rounded-xl"
                                onClick={handleSubmit(handleUpdateStaff)}
                            >
                                ยืนยัน
                            </Buttons>
                        </div>
                    }
                />
            )}

            <Modals
                open={openModal === "openReSetPassword"}
                width="w-[30%]"
                titleClassName="flex text-xl justify-start mb-4"
                title="สร้างผู้ใช้งาน"
                content={
                    <div className="flex flex-col gap-3">
                        <FormInput
                            register={register}
                            name="re_password"
                            label="รหัสผ่าน"
                            variant="outlined"
                            size="small"
                        />
                    </div>
                }
                actions={
                    <div className="flex flex-row justify-end  gap-3 mt-3">
                        <Buttons
                            className="bg-[#FF7726] text-white py-3 px-5 rounded-xl"
                            onClick={handleClose}
                        >
                            ยกเลิก
                        </Buttons>
                        <Buttons
                            className="bg-blue-500 text-white py-3 px-5 rounded-xl"
                            onClick={handleSubmit(handleResetPassword)}
                        >
                            ยืนยัน
                        </Buttons>
                    </div>
                }
            />


        </DesktopPrivateLayout>
    )
}