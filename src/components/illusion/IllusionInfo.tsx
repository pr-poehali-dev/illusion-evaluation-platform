import { IllusionInfo } from "@/types/illusion";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Info } from "lucide-react";

interface IllusionInfoTabsProps {
  info: IllusionInfo;
}

const IllusionInfoTabs = ({ info }: IllusionInfoTabsProps) => {
  return (
    <Card className="mt-6">
      <CardContent className="pt-6">
        <Tabs defaultValue="about">
          <TabsList className="mb-4">
            <TabsTrigger value="about">Об иллюзии</TabsTrigger>
            <TabsTrigger value="how">Как это работает</TabsTrigger>
          </TabsList>
          <TabsContent value="about" className="space-y-4">
            <div className="flex items-start gap-2">
              <Info className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
              <p>{info.history}</p>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {info.tags.map((tag, index) => (
                <Badge key={index} variant="secondary">{tag}</Badge>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="how">
            <p>{info.howItWorks}</p>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default IllusionInfoTabs;
