import { BadgeCheck, Check, CircleX, EllipsisVertical, ShieldQuestionMark } from "lucide-react";
import { useState } from "react";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { formatDate } from "@/helpers/format-date";
import { truncateString } from "@/helpers/truncate-string";
import { Paginator } from "./paginator";

export interface Message {
    id: number;
    isAttendedByBot: boolean;
    message: string;
    status: "ERRO" | "PENDENTE" | "CONCLUIDO";
    sendBy: string;
    number: string;
    sendIn: Date;
    botResponse: string | null;
}

interface DataListProps {
    items: Message[];
}

export function DataList({ items }: DataListProps) {
    const [page, setPage] = useState(1);

    function handleSetPage(newPage: number) {
        setPage(newPage);
    }

    function getActionsByMessage(message: Message) {
        if (!message.isAttendedByBot && message.status === "ERRO" || message.status === "CONCLUIDO") {
            return "---";
        }

        if (message.isAttendedByBot && message.status === "PENDENTE") {
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <EllipsisVertical size={20} className="cursor-pointer" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>Ações</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem><BadgeCheck />Concluir</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        }

        if (!message.isAttendedByBot && message.status === "PENDENTE") {
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <EllipsisVertical size={20} className="cursor-pointer" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>Ações</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem><BadgeCheck />Concluir</DropdownMenuItem>
                        <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                                    <ShieldQuestionMark />Sugerir Resposta
                                </DropdownMenuItem>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>
                                        Deseja remover este conhecimento?
                                    </AlertDialogTitle>
                                    <AlertDialogDescription>
                                        Após remover este conhecimento, ele não estará mais
                                        disponível para consulta!
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>Cancelar</AlertDialogCancel>
                                    <AlertDialogAction>Continuar</AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        }
    }

    return (
        <ul className="w-full h-full rounded-md border">
            <li className="w-full grid grid-cols-8 bg-gray-100 p-2 text-sm">
                <span>Atendido pelo Bot</span>
                <span className="col-span-2">Mensagem</span>
                <span>Status</span>
                <span>Enviado por</span>
                <span>Número</span>
                <span>Enviado em</span>
                <span>Ações</span>
            </li>
            <Separator />
            {items.map((item) => (
                <li
                    key={item.id}
                    className="p-2 border-b last:border-b-0 grid grid-cols-8 text-sm text-gray-800"
                >
                    <span className="flex justify-center items-center">
                        {item.isAttendedByBot ? (
                            <Tooltip>
                                <TooltipTrigger>
                                    <Check className="text-emerald-500" />
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Resposta do bot: {item.botResponse}</p>
                                </TooltipContent>
                            </Tooltip>
                        ) : (
                            <Tooltip>
                                <TooltipTrigger>
                                    <CircleX className="text-red-500" />
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Essa mensagem não foi respondida pelo bot.</p>
                                </TooltipContent>
                            </Tooltip>
                        )}
                    </span>
                    <span className="col-span-2">
                        <Tooltip>
                            <TooltipTrigger>
                                {truncateString(item.message, 40)}
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>{item.message}</p>
                            </TooltipContent>
                        </Tooltip>
                    </span>
                    <span>{item.status}</span>
                    <span>{item.sendBy}</span>
                    <span>{item.number}</span>
                    <span>{formatDate(item.sendIn)}</span>
                    <span>{getActionsByMessage(item)}</span>
                </li>
            ))}
            <Paginator page={page} totalPages={10} onPageChange={handleSetPage} />
        </ul>
    );
}
