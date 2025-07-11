import axios from "axios";
import Swal from "sweetalert2";

const { VITE_API_PATH } = import.meta.env

export const ResetPassword = async (data: object, navigate: (path: string) => void) => {
    try {
        const result = await axios.put(VITE_API_PATH + "/Auth/resetPassword", data);

        if (result.data.success === true) {
            console.log("success");
            Swal.fire({
                icon: "success",
                title: "เปลี่ยนรหัสผ่านสำเร็จ",
                timer: 1000,
                showConfirmButton: false,
            });
            navigate("/");
        }
    } catch (error) {
        console.log(error);
    }
};