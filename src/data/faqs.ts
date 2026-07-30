export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "Visas & Transfers" | "Kilimanjaro Trekking" | "Wildlife Safaris" | "Zanzibar & Booking";
}

export const faqs: FAQItem[] = [
  {
    id: "visa-1",
    question: "Do I need a visa to enter Tanzania?",
    answer:
      "Yes, most foreign nationals require a tourist visa to enter Tanzania. You can apply online for an official eVisa prior to travel at visa.immigration.go.tz or obtain a visa on arrival at major airports including Kilimanjaro International Airport (JRO), Julius Nyerere International Airport (DAR), and Zanzibar (ZNZ). US citizens require a $100 USD multiple-entry visa; most European/UK/Australian citizens pay $50 USD for a single-entry visa.",
    category: "Visas & Transfers",
  },
  {
    id: "visa-2",
    question: "Which airport should I fly into for a safari or Kilimanjaro climb?",
    answer:
      "For Northern Circuit safaris (Serengeti, Ngorongoro, Tarangire) and Kilimanjaro climbs, fly into Kilimanjaro International Airport (JRO). JRO is located 40 minutes from Moshi and 60 minutes from Arusha. Direct flight carriers include KLM, Qatar Airways, Ethiopian Airlines, Turkish Airlines, and Kenya Airways.",
    category: "Visas & Transfers",
  },
  {
    id: "kili-1",
    question: "Which Kilimanjaro route has the highest summit success rate?",
    answer:
      "The 8-day Lemosho Route and 9-day Northern Circuit have the highest summit success rates (>95%). Longer routes allow your body to naturally adjust to rising elevation using the 'climb high, sleep low' acclimatization principle.",
    category: "Kilimanjaro Trekking",
  },
  {
    id: "kili-2",
    question: "What gear should I pack vs rent for Kilimanjaro?",
    answer:
      "You should bring your own broken-in waterproof hiking boots, thermal base layers, headlamp, moisture-wicking socks, and personal prescription medications. Heavy gear such as 4-season sleeping bags, heavy down jackets, duffel bags, and trekking poles can be rented in Moshi prior to your climb.",
    category: "Kilimanjaro Trekking",
  },
  {
    id: "kili-3",
    question: "What is the tipping standard for Kilimanjaro guides and porters?",
    answer:
      "Tipping is customary to reward hard-working mountain crews. Recommended group tips per day: Lead Guide ($15–$20/day), Assistant Guide ($10–$15/day), Cook ($10–$12/day), and Porters ($8–$10/day per porter). At Ndito Travel, all crew members receive fair, KPAP-compliant base wages regardless of tips.",
    category: "Kilimanjaro Trekking",
  },
  {
    id: "safari-1",
    question: "When is the best time to visit Serengeti for the Great Migration?",
    answer:
      "The Great Migration is a year-round event! Visit Ndutu (Southern Serengeti) between January and March to witness the calving season and intense predator action. For famous Mara River crossings, visit Northern Serengeti (Kogatende) between July and October.",
    category: "Wildlife Safaris",
  },
  {
    id: "safari-2",
    question: "What type of vehicles does Ndito Travel use for game drives?",
    answer:
      "We use custom-modified, 4-wheel-drive Toyota Land Cruisers fitted with high-clearance suspension, 360-degree pop-up roof hatches for unobstructed photography, onboard refrigerators with chilled drinks, power charging outlets, and guaranteed window seating capped at maximum 6 guests per vehicle.",
    category: "Wildlife Safaris",
  },
  {
    id: "safari-3",
    question: "Are Tanzania safaris safe for families and solo travelers?",
    answer:
      "Yes! Tanzania is one of Africa's safest and most stable countries. Private safaris include a dedicated local driver-guide from arrival to departure. Our team accommodates families with customized kid-friendly game drive schedules and dietary preferences.",
    category: "Wildlife Safaris",
  },
  {
    id: "zanzibar-1",
    question: "How do ocean tides work in Zanzibar?",
    answer:
      "Zanzibar's east coast beaches (Paje, Jambiani, Matemwe) experience dramatic low tides where water recedes up to 1.5 km, offering beautiful reef walks. If you prefer continuous 24-hour ocean swimming without tide fluctuations, choose northern beaches like Nungwi or Kendwa.",
    category: "Zanzibar & Booking",
  },
  {
    id: "zanzibar-2",
    question: "How do I book a safari with Ndito Travel?",
    answer:
      "Simply fill out our 3-step online form on the /book page or message us directly on WhatsApp (+255 658 883 554). Our local trip planners will design a custom itinerary with transparent pricing—no upfront payment or credit card is required to receive a quote.",
    category: "Zanzibar & Booking",
  },
];
