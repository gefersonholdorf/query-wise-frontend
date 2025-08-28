import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

interface CreateTagRequest {
    name: string
}

interface CreateTagResponse {
    tagId: number
}

export function useCreateTag() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationKey: ["create-tag"],
        mutationFn: async (newtag: CreateTagRequest) => {
            const response = await fetch("http://localhost:3398/api/v1/tags", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newtag),
            });

            const result: CreateTagResponse = await response.json();

            return result
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["tags"] });
        },
        onError: (error) => {
            console.error("Erro ao salvar tag:", error);
            toast.error('Erro ao adicionar nova tag!')
        },
    });
}
