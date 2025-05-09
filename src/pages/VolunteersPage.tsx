import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, Filter, Plus, Users, Calendar, Star, Mail, Phone
} from "lucide-react";
import { useState } from "react";
import { 
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow 
} from "@/components/ui/table";
import { 
  Tabs, TabsContent, TabsList, TabsTrigger 
} from "@/components/ui/tabs";

// Mock data for volunteers
const volunteersMock = [
  {
    id: 1,
    name: "Jessica Soares",
    email: "jessica.s@exemplo.com",
    phone: "(11) 4123-4567",
    role: "Cuidados com animais",
    status: "Ativo",
    joinDate: "15 Janeiro, 2025",
    hours: 75,
    availability: ["Segunda-feira", "Quarta-feira", "Sábado"],
    skills: ["Passeio com cães", "Primeiro socorro"],
    imageUrl: "https://randomuser.me/api/portraits/women/12.jpg"
  },
  {
    id: 2,
    name: "Michael Licerio",
    email: "michael.l@exemplo.com",
    phone: "(11) 4987-6543",
    role: "Transporte",
    status: "Ativo",
    joinDate: "8 Fevereiro, 2025",
    hours: 45,
    availability: ["Terça-feira", "Quinta-feira", "Domingo"],
    skills: ["Motorista", "Manejo de animais"],
    imageUrl: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 3,
    name: "Emilia Cabral",
    email: "emilia.c@exemplo.com",
    phone: "(11) 4234-5678",
    role: "Assistente Veterinário",
    status: "Inativo",
    joinDate: "22 Março, 2025",
    hours: 120,
    availability: ["Segunda-feira", "Sexta-feira"],
    skills: ["Cuidados médicos", "Administração", "Primeiro socorro"],
    imageUrl: "https://randomuser.me/api/portraits/women/22.jpg"
  },
  {
    id: 4,
    name: "Davi Carlos",
    email: "davi.c@exemplo.com",
    phone: "(11) 4345-6789",
    role: "Coordenador de Eventos",
    status: "Ativo",
    joinDate: "10 abril, 2025",
    hours: 55,
    availability: ["Quarta-feira", "Sábado", "Domingo"],
    skills: ["Planejamento de eventos", "Mídias sociais", "Fotografia"],
    imageUrl: "https://randomuser.me/api/portraits/men/42.jpg"
  },
  {
    id: 5,
    name: "Sara Tadeu",
    email: "sara.t@exemplo.com",
    phone: "(11) 4456-7890",
    role: "Cuidados com animais",
    status: "Ativo",
    joinDate: "5 Abril, 2025",
    hours: 30,
    availability: ["Segunda-feira", "Terça-feira", "Sexta-feira"],
    skills: ["Manuseio de gatos", "Limpeza", "Assistência Adotiva"],
    imageUrl: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    id: 6,
    name: "Roberto Bianco",
    email: "roberto.b@exemplo.com",
    phone: "(11) 4567-8901",
    role: "Captação de recursos",
    status: "Ativo",
    joinDate: "1 Março, 2025",
    hours: 25,
    availability: ["Quinta-feira", "Sábado"],
    skills: ["Marketing", "Relações com Doadores", "Redação de subsídios"],
    imageUrl: "https://randomuser.me/api/portraits/men/52.jpg"
  }
];

