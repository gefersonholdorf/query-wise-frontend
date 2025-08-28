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
import { useCreateTag } from "../http/use-create-tag";

const createTagSchema = z.object({
    name: z.string().min(1, "Obrigatório preencher o campo nome."),
});

type CreateTagSchema = z.infer<typeof createTagSchema>;

export function CreateTag() {
    const [open, setOpen] = useState(false);
    const { isPending, mutateAsync: createTag } = useCreateTag();

    const form = useForm<CreateTagSchema>({
        resolver: zodResolver(createTagSchema),
        defaultValues: {
            name: "",
        },
    });

    async function handleSubmit(data: CreateTagSchema) {
        const response = await createTag(data);

        if (!response.tagId) {
            console.log("Erro");
            return;
        }

        setOpen(false);
        toast.success("Tag adicionada com sucesso!");
        form.reset();
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button>Criar nova Tag</Button>
            </DialogTrigger>
            <DialogContent>
                <form
                    onSubmit={form.handleSubmit(handleSubmit)}
                    className="flex flex-col gap-4"
                >
                    <DialogHeader>
                        <DialogTitle>Criar nova Tag</DialogTitle>
                        <DialogDescription>
                            Informe o nome da Tag que será adicionada.
                        </DialogDescription>
                    </DialogHeader>
                    <div>
                        <span className="text-sm text-gray-600">Nome:</span>
                        <Input
                            placeholder="Informe o nome da tag..."
                            {...form.register("name")}
                        />
                        <span className="text-sm text-red-500">
                            {form.formState.errors.name?.message}
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
