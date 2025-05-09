import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Tabs, TabsContent, TabsList, TabsTrigger
} from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Plus, Heart, Check, Clock, X } from "lucide-react";
import { useState } from "react";

// Mock data for adoptions
const adoptionsMock = [
  {
    id: 1,
    animalName: "Max",
    animalType: "Cachorro",
    animalBreed: "Golden Retriever",
    adopterName: "João & Sara Santos",
    adopterPhone: "(87) 5123-4567",
    status: "Aprovado",
    applicationDate: "10 Junho, 2024",
    imageUrl: "https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=300&h=300&auto=format&fit=crop"
  },
  {
    id: 2,
    animalName: "Bella",
    animalType: "Gato",
    animalBreed: "Siamesa",
    adopterName: "Michel Soares",
    adopterPhone: "(11) 4987-6543",
    status: "Pendente",
    applicationDate: "12 Junho, 2024",
    imageUrl: "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?q=80&w=300&h=300&auto=format&fit=crop"
  },
  {
    id: 3,
    animalName: "Buddy",
    animalType: "Cachorro",
    animalBreed: "Beagle",
    adopterName: "Emilia & Davi Assunção",
    adopterPhone: "(11) 4234-5678",
    status: "Pendente",
    applicationDate: "14 Abril, 2024",
    imageUrl: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=300&h=300&auto=format&fit=crop"
  },
  {
    id: 4,
    animalName: "Charlie",
    animalType: "Cachorro",
    animalBreed: "Labrador",
    adopterName: "Angela Lopes",
    adopterPhone: "(11) 4345-6789",
    status: "Aprovado",
    applicationDate: "5 Janeiro, 2024",
    imageUrl: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=300&h=300&auto=format&fit=crop"
  },
  {
    id: 5,
    animalName: "Mirna",
    animalType: "Gato",
    animalBreed: "American Shorthair",
    adopterName: "Roberto Sousa",
    adopterPhone: "(11) 4456-7890",
    status: "Rejeitado",
    applicationDate: "8 Agosto, 2024",
    imageUrl: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=300&h=300&auto=format&fit=crop"
  },
  {
    id: 6,
    animalName: "Luna",
    animalType: "Gato",
    animalBreed: "Maine Coon",
    adopterName: "Amanda Almeida",
    adopterPhone: "(11) 4567-8901",
    status: "Pendente",
    applicationDate: "15 Novembro, 2024",
    imageUrl: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?q=80&w=300&h=300&auto=format&fit=crop"
  }
];

