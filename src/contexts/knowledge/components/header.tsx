import { LibraryBig } from "lucide-react";
import { CreateTag } from "@/contexts/tags/components/create-tag";
import { CreateKnowledge } from "./create-knowledge";

export function KnowledgeBaseHeader() {
    return (
        <header className="flex flex-col gap-4 p-8 w-full">
            <div className="flex items-center gap-2">
                <LibraryBig />
                <span>Base de Conhecimento</span>
            </div>
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold">Seja Bem vindo(a) ao QueryWise</h1>
                <p>Sua central de conhecimento para consultas e suporte eficiente.</p>
            </div>
            <div className="flex gap-2">
                <CreateKnowledge />
                <CreateTag />
            </div>
        </header>
    );
}
