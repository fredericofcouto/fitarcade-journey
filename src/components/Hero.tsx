import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-20 bg-gradient-to-br from-orange-50 to-blue-50">
      <div className="max-w-4xl mx-auto text-center animate-fade-down">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Transforme Seu Corpo em Casa ou na Academia
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8">
          Treinos personalizados para todos os níveis
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Comece Grátis por 7 Dias
          </Button>
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
            Baixar App
          </Button>
        </div>
      </div>
    </section>
  );
};