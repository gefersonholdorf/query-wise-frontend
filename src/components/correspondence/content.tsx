import type { ReactNode } from "react"

interface CorrespondenceContentProps {
    children: ReactNode
}

export function CorrespondenceContent({ children }: CorrespondenceContentProps) {
    return (
        <main className="h-full w-full border bg-gray-50 rounded-lg drop-shadow-[0_-4px_6px_rgba(0,0,0,0.1)] bg-[url('/fundo.png')]">
            {children}
        </main>
    )
}