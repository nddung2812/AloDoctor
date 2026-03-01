"use client";
import UnifiedServiceForm from "@/app/components/UnifiedServiceForm";

export default function ServiceForm() {
  return (
    <UnifiedServiceForm
      title="Book a Service"
      subtitle="Get a personalized quote for your aquatic needs"
      successMessage="Thank you! We will contact you soon."
      buttonText="Book Service"
      showServiceType={true}
      cardClassName="bg-black/60 backdrop-blur-lg border-2 border-white/50 text-white shadow-2xl ring-1 ring-white/20 mt-8"
    />
  );
}
