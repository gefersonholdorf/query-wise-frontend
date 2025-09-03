import { useState } from "react";
import { useMatchKnowledge } from "@/contexts/knowledge/http/use-match-knowledge";
import { generateUniqueId } from "@/helpers/generate-unique-id";
import { ChatHeader } from "./chat-header";
import { ChatMessageList } from "./chat-message-list";
import { ChatSendMessage } from "./chat-send-message";

export interface Message {
    id: string;
    type: "bot" | "human";
    message: string;
}

export function ChatComponent() {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: generateUniqueId(),
            type: "bot",
            message:
                "Olá! 👋Seja bem-vindo ao QueryWise. Envie sua mensagem abaixo e o sistema irá realizar uma consulta por similaridade para verificar se já existe algum conhecimento registrado que possa te ajudar.",
        },
    ]);

    const { mutateAsync: matchKnowledge, isPending } = useMatchKnowledge();

    async function handleSetMessages(message: Message) {
        const messageResponseBot: Message = {
            id: generateUniqueId(),
            message: "",
            type: "bot",
        };

        console.log(message)
        console.log(message.message.length)

        setMessages([...messages, message, messageResponseBot]);

        const result = await matchKnowledge({
            message: message.message,
        });

        if (result.bestMatchs.length === 0) {
            const newMessageResponseBot: Message = {
                id: generateUniqueId(),
                message: 'Ainda não conseguimos identificar uma resposta exata na nossa base de conhecimento para sua mensagem. Como se trata de uma simulação, não haverá continuidade neste atendimento, mas em um cenário real nossa equipe estaria pronta para ajudar você.',
                type: "bot",
            };

            setMessages([...messages, message, newMessageResponseBot]);

            return
        }

        const matchCorrespondence = result.bestMatchs[0].soluction;

        const newMessageResponseBot: Message = {
            id: generateUniqueId(),
            message: matchCorrespondence,
            type: "bot",
        };

        setMessages([...messages, message, newMessageResponseBot]);
    }

    return (
        <div className="h-full flex flex-col justify-between">
            <ChatHeader />
            <ChatMessageList messages={messages} />
            <ChatSendMessage
                isPending={isPending}
                onSetMessages={handleSetMessages}
            />
        </div>
    );
}
