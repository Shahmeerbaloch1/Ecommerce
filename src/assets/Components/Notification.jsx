import { Badge, IconButton, Avatar } from "@material-tailwind/react";

import { ShoppingBag } from "lucide-react";
 
export function Notification() {
  return (
    <div className="flex items-center gap-8">
      <Badge content="5" className="text-gray-800">
        <IconButton>
          <ShoppingBag  className=" text-slate-700" />
        </IconButton>
      </Badge>
    </div>
  );
}