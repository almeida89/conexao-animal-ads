
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

export default function SchedulePage() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  
  const schedules = [
    { time: "09:00 AM", event: "Visita veterinária", description: "Verificação de novos resgates" },
    { time: "11:00 AM", event: "Orientação de Voluntários", description: "Nova sessão de treinamento de voluntários" },
    { time: "02:00 PM", event: "Reunião de Adoção", description: "Encontro com potenciais adotantes" },
    { time: "04:00 PM", event: "Hora da alimentação", description: "Cronograma regular de alimentação" }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Gerenciamento de cronograma</h1>
        <p className="text-muted-foreground">
          Visualize e gerencie a programação diária do seu abrigo.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Calendário</CardTitle>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="pointer-events-auto"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Programação diária</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {schedules.map((schedule, index) => (
                <div key={index} className="flex flex-col space-y-1 border-b border-gray-100 pb-3 last:border-0">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{schedule.time}</span>
                    <span className="text-sm text-muted-foreground">{schedule.event}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{schedule.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
