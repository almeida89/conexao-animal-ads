import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Plus, Search, Filter, Cat, Dog, ArrowUpDown } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

// Mock data for animals
const animalsMock = [
  {
    id: 1,
    name: "Max",
    type: "Cachorro",
    breed: "Golden Retriever",
    age: "3 anos",
    sex: "Macho",
    status: "Disponível",
    imageUrl: "https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=300&h=300&auto=format&fit=crop",
    rescueDate: "15 Maio, 2024",
    description: "Amigável e cheio de energia que adora brincar de buscar."
  },
  {
    id: 2,
    name: "Bella",
    type: "Gato",
    breed: "Siamese",
    age: "2 anos",
    sex: "Fêmea",
    status: "Em tratamento",
    imageUrl: "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?q=80&w=300&h=300&auto=format&fit=crop",
    rescueDate: "3 Abril, 2023",
    description: "Gato doce e calmo que gosta de tomar sol."
  },
  {
    id: 3,
    name: "Buddy",
    type: "Cachorro",
    breed: "Beagle",
    age: "1 ano",
    sex: "Macho",
    status: "Disponível",
    imageUrl: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=300&h=300&auto=format&fit=crop",
    rescueDate: "12 Maio, 2025",
    description: "Filhote curioso e brincalhão, bom com crianças."
  },
  {
    id: 4,
    name: "Luna",
    type: "Gato",
    breed: "Maine Coon",
    age: "4 anos",
    sex: "Fêmea",
    status: "Disponível",
    imageUrl: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?q=80&w=300&h=300&auto=format&fit=crop",
    rescueDate: "28 Fevereiro, 2024",
    description: "Gato majestoso e independente com pelagem fofa."
  },
  {
    id: 5,
    name: "Charlie",
    type: "Cachorro",
    breed: "Labrador",
    age: "5 anos",
    sex: "Macho",
    status: "Adotado",
    imageUrl: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=300&h=300&auto=format&fit=crop",
    rescueDate: "10 Janeiro, 2023",
    description: "Cão leal e gentil, ótimo com famílias."
  },
  {
    id: 6,
    name: "Milo",
    type: "Gato",
    breed: "Tabby",
    age: "2 anos",
    sex: "Macho",
    status: "Disponível",
    imageUrl: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=300&h=300&auto=format&fit=crop",
    rescueDate: "30 Maio, 2023",
    description: "Gatinho brincalhão que adora perseguir brinquedos."
  }
];

export default function AnimalsPage() {
  const [animals] = useState(animalsMock);
  const [searchQuery, setSearchQuery] = useState("");
  
  // Filter animals based on search query
  const filteredAnimals = animals.filter(animal => 
    animal.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    animal.breed.toLowerCase().includes(searchQuery.toLowerCase()) ||
    animal.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Disponível":
        return "bg-green-100 text-green-800";
      case "Em tratamento":
        return "bg-yellow-100 text-yellow-800";
      case "Adotado":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Animais</h1>
          <p className="text-muted-foreground">
            Administre todos os animais em seu abrigo
          </p>
        </div>
        <Link to="/animals/register">
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Registrar novo animal
          </Button>
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Pesquise animais por nome, raça ou tipo..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button variant="outline" size="icon">
          <Filter className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon">
          <ArrowUpDown className="h-4 w-4" />
        </Button>
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">Todos os animais</TabsTrigger>
          <TabsTrigger value="dogs" className="flex items-center">
            <Dog className="mr-2 h-4 w-4" /> Cachorros
          </TabsTrigger>
          <TabsTrigger value="cats" className="flex items-center">
            <Cat className="mr-2 h-4 w-4" /> Gatos
          </TabsTrigger>
          <TabsTrigger value="available">Disponível</TabsTrigger>
          <TabsTrigger value="treatment">Em tratamento</TabsTrigger>
          <TabsTrigger value="adopted">Adotado</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAnimals.map((animal) => (
              <Card key={animal.id} className="overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    src={animal.imageUrl}
                    alt={animal.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle>{animal.name}</CardTitle>
                    <Badge className={getStatusColor(animal.status)}>
                      {animal.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="grid grid-cols-2 gap-2 text-sm mb-2">
                    <div>
                      <span className="text-muted-foreground">Tipo:</span> {animal.type}
                    </div>
                    <div>
                      <span className="text-muted-foreground">Raça:</span> {animal.breed}
                    </div>
                    <div>
                      <span className="text-muted-foreground">Idade:</span> {animal.age}
                    </div>
                    <div>
                      <span className="text-muted-foreground">Sexo:</span> {animal.sex}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">{animal.description}</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="text-xs text-muted-foreground">
                    Resgatado: {animal.rescueDate}
                  </div>
                  <Button size="sm" variant="outline">Ver perfil</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        {/* Outros conteúdos de guias teriam estrutura semelhante, mas com dados filtrados */}
        <TabsContent value="dogs" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAnimals.filter(animal => animal.type === "Cachorro").map((animal) => (
              <Card key={animal.id} className="overflow-hidden">
                {/* Same card structure as above */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={animal.imageUrl}
                    alt={animal.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle>{animal.name}</CardTitle>
                    <Badge className={getStatusColor(animal.status)}>
                      {animal.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="grid grid-cols-2 gap-2 text-sm mb-2">
                    <div>
                      <span className="text-muted-foreground">Tipo:</span> {animal.type}
                    </div>
                    <div>
                      <span className="text-muted-foreground">Raça:</span> {animal.breed}
                    </div>
                    <div>
                      <span className="text-muted-foreground">Idade:</span> {animal.age}
                    </div>
                    <div>
                      <span className="text-muted-foreground">Sexo:</span> {animal.sex}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">{animal.description}</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="text-xs text-muted-foreground">
                    Resgatado: {animal.rescueDate}
                  </div>
                  <Button size="sm" variant="outline">Ver perfil</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Outros conteúdos de guias teriam estrutura semelhante, mas com dados filtrados */}
        <TabsContent value="cats" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAnimals.filter(animal => animal.type === "Gato").map((animal) => (
              <Card key={animal.id} className="overflow-hidden">
                {/* Same card structure as above */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={animal.imageUrl}
                    alt={animal.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle>{animal.name}</CardTitle>
                    <Badge className={getStatusColor(animal.status)}>
                      {animal.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="grid grid-cols-2 gap-2 text-sm mb-2">
                    <div>
                      <span className="text-muted-foreground">Tipo:</span> {animal.type}
                    </div>
                    <div>
                      <span className="text-muted-foreground">Raça:</span> {animal.breed}
                    </div>
                    <div>
                      <span className="text-muted-foreground">Idade:</span> {animal.age}
                    </div>
                    <div>
                      <span className="text-muted-foreground">Sexo:</span> {animal.sex}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">{animal.description}</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="text-xs text-muted-foreground">
                    Resgatado: {animal.rescueDate}
                  </div>
                  <Button size="sm" variant="outline">Ver perfil</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        
        {/* Similar tab contents for other tabs */}
      </Tabs>
    </div>
  );
}
