"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Send } from "lucide-react";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { submitEnquiry } from "@/app/actions/enquiry";
import { Button } from "@/components/ui/button";
import { FieldError, Input, Label, Select, Textarea } from "@/components/ui/field";
import { productCategories } from "@/lib/content";
import { enquirySchema, type EnquiryInput } from "@/lib/schemas";

export function QuoteForm({ productName, productId }: { productName?: string; productId?: string }) {
  const [pending, startTransition] = useTransition();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<EnquiryInput>({
    resolver: zodResolver(enquirySchema),
    defaultValues: { productName, productId, productInterest: productName }
  });

  function onSubmit(values: EnquiryInput) {
    startTransition(async () => {
      const result = await submitEnquiry(values);
      if (result.ok) {
        toast.success(result.message);
        reset({ productName, productId, productInterest: productName });
      } else {
        toast.error(result.message);
      }
    });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
      <input type="hidden" {...register("productId")} />
      <input type="hidden" {...register("productName")} />
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="fullName">Full Name</Label>
          <Input id="fullName" {...register("fullName")} />
          <FieldError message={errors.fullName?.message} />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="company">Company / Organization</Label>
          <Input id="company" {...register("company")} />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" type="email" {...register("email")} />
          <FieldError message={errors.email?.message} />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" {...register("phone")} />
          <FieldError message={errors.phone?.message} />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="location">Location</Label>
          <Input id="location" {...register("location")} />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="productInterest">Product Interest</Label>
          <Select id="productInterest" {...register("productInterest")}>
            <option value={productName || ""}>{productName || "General Water Utility Enquiry"}</option>
            {productCategories.map((category) => (
              <option key={category.slug} value={category.name}>
                {category.name}
              </option>
            ))}
          </Select>
        </div>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="projectType">Project Type</Label>
        <Select id="projectType" {...register("projectType")}>
          {["Estate", "Industrial Facility", "Commercial Building", "Institution", "Water Treatment Plant", "Private Water Operator", "Facility Management", "Other"].map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </Select>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="message">Message / Requirement</Label>
        <Textarea id="message" {...register("message")} />
        <FieldError message={errors.message?.message} />
      </div>
      <Button type="submit" disabled={pending} className="w-full sm:w-fit">
        {pending ? <Loader2 className="animate-spin" size={18} /> : <Send size={18} />}
        Submit Enquiry
      </Button>
    </form>
  );
}
