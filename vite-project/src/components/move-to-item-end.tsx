import { Label } from "./ui/label"
import { Switch } from "./ui/switch"

interface MoveItemEndProps {
  title: string; 
  switchHandler: (e: boolean) => void;
}
const MoveItemEnd: React.FC<MoveItemEndProps> = ({ title, switchHandler })  => {
  
  return (

    <div className="flex items-center float-right p-3">
      <Label htmlFor="move-to-item-end">{title}</Label>
      <Switch className="ml-2" id="move-to-item-end" onCheckedChange ={(e)=>switchHandler(e)} />
      
    </div>
  )
}

export { MoveItemEnd }
