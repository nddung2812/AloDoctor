"use client";
import { useForm } from "react-hook-form";
import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";

const SERVICE_OPTIONS = [
  "Fish Tank Cleaning/Maintenance",
  "Pond Cleaning",
  "New Tank Setup",
  "New Pond Setup",
  "Tank Removal",
  "Consultation",
  "Other",
];

export default function UnifiedServiceForm({
  title = "Send Us a Message",
  subtitle = "Get your FREE quote today • Same-day response guaranteed",
  successMessage = "Thank you for contacting us! We'll get back to you within 24 hours.",
  buttonText = "Send Message",
  showServiceType = true,
  cardClassName = "bg-black/60 backdrop-blur-lg border border-white/50 text-white shadow-2xl ring-1 ring-white/20",
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });
  const [domain, setDomain] = useState("");
  const form = useRef();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setDomain(window.location.hostname);
    }
  }, []);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: "", message: "" });

    try {
      const result = await emailjs.sendForm(
        "service_nyo9717",
        "template_lqh6rse",
        form.current,
        "PlnxkEthyMpuKG_kJ"
      );

      if (result.text === "OK") {
        setSubmitStatus({
          type: "success",
          message: successMessage,
        });
        reset();
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message:
          "Something went wrong. Please call us directly at (04) 5766 3939 for immediate assistance.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className={cardClassName}>
      <CardHeader className="text-center">
        <CardTitle className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
          {title}
        </CardTitle>
        {subtitle && (
          <p className="text-white/90 font-medium mt-2">{subtitle}</p>
        )}
      </CardHeader>
      <CardContent>
        <form
          ref={form}
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
        >
          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="name" className="text-white font-semibold">
              Full Name *
            </Label>
            <Input
              type="text"
              id="name"
              name="name"
              className="bg-white/25 border border-white/40 text-white placeholder:text-white/70 focus:border-emerald-400 focus:bg-white/30 focus:ring-2 focus:ring-emerald-400/50"
              placeholder="Enter your full name"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="text-red-400 text-sm flex items-center gap-1 font-medium">
                <AlertCircle className="w-4 h-4" />
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-white font-semibold">
              Email Address *
            </Label>
            <Input
              type="email"
              id="email"
              name="email"
              className="bg-white/25 border border-white/40 text-white placeholder:text-white/70 focus:border-emerald-400 focus:bg-white/30 focus:ring-2 focus:ring-emerald-400/50"
              placeholder="your.email@example.com"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-400 text-sm flex items-center gap-1 font-medium">
                <AlertCircle className="w-4 h-4" />
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-white font-semibold">
              Phone Number *
            </Label>
            <Input
              type="tel"
              id="phone"
              name="phone"
              className="bg-white/25 border border-white/40 text-white placeholder:text-white/70 focus:border-emerald-400 focus:bg-white/30 focus:ring-2 focus:ring-emerald-400/50"
              placeholder="(07) XXXX-XXXX"
              {...register("phone", {
                required: "Phone number is required",
              })}
            />
            {errors.phone && (
              <p className="text-red-400 text-sm flex items-center gap-1 font-medium">
                <AlertCircle className="w-4 h-4" />
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Location */}
          <div className="space-y-2">
            <Label htmlFor="location" className="text-white font-semibold">
              Location *
            </Label>
            <Input
              type="text"
              id="location"
              name="location"
              className="bg-white/25 border border-white/40 text-white placeholder:text-white/70 focus:border-emerald-400 focus:bg-white/30 focus:ring-2 focus:ring-emerald-400/50"
              placeholder="e.g., Brisbane, Southside, Gold Coast"
              {...register("location", {
                required: "Location is required",
              })}
            />
            {errors.location && (
              <p className="text-red-400 text-sm flex items-center gap-1 font-medium">
                <AlertCircle className="w-4 h-4" />
                {errors.location.message}
              </p>
            )}
          </div>

          {/* Service Type */}
          {showServiceType && (
            <div className="space-y-2">
              <Label htmlFor="service" className="text-white font-semibold">
                Service Type *
              </Label>
              <Select onValueChange={(value) => setValue("service", value)}>
                <SelectTrigger
                  className="bg-white/25 border border-white/40 text-white focus:border-emerald-400 focus:bg-white/30 focus:ring-2 focus:ring-emerald-400/50"
                  aria-label="Select service type"
                >
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent className="bg-white/95 border-2 border-gray-300">
                  {SERVICE_OPTIONS.map((service) => (
                    <SelectItem
                      key={service}
                      value={service}
                      className="text-gray-900 hover:bg-emerald-100 cursor-pointer"
                    >
                      {service}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <input
                type="hidden"
                name="service"
                {...register("service", { required: showServiceType })}
              />
              {errors.service && (
                <p className="text-red-400 text-sm flex items-center gap-1 font-medium">
                  <AlertCircle className="w-4 h-4" />
                  Please select a service
                </p>
              )}
            </div>
          )}

          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor="message" className="text-white font-semibold">
              Your Message *
            </Label>
            <Textarea
              id="message"
              name="message"
              className="bg-white/25 border border-white/40 text-white placeholder:text-white/70 focus:border-emerald-400 focus:bg-white/30 focus:ring-2 focus:ring-emerald-400/50 min-h-[120px]"
              placeholder="Tell us about your aquarium needs, tank size, current issues, or any questions you have..."
              {...register("message", {
                required: "Message is required",
              })}
            />
            {errors.message && (
              <p className="text-red-400 text-sm flex items-center gap-1 font-medium">
                <AlertCircle className="w-4 h-4" />
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Hidden Domain Field */}
          <input type="hidden" name="domain" value={domain} />

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white py-6 text-lg font-bold shadow-2xl ring-2 ring-emerald-400/30 hover:ring-emerald-400/50 transition-all duration-300"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Sending Message...
              </>
            ) : (
              buttonText
            )}
          </Button>

          {/* Status Messages */}
          {submitStatus.message && (
            <div
              className={`p-4 rounded-lg flex items-center gap-2 font-medium shadow-lg ${
                submitStatus.type === "success"
                  ? "bg-emerald-500/40 border-2 border-emerald-400 text-emerald-200"
                  : "bg-red-500/40 border-2 border-red-400 text-red-200"
              }`}
            >
              {submitStatus.type === "success" ? (
                <CheckCircle className="w-5 h-5" />
              ) : (
                <AlertCircle className="w-5 h-5" />
              )}
              {submitStatus.message}
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  );
}
