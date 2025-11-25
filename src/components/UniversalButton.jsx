import React from "react";

const variants = {
    primary:
        "bg-blue-600 text-white hover:bg-blue-700",
    secondary:
        "bg-gray-200 text-gray-800 hover:bg-gray-300",
    outline:
        "border border-blue-600 text-blue-600 hover:bg-blue-50",
    ghost:
        "bg-transparent text-blue-600 hover:bg-blue-50",
    gradient:
        "bg-gradient-to-r from-blue-600 to-yellow-600 text-white hover:opacity-90",
    danger:
        "bg-red-600 text-white hover:bg-red-700",
    success:
        "bg-green-600 text-white hover:bg-green-700",
};

export default function UniversalButton({
    label,
    onClick,
    icon,
    variant = "primary",
    className = "",
    fullWidth = false,
}) {
    return (
        <button
            onClick={onClick}
            className={`flex mt-2 items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold shadow-lg transition active:scale-95
        ${variants[variant]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
        >
            {icon && <span className="text-xl">{icon}</span>}
            {label}
        </button>
    );
}
