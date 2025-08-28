import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { KnowledgeBaseContent } from "@/contexts/knowledge/components/content";
import { KnowledgeBaseHeader } from "@/contexts/knowledge/components/header";

export function KnowledgeBase() {
    return (
        <div className="relative h-screen max-h-screen flex flex-col overflow-hidden">
            <div className="absolute inset-0 bg-[url('/fundo.png')] bg-no-repeat bg-center bg-cover scale-x-[-1]" />
            <div className="relative flex flex-col h-full">
                <KnowledgeBaseHeader />

                <Tabs defaultValue="account" className="flex-1 w-full bg-transparent px-8">
                    <TabsList className="bg-transparent gap-4">
                        <TabsTrigger value="dashboard" className="transition-transform duration-200 transform hover:scale-[1.05]">Dashboard</TabsTrigger>
                        <TabsTrigger value="knowledge" className="transition-transform duration-200 transform hover:scale-[1.05]">Base de Conhecimento</TabsTrigger>
                    </TabsList>
                    <TabsContent value="dashboard" className="h-full">
                        Make changes to your account here.
                    </TabsContent>
                    <TabsContent value="knowledge" className="h-full">
                        <KnowledgeBaseContent />
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}
