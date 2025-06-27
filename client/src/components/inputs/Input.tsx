import type { FieldErrors, FieldValues, Path, UseFormRegister } from "react-hook-form"

interface InputProps<T extends FieldValues> {
    type: string;
    placeholder: string;
    name: Path<T>;
    register: UseFormRegister<T>;
    errors?: FieldErrors<T>;
}

export const Input = <T extends FieldValues>({
    type,
    placeholder,
    register,
    name,
    errors = {}
}: InputProps<T>) => {
    const hasError = !!errors[name];

    return (
        <fieldset className="fieldset">
            <input
                {...register(name)}
                type={type}
                placeholder={placeholder}
                className="input w-full"
            />
            {
                hasError && (<p className="text-red-500 font-bold">{errors[name]?.message?.toString()}</p>)
            }
        </fieldset>
    );
};
