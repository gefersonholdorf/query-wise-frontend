import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

interface MatchKnowledgeRequest {
    message: string
}

interface MatchKnowledgeResponse {
    bestMatchs: {
        id: string
        problem: string
        soluction: string
        similarity: number
    }[]
}

export function useMatchKnowledge() {
    return useMutation({
        mutationKey: ["match-knowledge"],
        mutationFn: async (match: MatchKnowledgeRequest) => {
            const { message } = match
            const response = await fetch('http://localhost:3398/api/v1/knowledges/match', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ message }),
            });

            if (response.status !== 200) {
                throw new Error("Falha ao editar conhecimento");
            }

            const result: MatchKnowledgeResponse = await response.json()

            return result
        },
        onError: (error) => {
            console.error("Erro ao editar o conhecimento:", error);
            toast.error('Erro ao editar o conhecimento!')
        },
    });
}
