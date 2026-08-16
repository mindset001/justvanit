export const LEGAL_CLAUSES = [
  {
    title: "User Registration:",
    body: "In order to gain access to Justvanit, users must create an account by providing accurate and complete personal information. This step is crucial as it ensures a secure and tailored experience for each user, allowing them to fully utilize the platform's features.",
  },
  {
    title: "Service Agreement:",
    body: "By choosing to use Justvanit, users are agreeing to the terms and conditions set forth by the various moving companies that are featured on the platform. It is highly recommended that users take the time to carefully review the policies of each company before engaging their services to avoid any misunderstandings.",
  },
  {
    title: "Payment Terms:",
    body: "When booking a service through Justvanit, users are required to enter their payment information. All transactions are handled securely to protect user data, and it is important for users to double-check their payment details to prevent any potential issues during the transaction process.",
  },
  {
    title: "Cancellation Policy:",
    body: "Users have the option to cancel their bookings within a designated timeframe. However, it is important to note that cancellation fees may apply, depending on the specific policy of the moving company involved. Users should familiarize themselves with these policies before finalizing their bookings to avoid unexpected charges.",
  },
  {
    title: "Liability Disclaimer:",
    body: "Justvanit serves as a facilitator that connects users with moving companies. It is important to understand that the platform is not responsible for any damages or losses that may occur during the moving process. Such responsibilities lie solely with the service provider, and users should keep this in mind when making their arrangements.",
  },
  {
    title: "User Conduct:",
    body: "Users are expected to engage with moving companies in a respectful manner and to follow all guidelines provided by Justvanit. Any form of abusive behavior towards service providers may lead to account suspension, as maintaining a positive environment is essential for all users.",
  },
  {
    title: "Privacy Policy:",
    body: "Justvanit is dedicated to safeguarding user data and privacy. The personal information collected during the registration process will not be shared with third parties without the user's consent, except in cases where disclosure is mandated by law.",
  },
  {
    title: "Amendments to Terms:",
    body: "Justvanit retains the right to alter its terms and conditions at any time. Users will be informed of any significant changes, and continued use of the platform will indicate acceptance of the revised terms.",
  },
];

const INTRO_PARAGRAPHS = [
  "At JustVanit, we place a strong emphasis on transparency and integrity in every aspect of our operations. Our carefully crafted terms and conditions serve to safeguard both our users and the services we provide. We believe that clear communication is essential, and we encourage all users to take a moment to thoroughly read through these terms before proceeding. By understanding our policies, you can ensure a smoother experience and make informed decisions while navigating our platform.",
  "Moreover, we recognize that the digital landscape can be complex, and having a solid grasp of our terms will empower you as a user. Our commitment to clarity not only enhances your experience but also fosters trust in our services. We invite you to engage with our terms and conditions, as they are designed with your best interests in mind, ensuring that you feel secure and informed as you explore everything JustVanit has to offer.",
];

export type LegalPage = {
  slug: string;
  href: string;
  navLabel: string;
  heroTitle: string;
  heroDescription: string;
  welcomeHeading: string;
  tocSections: string[];
  contentHeadings: [string, string];
  introParagraphs: string[];
};

export const LEGAL_PAGES: LegalPage[] = [
  {
    slug: "terms",
    href: "/terms",
    navLabel: "Terms & Conditions",
    heroTitle: "Terms & Condition",
    heroDescription:
      "Our terms and conditions detail the rules for using our services, including user responsibilities, payment terms, and dispute resolution. By agreeing, you acknowledge your rights and obligations on our platform.",
    welcomeHeading: "Welcome to our terms & Conditions!",
    tocSections: ["Act of Services", "Title 2"],
    contentHeadings: ["Act of Service.", "Act of Service."],
    introParagraphs: INTRO_PARAGRAPHS,
  },
  {
    slug: "privacy",
    href: "/privacy",
    navLabel: "Privacy Policy",
    heroTitle: "Privacy Policy",
    heroDescription:
      "Our privacy policy outlines how we collect, use, and protect your personal information while using our services. By using our platform, you consent to the collection and use of your data as described, ensuring your rights and privacy are respected.",
    welcomeHeading: "Welcome to our privacy policy!",
    tocSections: ["Data Collections", "Title 2"],
    contentHeadings: ["Data Collection.", "Type of Data:"],
    introParagraphs: INTRO_PARAGRAPHS,
  },
  {
    slug: "cookies",
    href: "/cookies",
    navLabel: "Cookies Policy",
    heroTitle: "Cookies Policy",
    heroDescription:
      "Our privacy policy outlines how we collect, use, and protect your personal information while using our services. By using our platform, you consent to the collection and use of your data as described, ensuring your rights and privacy are respected.",
    welcomeHeading: "Welcome to our Cookies policy!",
    tocSections: ["Data Collections", "Title 2"],
    contentHeadings: ["Data Collection.", "Type of Data:"],
    introParagraphs: INTRO_PARAGRAPHS,
  },
];
