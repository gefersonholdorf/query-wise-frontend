import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

interface CreateKnowledgeRequest {
    problem: string
    soluction: string
}

interface CreateKnowledgeResponse {
    knowledgeId: number
}

export function useCreateKnowledge() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationKey: ["create-knowledge"],
        mutationFn: async (newKnowledge: CreateKnowledgeRequest) => {
            const response = await fetch("http://localhost:3398/api/v1/knowledges", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newKnowledge),
            });

            const result: CreateKnowledgeResponse = await response.json();

            return result
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["knowledges"] });
        },
        onError: (error) => {
            console.error("Erro ao salvar knowledge:", error);
            toast.error('Erro ao adicionar novo conhecimento!')
        },
    });
}
