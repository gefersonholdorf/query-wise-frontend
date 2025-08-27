import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { KnowledgeBaseContent } from "@/contexts/knowledge/components/content";
import { KnowledgeBaseHeader } from "@/contexts/knowledge/components/header";

export function KnowledgeBase() {
    return (
        <div className="h-screen max-h-screen flex flex-col">
            <KnowledgeBaseHeader />

            <Tabs defaultValue="account" className="flex-1 w-full bg-transparent px-8">
                <TabsList className="bg-transparent p-0">
                    <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
                    <TabsTrigger value="knowledge">Base de Conhecimento</TabsTrigger>
                </TabsList>
                <TabsContent value="dashboard" className="h-full">
                    Make changes to your account here.
                </TabsContent>
                <TabsContent value="knowledge" className="h-full">
                    <KnowledgeBaseContent />
                </TabsContent>
            </Tabs>
        </div>
    );
}
