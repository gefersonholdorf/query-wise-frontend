import type { ReactNode } from "react"

export interface ContentProps {
    children: ReactNode
}

export function Content({ children }: ContentProps) {
    return (
        <main className="h-full w-full border flex flex-col gap-4 bg-gray-50 rounded-lg drop-shadow-[0_-4px_6px_rgba(0,0,0,0.1)] bg-[url('/fundo.png')] p-4">
            {children}
        </main>
    )
}