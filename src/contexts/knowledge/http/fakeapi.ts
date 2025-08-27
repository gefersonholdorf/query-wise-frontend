export interface Knowledge {
	id: number;
	question: string;
	answer: string;
	tagsId: number[];
	createdAt: Date;
	updatedAt: Date;
}

export const knowledges: Knowledge[] = [
	{
		id: 1,
		question: "Como resetar minha senha?",
		answer:
			"Acesse o menu de configurações, clique em 'Segurança' e selecione 'Redefinir senha'.",
		tagsId: [1, 2, 3],
		createdAt: new Date("2025-08-01T10:15:00"),
		updatedAt: new Date("2025-08-01T10:15:00"),
	},
	{
		id: 2,
		question: "Onde encontro minhas faturas?",
		answer:
			"Suas faturas estão disponíveis no painel de usuário, na aba 'Financeiro'.",
		tagsId: [1, 3],
		createdAt: new Date("2025-08-02T09:00:00"),
		updatedAt: new Date("2025-08-02T09:00:00"),
	},
	{
		id: 3,
		question: "O sistema está fora do ar?",
		answer: "Verifique a página de status em status.minhaempresa.com.",
		tagsId: [2, 3],
		createdAt: new Date("2025-08-03T14:30:00"),
		updatedAt: new Date("2025-08-03T14:30:00"),
	},
	{
		id: 4,
		question: "Posso alterar meu e-mail de login?",
		answer:
			"Sim, vá em 'Perfil', clique em 'Editar' e altere o campo de e-mail.",
		tagsId: [2, 3],
		createdAt: new Date("2025-08-04T08:45:00"),
		updatedAt: new Date("2025-08-04T08:45:00"),
	},
	{
		id: 5,
		question: "Como faço o download do relatório anual?",
		answer:
			"Acesse a seção 'Relatórios', selecione o período e clique em 'Baixar PDF'.",
		tagsId: [1, 3],
		createdAt: new Date("2025-08-05T12:10:00"),
		updatedAt: new Date("2025-08-05T12:10:00"),
	},
	{
		id: 6,
		question: "Quais navegadores são suportados?",
		answer: "Nosso sistema é compatível com Chrome, Firefox, Edge e Safari.",
		tagsId: [2, 3],
		createdAt: new Date("2025-08-06T16:00:00"),
		updatedAt: new Date("2025-08-06T16:00:00"),
	},
	{
		id: 7,
		question: "O aplicativo tem versão mobile?",
		answer: "Sim, disponível para Android e iOS nas lojas oficiais.",
		tagsId: [1, 2, 3],
		createdAt: new Date("2025-08-07T11:20:00"),
		updatedAt: new Date("2025-08-07T11:20:00"),
	},
	{
		id: 8,
		question: "Como entrar em contato com o suporte?",
		answer:
			"Envie um e-mail para suporte@minhaempresa.com ou use o chat no portal.",
		tagsId: [2, 3],
		createdAt: new Date("2025-08-08T18:40:00"),
		updatedAt: new Date("2025-08-08T18:40:00"),
	},
	{
		id: 9,
		question: "O que fazer se esqueci meu usuário?",
		answer:
			"Use a opção 'Recuperar usuário' na tela de login e informe seu e-mail.",
		tagsId: [1, 3],
		createdAt: new Date("2025-08-09T07:30:00"),
		updatedAt: new Date("2025-08-09T07:30:00"),
	},
	{
		id: 10,
		question: "Como atualizar meus dados de pagamento?",
		answer:
			"No painel de usuário, vá em 'Financeiro' e clique em 'Atualizar forma de pagamento'.",
		tagsId: [1],
		createdAt: new Date("2025-08-10T15:55:00"),
		updatedAt: new Date("2025-08-10T15:55:00"),
	},
];
