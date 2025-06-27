interface ButtonProps {
    variant?: "default" | "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error";
    children: React.ReactNode;
    className?: string;
    type?: "button" | "submit" | "reset";
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    isSubmitting: boolean;
}

export const Buttons = ({
    variant = "default",
    children,
    className = "",
    type = "button",
    onClick,
    isSubmitting = false,
}: ButtonProps) => {
    let variantClass = "";

    if (variant === "primary") variantClass = "btn-primary";
    else if (variant === "secondary") variantClass = "btn-secondary";
    else if (variant === "accent") variantClass = "btn-accent";
    else if (variant === "info") variantClass = "btn-info";
    else if (variant === "success") variantClass = "btn-success";
    else if (variant === "warning") variantClass = "btn-warning";
    else if (variant === "error") variantClass = "btn-error";

    const btnClass = `btn btn-active w-full ${variantClass} ${className}`;

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={isSubmitting}
            className={btnClass}
        >
            {isSubmitting ? (
                <span className="flex items-center gap-2">
                    <span className="loading loading-spinner loading-sm"></span>
                    กำลังเข้าสู่ระบบ...
                </span>
            ) : (
                children
            )}
        </button>
    );
};
