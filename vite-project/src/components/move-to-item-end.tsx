import { Label } from "./ui/label"
import { Switch } from "./ui/switch"
const MoveItemEnd = () =>{
return(
  
  <div className="flex items-center float-right p-3">
  <Switch className="mr-2" id="move-to-item-end" />
  <Label htmlFor="move-to-item-end">Move to Item End</Label>
</div>
)
}

export { MoveItemEnd }
