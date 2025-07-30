import { TableCell } from "@mui/material"
import { StickyTable } from "../../../../components/MUI/StickyTable"
import { DesktopPrivateLayout } from "../../../../layouts/DesktopPrivateLayout"
import { Modals } from "../../../../components/modal/Modals"
import { useState } from "react"
import { Buttons } from "../../../../components/Buttons"
import { FormInput } from "../../../../components/MUI/Inputs/FormInput"
import { useForm } from "react-hook-form"

const columns = [
    { id: 'id', label: 'ลำดับ', minWidth: 20 },
    { id: 'username', label: 'username', minWidth: 20 },
    { id: 'name', label: 'ชื่อ-นามสกุล', minWidth: 20 },
    { id: 'action', label: 'Action', minWidth: 20 },
]

const rows = [
    { id: 1, username: "admin1", name: "นายสมชาย ใจดี" },
    { id: 2, username: "nurse2", name: "นางสาวพรทิพย์ รุ่งเรือง" },
]

export const DesktopSignUpPage = () => {
    const { register, setValue, reset } = useForm()
    const [openModal, setOpenModal] = useState(null);
    const [selectedUser, setSelectedUser] = useState(null)

    const handleOpen = (modal: string, user = null) => {
        setOpenModal(modal)
        setSelectedUser(user)

        // ถ้า modal เป็น edit ให้ set ค่าใน form
        if (modal === "openEditUser" && user) {
            setValue("username", user.username)
            setValue("name", user.name)
        }

        // ถ้า reset password แนะนำให้ล้างค่าเดิม
        if (modal === "openReSetPassword") {
            reset({ re_password: "" })
        }
    }

    const handleClose = (modal: string) => {
        setOpenModal(null);
        setSelectedUser(null)
        reset()
    };
    return (
        <DesktopPrivateLayout>
            <div className="p-4 bg-white rounded-2xl ">
                <p className="text-2xl mb-4">จัดการผู้ใช้งาน</p>
                <div className="flex justify-end ml-3">
                    <button
                        onClick={() => handleOpen("openRegister")}
                        className="btn btn-sm btn-outline btn-primary ">
                        เพิ่มผู้ใช้งาน
                    </button>
                </div>
                <StickyTable
                    columns={columns}
                    rows={rows}
                    renderRow={(row, index) => (
                        <>
                            <TableCell align="center">{index + 1}</TableCell>
                            <TableCell align="center">{row.username}</TableCell>
                            <TableCell align="center">{row.name}</TableCell>
                            <TableCell align="center">
                                <div className="flex gap-2 justify-center flex-wrap">
                                    <button
                                        onClick={() => handleOpen("openEditUser", row)}
                                        className="btn btn-sm btn-outline btn-primary">
                                        แก้ไข
                                    </button>
                                    <button
                                        onClick={() => handleOpen("openReSetPassword")}
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
                            name="username"
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
                            name="password"
                            label="รหัสผ่าน"
                            variant="outlined"
                            size="small"
                        />
                    </div>
                }
                actions={
                    <div className="flex flex-row gap-3 mt-3">
                        <Buttons
                            className="bg-[#FF7726] text-white py-3 px-5 rounded-3xl"
                            onClick={handleClose}
                        >
                            ยกเลิก
                        </Buttons>
                        <Buttons
                            className="bg-blue-500 text-white py-3 px-5 rounded-3xl"
                        // onClick={handleSubmit(handleSubmitUpdateGive)}
                        >
                            ยืนยัน
                        </Buttons>
                    </div>
                }
            />

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
                            label="ชื่อ-นามสกุล"
                            variant="outlined"
                            size="small"
                        />
                        <FormInput
                            register={register}
                            name="name"
                            label="ชื่อบัญชีผู้ใช้"
                            variant="outlined"
                            size="small"
                        />
                    </div>
                }
                actions={
                    <div className="flex flex-row gap-3 mt-3">
                        <Buttons
                            className="bg-[#FF7726] text-white py-3 px-5 rounded-3xl"
                            onClick={handleClose}
                        >
                            ยกเลิก
                        </Buttons>
                        <Buttons
                            className="bg-blue-500 text-white py-3 px-5 rounded-3xl"
                        // onClick={handleSubmit(handleSubmitUpdateGive)}
                        >
                            ยืนยัน
                        </Buttons>
                    </div>
                }
            />

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
                    <div className="flex flex-row gap-3 mt-3">
                        <Buttons
                            className="bg-[#FF7726] text-white py-3 px-5 rounded-3xl"
                            onClick={handleClose}
                        >
                            ยกเลิก
                        </Buttons>
                        <Buttons
                            className="bg-blue-500 text-white py-3 px-5 rounded-3xl"
                        // onClick={handleSubmit(handleSubmitUpdateGive)}
                        >
                            ยืนยัน
                        </Buttons>
                    </div>
                }
            />


        </DesktopPrivateLayout>
    )
}