import { useNavigate } from "react-router-dom";
import { FullscreenPage } from "@/components/ui/FullscreenPage";
import { Button } from "@/components/ui/button";
import { MoveLeft } from "lucide-react";

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <FullscreenPage>
      <div>
        <h1 className="text-5xl font-semibold text-slate-800">404 - Not Found</h1>
        <p className="mb-12 mt-5 text-slate-500">
          Sorry the page you're looking for does not exist.
        </p>
        <Button
          variant={"outline"}
          size={"lg"}
          className="w-full"
          onClick={() => navigate(-1)}
        >
          <MoveLeft className="mr-2" />
          <span>Go back</span>
        </Button>
      </div>
    </FullscreenPage>
  );
}

export default PageNotFound;
