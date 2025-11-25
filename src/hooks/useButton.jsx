import { useCallback } from "react";

export default function useButton() {
    const handleButtonClick = useCallback(({ type, value, callback }) => {
        switch (type) {
            case "call":
                window.location.href = `tel:${value}`;
                break;

            case "whatsapp":
                window.open(
                    `https://wa.me/${value}?text=Hi, I want more details`,
                    "_blank"
                );
                break;

            case "link":
                window.location.href = value;
                break;

            case "action":
                if (callback) callback();
                break;

            default:
                console.warn("Button type not recognized!");
        }
    }, []);

    return { handleButtonClick };
}
