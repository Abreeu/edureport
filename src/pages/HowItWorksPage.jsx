const HowItWorksPage = () => {
    return (
        <>
            <section className="pt-28 w-full mx-auto">
                <h1 className="flex justify-center mb-6 text-blue-600 text-3xl font-bold"> Como Funciona </h1>

                <p className="text-center font-semibold text-gray-700 text-lg mb-16 max-w-3xl mx-auto">
                    Nossa plataforma foi criada para facilitar a denúncia de problemas escolares, garantir transparência no acompanhamento e promover melhorias reais na comunidade educacional. Veja como você pode participar dessa transformação em três passos simples:
                </p>

                <div className="container mx-auto px-4 text-center">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-6 bg-white rounded-xl shadow-lg transform hover:scale-105 transition duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-500 mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
                            </svg>
                            <h4 className="text-xl font-semibold text-gray-700 mb-2">1. Registre a Denúncia</h4>
                            <p className="text-gray-600">
                                Descreva o problema com clareza, incluindo o que aconteceu, onde e quando. Você pode anexar fotos, vídeos ou documentos que ajudem a comprovar a situação. Se preferir, pode fazer isso de forma anônima.
                            </p>
                        </div>
                        <div className="p-6 bg-white rounded-xl shadow-lg transform hover:scale-105 transition duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-500 mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="7" width="20" height="15" rx="2" ry="2" />
                                <polyline points="17 2 12 7 7 2" />
                            </svg>
                            <h4 className="text-xl font-semibold text-gray-700 mb-2">2. Acompanhe o Status</h4>
                            <p className="text-gray-600">
                                Após o envio, você receberá um código para acompanhar o andamento da denúncia. Todas as etapas — desde o recebimento até a resolução — são atualizadas em tempo real, garantindo total transparência.
                            </p>
                        </div>
                        <div className="p-6 bg-white rounded-xl shadow-lg transform hover:scale-105 transition duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-purple-500 mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><path d="M14 2v6h6M10 15h4M10 19h4" />
                            </svg>
                            <h4 className="text-xl font-semibold text-gray-700 mb-2">3. Mude a sua Escola</h4>
                            <p className="text-gray-600">
                                Cada denúncia contribui para melhorias reais. Os dados ajudam gestores a tomar decisões mais eficazes, promovendo um ambiente escolar mais seguro, justo e acolhedor para todos.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HowItWorksPage     