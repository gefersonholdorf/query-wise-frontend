import { Card, CardContent, CardTitle } from "../ui/card";

export function Dashboard() {
    return (
        <main className="h-full w-full border bg-gray-50 rounded-lg drop-shadow-[0_-4px_6px_rgba(0,0,0,0.1)] bg-[url('/fundo.png')]">
            <div className="grid grid-cols-4 gap-4 p-4">
                <Card className="text-center p-2 gap-2">
                    <CardTitle>Total de Tags</CardTitle>
                    <CardContent>
                        <span className="text-3xl font-bold text-gray-700">8</span>
                    </CardContent>
                </Card>
                <Card className="text-center p-2 gap-2">
                    <CardTitle>Total de Conhecimentos</CardTitle>
                    <CardContent>
                        <span className="text-3xl font-bold text-gray-700">8</span>
                    </CardContent>
                </Card>
                <Card className="text-center p-2 gap-2">
                    <CardTitle>Total de Mensagens Recebidas</CardTitle>
                    <CardContent>
                        <span className="text-3xl font-bold text-gray-700">8</span>
                    </CardContent>
                </Card>
                <Card className="text-center p-2 gap-2">
                    <CardTitle>Total de Mensagens Pendentes</CardTitle>
                    <CardContent>
                        <span className="text-3xl font-bold text-gray-700">8</span>
                    </CardContent>
                </Card>
            </div>
        </main>
    )
}