import { useState } from "react";
import { Button } from "@/components/ui/button";
import LeadCaptureForm from "../LeadCaptureForm";

export default function LeadCaptureFormExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-8">
      <Button onClick={() => setIsOpen(true)}>Open Lead Form</Button>
      <LeadCaptureForm isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}
