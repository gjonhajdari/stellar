import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileDown, HelpCircle, PlusCircle } from "lucide-react";

function Employees() {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h1 className="text-3xl">Employees</h1>
          <HelpCircle size={20} className="text-slate-400" />
          <Badge>100</Badge>
          {/* <span className="rounded-full bg-pink-800/5 px-2 py-1 text-sm text-pink-800">
            100
          </span> */}
        </div>

        <div className="space-x-3">
          <Button variant={"outline"}>
            <FileDown strokeWidth={1.5} size={20} className="mr-2" />
            <span>Export</span>
          </Button>

          <Button>
            <PlusCircle strokeWidth={1.5} size={20} className="mr-2" />
            <span>New Employee</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Employees;
