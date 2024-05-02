import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function InstantiateTab() {
  return (
    <form action="#">
      <Card>
        <CardHeader>
          <CardTitle>Instantiate</CardTitle>
          <CardDescription>Instantiate cosmwasm contract.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1">
            <Label>Contract Name</Label>
            <Input required></Input>
          </div>
          <div className="space-y-1">
            <Label>Code ID</Label>
            <Input required type="number"></Input>
          </div>
          <div className="space-y-1">
            <Label>Init Msg</Label>
            <Textarea placeholder="JSON" required></Textarea>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="secondary" className="w-full">
            Intantiate
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}
