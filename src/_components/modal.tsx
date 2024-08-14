import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ModalProps {
  text: string;
}
const Modal = ({ text }: ModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="text-black hover:text-white hover:bg-blue-500"
        >
          Show More
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogTitle className="text-center">
          Welcome to the services
        </DialogTitle>
        <DialogDescription>{text}</DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
