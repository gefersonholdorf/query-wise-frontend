import { LayoutDashboard, LibraryBig, MessageCircleWarning, Send } from "lucide-react";
import { CorrespondenceComponent } from "@/components/correspondence";
import { Dashboard } from "@/components/dashboard";
import { Footer } from "@/components/footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { KnowledgeBaseContent } from "@/contexts/knowledge/components/content";
import { KnowledgeBaseHeader } from "@/contexts/knowledge/components/header";
import { PendingMessagesComponent } from "@/contexts/pending-messages/components";

export function KnowledgeBase() {
    return (
        <div className="flex flex-col justify-between overflow-hidden bg-[url('/fundo.png')] bg-cover bg-no-repeat">
            <KnowledgeBaseHeader />

            <Tabs
                defaultValue="knowledge"
                className="h-160 w-full bg-transparent px-8"
            >
                <TabsList className="bg-transparent gap-8">
                    <TabsTrigger
                        value="dashboard"
                        className="transition-transform duration-200 transform hover:scale-[1.05]"
                    >
                        <Tooltip>
                            <TooltipTrigger>
                                <LayoutDashboard />
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Será exibido o Dashboard com todas as informações relevantes.</p>
                            </TooltipContent>
                        </Tooltip>
                        Dashboard
                    </TabsTrigger>
                    <TabsTrigger
                        value="knowledge"
                        className="transition-transform duration-200 transform hover:scale-[1.05]"
                    >
                        <Tooltip>
                            <TooltipTrigger>
                                <LibraryBig />
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Será exibido todas as tags e conhecimentos.</p>
                            </TooltipContent>
                        </Tooltip>
                        Base de Conhecimento
                    </TabsTrigger>
                    <TabsTrigger
                        value="pending-messages"
                        className="transition-transform duration-200 transform hover:scale-[1.05]"
                    >
                        <Tooltip>
                            <TooltipTrigger>
                                <MessageCircleWarning />
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Será exibido todas as mensagens enviadas que ainda não foram tratadas.</p>
                            </TooltipContent>
                        </Tooltip>
                        Mensagens Pendentes
                    </TabsTrigger>
                    <TabsTrigger
                        value="simular"
                        className="transition-transform duration-200 transform hover:scale-[1.05]"
                    >
                        <Tooltip>
                            <TooltipTrigger>
                                <Send />
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Aqui será possível realizar uma simulação de chat para ver a similaridades de mensagens com a base de conhecimento atual.</p>
                            </TooltipContent>
                        </Tooltip>
                        Simular Correspondência
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="dashboard" className="h-full">
                    <Dashboard />
                </TabsContent>
                <TabsContent value="knowledge" className="h-full">
                    <KnowledgeBaseContent />
                </TabsContent>
                <TabsContent value="simular" className="h-full">
                    <CorrespondenceComponent />
                </TabsContent>
                <TabsContent value="pending-messages" className="h-full">
                    <PendingMessagesComponent />
                </TabsContent>
            </Tabs>

            <Footer />
        </div>
    );
}
