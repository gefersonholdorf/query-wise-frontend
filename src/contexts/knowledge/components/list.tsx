import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod/v4";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";
import { KnowledgeBaseCard } from "./card";
import { CreateKnowledge } from "./create-knowledge";

export const formKnowledgeSchema = z.object({
    search: z.string(),
});

export type FormKnowledgeSchema = z.infer<typeof formKnowledgeSchema>;

export interface Knowledge {
    id: number;
    problem: string;
    soluction: string;
    createdAt: Date;
    tags: {
        id: number;
        name: string;
    }[];
}

interface KnowledgeBaseListProps {
    knowledgeSelected?: number;
    onKnowledgeSelect?: (knowledgeId: number) => void;
    knowledges: Knowledge[];
    onSearchFilter: (search: string) => void;
    isLoading: boolean;
}

export function KnowledgeBaseList({
    knowledgeSelected,
    onKnowledgeSelect,
    knowledges,
    onSearchFilter,
    isLoading,
}: KnowledgeBaseListProps) {
    const form = useForm<FormKnowledgeSchema>({
        resolver: zodResolver(formKnowledgeSchema),
        defaultValues: {
            search: "",
        },
    });

    function handleFilter(data: FormKnowledgeSchema) {
        onSearchFilter(data.search);
    }

    return (
        <div className="flex flex-col gap-4 px-4 mt-4 ">
            <form onSubmit={form.handleSubmit(handleFilter)} className="flex gap-2">
                <Input className="bg-white" placeholder="Search" {...form.register("search")} />
                <Button type="submit" className="bg-blue-900 hover:bg-blue-800">Pesquisar</Button>
            </form>
            {isLoading && (
                <>
                    <Skeleton className="w-full h-35" />
                    <Skeleton className="w-full h-35" />
                    <Skeleton className="w-full h-35" />
                </>
            )}
            {!isLoading && knowledges.length > 0 && (
                <ScrollArea className="h-130">
                    <div className="p-3 flex flex-col gap-2">
                        {knowledges.map((knowledge) => (
                            <KnowledgeBaseCard
                                isSelect={knowledgeSelected === knowledge.id}
                                key={knowledge.id}
                                problem={knowledge.problem}
                                soluction={knowledge.soluction}
                                tags={knowledge.tags}
                                createdAt={new Date(knowledge.createdAt)}
                                onClick={() => onKnowledgeSelect?.(knowledge.id)}
                            />
                        ))}
                    </div>
                </ScrollArea>
            )}

            {!isLoading && knowledges.length === 0 && (
                <div className="flex flex-col mt-4 items-center text-center text-gray-500">
                    <img
                        src="/empty-archive.png"
                        alt="Nenhum conhecimento"
                        className="w-48 h-48 mb-4"
                    />
                    <h2 className="text-3xl font-semibold text-gray-900">
                        Nenhum conhecimento encontrado
                    </h2>
                    <p className="mt-2 text-sm text-gray-700 mb-4">
                        Selecione uma tag com conhecimentos ou crie um novo conhecimento
                        para começar.
                    </p>
                    <CreateKnowledge />
                </div>
            )}
        </div>
    );
}
