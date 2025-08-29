/** biome-ignore-all lint/correctness/useExhaustiveDependencies: <"explanation"> */
import relativeTime from "dayjs/plugin/relativeTime";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import "dayjs/locale/pt-br";
import dayjs from "dayjs";
import { EllipsisVertical } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import type { Knowledge } from "./list";

dayjs.extend(relativeTime);
dayjs.locale("pt-br");

interface KnowledgeBaseDetailProps {
    knowledge: Knowledge | null;
}

export function KnowledgeBaseDetail({ knowledge }: KnowledgeBaseDetailProps) {
    const [edit, setEdit] = useState(false);

    useEffect(() => {
        setEdit(false);
    }, [knowledge]);

    function handleSetEdit() {
        setEdit(!edit);
    }

    if (!knowledge) {
        return <div className="">Teste</div>;
    }

    return (
        <>
            <div className="flex gap-2 items-center justify-between border-b border-r px-2 p-2">
                <div className="flex gap-2 items-center">
                    <span className="text-md font-semibold text-gray-800">
                        Detalhe do Conhecimento
                    </span>
                </div>
                <div className="flex border-l px-2">
                    {knowledge && (
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <EllipsisVertical size={20} className="cursor-pointer" />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuLabel>Ações</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem onClick={handleSetEdit}>
                                    Editar
                                </DropdownMenuItem>
                                <DropdownMenuItem>Excluir</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    )}
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex justify-between p-4">
                    <div className="flex items-center gap-2">
                        <Avatar className="w-10 h-10">
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                            <span className="text-gray-600 text-sm italic">
                                Criado por: Suporte Lusati
                            </span>
                            <span className="text-gray-600 text-sm italic">Suporte</span>
                        </div>
                    </div>
                    <span className="text-sm text-gray-600">
                        {dayjs(knowledge.createdAt).format(
                            "DD [de] MMMM [de] YYYY  HH:mm:ss",
                        )}
                    </span>
                </div>
                <div className="px-4">
                    {edit ? (
                        <Input disabled={!edit} value={knowledge.problem} />
                    ) : (
                        <h3 className="text-2xl font-bold">{knowledge.problem}</h3>
                    )}
                </div>
                <Separator />
                <div className="h-full flex flex-col justify-between">
                    <div className="px-4">
                        {edit ? (
                            <Textarea className="h-90" value={knowledge.soluction}></Textarea>
                        ) : (
                            <ScrollArea className="h-90">
                                <p className="text-sm text-gray-800">{knowledge.soluction}</p>
                            </ScrollArea>
                        )}
                    </div>
                    {edit && (
                        <div className="grid grid-cols-2 gap-4 p-2">
                            <Button onClick={handleSetEdit}>Cancelar</Button>
                            <Button className="bg-blue-500">Editar</Button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
