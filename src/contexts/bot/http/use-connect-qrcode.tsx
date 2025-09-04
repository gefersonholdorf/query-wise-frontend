import { useQuery } from "@tanstack/react-query";

interface ConnectQRCodeResponse {
    data:
    | {
        code: string;
        base64: string;
    }
    | {
        instance: {
            instanceName: string;
            state: string;
        };
    };
}

export function useConnectQRCode() {
    return useQuery({
        queryKey: ["qrcode"],
        queryFn: async () => {
            const response = await fetch("http://localhost:3398/api/v1/generate-qrcode")

            const result: ConnectQRCodeResponse = await response.json();

            return result.data
        },
        refetchInterval: 10000,
    });
}
