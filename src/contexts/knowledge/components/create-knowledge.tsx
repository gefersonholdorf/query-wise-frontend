import { zodResolver } from "@hookform/resolvers/zod";
import { DialogClose } from "@radix-ui/react-dialog";
import { Tags, X } from "lucide-react";
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
import { ComboboxTags } from "@/contexts/tags/components/combobox-tags";
import { useCreateKnowledge } from "../http/use-create-knowledge";

const createKnowledgeSchema = z.object({
    problem: z.string().min(1, "Obrigatório preencher o campo problema."),
    soluction: z.string().min(3, "Obrigatório preencher o campo solução."),
});

type CreateKnowledgeSchema = z.infer<typeof createKnowledgeSchema>;

export interface TagSummary {
    id: number;
    name: string;
}

export function CreateKnowledge() {
    const [open, setOpen] = useState(false);
    const [tagError, setTagError] = useState(false)
    const { isPending, mutateAsync: createKnowledge } = useCreateKnowledge();

    const form = useForm<CreateKnowledgeSchema>({
        resolver: zodResolver(createKnowledgeSchema),
        defaultValues: {
            problem: "",
            soluction: "",
        },
    });

    const [tagsSelected, setTagsSelected] = useState<TagSummary[]>([]);

    function handleRemoveTagSelected(tagId: number) {
        const newTagsSelected = tagsSelected.filter((tag) => tag.id !== tagId);

        if (!newTagsSelected) {
            return;
        }

        setTagsSelected(newTagsSelected);
    }

    function handleAddTagSelected(tag: TagSummary) {
        setTagError(false)
        setTagsSelected([...tagsSelected, tag]);
    }

    async function handleSubmit(data: CreateKnowledgeSchema) {
        console.log(tagError)
        if (tagsSelected.length === 0) {
            setTagError(true)
            console.log(tagError)
            return
        }

        const tagsIds = tagsSelected.map((tag) => tag.id)

        const response = await createKnowledge({
            ...data,
            tags: tagsIds
        });

        if (!response.knowledgeId) {
            return;
        }

        setOpen(false);
        toast.success("Conhecimento adicionado com sucesso!");
        setTagsSelected([])
        form.reset();
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="bg-blue-900 hover:bg-blue-800">Criar novo Conhecimento</Button>
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
                    <div className="flex flex-col">
                        <span className="text-sm text-gray-600">Tags:</span>
                        <ComboboxTags onAddTagSelected={handleAddTagSelected} tagsSelected={tagsSelected} />
                        <span className="text-sm text-red-500">
                            {tagError && 'Obrigatório selecionar uma tag'}
                        </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {tagsSelected.length > 0 &&
                            tagsSelected.map((tag) => (
                                <div
                                    key={tag.id}
                                    className="inline-flex gap-2 items-center justify-center bg-blue-900 p-1 rounded-sm"
                                >
                                    <Tags size={15} className="text-white" />
                                    <span className="text-gray-50 text-sm">{tag.name}</span>
                                    <X
                                        size={15}
                                        className="text-white cursor-pointer"
                                        onClick={() => handleRemoveTagSelected(tag.id)}
                                    />
                                </div>
                            ))}
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <DialogClose className="w-full" asChild>
                            <Button variant={"destructive"}>Cancelar</Button>
                        </DialogClose>
                        <Button type="submit" disabled={isPending} className="bg-emerald-500 hover:bg-emerald-400">
                            {isPending ? "Criando" : "Criar"}
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog >
    );
}
