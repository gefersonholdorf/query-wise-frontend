import relativeTime from "dayjs/plugin/relativeTime";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import type { Knowledge } from "../http/fakeapi";
import "dayjs/locale/pt-br";
import dayjs from "dayjs";

dayjs.extend(relativeTime);
dayjs.locale("pt-br");

interface KnowledgeBaseDetailProps {
    knowledge: Knowledge | null;
}

export function KnowledgeBaseDetail({ knowledge }: KnowledgeBaseDetailProps) {
    const { question, answer, createdAt } = knowledge ?? {};

    if (!knowledge) {
        return <div>Teste</div>;
    }

    return (
        <div className="flex flex-col gap-2">
            <div className="flex justify-between p-4">
                <div className="flex items-center gap-2">
                    <Avatar className="w-10 h-10">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                        <span className="text-gray-600 text-sm italic">
                            Criado por: Suporte Lusati
                        </span>
                        <span className="text-gray-600 text-sm italic">Suporte</span>
                    </div>
                </div>
                <span className="text-sm text-gray-600">
                    {dayjs(createdAt).format("DD [de] MMMM [de] YYYY  HH:mm:ss")}
                </span>
            </div>
            <div className="px-4">
                <h1 className="text-2xl font-bold">{question}</h1>
            </div>
            <Separator />
            <div className="px-4">
                <span className="text-sm text-gray-600">{answer}</span>
            </div>
        </div>
    );
}
