
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Configurações</h1>
        <p className="text-muted-foreground">
          Gerencie as configurações e preferências do seu abrigo.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Informações sobre abrigos</CardTitle>
          <CardDescription>Atualize as informações básicas do seu abrigo.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="shelterName">Nome do abrigo</Label>
            <Input id="shelterName" defaultValue="Conexao Animal" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">E-mail de contato</Label>
            <Input id="email" type="email" defaultValue="contato@conexaoanimal.org" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Número de telefone</Label>
            <Input id="phone" type="tel" defaultValue="(11) 4123-4567" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="address">Endereço</Label>
            <Input id="address" defaultValue="Avenida Paulista, 243" />
          </div>
          <Button>Salvar alterações</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Preferências de notificação</CardTitle>
          <CardDescription>Configure como você recebe notificações.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="emailNotifications">Notificações por e-mail</Label>
            <Input id="emailNotifications" type="checkbox" className="h-4 w-4" defaultChecked />
          </div>
          <Button>Atualizar preferências</Button>
        </CardContent>
      </Card>
    </div>
  );
}
