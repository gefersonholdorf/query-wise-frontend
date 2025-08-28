import { useQuery } from "@tanstack/react-query";

interface FetchTagsResponse {
    data: {
        id: number
        name: string
        quantity: number
    }[]
}

export function useFetchTags() {
    return useQuery({
        queryKey: ["tags"],
        queryFn: async () => {
            const response = await fetch("http://localhost:3398/api/v1/tags")

            const result: FetchTagsResponse = await response.json();

            return result
        }
    });
}
