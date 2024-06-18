import { cn } from "@/lib/utils";
import { Label } from "./ui/label";
import { Switch } from "./ui/switch";

const MoveItemEnd = ({handleSwitch}:{handleSwitch: (e: boolean) => void;})  => {
  
  return (
    <div className="flex items-center float-right p-3">
      <Label htmlFor="move-to-item-end">Move done thing to End?</Label>
      <Switch className={cn('ml-2 data-[state=checked]:bg-indigo-500 data-[state=unchecked]:bg-indigo-200')} id="move-to-item-end" onCheckedChange ={(e)=>handleSwitch(e)} />
    </div>
  )
}

export { MoveItemEnd };

