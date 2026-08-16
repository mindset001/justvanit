import { Banknote, Building2, Calendar, FileText, Mail, MapPin, Truck, User, Users } from "lucide-react";

const ITEMS = [
  {
    icon: Mail,
    title: "Business Email",
    description:
      "To successfully register, your company must possess a custom domain email address that reflects your brand identity.",
  },
  {
    icon: Building2,
    title: "Registered Company Name & House Number",
    description:
      "To secure a registered name and house number, your company needs to be officially registered with Companies House in the UK.",
  },
  {
    icon: FileText,
    title: "Upload Documents",
    description:
      "All documents related to your company's registration with Companies House must be uploaded, including Public Liability Insurance and any necessary licensing documents.",
  },
  {
    icon: User,
    title: "Service Type",
    description:
      "Choose the services your moving company offers, you can select multiple options as long as you have the required documents. Available services include Residential & Household Moving, Office & Commercial Moving, Piano & Specialty Moving, and Heavy Equipment & Storage Moving.",
  },
  {
    icon: Truck,
    title: "Provide Fleet Capabilities",
    description:
      "You need to specify the type and number of vehicles in your fleet. This information helps determine the number and type of moving orders directed to your company based on customer needs.",
  },
  {
    icon: Banknote,
    title: "Revenue Structure",
    description:
      "Could you please share your pricing details? We would like to know your base hourly rate as well as any mileage charges that may apply.",
  },
  {
    icon: MapPin,
    title: "Operational Bound",
    description:
      "You must outline your company's operational boundaries within the UK. Carefully select all locations, including postal codes, or list them out in detail.",
  },
  {
    icon: Calendar,
    title: "Availability",
    description:
      "It is essential to specify your company's availability, including the specific days of the week you operate and the business hours during which you are open.",
  },
  {
    icon: Users,
    title: "Spoke Man",
    description:
      "After registration, you must provide the contact details of your company representative. This can be done at any time, but it's best to do it as soon as possible. Having this information allows our support team to assist you more quickly in case of any issues.",
  },
];

export function RegisterChecklist() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <h2 className="text-center text-3xl font-semibold tracking-tight text-zinc-600 sm:text-4xl">
          Everything you need to register, in one spot
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((item) => (
            <div key={item.title} className="rounded-2xl border border-zinc-100 p-6">
              <span className="flex size-10 items-center justify-center rounded-full bg-zinc-100 text-zinc-600">
                <item.icon className="size-4.5" />
              </span>
              <p className="mt-4 text-sm font-semibold text-navy-900">{item.title}</p>
              <p className="mt-2 text-xs leading-relaxed text-zinc-500">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
