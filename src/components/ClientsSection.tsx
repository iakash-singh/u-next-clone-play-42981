import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building2, University, Code2 } from "lucide-react";

export const ClientsSection = () => {
  const corporateClients = [
    "Global Bank", "Tech Corp", "Finance Group", "Insurance Co", 
    "Retail Giant", "Telecom Leader", "Energy Solutions", "Healthcare Plus",
    "Manufacturing Inc", "Consulting Firm", "Media House", "Transport Co"
  ];

  const universities = [
    "State University", "Tech Institute", "Business School", "Medical College",
    "Engineering University", "Arts Academy", "Science Institute", "Law School"
  ];

  const techPartners = [
    "Cloud Platform", "AI Solutions", "Data Analytics", "Security Suite",
    "Learning Management", "Video Platform", "Assessment Tools", "Collaboration Hub"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Trusted by <span className="text-primary">Industry Leaders</span>
          </h2>
        </div>

        <Tabs defaultValue="corporates" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
            <TabsTrigger value="corporates">Corporates</TabsTrigger>
            <TabsTrigger value="universities">Universities</TabsTrigger>
            <TabsTrigger value="tech">Tech Partners</TabsTrigger>
          </TabsList>

          <TabsContent value="corporates">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
              {corporateClients.map((client, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center p-6 bg-card/50 rounded-lg border border-border hover:border-primary transition-all duration-300 hover:shadow-[0_0_20px_rgba(77,208,225,0.15)]"
                >
                  <Building2 className="w-8 h-8 text-primary mb-3" />
                  <span className="text-sm text-center text-muted-foreground">{client}</span>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="universities">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {universities.map((uni, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center p-8 bg-card/50 rounded-lg border border-border hover:border-primary transition-all duration-300 hover:shadow-[0_0_20px_rgba(77,208,225,0.15)]"
                >
                  <University className="w-12 h-12 text-primary mb-4" />
                  <span className="text-sm text-center font-medium">{uni}</span>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="tech">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {techPartners.map((partner, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center p-8 bg-card/50 rounded-lg border border-border hover:border-accent transition-all duration-300 hover:shadow-[0_0_20px_rgba(251,146,60,0.15)]"
                >
                  <Code2 className="w-12 h-12 text-accent mb-4" />
                  <span className="text-sm text-center font-medium">{partner}</span>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
