import { ChatComponent } from "./chat";
import { CorrespondenceContent } from "./content";

export function CorrespondenceComponent() {
    return (
        <CorrespondenceContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center border w-full h-full">
                <div className="flex flex-col items-center text-center space-y-6">
                    <img
                        src="/main-correspondence.png"
                        width={400}
                        height={300}
                        alt="Ilustração de correspondência"
                        className="rounded-2xl shadow-md transition-transform duration-300 hover:scale-110"
                    />
                    <p className="text-lg text-gray-700 italic leading-relaxed max-w-xl">
                        Envie agora mesmo uma mensagem de simulação para o <span className="font-semibold">Bot QueryWise</span> e descubra se a sua dúvida já está registrada na nossa base de conhecimento.
                        É uma forma rápida e prática de verificar se já existe uma solução pronta para o seu problema,
                        economizando tempo e agilizando o atendimento.
                    </p>
                </div>
                <div className="border w-full h-full">
                    <ChatComponent />
                </div>
            </div>
        </CorrespondenceContent>
    )
}
