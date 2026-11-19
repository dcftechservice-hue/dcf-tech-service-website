
const navigation = [
  { name: "All Services", href: "/AllServices" },
  { name: "Repairs", href: "/Repairs" },
  { name: "Software", href: "/Software" },
  { name: "Store", href: "/Store" },
  { name: "About", href: "/About" },
  { name: "Socials", href: "/Socials" },
  { name: "Contact", href: "/Contact" },
  { name: "Support", href: "/Support" },
];

// ======================================================
// SERVICE CATEGORY DATA
// Add an image path and page link to each service later.
// ======================================================

const serviceCategories = [
  {
    id: "mobile",
    title: "Mobile Phones",
    services: [
      { title: "Screen Replacement", description: "Replacement of damaged, cracked or faulty mobile phone screens.", image: "", href: "" },
      { title: "Battery Replacement", description: "Battery replacement for devices with poor battery life or charging issues.", image: "", href: "" },
      { title: "Charging Port Repair", description: "Repair of damaged or faulty charging ports and connections.", image: "", href: "" },
      { title: "Camera Repair", description: "Troubleshooting and repair of faulty front and rear cameras.", image: "", href: "" },
      { title: "Speaker & Microphone", description: "Repairs for sound, microphone and call audio problems.", image: "", href: "" },
      { title: "Phone Diagnostics", description: "Device checks to identify hardware and software faults.", image: "", href: "" },
      { title: "Button Repairs", description: "Repair of faulty power, volume and other physical buttons.", image: "", href: "" },
      { title: "Data Transfers", description: "Moving contacts, photos and other data between devices.", image: "", href: "" },
    ],
  },
  {
    id: "tablets",
    title: "Tablets",
    services: [
      { title: "Screen Replacement", description: "Repair or replacement of damaged tablet screens.", image: "", href: "" },
      { title: "Battery Replacement", description: "Help with batteries that drain quickly or no longer hold charge.", image: "", href: "" },
      { title: "Charging Repairs", description: "Troubleshooting charging ports, cables and power issues.", image: "", href: "" },
      { title: "Software Troubleshooting", description: "Help resolving crashes, errors and software problems.", image: "", href: "" },
      { title: "Data Transfers", description: "Transfer important files and information between devices.", image: "", href: "" },
      { title: "Tablet Diagnostics", description: "Identify faults and performance issues affecting your tablet.", image: "", href: "" },
    ],
  },
  {
    id: "computers",
    title: "Computers & Laptops",
    services: [
      { title: "Hardware Repairs", description: "Diagnosis and repair of faulty computer components.", image: "", href: "" },
      { title: "SSD & RAM Upgrades", description: "Improve speed and performance with storage and memory upgrades.", image: "", href: "" },
      { title: "Laptop Screen Repair", description: "Repair or replacement of damaged laptop displays.", image: "", href: "" },
      { title: "Keyboard Replacement", description: "Repair or replacement of faulty laptop keyboards.", image: "", href: "" },
      { title: "Cooling & Overheating", description: "Help with overheating, fans and cooling problems.", image: "", href: "" },
      { title: "Computer Maintenance", description: "General maintenance to keep your computer running smoothly.", image: "", href: "" },
      { title: "Operating System Installation", description: "Installation and setup of supported operating systems.", image: "", href: "" },
      { title: "Computer Diagnostics", description: "Find the cause of hardware, software and performance problems.", image: "", href: "" },
    ],
  },
  {
    id: "consoles",
    title: "Gaming Consoles",
    services: [
      { title: "Console Cleaning", description: "Internal cleaning to help reduce dust and overheating.", image: "", href: "" },
      { title: "Stick Drift Repair", description: "Troubleshooting and repair of controller stick drift.", image: "", href: "" },
      { title: "HDMI Port Repair", description: "Help with damaged HDMI ports and display connections.", image: "", href: "" },
      { title: "Overheating Repairs", description: "Investigate and resolve console overheating problems.", image: "", href: "" },
      { title: "Controller Repairs", description: "Repair of faulty buttons, triggers and controller connections.", image: "", href: "" },
      { title: "Storage Upgrades", description: "Upgrade or replace console storage where supported.", image: "", href: "" },
      { title: "Console Software Issues", description: "Help with system errors, updates and software problems.", image: "", href: "" },
    ],
  },
  {
    id: "software",
    title: "Software & Troubleshooting",
    services: [
      { title: "Software Installation", description: "Installation and configuration of supported software.", image: "", href: "" },
      { title: "Operating System Problems", description: "Help resolving startup, update and operating system errors.", image: "", href: "" },
      { title: "Virus & Malware Removal", description: "Investigate and remove unwanted or malicious software.", image: "", href: "" },
      { title: "Application Troubleshooting", description: "Resolve application errors, crashes and compatibility issues.", image: "", href: "" },
      { title: "System Optimisation", description: "Improve device performance and remove unnecessary clutter.", image: "", href: "" },
      { title: "Driver Problems", description: "Install, update and troubleshoot hardware drivers.", image: "", href: "" },
      { title: "General Technical Support", description: "Practical help with everyday software and technology problems.", image: "", href: "" },
    ],
  },
  {
    id: "data",
    title: "Data & Storage",
    services: [
      { title: "Data Transfers", description: "Move files and information between devices and storage.", image: "", href: "" },
      { title: "File Backups", description: "Set up backups to help protect important files.", image: "", href: "" },
      { title: "Storage Upgrades", description: "Increase available storage with compatible hardware.", image: "", href: "" },
      { title: "Hard Drive Replacement", description: "Replace faulty or outdated storage drives.", image: "", href: "" },
      { title: "Data Recovery Assessment", description: "Assess storage devices and discuss possible recovery options.", image: "", href: "" },
      { title: "Device-to-Device Transfers", description: "Move your data when changing to a new device.", image: "", href: "" },
    ],
  },
  {
    id: "networking",
    title: "Networking & Connectivity",
    services: [
      { title: "Wi-Fi Troubleshooting", description: "Investigate weak, unreliable or unavailable Wi-Fi connections.", image: "", href: "" },
      { title: "Router Setup", description: "Help setting up and configuring home routers.", image: "", href: "" },
      { title: "Network Configuration", description: "Configure devices and network settings.", image: "", href: "" },
      { title: "Internet Connection Problems", description: "Troubleshoot internet connection and connectivity issues.", image: "", href: "" },
      { title: "Device Connectivity", description: "Help connecting devices to networks and other hardware.", image: "", href: "" },
      { title: "Printer Connectivity", description: "Set up and troubleshoot wired and wireless printers.", image: "", href: "" },
    ],
  },
  {
    id: "websites",
    title: "Websites & Applications",
    services: [
      { title: "Website Development", description: "Creation of websites to suit personal and business requirements.", image: "", href: "" },
      { title: "Website Maintenance", description: "Ongoing maintenance and technical assistance for websites.", image: "", href: "" },
      { title: "Website Updates", description: "Changes to existing website content and functionality.", image: "", href: "" },
      { title: "Application Development", description: "Development of applications for specific requirements.", image: "", href: "" },
      { title: "Website Troubleshooting", description: "Investigate website errors, display issues and technical problems.", image: "", href: "" },
    ],
  },
  {
    id: "support",
    title: "General Tech Support",
    services: [
      { title: "Device Setup", description: "Help getting new and existing technology set up.", image: "", href: "" },
      { title: "New Device Configuration", description: "Configure devices, accounts and essential settings.", image: "", href: "" },
      { title: "Technology Advice", description: "Practical advice when choosing or using technology.", image: "", href: "" },
      { title: "General Maintenance", description: "General checks and maintenance for your technology.", image: "", href: "" },
      { title: "Hardware Installation", description: "Help installing and configuring compatible hardware.", image: "", href: "" },
      { title: "Technical Assistance", description: "Support with everyday technical questions and problems.", image: "", href: "" },
    ],
  },
];

