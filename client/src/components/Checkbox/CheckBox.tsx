interface CheckBoxProps {
    label?: string;
}


export const Checkbox = ({ label }: CheckBoxProps) => {
    return (
        <label className="label text-black">
            <input type="checkbox" defaultChecked className="checkbox checkbox-sm" />
            {label}
        </label >
    )
}