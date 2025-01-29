import { Dumbbell, MessageSquare, Video, Activity } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Planos 100% Personalizados",
    description: "Questionário inicial para criar rotinas baseadas em seu biotipo e metas.",
    icon: Dumbbell,
  },
  {
    title: "Acesso a Treinadores",
    description: "Tire dúvidas via chat e receba ajustes em tempo real.",
    icon: MessageSquare,
  },
  {
    title: "Biblioteca de Exercícios",
    description: "Vídeos em HD, dicas de execução e variações para todos os níveis.",
    icon: Video,
  },
  {
    title: "Tecnologia Integrada",
    description: "Sincronize com wearables, analise métricas e evolua com relatórios semanais.",
    icon: Activity,
  },
];

export const Features = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Por Que Escolher Nosso App?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
              <CardHeader>
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};