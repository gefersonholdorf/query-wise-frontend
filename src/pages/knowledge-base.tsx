import { Footer } from "@/components/footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { KnowledgeBaseContent } from "@/contexts/knowledge/components/content";
import { KnowledgeBaseHeader } from "@/contexts/knowledge/components/header";

export function KnowledgeBase() {
    return (
        <div className="flex flex-col justify-between overflow-hidden bg-[url('/fundo.png')] bg-cover bg-no-repeat">
            <KnowledgeBaseHeader />

            <Tabs defaultValue="knowledge" className="h-160 w-full bg-transparent px-8">
                <TabsList className="bg-transparent gap-4">
                    <TabsTrigger value="dashboard" className="transition-transform duration-200 transform hover:scale-[1.05]">Dashboard</TabsTrigger>
                    <TabsTrigger value="knowledge" className="transition-transform duration-200 transform hover:scale-[1.05]">Base de Conhecimento</TabsTrigger>
                    <TabsTrigger value="simular" className="transition-transform duration-200 transform hover:scale-[1.05]">Simular Correspondência</TabsTrigger>
                </TabsList>
                <TabsContent value="dashboard" className="h-full">
                    Make changes to your account here.
                </TabsContent>
                <TabsContent value="knowledge" className="h-full">
                    <KnowledgeBaseContent />
                </TabsContent>
            </Tabs>

            <Footer />
        </div>
    );
}
