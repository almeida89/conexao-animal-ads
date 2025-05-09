
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimalRegistrationForm } from "@/components/animals/AnimalRegistrationForm";

export default function AnimalRegistrationPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center">
        <Link to="/animals">
          <Button variant="ghost" className="mr-2">
            <ArrowLeft className="mr-2 h-4 w-4" /> Voltar aos animais
          </Button>
        </Link>
      </div>
      
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Registrar novo animal</h1>
        <p className="text-muted-foreground">
          Insira os detalhes do animal que está sendo levado para o abrigo.
        </p>
      </div>

      <AnimalRegistrationForm />
    </div>
  );
}
