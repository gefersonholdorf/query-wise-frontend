import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

interface UpdateKnowledgeRequest {
    id: number
    problem: string
    soluction: string
}

export function useUpdateKnowledge() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationKey: ["update-knowledge"],
        mutationFn: async (knowledge: UpdateKnowledgeRequest) => {
            const { id, problem, soluction } = knowledge
            const response = await fetch(`http://localhost:3398/api/v1/knowledges/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ problem, soluction }),
            });

            if (response.status !== 204) {
                throw new Error("Falha ao editar conhecimento");
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["tags"] });
            queryClient.invalidateQueries({ queryKey: ["knowledges"] });
        },
        onError: (error) => {
            console.error("Erro ao editar o conhecimento:", error);
            toast.error('Erro ao editar o conhecimento!')
        },
    });
}
