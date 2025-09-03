import { tv } from "tailwind-variants";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const ChatMessageVariant = tv({
    base: "p-2",
    variants: {
        type: {
            bot: "bg-gray-100 rounded-tl-lg rounded-tr-lg rounded-br-lg",
            human: "bg-blue-900 text-white rounded-tl-lg rounded-tr-lg rounded-bl-lg",
        },
    },
});

export interface ChatMessageProps {
    message: string;
    avatarPosition?: "left" | "right";
}

export function ChatMessage({
    message,
    avatarPosition = "left",
}: ChatMessageProps) {
    const avatar = (
        <Avatar className="w-8 h-8">
            {avatarPosition === 'left' && <AvatarImage src="https://avatars.githubusercontent.com/dependabot" />}
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    );

    const messageBubble = (
        <div className={ChatMessageVariant({ type: avatarPosition === 'left' ? 'bot' : 'human' })}>
            {message.length === 0 ? (
                <div className="flex gap-1 items-end">
                    <span className="w-[0.4rem] h-[0.4rem] bg-gray-500 rounded-full animate-bounce"></span>
                    <span className="w-[0.4rem] h-[0.4rem] bg-gray-500 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-[0.4rem] h-[0.4rem] bg-gray-500 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                </div>
            ) : (
                <span className="text-sm">{message}</span>
            )}
        </div>
    );

    return (
        <div
            className={`flex gap-2 items-end ${avatarPosition === "right" ? "justify-end" : "justify-start"
                }`}
        >
            {avatarPosition === "left" && avatar}
            {messageBubble}
            {avatarPosition === "right" && avatar}
        </div>
    );
}
