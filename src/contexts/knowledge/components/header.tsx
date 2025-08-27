import { LibraryBig } from "lucide-react";
import { Button } from "@/components/ui/button";

export function KnowledgeBaseHeader() {
    return (
        <header className="flex flex-col gap-4 p-8 w-full">
            <div className="flex items-center gap-2">
                <LibraryBig />
                <span>Base de Conhecimento</span>
            </div>
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold">Seja Bem vindo(a) ao QueryVise</h1>
                <p>Sua central de conhecimento para consultas e suporte eficiente.</p>
            </div>
            <div className="flex gap-2">
                <Button>Criar novo Conhecimento</Button>
                <Button>Criar nova Tag</Button>
            </div>
        </header>
    );
}
