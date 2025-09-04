import { Button } from "@/components/ui/button";
import { useConnectQRCode } from "../http/use-connect-qrcode";
import { useLogoutWhatsapp } from "../http/use-logout-whatsapp";

export function BotConnectQRCode() {
    const { data, isLoading } = useConnectQRCode();
    const { mutateAsync: logout, isPending } = useLogoutWhatsapp()

    function handleLogoutWhatsapp() {
        logout()
    }

    return (
        <main className="h-full w-full border bg-transparent rounded-lg drop-shadow-[0_-4px_6px_rgba(0,0,0,0.1)] bg-[url('/fundo.png')] bg-no-repeat bg-cover p-4 items-center justify-center m-auto ">
            {isLoading && <span>Carregando...</span>}

            {data && "base64" in data && (
                <div className="h-full flex flex-col items-center justify-center gap-8">
                    <span className="text-2xl font-bold text-gray-700">Escaneie o QR-Code com WhatsApp</span>
                    <img
                        src={data.base64}
                        alt="QRCode"
                        className="object-contain"
                    />
                </div>
            )}

            {data && "instance" in data && (
                <div className="h-full flex flex-col items-center justify-center gap-8 bg-transparent">
                    <img
                        src="./whatsapp.png"
                        alt="QRCode"
                        width={250}
                        height={250}
                    />
                    <h3 className="text-2xl font-bold text-gray-700">WhatsApp conectado com sucesso.</h3>
                    <Button variant="destructive" disabled={isPending} onClick={handleLogoutWhatsapp}>Desconectar Whatsapp</Button>
                </div>
            )}

        </main>
    );
}
