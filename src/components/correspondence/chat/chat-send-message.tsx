import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod/v4";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { generateUniqueId } from "@/helpers/generate-unique-id";
import type { Message } from ".";

export interface ChatSendMessageProps {
    onSetMessages: (message: Message) => void;
    isPending: boolean;
}

const messageFormSchema = z.object({
    message: z.string(),
});

type MessageFormSchema = z.infer<typeof messageFormSchema>;

export function ChatSendMessage({
    onSetMessages,
    isPending,
}: ChatSendMessageProps) {
    const form = useForm<MessageFormSchema>({
        resolver: zodResolver(messageFormSchema),
        defaultValues: {
            message: "",
        },
    });

    function handleMessageSubmit(data: MessageFormSchema) {
        onSetMessages({
            id: generateUniqueId(),
            message: data.message,
            type: "human",
        });

        form.reset();
    }

    return (
        <form onSubmit={form.handleSubmit(handleMessageSubmit)}>
            <div className="w-full flex gap-2 p-2 border-t-2">
                <Input
                    className="border-none bg-gray-100 hover:outline-blue-500"
                    placeholder="Digite sua mensagem..."
                    {...form.register("message")}
                    disabled={isPending}
                />
                <Button
                    className="bg-blue-800 hover:bg-blue-700"
                    type="submit"
                    disabled={isPending}
                >
                    <Send />
                </Button>
            </div>
        </form>
    );
}
