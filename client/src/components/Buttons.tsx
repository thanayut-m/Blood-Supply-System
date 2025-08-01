interface ButtonProps {
    variant?: "default" | "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error" | "square";
    children: React.ReactNode;
    className?: string;
    type?: "button" | "submit" | "reset";
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    isSubmitting?: boolean;
    disabled?: boolean;
}

export const Buttons = ({
    variant = "default",
    children,
    className = "",
    type = "button",
    onClick,
    isSubmitting = false,
    disabled = false,
}: ButtonProps) => {
    let variantClass = "";

    if (variant === "primary") variantClass = "btn-primary";
    else if (variant === "secondary") variantClass = "btn-secondary";
    else if (variant === "accent") variantClass = "btn-accent";
    else if (variant === "info") variantClass = "btn-info";
    else if (variant === "success") variantClass = "btn-success";
    else if (variant === "warning") variantClass = "btn-warning";
    else if (variant === "error") variantClass = "btn-error";
    else if (variant === "square") variantClass = "btn-square";

    const btnClass = ` ${variantClass} ${className} ${disabled ? 'bg-gray-300 cursor-not-allowed' : ''}`;

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={isSubmitting || disabled}
            className={btnClass}
        >
            {isSubmitting ? (
                <span className="flex justify-center items-center gap-2">
                    <span className="loading loading-spinner loading-sm"></span>
                    กำลังเข้าสู่ระบบ...
                </span>
            ) : (
                children
            )}
        </button>
    );
};
