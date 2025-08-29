/** biome-ignore-all lint/a11y/noSvgWithoutTitle: <explanation> */
export function Footer() {
    return (
        <footer className="h-25 w-full border-t bg-white mt-2">
            <div className="mx-auto max-w-7xl px-6 py-10 md:flex md:items-center md:justify-between">

                <div className="flex items-center justify-center md:justify-start">
                    <span className="text-sm text-gray-500">
                        © {new Date().getFullYear()} Desenvolvido por Geferson Holdorf
                    </span>
                </div>

                <div className="mt-6 flex justify-center space-x-6 md:mt-0 md:justify-end">
                    <a href="/about" className="text-sm text-gray-500 hover:text-gray-900">
                        Sobre
                    </a>
                    <a href="/services" className="text-sm text-gray-500 hover:text-gray-900">
                        Serviços
                    </a>
                    <a href="/contact" className="text-sm text-gray-500 hover:text-gray-900">
                        Contato
                    </a>
                    <a href="/privacy" className="text-sm text-gray-500 hover:text-gray-900">
                        Privacidade
                    </a>
                </div>

                <div className="mt-6 flex justify-center space-x-5 md:mt-0 md:ml-6">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5a3.5 3.5 0 0 1 3.8-3.8h2.7v3h-2c-.9 0-1.2.4-1.2 1.1V12H17l-.5 3h-2.7v7A10 10 0 0 0 22 12" />
                        </svg>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 0 0 1.88-2.38 8.56 8.56 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16 4a4.3 4.3 0 0 0-4.3 4.3c0 .34.03.67.1.98A12.2 12.2 0 0 1 3.16 5.1a4.3 4.3 0 0 0 1.33 5.73 4.26 4.26 0 0 1-1.95-.54v.05a4.3 4.3 0 0 0 3.44 4.2 4.3 4.3 0 0 1-1.95.07 4.3 4.3 0 0 0 4 3A8.6 8.6 0 0 1 2 19.54a12.14 12.14 0 0 0 6.6 1.94c7.9 0 12.2-6.54 12.2-12.2v-.56c.84-.6 1.6-1.4 2.2-2.3z" />
                        </svg>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M4.98 3.5C4.98 4.9 3.9 6 2.5 6S0 4.9 0 3.5 1.1 1 2.5 1s2.48 1.1 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-1 1.8-2.2 3.7-2.2 4 0 4.7 2.6 4.7 6V24h-4v-7.8c0-1.8 0-4.2-2.6-4.2-2.6 0-3 2-3 4v8h-4V8z" />
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    );
}
