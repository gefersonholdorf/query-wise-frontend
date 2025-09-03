import { Separator } from "@/components/ui/separator";

export interface Message {
    id: number
    isAttendedByBot: boolean
    message: string
    status: 'ERRO' | 'PENDENTE' | 'CONCLUIDO'
    sendBy: string
    sendIn: Date
}

interface DataListProps {
    items: string[];
}

export function DataList({ items }: DataListProps) {
    return (
        <ul className="w-full h-full p-4 rounded-md border">
            <li className="w-full grid grid-cols-8">
                <span>Atendido pelo Bot</span>
                <span>Mensagem</span>
                <span>Status</span>
                <span>Enviado por</span>
                <span>Enviado em</span>
                <span>Ações</span>
            </li>
            <Separator />
            {items.map((item, index) => (
                <li key={index.toFixed()} className="p-2 border-b last:border-b-0">
                    {item}
                </li>
            ))}
        </ul>
    );
}
