import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

  
export function FAQS() {
    return (
      <Accordion type="single" collapsible className="w-1/2">
        <AccordionItem value="item-1">
          <AccordionTrigger>Who can join X-Peerience?</AccordionTrigger>
          <AccordionContent>
            Anyone who is passionate about technology and wants to share their
            knowledge with the community.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>How can I contribute to X-Peerience??</AccordionTrigger>
          <AccordionContent>
            You can contribute by writing articles, sharing your projects, or
            participating in discussions.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it free to use??</AccordionTrigger>
          <AccordionContent>
            Yes, X-Peerience is free to use for everyone.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
  