export default function VolunteersPage() {
  const [volunteers] = useState(volunteersMock);
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"card" | "table">("card");
  
  // Filter volunteers based on search query
  const filteredVolunteers = volunteers.filter(volunteer => 
    volunteer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    volunteer.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    volunteer.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    return status === "Ativo" 
      ? "bg-green-100 text-green-800" 
      : "bg-gray-100 text-gray-800";
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Voluntários</h1>
          <p className="text-muted-foreground">
          Gerenciar voluntários e suas agendas
          </p>
        </div>
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setViewMode("card")}
            className={viewMode === "card" ? "bg-muted" : ""}
          >
            <Users className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setViewMode("table")}
            className={viewMode === "table" ? "bg-muted" : ""}
          >
            <Calendar className="h-4 w-4" />
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Adicionar voluntário
          </Button>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Pesquise voluntários por nome, e-mail ou função..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button variant="outline" size="icon">
          <Filter className="h-4 w-4" />
        </Button>
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">Todos os voluntários</TabsTrigger>
          <TabsTrigger value="active">Ativos</TabsTrigger>
          <TabsTrigger value="inactive">Inativo</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="mt-6">
          {viewMode === "card" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredVolunteers.map((volunteer) => (
                <Card key={volunteer.id}>
                  <CardHeader className="pb-2 flex flex-row items-center space-x-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img
                        src={volunteer.imageUrl}
                        alt={volunteer.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <CardTitle>{volunteer.name}</CardTitle>
                      <div className="text-sm text-muted-foreground">{volunteer.role}</div>
                      <Badge className={`mt-1 ${getStatusColor(volunteer.status)}`}>
                        {volunteer.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span>{volunteer.email}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Phone className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span>{volunteer.phone}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span>Ingressou: {volunteer.joinDate}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Star className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span>{volunteer.hours} horas de voluntariado</span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="text-sm font-medium mb-1">Skills:</div>
                      <div className="flex flex-wrap gap-1">
                        {volunteer.skills.map((skill, index) => (
                          <Badge key={index} variant="outline">{skill}</Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button size="sm" variant="outline">Ver perfil</Button>
                    <Button size="sm">Agendar</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nome</TableHead>
                    <TableHead>Papel</TableHead>
                    <TableHead>Contato</TableHead>
                    <TableHead>Disponibilidade</TableHead>
                    <TableHead>Horas</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Ações</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {filteredVolunteers.map((volunteer) => (
                    <TableRow key={volunteer.id}>
                      <TableCell className="font-medium">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 rounded-full overflow-hidden">
                            <img
                              src={volunteer.imageUrl}
                              alt={volunteer.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <span>{volunteer.name}</span>
                        </div>
                      </TableCell>
                      <TableCell>{volunteer.role}</TableCell>
                      <TableCell>
                        <div>{volunteer.email}</div>
                        <div className="text-muted-foreground">{volunteer.phone}</div>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {volunteer.availability.map((day, index) => (
                            <Badge key={index} variant="outline" className="text-xs">{day.substring(0, 3)}</Badge>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell>{volunteer.hours}</TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(volunteer.status)}>
                          {volunteer.status}
                        </Badge>
                      </TableCell>

                      <TableCell>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">Visualizar</Button>
                          <Button size="sm">Agendar</Button>
                        </div>
                      </TableCell>

                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </TabsContent>
        
        {/* Outros conteúdos da guia filtrariam os voluntários com base no status */}
        <TabsContent value="active" className="mt-6">
          {viewMode === "card" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredVolunteers.filter(volunteer => volunteer.status === "Ativo").map((volunteer) => (
                <Card key={volunteer.id}>
                  <CardHeader className="pb-2 flex flex-row items-center space-x-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img
                        src={volunteer.imageUrl}
                        alt={volunteer.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <CardTitle>{volunteer.name}</CardTitle>
                      <div className="text-sm text-muted-foreground">{volunteer.role}</div>
                      <Badge className={`mt-1 ${getStatusColor(volunteer.status)}`}>
                        {volunteer.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span>{volunteer.email}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Phone className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span>{volunteer.phone}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span>Joined: {volunteer.joinDate}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Star className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span>{volunteer.hours} horas de voluntariado</span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="text-sm font-medium mb-1">Skills:</div>
                      <div className="flex flex-wrap gap-1">
                        {volunteer.skills.map((skill, index) => (
                          <Badge key={index} variant="outline">{skill}</Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button size="sm" variant="outline">Ver perfil</Button>
                    <Button size="sm">Agendar</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Papel</TableHead>
                    <TableHead>Contato</TableHead>
                    <TableHead>Disponibilidade</TableHead>
                    <TableHead>Horas</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredVolunteers.filter(volunteer => volunteer.status === "Ativo").map((volunteer) => (
                    <TableRow key={volunteer.id}>
                      <TableCell className="font-medium">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 rounded-full overflow-hidden">
                            <img
                              src={volunteer.imageUrl}
                              alt={volunteer.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <span>{volunteer.name}</span>
                        </div>
                      </TableCell>
                      <TableCell>{volunteer.role}</TableCell>
                      <TableCell>
                        <div>{volunteer.email}</div>
                        <div className="text-muted-foreground">{volunteer.phone}</div>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {volunteer.availability.map((day, index) => (
                            <Badge key={index} variant="outline" className="text-xs">{day.substring(0, 3)}</Badge>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell>{volunteer.hours}</TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(volunteer.status)}>
                          {volunteer.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">Visualizar</Button>
                          <Button size="sm">Agendar</Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </TabsContent>

        <TabsContent value="inactive" className="mt-6">
          {viewMode === "card" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredVolunteers.filter(volunteer => volunteer.status === "Inativo").map((volunteer) => (
                <Card key={volunteer.id}>
                  <CardHeader className="pb-2 flex flex-row items-center space-x-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img
                        src={volunteer.imageUrl}
                        alt={volunteer.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <CardTitle>{volunteer.name}</CardTitle>
                      <div className="text-sm text-muted-foreground">{volunteer.role}</div>
                      <Badge className={`mt-1 ${getStatusColor(volunteer.status)}`}>
                        {volunteer.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span>{volunteer.email}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Phone className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span>{volunteer.phone}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span>Joined: {volunteer.joinDate}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Star className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span>{volunteer.hours} horas de voluntariado</span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="text-sm font-medium mb-1">Skills:</div>
                      <div className="flex flex-wrap gap-1">
                        {volunteer.skills.map((skill, index) => (
                          <Badge key={index} variant="outline">{skill}</Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button size="sm" variant="outline">Ver perfil</Button>
                    <Button size="sm">Agendar</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Papel</TableHead>
                    <TableHead>Contato</TableHead>
                    <TableHead>Disponibilidade</TableHead>
                    <TableHead>Horas</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredVolunteers.filter(volunteer => volunteer.status === "Inativo").map((volunteer) => (
                    <TableRow key={volunteer.id}>
                      <TableCell className="font-medium">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 rounded-full overflow-hidden">
                            <img
                              src={volunteer.imageUrl}
                              alt={volunteer.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <span>{volunteer.name}</span>
                        </div>
                      </TableCell>
                      <TableCell>{volunteer.role}</TableCell>
                      <TableCell>
                        <div>{volunteer.email}</div>
                        <div className="text-muted-foreground">{volunteer.phone}</div>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {volunteer.availability.map((day, index) => (
                            <Badge key={index} variant="outline" className="text-xs">{day.substring(0, 3)}</Badge>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell>{volunteer.hours}</TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(volunteer.status)}>
                          {volunteer.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">Visualizar</Button>
                          <Button size="sm">Agendar</Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
