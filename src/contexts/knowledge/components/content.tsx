import { BookCopy, BookOpenText, EllipsisVertical, Tags } from "lucide-react";
import { useState } from "react";
import { Tag } from "@/components/tag";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { tags } from "@/contexts/tags/http/fakeapi";
import { knowledges } from "../http/fakeapi";
import { KnowledgeBaseDetail } from "./detail";
import { KnowledgeBaseList } from "./list";

export function KnowledgeBaseContent() {
    const [tagSelected, setTagSelected] = useState(1);
    const [knowledgeSelected, setKnowledgeSelected] = useState<
        number | undefined
    >(undefined);

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
        <main className="h-full w-full border-1 grid grid-cols-5">
            <div className="border-r">
                <div className="flex gap-2 items-center justify-start border-b border-r p-2">
                    <div className="flex gap-2 items-center">
                        <Tags size={20} />
                        <span className="text-md font-semibold text-gray-800">Tags</span>
                    </div>
                </div>
                <div className="p-2">
                    {tags.map((tag) => [
                        <Tag
                            select={tagSelected === tag.id}
                            key={tag.id}
                            name={tag.name}
                            quantity={tag.quantity}
                            onClick={() => handleTagSelect(tag.id)}
                        />,
                    ])}
                </div>
            </div>
            <div className="col-span-2 flex-1 border-r flex flex-col gap-4">
                <div className="flex gap-2 items-center justify-start border-b border-r p-2">
                    <div className="flex gap-2 items-center">
                        <BookCopy size={20} />
                        <span className="text-md font-semibold text-gray-800">
                            Conhecimentos
                        </span>
                    </div>
                </div>

                <KnowledgeBaseList
                    knowledgeSelected={knowledgeSelected}
                    onKnowledgeSelect={handleKnowledgeSelect}
                    knowledges={knowledges.filter((k) => k.tagsId.includes(tagSelected))}
                />
            </div>
            <div className="col-span-2">
                <div className="flex gap-2 items-center justify-between border-b border-r px-2 p-2">
                    <div className="flex gap-2 items-center">
                        <BookOpenText size={20} />
                        <span className="text-md font-semibold text-gray-800">
                            Detalhe do Conhecimento
                        </span>
                    </div>
                    <div className="flex border-l px-2">
                        {knowledges.find((k) => k.id === knowledgeSelected) && (
                            <DropdownMenu>
                                <DropdownMenuTrigger>
                                    <EllipsisVertical size={20} className="cursor-pointer" />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuLabel>Ações</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>Editar</DropdownMenuItem>
                                    <DropdownMenuItem>Excluir</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>

                        )}
                    </div>
                </div>
                <KnowledgeBaseDetail
                    knowledge={knowledges.find((k) => k.id === knowledgeSelected) ?? null}
                />
            </div>
        </main>
    );
}
