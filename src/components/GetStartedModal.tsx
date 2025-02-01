import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { UserCircle2, Building2 } from "lucide-react";

interface GetStartedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GetStartedModal = ({ isOpen, onClose }: GetStartedModalProps) => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState<"donor" | "taker" | null>(null);

  const handleContinue = () => {
    if (userType) {
      navigate(`/auth/${userType}`);
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl">Choose Your Role</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
          <button
            onClick={() => setUserType("donor")}
            className={`p-6 rounded-lg border-2 flex flex-col items-center gap-3 transition-all ${
              userType === "donor"
                ? "border-primary bg-primary/10"
                : "border-gray-200 hover:border-primary/50"
            }`}
          >
            <Building2 className="w-12 h-12 text-primary" />
            <h3 className="font-semibold">I'm a Donor</h3>
            <p className="text-sm text-gray-500 text-center">
              I want to donate surplus food
            </p>
          </button>
          <button
            onClick={() => setUserType("taker")}
            className={`p-6 rounded-lg border-2 flex flex-col items-center gap-3 transition-all ${
              userType === "taker"
                ? "border-primary bg-primary/10"
                : "border-gray-200 hover:border-primary/50"
            }`}
          >
            <UserCircle2 className="w-12 h-12 text-primary" />
            <h3 className="font-semibold">I'm a Taker</h3>
            <p className="text-sm text-gray-500 text-center">
              I represent a shelter/charity
            </p>
          </button>
        </div>
        <div className="flex justify-end gap-3 px-4 pb-4">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleContinue} disabled={!userType}>
            Continue
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GetStartedModal;