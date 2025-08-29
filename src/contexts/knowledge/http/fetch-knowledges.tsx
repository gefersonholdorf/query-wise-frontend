import { useQuery } from "@tanstack/react-query";

interface FetchKnowledgesResponse {
    data: {
        id: number
        problem: string
        soluction: string
        createdAt: Date
        tags: {
            id: number
            name: string
        }[]
    }[]
}

export function useFetchKnowledges(search?: string) {
    return useQuery({
        queryKey: ["knowledges", search],
        queryFn: async () => {
            const url = new URL('http://localhost:3398/api/v1/knowledges')

            if (search) {
                url.searchParams.append('search', search)
            }

            const response = await fetch(url.toString())

            const result: FetchKnowledgesResponse = await response.json();

            return result
        }
    });
}
