"use client";

import localFont from "next/font/local";
import { Check } from "lucide-react";

const AgrandirBold = localFont({
  src: "../../../public/fonts/Agrandir-TextBold.otf",
});

interface StepIndicatorProps {
  currentStep: number;
}

const steps = [
  { number: 1, title: "Trip Details" },
  { number: 2, title: "Your Contact" },
  { number: 3, title: "Review & Confirm" },
];

export function StepIndicator({ currentStep }: StepIndicatorProps) {
  if (currentStep > 3) return null; // Don't show on success screen

  return (
    <div
      role="progressbar"
      aria-valuenow={currentStep}
      aria-valuemin={1}
      aria-valuemax={3}
      aria-label={`Booking progress: Step ${currentStep} of 3`}
      className="mb-8 sm:mb-12"
    >
      <div className="flex items-center justify-between relative max-w-lg mx-auto">
        {/* Background Connecting Line */}
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-black/10 -translate-y-1/2 z-0" />
        
        {/* Active Line Fill */}
        <div
          className="absolute top-1/2 left-0 h-0.5 bg-amber-900 -translate-y-1/2 z-0 transition-all duration-500 ease-out"
          style={{
            width: currentStep === 1 ? "0%" : currentStep === 2 ? "50%" : "100%",
          }}
        />

        {steps.map((step) => {
          const isCompleted = currentStep > step.number;
          const isCurrent = currentStep === step.number;

          return (
            <div key={step.number} className="relative z-10 flex flex-col items-center">
              <div
                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-bold transition-all duration-300 shadow-xs ${
                  isCompleted
                    ? "bg-amber-900 text-white ring-4 ring-[#e8dfd7]"
                    : isCurrent
                    ? "bg-[#231f20] text-white ring-4 ring-amber-900/30 scale-110"
                    : "bg-white text-gray-400 border border-black/10 ring-4 ring-[#e8dfd7]"
                }`}
              >
                {isCompleted ? (
                  <Check size={20} className="stroke-[3]" />
                ) : (
                  <span>{step.number}</span>
                )}
              </div>
              <span
                className={`mt-2 text-xs sm:text-sm font-medium transition-colors hidden sm:block ${
                  isCurrent
                    ? `text-amber-900 font-bold ${AgrandirBold.className}`
                    : isCompleted
                    ? "text-gray-900"
                    : "text-gray-400"
                }`}
              >
                {step.title}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
