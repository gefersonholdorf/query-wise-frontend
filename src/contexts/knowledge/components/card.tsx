import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/pt-br";
import type { ComponentProps } from "react";
import { tv } from "tailwind-variants";
import { Badge } from "@/components/ui/badge";
import { Card, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

dayjs.extend(relativeTime);
dayjs.locale("pt-br");

const knowledgeSelect = tv({
    base: "p-4 bg-gray-50 hover:bg-gray-100 cursor-pointer transition-transform duration-200 transform hover:scale-[1.02]",
    variants: {
        select: {
            true: "scale-[1.02] bg-blue-50 border-blue-200",
            false: "",
        },
    },
});

interface KnowledgeBaseCardProps extends ComponentProps<"div"> {
    problem: string;
    soluction: string;
    createdAt: Date;
    tags: {
        id: number;
        name: string;
    }[];
    isSelect: boolean;
}

function truncate(text: string, maxLength: number) {
    if (text.length <= maxLength) return text;
    return `${text.slice(0, maxLength)}...`;
}

export function KnowledgeBaseCard({
    problem,
    soluction,
    createdAt,
    tags,
    isSelect,
    ...props
}: KnowledgeBaseCardProps) {
    return (
        <Card
            className={cn(knowledgeSelect({ select: isSelect }), props.className)}
            {...props}
        >
            <div className="flex justify-between items-center">
                <CardTitle className="text-lg font-medium">
                    {truncate(problem, 50)}
                </CardTitle>

                <span className="text-sm">{dayjs(createdAt).fromNow()}</span>
            </div>
            <div>
                <span className="text-sm text-gray-600">
                    {truncate(soluction, 120)}
                </span>
            </div>
            <div className="flex gap-2">
                {tags.length > 0 &&
                    tags.map((tag) => {
                        return <Badge key={tag.id}>
                            {tag.name}
                        </Badge>;
                    })}
            </div>
        </Card>
    );
}
