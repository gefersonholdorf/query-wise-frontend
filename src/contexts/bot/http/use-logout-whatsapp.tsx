import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

interface LogoutWhatsappResponse {
    status: string;
    error: boolean;
    response: {
        message: string;
    };
}

export function useLogoutWhatsapp() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationKey: ["logout"],
        mutationFn: async () => {
            const result = await fetch("http://localhost:3398/api/v1/logout-whatsapp", {
                method: "DELETE",
            });

            const response: LogoutWhatsappResponse = await result.json()

            return response
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["qrcode"] });
        },
        onError: (error) => {
            console.error("Erro ao deslogar whatsapp:", error);
            toast.error('Erro ao tentar deslogar Whatsapp!')
        },
    });
}
