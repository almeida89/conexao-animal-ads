
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, ArrowUpRight, PiggyBank, Users, Sparkles } from "lucide-react";

export default function DonationsPage() {
  const donations = [
    { donor: "Anônimo", amount: "R$50.00", date: "Hoje às 14h30" },
    { donor: "Sara Leal", amount: "R$100.00", date: "Ontem" },
    { donor: "João Cabral", amount: "R$25.00", date: "2 dias atrás" },
    { donor: "Emilia Santos", amount: "R$75.00", date: "3 dias atrás" }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Doações</h1>
        <p className="text-muted-foreground">
        Gerencie e acompanhe doações para apoiar nosso abrigo de animais.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Doações totais</CardTitle>
            <PiggyBank className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$3,240</div>
            <p className="text-xs text-muted-foreground">+20,1% em relação ao mês passado</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Doadores</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">82</div>
            <p className="text-xs text-muted-foreground">12 novos este mês</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Meta Mensal</CardTitle>
            <Sparkles className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">64%</div>
            <p className="text-xs text-muted-foreground">R$ 1.760 para atingir a meta</p>
          </CardContent>
        </Card>

        <Card className="relative overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Doe agora</CardTitle>
            <Heart className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <Button className="w-full" size="sm">
              Faça uma doação
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Doações recentes</CardTitle>
          <CardDescription>Uma lista de doações recentes feitas ao nosso abrigo.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {donations.map((donation, index) => (
              <div key={index} className="flex items-center justify-between border-b border-gray-100 pb-3 last:border-0">
                <div className="space-y-1">
                  <p className="text-sm font-medium">{donation.donor}</p>
                  <p className="text-sm text-muted-foreground">{donation.date}</p>
                </div>
                <span className="text-sm font-medium text-green-600">{donation.amount}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
