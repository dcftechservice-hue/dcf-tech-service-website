
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

// Each section has its own text, image and destination.
// Add or remove sections here without changing the layout code.
const homeSections = [
  {
    id: "services",
    heading: "Professional Tech Services",
    description:
      "Explore our range of technology services, from troubleshooting and maintenance to more specialised solutions.",
    buttonText: "Explore Services",
    href: "/AllServices",
    image: "/img/home-services.jpg",
    imageAlt: "Technology and computer services",
    reverse: false,
  },
  {
    id: "repairs",
    heading: "Device Repairs",
    description:
      "Having problems with your device? Find out more about our repair services and how we can help.",
    buttonText: "View Repairs",
    href: "/Repairs",
    image: "/img/home-repairs.jpg",
    imageAlt: "Device repair equipment",
    reverse: true,
  },
  {
    id: "software",
    heading: "Software and Support",
    description:
      "Need help with software, installation, troubleshooting or getting your technology working properly?",
    buttonText: "Software Services",
    href: "/Software",
    image: "/img/home-software.jpg",
    imageAlt: "Computer software and technology",
    reverse: false,
  },
  {
    id: "contact",
    heading: "Need a Hand?",
    description:
      "Have a question or need some help? Get in touch and we'll be happy to discuss what you need.",
    buttonText: "Contact Us",
    href: "/Contact",
    image: "/img/home-contact.jpg",
    imageAlt: "Technology support",
    reverse: true,
  },
];

// Reusable component for each homepage section.
function HomeSection({ section }: { section: typeof homeSections[number] }) {
  return (
    <section
      id={section.id}
      className={`home-feature ${section.reverse ? "home-feature--reverse" : ""}`}
    >
      <div className="home-feature__text">
        <h2>{section.heading}</h2>

        <p>{section.description}</p>

        <a className="home-feature__button" href={section.href}>
          {section.buttonText}
        </a>
      </div>

      <div className="home-feature__image">
        <img src={section.image} alt={section.imageAlt} />
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      {/* HEADER / BANNER */}
      <header className="site-header">
        <div className="brand">
          <img
            src="/img/DCF_logo.png"
            alt="DCF Tech Service logo"
            className="site-logo"
          />
        </div>
      </header>

      {/* NAVIGATION */}
      <nav className="navigation">
        {navigation.map((item) => (
          <a key={item.name} href={item.href}>
            {item.name}
          </a>
        ))}
      </nav>

      {/* HOMEPAGE CONTENT */}
      <div className="page-content">
        <div className="home-sections">
          {homeSections.map((section) => (
            <HomeSection key={section.id} section={section} />
          ))}
        </div>
      </div>
    </main>
  );
}
