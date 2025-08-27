import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import type { Knowledge } from "../http/fakeapi";
import { KnowledgeBaseCard } from "./card";

interface KnowledgeBaseListProps {
    knowledgeSelected?: number;
    onKnowledgeSelect?: (knowledgeId: number) => void;
    knowledges: Knowledge[];
}

export function KnowledgeBaseList({
    knowledgeSelected,
    onKnowledgeSelect,
    knowledges,
}: KnowledgeBaseListProps) {
    return (
        <div className="max-h-full border-b flex flex-col gap-4 px-4">
            <div>
                <Input placeholder="Search" />
            </div>
            <ScrollArea className="h-150 flex flex-col gap-4">
                <div className="p-3 flex flex-col gap-2">
                    {knowledges.map((knowledge) => (
                        <KnowledgeBaseCard
                            isSelect={knowledgeSelected === knowledge.id}
                            key={knowledge.id}
                            problem={knowledge.question}
                            soluction={knowledge.answer}
                            createdAt={new Date(knowledge.createdAt)}
                            onClick={() => onKnowledgeSelect?.(knowledge.id)}
                        />
                    ))}
                </div>
            </ScrollArea>
        </div>
    );
}
