import { useEffect, useState } from "react";
import { Tag } from "@/components/tag";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";
import { useFetchTags } from "@/contexts/tags/http/use-fetch-tags";
import { useFetchKnowledges } from "../http/use-fetch-knowledges";
import { KnowledgeBaseDetail } from "./detail";
import { KnowledgeBaseList } from "./list";

export function KnowledgeBaseContent() {
    const [knowledgeSelected, setKnowledgeSelected] = useState<
        number | undefined
    >(undefined);
    const [search, setSearch] = useState("");

    const { data: tags } = useFetchTags();
    const { data: knowledges, isLoading } = useFetchKnowledges(search);

    const [tagSelected, setTagSelected] = useState(() => tags?.data[0]?.id);

    useEffect(() => {
        setTagSelected(tags?.data[0]?.id)
    }, [tags])

    function handleSetSearch(search: string) {
        setSearch(search);
    }

    function handleTagSelect(tagName: number) {
        setTagSelected(tagName);
        setKnowledgeSelected(undefined);
    }

    function handleKnowledgeSelect(knowledgeId: number) {
        if (knowledgeId === knowledgeSelected) {
            setKnowledgeSelected(undefined);
            return;
        }
        setKnowledgeSelected(knowledgeId);
    }

    return (
        <main className="h-full w-full border grid grid-cols-5 bg-transparent rounded-lg drop-shadow-[0_-4px_6px_rgba(0,0,0,0.1)] bg-[url('/fundo.png')] ">
            <div className="border-r">
                <ScrollArea className="h-145">
                    <div className="p-3">
                        {tags
                            ? tags.data.map((tag) => [
                                <Tag
                                    select={tagSelected === tag.id}
                                    key={tag.id}
                                    name={tag.name}
                                    quantity={tag.quantity}
                                    onClick={() => handleTagSelect(tag.id)}
                                />,
                            ])
                            : Array.from({ length: 12 }, (_, i) => (
                                <Skeleton key={i.toString()} className="h-10 w-full mt-2" />
                            ))}
                    </div>
                </ScrollArea>
            </div>
            <div className="col-span-2 flex-1 border-r flex flex-col gap-4 bg-transparent">
                <KnowledgeBaseList
                    isLoading={isLoading}
                    onSearchFilter={handleSetSearch}
                    knowledgeSelected={knowledgeSelected}
                    onKnowledgeSelect={handleKnowledgeSelect}
                    knowledges={
                        knowledges?.data.filter((k) =>
                            k.tags.some((t) => t.id === tagSelected),
                        ) ?? []
                    }
                />
            </div>
            <div className="col-span-2">
                <KnowledgeBaseDetail
                    knowledge={
                        knowledges?.data.find((k) => k.id === knowledgeSelected) ?? null
                    }
                />
            </div>
        </main>
    );
}