// ======================================================
// SERVICE TILE
// The entire tile becomes a link when an href is added.
// ======================================================

function ServiceTile({
  service,
}: {
  service: {
    title: string;
    description: string;
    image: string;
    href: string;
  };
}) {
  const content = (
    <>
      <div
        className="service-tile__image"
        style={
          service.image
            ? { backgroundImage: `url("${service.image}")` }
            : undefined
        }
      />

      <div className="service-tile__overlay">
        <h3>{service.title}</h3>
        <p>{service.description}</p>
      </div>
    </>
  );

  if (service.href) {
    return (
      <a
        className="service-tile"
        href={service.href}
        aria-label={`${service.title}: ${service.description}`}
      >
        {content}
      </a>
    );
  }

  return (
    <div className="service-tile">
      {content}
    </div>
  );
}

// ======================================================
// SERVICE CATEGORY
// ======================================================

function ServiceCategory({
  category,
}: {
  category: (typeof serviceCategories)[number];
}) {
  return (
    <section className="services-category" id={category.id}>
      <h2>{category.title}</h2>

      <div className="services-grid">
        {category.services.map((service, index) => (
          <ServiceTile key={`${category.id}-${index}`} service={service} />
        ))}
      </div>
    </section>
  );
}

// ======================================================
// ALL SERVICES PAGE
// ======================================================

export default function AllServices() {
  return (
    <>
      {/* HEADER */}
      <header className="site-header">
        <div className="brand">
          <img
            src="/img/DCF_logo.png"
            alt="DCF Tech Service logo"
            className="site-logo"
          />
        </div>
      </header>

      {/* MAIN NAVIGATION */}
      <nav className="navigation">
        {navigation.map((item) => (
          <a key={item.href} href={item.href}>
            {item.name}
          </a>
        ))}
      </nav>

      {/* ALL SERVICES CONTENT */}
      <main className="all-services-page">
        <div className="services-intro">
          <h1>All Services</h1>
        </div>

        {/* CATEGORY QUICK LINKS */}
        <nav className="services-subnav" aria-label="Service categories">
          {serviceCategories.map((category) => (
            <a key={category.id} href={`#${category.id}`}>
              {category.title}
            </a>
          ))}
        </nav>

        {/* SERVICE CATEGORY GRIDS */}
        <div className="services-categories">
          {serviceCategories.map((category) => (
            <ServiceCategory key={category.id} category={category} />
          ))}
        </div>
      </main>
    </>
  );
}
