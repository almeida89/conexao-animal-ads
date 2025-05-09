
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Cat, Heart, Users, Calendar, DollarSign, Activity } from "lucide-react";

export default function Dashboard() {
  const stats = [
    {
      title: "Total de animais",
      value: "124",
      description: "16 novos este mês",
      icon: Cat,
      color: "text-ngo-primary"
    },
    {
      title: "Adoções",
      value: "87",
      description: "12 pendentes de aprovação",
      icon: Heart,
      color: "text-red-500"
    },
    {
      title: "Voluntários",
      value: "42",
      description: "8 ativos esta semana",
      icon: Users,
      color: "text-ngo-accent"
    },
    {
      title: "Compromissos",
      value: "18",
      description: "5 agendados para hoje",
      icon: Calendar,
      color: "text-blue-500"
    },
    {
      title: "Doações",
      value: "$3,240",
      description: "Aumento de 18% em relação ao mês passado",
      icon: DollarSign,
      color: "text-green-500"
    },
    {
      title: "Estado de saúde",
      value: "92%",
      description: "3 animais em tratamento",
      icon: Activity,
      color: "text-purple-500"
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Bem-vindo ao Conexão Animal. Aqui está uma visão geral do status do seu abrigo.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className={`h-5 w-5 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Atividades recentes</CardTitle>
            <CardDescription>Últimas atividades e atualizações do abrigo</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { event: "Max foi adotado pela família Johnson", time: "Hoje às 14h30" },
                { event: "Integração de novos voluntários: Sarah Parker", time: "Ontem às 10h15" },
                { event: "Doação recebida: R$ 250 de Anônimo", time: "15 de Abril de 2025" },
                { event: "Bella completou sua vacinação", time: "14 de Março de 2025" },
                { event: "Novo resgate de animais: 3 gatinhos do centro da cidade", time: "12 de Fevereiro de 2025" }
              ].map((activity, index) => (
                <div key={index} className="flex items-center justify-between border-b border-gray-100 pb-2 last:border-0 last:pb-0">
                  <div className="text-sm">{activity.event}</div>
                  <div className="text-xs text-muted-foreground">{activity.time}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Próximos eventos</CardTitle>
            <CardDescription>Compromissos e eventos agendados</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { event: "Visita veterinária: check-up para 5 cães", date: "Amanhã, 9h00" },
                { event: "Evento do Dia da Adoção", date: "20 de junho de 2025, 10h00" },
                { event: "Sessão de Treinamento de Voluntários", date: "21 de junho de 2025, 14h00" },
                { event: "Arrecadação de fundos para a comunidade", date: "28 de junho de 2025, 11h00" },
                { event: "Reunião do Conselho", date: "1 de julho de 2025, 17h00" }
              ].map((event, index) => (
                <div key={index} className="flex items-center justify-between border-b border-gray-100 pb-2 last:border-0 last:pb-0">
                  <div className="text-sm">{event.event}</div>
                  <div className="text-xs text-muted-foreground">{event.date}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
