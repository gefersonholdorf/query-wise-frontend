import { MonitorCog } from "lucide-react";
import type { ComponentProps } from "react";
import { tv } from "tailwind-variants";
import { cn } from "@/lib/utils";

const TagSelected = tv({
    base: 'flex justify-between p-2 rounded-lg',
    variants: {
        select: {
            true: 'bg-blue-900 border border-blue-950 text-white',
            false: 'bg-gray-100 text-gray-950 hover:bg-gray-700 hover:text-white cursor-pointer'
        }
    }
})

export interface TagProps extends ComponentProps<'div'> {
    select: boolean;
    name: string;
    quantity: number;
}

export function Tag({ select, name, quantity, ...props }: TagProps) {
    return (
        <div className={cn(TagSelected({ select }), props.className)} {...props}>
            <div className="flex gap-2 items-center">
                <MonitorCog size={15} />
                <p className="text-sm">{name}</p>
            </div>
            <p className="text-sm">{quantity}</p>
        </div>
    );
}
