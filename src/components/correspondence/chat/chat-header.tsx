import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function ChatHeader() {
    return (
        <header>
            <div className="flex gap-2 items-center p-2 border-b-2 bg-[url('./fundo.png')] bg-cover bg-no-repeat">
                <Avatar className="w-12 h-12">
                    <AvatarImage src="https://avatars.githubusercontent.com/dependabot" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                    <span className="text-lg font-medium text-gray-800">Bot QueryWise</span>
                    <span className="text-sm text-gray-600">online</span>
                </div>
            </div>

        </header>
    )
}