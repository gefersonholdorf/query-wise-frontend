import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";

interface PaginatorProps {
    page: number
    totalPages: number
    onPageChange: (page: number) => void
}

export function Paginator({ page, totalPages, onPageChange }: PaginatorProps) {
    const isFirst = page === 1
    const isLast = page === totalPages

    return (
        <div className="flex items-center justify-center gap-2">
            <ChevronsLeft
                className={`cursor-pointer ${isFirst ? "opacity-50 cursor-not-allowed" : ""}`}
                onClick={() => !isFirst && onPageChange(1)}
            />
            <ChevronLeft
                className={`cursor-pointer ${isFirst ? "opacity-50 cursor-not-allowed" : ""}`}
                onClick={() => !isFirst && onPageChange(page - 1)}
            />

            <span className="px-4 bg-blue-100 rounded-full">{page}</span>

            <ChevronRight
                className={`cursor-pointer ${isLast ? "opacity-50 cursor-not-allowed" : ""}`}
                onClick={() => !isLast && onPageChange(page + 1)}
            />
            <ChevronsRight
                className={`cursor-pointer ${isLast ? "opacity-50 cursor-not-allowed" : ""}`}
                onClick={() => !isLast && onPageChange(totalPages)}
            />
        </div>
    )
}
