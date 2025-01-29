import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const plans = [
  {
    name: "Free",
    price: "R$0",
    description: "Para começar sua jornada",
    features: ["3 treinos/semana", "1 avaliação física", "Exercícios básicos"],
  },
  {
    name: "Pro",
    price: "R$29,90",
    description: "O mais popular",
    features: ["Treinos ilimitados", "Plano nutricional", "Suporte premium", "Métricas avançadas"],
  },
  {
    name: "Premium",
    price: "R$59,90",
    description: "Para resultados máximos",
    features: ["Tudo do Pro", "Sessões ao vivo", "Plano familiar", "Prioridade no suporte"],
  },
];

export const Pricing = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-orange-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Escolha Seu Plano Ideal
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className={`animate-fade-up ${plan.name === "Pro" ? "border-primary shadow-xl" : ""}`} 
                 style={{ animationDelay: `${index * 100}ms` }}>
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <p className="text-3xl font-bold mt-4">{plan.price}<span className="text-sm font-normal">/mês</span></p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className={`w-full ${plan.name === "Pro" ? "bg-primary hover:bg-primary/90" : ""}`}>
                  Começar agora
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};