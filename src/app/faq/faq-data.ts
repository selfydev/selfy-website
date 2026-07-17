export interface FaqQuestion {
  q: string;
  a: string;
}

export interface FaqSection {
  category: string;
  questions: FaqQuestion[];
}

export const faqs: FaqSection[] = [
  {
    category: "General",
    questions: [
      {
        q: "What is Selfy?",
        a: "Selfy is a premium photo booth company offering beautifully designed, open-air booths for weddings, corporate events, brand activations, and private parties. Our technology captures high-quality photos and provides instant digital sharing.",
      },
      {
        q: "How does the photo booth work?",
        a: "Guests simply step in front of the booth and the experience guides them through taking photos. Photos can be taken individually or as a group. The entire process is intuitive and requires no assistance, though we always provide an on-site attendant.",
      },
      {
        q: "Do you provide an attendant?",
        a: "Yes, every booking includes a professional attendant who sets up the booth, assists guests throughout the event, and ensures everything runs smoothly.",
      },
    ],
  },
  {
    category: "Booking & Pricing",
    questions: [
      {
        q: "How far in advance should I book?",
        a: "We recommend booking 2-3 months in advance for private events and 4-6 months for weddings during peak season. However, we can sometimes accommodate last-minute bookings depending on availability.",
      },
      {
        q: "What's included in the price?",
        a: "All packages include setup and breakdown, an on-site attendant, unlimited photos during your booking period, digital gallery access, and travel within Greater London. Additional features vary by package.",
      },
      {
        q: "Do you offer custom packages?",
        a: "Absolutely. We can create custom packages for multi-day events, brand activations, or specific requirements. Contact us to discuss your needs.",
      },
      {
        q: "What is your cancellation policy?",
        a: "We offer full refunds for cancellations made more than 30 days before the event. Cancellations within 30 days may be subject to a fee. We also offer date changes subject to availability.",
      },
    ],
  },
  {
    category: "Technical",
    questions: [
      {
        q: "What space do you need for the booth?",
        a: "Our standard booth requires approximately 8ft x 8ft of floor space with a minimum ceiling height of 8ft. We can advise on specific requirements for your venue.",
      },
      {
        q: "Do you need a power source?",
        a: "Yes, we require access to a standard power outlet within 10 meters of the booth location. We bring all necessary extension cables.",
      },
      {
        q: "Can guests share photos digitally?",
        a: "Yes! Guests can instantly share photos via email, SMS, or directly to social media. All photos are also uploaded to a private online gallery you can access and share.",
      },
      {
        q: "What photo formats do you offer?",
        a: "We offer standard 4x6 prints, photo strips, and digital downloads. Custom sizes and formats are available for corporate and brand activation bookings.",
      },
    ],
  },
  {
    category: "Customisation",
    questions: [
      {
        q: "Can I customise the photo design?",
        a: "Yes, you can fully customise the photo overlay, start screen, and print layout with your event details, branding, or wedding design. Our team can help create custom templates.",
      },
      {
        q: "Do you provide props?",
        a: "We include a curated selection of props with every booking. Premium prop packages are available, or we can source custom props for your theme.",
      },
      {
        q: "Can you match our event branding?",
        a: "Absolutely. For corporate and brand activation clients, we offer complete white-label experiences including booth wraps, custom UI, branded overlays, and more.",
      },
    ],
  },
];
