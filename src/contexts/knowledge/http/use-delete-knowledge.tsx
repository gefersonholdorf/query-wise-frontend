import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useDeleteKnowledge() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationKey: ["delete-knowledge"],
        mutationFn: async (id: number) => {
            const response = await fetch(
                `http://localhost:3398/api/v1/knowledges/${id}`,
                {
                    method: "DELETE",
                },
            );

            if (response.status !== 204) {
                throw new Error("Falha ao deletar conhecimento");
            }
        },
        onSuccess: () => {
            toast.success("Conhecimento removido com sucesso!");
            queryClient.invalidateQueries({ queryKey: ["tags"] });
            queryClient.invalidateQueries({ queryKey: ["knowledges"] });
        },
        onError: (error) => {
            console.error("Erro ao remover o conhecimento!", error);
            toast.error("Erro ao remover o conhecimento!");
        },
    });
}
