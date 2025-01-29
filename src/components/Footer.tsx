import { Instagram, Youtube, MessageCircle } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">FitApp</h3>
            <p className="text-gray-400">
              Transforme seu corpo e sua vida com treinos personalizados.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Links Úteis</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Blog Fitness</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contato</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Privacidade</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Youtube className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Receba dicas e novidades fitness.
            </p>
            <input
              type="email"
              placeholder="Seu email"
              className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-primary"
            />
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 FitApp. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};