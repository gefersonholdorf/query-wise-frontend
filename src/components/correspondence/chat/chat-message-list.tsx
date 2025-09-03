import { ScrollArea } from "@/components/ui/scroll-area";
import type { Message } from ".";
import { ChatMessage } from "./chat-message";
import "dayjs/locale/pt-br";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);
dayjs.locale("pt-br");

export interface ChatMessageListProps {
    messages: Message[];
}

export function ChatMessageList({ messages }: ChatMessageListProps) {
    return (
        <main className="h-full w-full flex flex-col justify-end border p-2">
            <ScrollArea className="h-112 w-full p-3">
                <div className="text-center">
                    <span className="text-sm text-gray-600 italic">{dayjs(new Date()).format(
                        "DD/MM/YYYY  HH:mm:ss",
                    )}</span>
                </div>
                {messages?.map((message) => {
                    if (message.type === "bot") {
                        return (
                            <div key={message.id} className="w-full mt-2">
                                <ChatMessage message={message.message} />
                            </div>
                        );
                    }
                    return (
                        <div key={message.id} className="w-full flex justify-end mt-2">
                            <ChatMessage
                                message={message.message}
                                avatarPosition="right"
                            />
                        </div>
                    );
                })}
            </ScrollArea>
        </main >
    );
}
