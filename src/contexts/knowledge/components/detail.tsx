/** biome-ignore-all lint/correctness/useExhaustiveDependencies: <"explanation"> */
/** biome-ignore-all lint/style/noNonNullAssertion: <"explanation"> */
/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <"explanation"> */

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import "dayjs/locale/pt-br";
import { zodResolver } from "@hookform/resolvers/zod";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import { EllipsisVertical } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod/v4";
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
import { useDeleteKnowledge } from "../http/use-delete-knowledge";
import { useUpdateKnowledge } from "../http/use-update-knowledge";
import type { Knowledge } from "./list";

dayjs.extend(relativeTime);
dayjs.locale("pt-br");

interface KnowledgeBaseDetailProps {
    knowledge: Knowledge | null;
}

const updateKnowledgeSchema = z.object({
    problem: z.string().min(1, "Campo obrigatório."),
    soluction: z.string().min(1, "Campo obrigatório."),
});

type UpdateKnowledgeSchema = z.infer<typeof updateKnowledgeSchema>;

export function KnowledgeBaseDetail({ knowledge }: KnowledgeBaseDetailProps) {
    const [edit, setEdit] = useState(false);

    const { mutateAsync: deleteKnowledge } = useDeleteKnowledge();
    const { mutateAsync: updateKnowledge, isPending: isPendingUpdate } =
        useUpdateKnowledge();

    const form = useForm<UpdateKnowledgeSchema>({
        resolver: zodResolver(updateKnowledgeSchema),
        defaultValues: {
            problem: knowledge?.problem,
            soluction: knowledge?.soluction,
        },
    });

    async function handleDeleteKnowledge() {
        try {
            await deleteKnowledge(knowledge!.id);
        } catch (error) {
            console.log(error);
        }
    }

    async function handleUpdateKnowledge(data: UpdateKnowledgeSchema) {
        try {
            const { problem, soluction } = data;
            if (!knowledge) {
                return null;
            }
            await updateKnowledge({
                id: knowledge.id,
                problem: problem,
                soluction: soluction,
            });

            setEdit(false);

            toast.success("Conhecimento alterado com sucesso.");
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        setEdit(false);
    }, [knowledge]);

    useEffect(() => {
        if (knowledge) {
            form.reset({
                problem: knowledge.problem ?? "",
                soluction: knowledge.soluction ?? "",
            });
        }
    }, [knowledge, form]);

    function handleSetEdit() {
        setEdit(!edit);
    }

    if (!knowledge) {
        return (
            <div className="flex flex-col items-center h-full border text-center p-12 text-gray-500 bg-gray-100"></div>
        );
    }

    return (
        <>
            <div className="flex gap-2 items-center justify-between border-b border-r px-2 p-2 bg-[url('/fundo.png')] bg-cover bg-no-repeat">
                <div className="flex gap-2 items-center">
                    <span className="text-md font-semibold text-gray-800">
                        Detalhe do Conhecimento
                    </span>
                </div>
                <div className="flex border-l px-2 ">
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
                                <AlertDialog>
                                    <AlertDialogTrigger asChild>
                                        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                                            Excluir
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
                                            <AlertDialogAction
                                                onClick={() => handleDeleteKnowledge()}
                                            >
                                                Continuar
                                            </AlertDialogAction>
                                        </AlertDialogFooter>
                                    </AlertDialogContent>
                                </AlertDialog>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    )}
                </div>
            </div>
            <div className="flex flex-col gap-2 ">
                <div className="flex justify-between p-4 bg-white">
                    <div className="flex items-center gap-2">
                        <Avatar className="w-10 h-10">
                            <AvatarImage src="https://avatars.githubusercontent.com/u/68699314?v=4" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                            <span className="text-gray-600 text-sm italic">
                                Criado por: Geferson Holdorf
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
                <form onSubmit={form.handleSubmit(handleUpdateKnowledge)}>
                    <div className="px-4 bg-white">
                        {edit ? (
                            <>
                                <Input disabled={!edit} {...form.register("problem")} />
                                <span className="text-sm text-red-500">
                                    {form.formState.errors.problem?.message}
                                </span>
                            </>
                        ) : (
                            <h3 className="text-2xl font-bold">{knowledge.problem}</h3>
                        )}
                    </div>
                    <div className="bg-white p-2">
                        <Separator />
                    </div>
                    <div className="h-full flex flex-col justify-between">
                        <div className="px-4 bg-white">
                            {edit ? (
                                <>
                                    <Textarea
                                        className="h-80"
                                        {...form.register("soluction")}
                                    ></Textarea>
                                    <span className="text-sm text-red-500">
                                        {form.formState.errors.soluction?.message}
                                    </span>
                                </>
                            ) : (
                                <ScrollArea className="h-90">
                                    <p
                                        className="text-gray-700 text-sm"
                                        dangerouslySetInnerHTML={{
                                            __html: knowledge.soluction.replace(/\n/g, "<br />"),
                                        }}
                                    />
                                </ScrollArea>
                            )}
                        </div>
                        {edit && (
                            <div className="grid grid-cols-2 gap-4 p-2">
                                <Button onClick={handleSetEdit}>Cancelar</Button>
                                <Button
                                    className="bg-blue-900 hover:bg-blue-800"
                                    disabled={isPendingUpdate}
                                    type="submit"
                                >
                                    Editar
                                </Button>
                            </div>
                        )}
                    </div>
                </form>
            </div>
        </>
    );
}
