import { useState } from "react";
import { Content } from "./content";
import { DataList, type Message } from "./data-list";
import { Filtering } from "./filtering";
import { Paginator } from "./paginator";

const items: Message[] = [
    {
        id: 1,
        isAttendedByBot: true,
        message: "Não consigo acessar meu perfil",
        status: "PENDENTE",
        sendBy: "Ana Silva",
        number: "5547999123456",
        sendIn: new Date('2025-09-03T10:15:00'),
        botResponse: 'Bot respondendo',
    },
    {
        id: 2,
        isAttendedByBot: false,
        message: "Erro ao tentar efetuar pagamento",
        status: "ERRO",
        sendBy: "Carlos Pereira",
        number: "5547988765432",
        sendIn: new Date('2025-09-03T11:20:00'),
        botResponse: 'Bot respondendo',
    },
    {
        id: 3,
        isAttendedByBot: true,
        message: "Não recebi o e-mail de confirmação",
        status: "CONCLUIDO",
        sendBy: "Mariana Costa",
        number: "5547999345678",
        sendIn: new Date('2025-09-03T12:05:00'),
        botResponse: 'Bot respondendo',
    },
    {
        id: 4,
        isAttendedByBot: false,
        message: "O app trava quando abro a seção de histórico",
        status: "PENDENTE",
        sendBy: "Felipe Rocha",
        number: "5547999876543",
        sendIn: new Date('2025-09-03T12:45:00'),
        botResponse: 'Bot respondendo',
    },
    {
        id: 5,
        isAttendedByBot: true,
        message: "Não consigo alterar minha senha",
        status: "CONCLUIDO",
        sendBy: "Bruna Lima",
        number: "5547999567890",
        sendIn: new Date('2025-09-03T13:30:00'),
        botResponse: null,
    },
    {
        id: 6,
        isAttendedByBot: false,
        message: "O sistema apresenta erro 500 ao salvar dados",
        status: "ERRO",
        sendBy: "Lucas Martins",
        number: "5547999234567",
        sendIn: new Date('2025-09-03T14:00:00'),
        botResponse: null,
    },
    {
        id: 7,
        isAttendedByBot: true,
        message: "Não recebi o cashback da compra",
        status: "CONCLUIDO",
        sendBy: "Camila Fernandes",
        number: "5547999871234",
        sendIn: new Date('2025-09-03T14:25:00'),
        botResponse: null,
    },
    {
        id: 8,
        isAttendedByBot: false,
        message: "O botão de suporte não funciona no app",
        status: "PENDENTE",
        sendBy: "Pedro Albuquerque",
        number: "5547999456789",
        sendIn: new Date('2025-09-03T15:10:00'),
        botResponse: null,
    },
    {
        id: 9,
        isAttendedByBot: true,
        message: "Erro ao atualizar informações do cartão",
        status: "CONCLUIDO",
        sendBy: "Isabela Souza",
        number: "5547999123987",
        sendIn: new Date('2025-09-03T15:50:00'),
        botResponse: null,
    },
    {
        id: 10,
        isAttendedByBot: false,
        message: "Não consigo ver minhas faturas",
        status: "PENDENTE",
        sendBy: "Rafael Gomes",
        number: "5547999765432",
        sendIn: new Date('2025-09-03T16:30:00'),
        botResponse: null,
    }
];

export const PendindMessages = {
    Content: Content,
    DataList: DataList,
    Filtering: Filtering,
    Paginator: Paginator
}

export function PendingMessagesComponent() {
    const [page, setPage] = useState(1);

    function handleSetPage(newPage: number) {
        setPage(newPage);
    }

    return (
        <PendindMessages.Content>
            <PendindMessages.Filtering />
            <PendindMessages.DataList items={items} />
            <PendindMessages.Paginator page={page} totalPages={10} onPageChange={handleSetPage} />
        </PendindMessages.Content>
    )
}