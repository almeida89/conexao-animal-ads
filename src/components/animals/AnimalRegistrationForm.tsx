
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue 
} from "@/components/ui/select";
import { 
  Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle 
} from "@/components/ui/card";
import { 
  Tabs, TabsContent, TabsList, TabsTrigger 
} from "@/components/ui/tabs";
import { 
  Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage 
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ImagePlus, UploadCloud } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "O nome deve ter pelo menos 2 caracteres." }),
  species: z.string().min(1, { message: "Selecione uma espécie." }),
  breed: z.string().optional(),
  sex: z.string().min(1, { message: "Por favor, selecione um sexo." }),
  age: z.string().min(1, { message: "Por favor, forneça uma estimativa de idade." }),
  size: z.string().min(1, { message: "Selecione um tamanho." }),
  rescueDate: z.string().min(1, { message: "Por favor, informe a data do resgate." }),
  rescueLocation: z.string().optional(),
  status: z.string().min(1, { message: "Selecione um status." }),
  temperament: z.string().optional(),
  description: z.string().optional(),
  medicalNotes: z.string().optional(),
});

export function AnimalRegistrationForm() {
  const [activeTab, setActiveTab] = useState("basic");
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      species: "",
      breed: "",
      sex: "",
      age: "",
      size: "",
      rescueDate: new Date().toISOString().split("T")[0],
      rescueLocation: "",
      status: "Disponível",
      temperament: "",
      description: "",
      medicalNotes: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real app, this would send the data to an API
    console.log(values);
    alert("Animal registrado com sucesso!");
    form.reset();
    setPhotoPreview(null);
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Registre um novo animal</CardTitle>
        <CardDescription>
          Insira os detalhes do animal recém-resgatado. Todos os campos marcados com * são obrigatórios.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid grid-cols-3 mb-6">
                <TabsTrigger value="basic">Informações básicas</TabsTrigger>
                <TabsTrigger value="rescue">Detalhes do resgate</TabsTrigger>
                <TabsTrigger value="medical">Notas Médicas</TabsTrigger>
              </TabsList>

              <TabsContent value="basic" className="space-y-4">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1 space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nome *</FormLabel>
                          <FormControl>
                            <Input placeholder="Nome do animal" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="species"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Espécies *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Selecione espécies" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="Dog">Cachorro</SelectItem>
                                <SelectItem value="Cat">Gato</SelectItem>
                                <SelectItem value="Bird">Passáro</SelectItem>
                                <SelectItem value="Rabbit">Coelho</SelectItem>
                                <SelectItem value="Other">Outro</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="breed"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Raça</FormLabel>
                            <FormControl>
                              <Input placeholder="Raça (se conhecida)" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      <FormField
                        control={form.control}
                        name="sex"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Sexo *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Selecione o sexo" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="Male">Macho</SelectItem>
                                <SelectItem value="Female">Fêmea</SelectItem>
                                <SelectItem value="Unknown">Desconhecida</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="age"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Idade *</FormLabel>
                            <FormControl>
                              <Input placeholder="Estimativa de idade" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="size"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Tamanho *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Selecione..." />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="Small">Pequeno</SelectItem>
                                <SelectItem value="Medium">Médio</SelectItem>
                                <SelectItem value="Large">Grande</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="status"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Status *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Selecione o status" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Available">Disponível para adoção</SelectItem>
                              <SelectItem value="Under Treatment">Em tratamento</SelectItem>
                              <SelectItem value="Quarantine">Em quarentena</SelectItem>
                              <SelectItem value="Foster">Em assistência social</SelectItem>
                              <SelectItem value="Adopted">Adotada(o)</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="md:w-1/3 space-y-4">
                    <Label>Foto</Label>
                    <div 
                      className="border-2 border-dashed rounded-lg p-4 h-64 flex flex-col items-center justify-center text-center cursor-pointer"
                      onClick={() => document.getElementById('photo-upload')?.click()}
                    >
                      {photoPreview ? (
                        <img 
                          src={photoPreview} 
                          alt="Prévia dos animais" 
                          className="max-h-full object-contain"
                        />
                      ) : (
                        <>
                          <ImagePlus className="h-10 w-10 text-muted-foreground mb-2" />
                          <p className="text-sm text-muted-foreground mb-1">Clique para enviar uma foto</p>
                          <p className="text-xs text-muted-foreground">
                            JPG, PNG or GIF. Max 5MB.
                          </p>
                        </>
                      )}
                      <input 
                        id="photo-upload" 
                        type="file" 
                        accept="image/*"
                        className="hidden"
                        onChange={handleFileChange}
                      />
                    </div>
                    <Button type="button" variant="outline" className="w-full" onClick={() => document.getElementById('photo-upload')?.click()}>
                      <UploadCloud className="mr-2 h-4 w-4" /> Carregar foto
                    </Button>
                  </div>
                </div>

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Descrição</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Detalhes adicionais sobre o animal (personalidade, hábitos, etc.)" 
                          className="h-24"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex justify-end">
                  <Button type="button" onClick={() => setActiveTab("rescue")}>
                    Próximo
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="rescue" className="space-y-4">
                <FormField
                  control={form.control}
                  name="rescueDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Data de resgate *</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="rescueLocation"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Localização de resgate</FormLabel>
                      <FormControl>
                        <Input placeholder="Onde o animal foi encontrado/resgatado" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="temperament"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Temperamento</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Observações de comportamento, temperamento, características especiais" 
                          className="h-24"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex justify-between">
                  <Button type="button" variant="outline" onClick={() => setActiveTab("basic")}>
                    Anterior
                  </Button>
                  <Button type="button" onClick={() => setActiveTab("medical")}>
                    Próximo
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="medical" className="space-y-4">
                <FormField
                  control={form.control}
                  name="medicalNotes"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Notas Médicas</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Condições de saúde, tratamentos, vacinas, necessidades especiais, etc." 
                          className="h-32"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex justify-between">
                  <Button type="button" variant="outline" onClick={() => setActiveTab("rescue")}>
                    Anterior
                  </Button>
                  <Button type="submit" className="bg-ngo-primary hover:bg-ngo-primary/90">
                    Registrar Animal
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
