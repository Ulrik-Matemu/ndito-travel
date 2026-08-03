"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  BookingFormData,
  initialFormData,
  validateStep1,
  validateStep2,
  ValidationErrors,
  BookingIntent,
  TripCategory,
} from "@/lib/bookingSchema";
import { safariPackages } from "@/data/safariTrips";
import { getExperienceMapping, resolveDestinationName } from "@/lib/bookingHelpers";
import { submitBooking } from "@/lib/booking";
import { trackBookingStep, trackEvent } from "@/lib/analytics";
import { StepIndicator } from "./StepIndicator";
import { Step1TripDetails } from "./Step1TripDetails";
import { Step2YourInfo } from "./Step2YourInfo";
import { Step3Confirm } from "./Step3Confirm";
import { BookingSuccess } from "./BookingSuccess";
import { motion, AnimatePresence } from "framer-motion";

function WizardContent() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<BookingFormData>(initialFormData);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingId, setBookingId] = useState<string | null>(null);

  const searchParams = useSearchParams();

  // Smart Context Engine: Auto-detect visitor intent & pre-fill options from URL query
  useEffect(() => {
    const pkg = searchParams.get("package");
    const intentParam = searchParams.get("intent") as BookingIntent | null;
    const routeParam = searchParams.get("route");
    const destinationParam = searchParams.get("destination");
    const experienceParam = searchParams.get("experience");
    const sourceParam = searchParams.get("source");

    setFormData((prev) => {
      const updated = { ...prev };

      if (sourceParam) {
        updated.referrerPage = sourceParam;
      }

      // 1. Direct package selection
      if (pkg) {
        updated.bookingMode = "package";
        updated.packageSlug = pkg;
        updated.intent = "safari_package";
        const matched = safariPackages.find((s) => s.slug === pkg);
        if (matched) {
          updated.packageTitle = matched.title;
        }
      }
      // 2. Experience selection from experience pages
      else if (experienceParam) {
        updated.intent = "experience";
        updated.bookingMode = "custom";
        updated.experienceSlug = experienceParam;
        const expMapping = getExperienceMapping(experienceParam);
        if (expMapping) {
          updated.experienceTitle = expMapping.title;
          updated.customItinerary = {
            ...updated.customItinerary,
            tripCategory: expMapping.tripCategory,
            destinations: expMapping.destinations.length > 0 ? expMapping.destinations : updated.customItinerary.destinations,
            specialActivities: expMapping.activities.length > 0 ? expMapping.activities : updated.customItinerary.specialActivities,
          };
        }
      }
      // 3. Explicit Intent Routing (kilimanjaro, zanzibar, destination, custom)
      else if (intentParam) {
        updated.intent = intentParam;
        if (intentParam === "kilimanjaro") {
          updated.bookingMode = "custom";
          updated.customItinerary = {
            ...updated.customItinerary,
            tripCategory: "kilimanjaro" as TripCategory,
            kilimanjaroRoute: routeParam
              ? decodeURIComponent(routeParam)
              : "Machame Route (7 Days - High Summit Success)",
          };
        } else if (intentParam === "zanzibar") {
          updated.bookingMode = "custom";
          updated.customItinerary = {
            ...updated.customItinerary,
            tripCategory: "zanzibar" as TripCategory,
            destinations: destinationParam
              ? [decodeURIComponent(destinationParam)]
              : ["Zanzibar Beaches"],
          };
        } else if (intentParam === "destination") {
          updated.bookingMode = "custom";
          if (destinationParam) {
            const destName = resolveDestinationName(destinationParam);
            updated.customItinerary = {
              ...updated.customItinerary,
              destinations: [destName],
            };
          }
        }
      }
      // 4. Destination parameter fallback
      else if (destinationParam) {
        updated.bookingMode = "custom";
        updated.intent = "destination";
        const destName = resolveDestinationName(destinationParam);
        if (!updated.customItinerary.destinations.includes(destName)) {
          updated.customItinerary = {
            ...updated.customItinerary,
            destinations: [...updated.customItinerary.destinations, destName],
          };
        }
      }

      return updated;
    });
  }, [searchParams]);

  const updateFormData = (fields: Partial<BookingFormData>) => {
    setFormData((prev) => ({ ...prev, ...fields }));
    // Clear errors for updated fields
    setErrors((prev) => {
      const copy = { ...prev };
      Object.keys(fields).forEach((key) => {
        delete copy[key as keyof BookingFormData];
      });
      delete copy.destinations;
      return copy;
    });
  };

  const handleNextStep1 = () => {
    const validationErrors = validateStep1(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    trackBookingStep(2, formData.bookingMode, {
      intent: formData.intent,
      package_slug: formData.packageSlug,
      group_size: formData.groupSize,
    });
    setStep(2);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNextStep2 = () => {
    const validationErrors = validateStep2(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    trackBookingStep(3, formData.bookingMode);
    setStep(3);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const result = await submitBooking(formData);
      if (result.success) {
        setBookingId(result.bookingId);
        trackBookingStep(4, formData.bookingMode, {
          intent: formData.intent,
          group_size: formData.groupSize,
          trip_category: formData.customItinerary.tripCategory,
        });
        trackEvent("booking_submitted", {
          booking_mode: formData.bookingMode,
          intent: formData.intent,
          package_slug: formData.packageSlug,
          group_size: formData.groupSize,
        });
        setStep(4);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } catch (error) {
      console.error("Booking submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <StepIndicator currentStep={step} />

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
          >
            <Step1TripDetails
              formData={formData}
              onChange={updateFormData}
              onNext={handleNextStep1}
              errors={errors}
            />
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
          >
            <Step2YourInfo
              formData={formData}
              onChange={updateFormData}
              onNext={handleNextStep2}
              onBack={() => setStep(1)}
              errors={errors}
            />
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
          >
            <Step3Confirm
              formData={formData}
              onBack={() => setStep(2)}
              onEditStep={(targetStep) => setStep(targetStep)}
              onSubmit={handleSubmit}
              isSubmitting={isSubmitting}
            />
          </motion.div>
        )}

        {step === 4 && (
          <motion.div
            key="step4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <BookingSuccess bookingId={bookingId} formData={formData} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function BookingWizard() {
  return (
    <Suspense fallback={<div className="text-center py-12 text-gray-500">Loading booking wizard...</div>}>
      <WizardContent />
    </Suspense>
  );
}
