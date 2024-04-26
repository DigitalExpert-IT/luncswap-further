import { useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { InstantiateTab } from "./intantiate-tab";

function Devtools() {
  useEffect(() => {}, []);

  return (
    <Tabs defaultValue="instantiate" className="w-[400px] mx-auto">
      <h1 className="text-2xl font-bold text-center my-6">Devtools</h1>
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="instantiate">Instantiate</TabsTrigger>
        <TabsTrigger value="store-code">Upload Wasm</TabsTrigger>
      </TabsList>
      <TabsContent value="instantiate">
        <InstantiateTab />
      </TabsContent>
      <TabsContent value="store-code">Change your password here.</TabsContent>
    </Tabs>
  );
}

export default Devtools;
