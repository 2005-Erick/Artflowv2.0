// src/pages/LegalPage.jsx
import React from "react";
import { Link } from "react-router-dom";

function LegalPage() {
  return (
    <div className="bg-[#f4f4f9] bg-[radial-gradient(circle_at_top_left,rgba(0,245,218,0.15),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,210,35,0.15),transparent_35%)]">
      <div className="w-full flex justify-center pt-10 pb-2">
        <Link to="/">
          <img
            src="/flowlogo-nv.png"
            alt="ArtFlow Logo"
            className="h-16 w-auto mx-auto hover:scale-105 transition-transform duration-200"
          />
        </Link>
      </div>
      <main className="container mx-auto max-w-3xl px-4 pt-8 pb-20">
        <h1 className="text-4xl font-bold text-gray-800 mb-2 text-center">
          Termos e Políticas do ArtFlow
        </h1>
        <p className="text-base text-gray-500 mb-12 text-center">
          Última atualização: 13 de junho de 2025
        </p>

        <section id="termos" className="mb-10">
          <h2 className="text-3xl font-semibold text-gray-800 mb-5 pb-2 border-b border-gray-200">
            1. Termos de Serviço
          </h2>
          <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
            <p>
              Ao acessar ou usar a plataforma ArtFlow, você concorda em cumprir
              e se vincular a estes Termos de Serviço. Se você não concordar com
              estes termos, não deverá acessar ou usar nossos serviços. Nós nos
              reservamos o direito de alterar estes termos a qualquer momento.
            </p>
            <p>
              Você é o único responsável por todo o conteúdo que postar,
              incluindo imagens, áudios, textos e outros dados. Você concede ao
              ArtFlow uma licença não exclusiva, mundial, isenta de royalties
              para usar, distribuir, reproduzir e exibir publicamente tal
              conteúdo na nossa plataforma. Você não deve postar conteúdo que
              seja ilegal, ofensivo, difamatório ou que infrinja os direitos de
              propriedade intelectual de terceiros.
            </p>
          </div>
        </section>

        <section id="privacidade" className="mb-10">
          <h2 className="text-3xl font-semibold text-gray-800 mb-5 pb-2 border-b border-gray-200">
            2. Política de Privacidade
          </h2>
          <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
            <p>
              Nossa Política de Privacidade descreve como coletamos, usamos e
              compartilhamos suas informações pessoais. Ao usar nossos serviços,
              você concorda com a coleta e uso de informações de acordo com esta
              política.
            </p>
            <ul className="list-disc list-inside space-y-4">
              <li>
                <strong>Coleta de Dados:</strong> Coletamos informações que você
                nos fornece diretamente, como seu nome de usuário, e-mail e
                senha ao se cadastrar. Também coletamos informações sobre sua
                atividade na plataforma.
              </li>
              <li>
                <strong>Uso de Dados:</strong> Usamos suas informações para
                operar e manter a plataforma, para nos comunicarmos com você e
                para personalizar sua experiência. Não compartilharemos suas
                informações pessoais com terceiros sem seu consentimento, exceto
                conforme exigido por lei.
              </li>
              <li>
                <strong>Segurança:</strong> A segurança de seus dados é
                importante para nós, mas lembre-se que nenhum método de
                transmissão pela Internet ou método de armazenamento eletrônico
                é 100% seguro.
              </li>
            </ul>
          </div>
        </section>

        <section id="diretrizes" className="mb-10">
          <h2 className="text-3xl font-semibold text-gray-800 mb-5 pb-2 border-b border-gray-200">
            3. Diretrizes da Comunidade
          </h2>
          <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
            <p>
              O ArtFlow é uma comunidade para artistas e amantes da arte.
              Esperamos que todos os membros tratem uns aos outros com respeito
              e cortesia. As seguintes diretrizes se aplicam a todo o conteúdo e
              interações na plataforma:
            </p>
            <ul className="list-disc list-inside space-y-4">
              <li>
                <strong>Respeito Mútuo:</strong> Não são tolerados discursos de
                ódio, assédio, bullying ou qualquer forma de discriminação.
              </li>
              <li>
                <strong>Propriedade Intelectual:</strong> Poste apenas conteúdo
                que você criou ou que tem permissão para usar. Não infrinja os
                direitos autorais, marcas registradas ou outros direitos de
                propriedade intelectual de terceiros.
              </li>
              <li>
                <strong>Conteúdo Apropriado:</strong> Conteúdo explícito,
                violento ou ilegal é estritamente proibido.
              </li>
            </ul>
            <p>
              Violações destas diretrizes podem resultar na remoção do conteúdo,
              suspensão temporária ou banimento permanente da sua conta.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default LegalPage;
