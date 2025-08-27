import { zodResolver } from "@hookform/resolvers/zod";
import { DialogClose } from "@radix-ui/react-dialog";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod/v4";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useCreateKnowledge } from "../http/useCreateKnowledge";

const createKnowledgeSchema = z.object({
    problem: z.string().min(1, "Obrigatório preencher o campo problema."),
    soluction: z.string().min(3, "Obrigatório preencher o campo solução."),
});

type CreateKnowledgeSchema = z.infer<typeof createKnowledgeSchema>;

export function KnowledgeBaseCreate() {
    const [open, setOpen] = useState(false);
    const { isPending, mutateAsync: createKnowledge } = useCreateKnowledge();

    const form = useForm<CreateKnowledgeSchema>({
        resolver: zodResolver(createKnowledgeSchema),
        defaultValues: {
            problem: "",
            soluction: "",
        },
    });

    async function handleSubmit(data: CreateKnowledgeSchema) {
        console.log(data);
        const response = await createKnowledge(data);

        if (!response.knowledgeId) {
            console.log("Erro");
            return;
        }

        setOpen(false);
        toast.success("Conhecimento adicionado com sucesso!");
        form.reset();
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button>Criar novo Conhecimento</Button>
            </DialogTrigger>
            <DialogContent>
                <form
                    onSubmit={form.handleSubmit(handleSubmit)}
                    className="flex flex-col gap-4"
                >
                    <DialogHeader>
                        <DialogTitle>Criar novo Conhecimento</DialogTitle>
                        <DialogDescription>
                            Informe o problema juntamente com a solução do problema.
                        </DialogDescription>
                    </DialogHeader>
                    <div>
                        <span className="text-sm text-gray-600">Problema:</span>
                        <Input
                            placeholder="Informe o problema..."
                            {...form.register("problem")}
                        />
                        <span className="text-sm text-red-500">
                            {form.formState.errors.problem?.message}
                        </span>
                    </div>
                    <div>
                        <span className="text-sm text-gray-600">Solução:</span>
                        <Textarea
                            placeholder="Informe a solução..."
                            {...form.register("soluction")}
                        />
                        <span className="text-sm text-red-500">
                            {form.formState.errors.soluction?.message}
                        </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <DialogClose className="w-full" asChild>
                            <Button variant={"destructive"}>Cancelar</Button>
                        </DialogClose>
                        <Button type="submit" disabled={isPending}>
                            {isPending ? "Criando" : "Criar"}
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
}