export default function AdoptionsPage() {
  const [adoptions] = useState(adoptionsMock);
  const [searchQuery, setSearchQuery] = useState("");
  
  // Filter adoptions based on search query
  const filteredAdoptions = adoptions.filter(adoption => 
    adoption.animalName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    adoption.adopterName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    adoption.animalType.toLowerCase().includes(searchQuery.toLowerCase()) ||
    adoption.animalBreed.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Aprovado":
        return <Check className="h-4 w-4 text-green-600" />;
      case "Pendente":
        return <Clock className="h-4 w-4 text-yellow-600" />;
      case "Rejeitado":
        return <X className="h-4 w-4 text-red-600" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Aprovado":
        return "bg-green-100 text-green-800";
      case "Pendente":
        return "bg-yellow-100 text-yellow-800";
      case "Rejeitado":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Adoções</h1>
          <p className="text-muted-foreground">
            Gerenciar solicitações e processos de adoção
          </p>
        </div>
        <Button className="bg-ngo-secondary hover:bg-ngo-secondary/90">
          <Plus className="mr-2 h-4 w-4" /> Novo Pedido de Adoção
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Pesquise por nome do animal, adotante ou raça..."
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
          <TabsTrigger value="all">Todos os animais</TabsTrigger>
          <TabsTrigger value="pending">Pendente</TabsTrigger>
          <TabsTrigger value="approved">Aprovado</TabsTrigger>
          <TabsTrigger value="rejected">Rejeitado</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAdoptions.map((adoption) => (
              <Card key={adoption.id}>
                <div className="flex p-4 border-b">
                  <div className="w-16 h-16 mr-4 overflow-hidden rounded-full">
                    <img
                      src={adoption.imageUrl}
                      alt={adoption.animalName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-lg flex items-center gap-2">
                      {adoption.animalName}
                      {getStatusIcon(adoption.status)}
                    </CardTitle>
                    <div className="text-sm text-muted-foreground">
                      {adoption.animalType} - {adoption.animalBreed}
                    </div>
                    <Badge className={`mt-1 ${getStatusColor(adoption.status)}`}>{adoption.status}</Badge>
                  </div>
                </div>
                <CardContent className="pt-4">
                  <div className="space-y-2">
                    <div>
                      <div className="text-sm text-muted-foreground">Adotante</div>
                      <div className="font-medium">{adoption.adopterName}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Contato</div>
                      <div>{adoption.adopterPhone}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Data da aplicação</div>
                      <div>{adoption.applicationDate}</div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button size="sm" variant="outline">
                    Ver detalhes
                  </Button>
                  <Button size="sm" className="bg-ngo-primary hover:bg-ngo-primary/90">
                    <Heart className="mr-1 h-4 w-4" /> Processo
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="pending" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAdoptions.filter(adoption => adoption.status === "Pendente").map((adoption) => (
              <Card key={adoption.id}>
                <div className="flex p-4 border-b">
                  <div className="w-16 h-16 mr-4 overflow-hidden rounded-full">
                    <img
                      src={adoption.imageUrl}
                      alt={adoption.animalName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-lg flex items-center gap-2">
                      {adoption.animalName}
                      {getStatusIcon(adoption.status)}
                    </CardTitle>
                    <div className="text-sm text-muted-foreground">
                      {adoption.animalType} - {adoption.animalBreed}
                    </div>
                    <Badge className={`mt-1 ${getStatusColor(adoption.status)}`}>{adoption.status}</Badge>
                  </div>
                </div>
                <CardContent className="pt-4">
                  <div className="space-y-2">
                    <div>
                      <div className="text-sm text-muted-foreground">Adotante</div>
                      <div className="font-medium">{adoption.adopterName}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Contato</div>
                      <div>{adoption.adopterPhone}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Data da aplicação</div>
                      <div>{adoption.applicationDate}</div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button size="sm" variant="outline">
                    Ver detalhes
                  </Button>
                  <Button size="sm" className="bg-ngo-primary hover:bg-ngo-primary/90">
                    <Heart className="mr-1 h-4 w-4" /> Processo
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="approved" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAdoptions.filter(adoption => adoption.status === "Aprovado").map((adoption) => (
              <Card key={adoption.id}>
                <div className="flex p-4 border-b">
                  <div className="w-16 h-16 mr-4 overflow-hidden rounded-full">
                    <img
                      src={adoption.imageUrl}
                      alt={adoption.animalName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-lg flex items-center gap-2">
                      {adoption.animalName}
                      {getStatusIcon(adoption.status)}
                    </CardTitle>
                    <div className="text-sm text-muted-foreground">
                      {adoption.animalType} - {adoption.animalBreed}
                    </div>
                    <Badge className={`mt-1 ${getStatusColor(adoption.status)}`}>{adoption.status}</Badge>
                  </div>
                </div>
                <CardContent className="pt-4">
                  <div className="space-y-2">
                    <div>
                      <div className="text-sm text-muted-foreground">Adotante</div>
                      <div className="font-medium">{adoption.adopterName}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Contato</div>
                      <div>{adoption.adopterPhone}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Data da aplicação</div>
                      <div>{adoption.applicationDate}</div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button size="sm" variant="outline">
                    Ver detalhes
                  </Button>
                  <Button size="sm" className="bg-ngo-primary hover:bg-ngo-primary/90">
                    <Heart className="mr-1 h-4 w-4" /> Processo
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="rejected" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAdoptions.filter(adoption => adoption.status === "Rejeitado").map((adoption) => (
              <Card key={adoption.id}>
                <div className="flex p-4 border-b">
                  <div className="w-16 h-16 mr-4 overflow-hidden rounded-full">
                    <img
                      src={adoption.imageUrl}
                      alt={adoption.animalName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-lg flex items-center gap-2">
                      {adoption.animalName}
                      {getStatusIcon(adoption.status)}
                    </CardTitle>
                    <div className="text-sm text-muted-foreground">
                      {adoption.animalType} - {adoption.animalBreed}
                    </div>
                    <Badge className={`mt-1 ${getStatusColor(adoption.status)}`}>{adoption.status}</Badge>
                  </div>
                </div>
                <CardContent className="pt-4">
                  <div className="space-y-2">
                    <div>
                      <div className="text-sm text-muted-foreground">Adotante</div>
                      <div className="font-medium">{adoption.adopterName}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Contato</div>
                      <div>{adoption.adopterPhone}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Data da aplicação</div>
                      <div>{adoption.applicationDate}</div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button size="sm" variant="outline">
                  Ver detalhes
                  </Button>
                  <Button size="sm" className="bg-ngo-primary hover:bg-ngo-primary/90">
                    <Heart className="mr-1 h-4 w-4" /> Processo
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
