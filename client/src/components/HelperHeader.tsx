import { Save, Share2 } from "lucide-react";
import { Button } from "./ui/button";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function HelperHeader() {
  return (
    <div className="__helper_header h-[50px] bg-black text-white p-2 flex justify-between items-center">
      <div className="__btn_container flex gap-1">
        <Button
          className="flex justify-center items-center gap-1"
          variant="success"
        >
          <Save size={16} />
          Save
        </Button>

        <Button
          className="flex justify-center items-center gap-1"
          variant="secondary"
        >
          <Share2 size={16} /> Share
        </Button>
      </div>

      <div className="__tab_switcher flex justify-center items-center gap-1 ">

      <small>Current Language:</small>

        <Select defaultValue="html" onValueChange={(value) => console.log(value)}>
          <SelectTrigger className="w-[130px] bg-gray-800 outline-none focus:ring-0">
            <SelectValue  />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="html">HTML</SelectItem>
            <SelectItem value="css">CSS</SelectItem>
            <SelectItem value="javascript">JavaScript</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
