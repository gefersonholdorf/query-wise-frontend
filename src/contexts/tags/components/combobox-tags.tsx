import { Check, ChevronsUpDown, Tags } from "lucide-react";
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import type { TagSummary } from "@/contexts/knowledge/components/create-knowledge";
import { cn } from "@/lib/utils";
import { useFetchTags } from "../http/use-fetch-tags";

interface ComboboxTagsProps {
    onAddTagSelected: (tag: TagSummary) => void;
    tagsSelected: TagSummary[];
}

export function ComboboxTags({ onAddTagSelected, tagsSelected }: ComboboxTagsProps) {
    const [open, setOpen] = React.useState(false);
    const [value, _] = React.useState("");

    const { data } = useFetchTags();

    console.log(tagsSelected)

    const tags = data?.data
        .map(tag => ({ id: tag.id, name: tag.name }))
        .filter(tag => !tagsSelected.some(selected => selected.id === tag.id)) ?? [];

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-full justify-between"
                >
                    {value ? (
                        tags?.find((tag) => tag.name === value)?.name
                    ) : (
                        <span className="text-muted-foreground text-sm font-normal">
                            Selecione as tags...
                        </span>
                    )}
                    <ChevronsUpDown className="opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0">
                <Command>
                    <CommandInput placeholder="Procure por uma tag..." className="h-9" />
                    <CommandList>
                        <CommandEmpty>Nenhuma tag encontrada.</CommandEmpty>
                        <CommandGroup>
                            {tags?.map((tag) => (
                                <CommandItem
                                    key={tag.name}
                                    value={tag.name}
                                    onSelect={() => {
                                        onAddTagSelected(tag);
                                        setOpen(false);
                                    }}
                                >
                                    <Tags />
                                    {tag.name}
                                    <Check
                                        className={cn(
                                            "ml-auto",
                                            value === tag.name ? "opacity-100" : "opacity-0",
                                        )}
                                    />
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
}
