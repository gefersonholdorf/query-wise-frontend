import { Button } from "@/components/ui/button"
import { DatePicker } from "@/components/ui/date-calendar"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export function Filtering() {
    return (
        <div className="p-1 flex gap-1">
            <span className="text-sm text-gray-600">Filtrar por:</span>
            <div className="w-full grid grid-cols-6 gap-4 ">
                <Input placeholder="Digite trechos da mensagem..." />
                <Input placeholder="Digite o número de whatsapp..." />
                <DatePicker placeholder="Data de Início" />
                <DatePicker placeholder="Data Fim" />
                <Select>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Selecione o Status" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="ERRO">ERRO</SelectItem>
                        <SelectItem value="PENDENTE">PENDENTE</SelectItem>
                        <SelectItem value="CONCLUIDO">CONCLUIDO</SelectItem>
                    </SelectContent>
                </Select>
                <Button className="bg-blue-900 hover:bg-blue-800">Filtrar</Button>
            </div>
        </div>
    )
}