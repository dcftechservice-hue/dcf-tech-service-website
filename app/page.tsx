
const navigation = [
  { name: "All Services", href: "/AllServices"},
  { name: "Repairs", href: "/Repairs" },
  { name: "Software", href: "/Software"},
  { name: "Store", href: "/Store"},
  { name: "About", href: "/About" },
  { name: "Socials", href: "/Socials"},
  { name: "Contact", href: "/Contact" },
  { name: "Support", href: "/Support" },
];





export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="brand">
          <img src="/img/DCF_logo.png" alt="DCF Tech Service logo" className="site-logo" />
        </div>
      </header>

      <nav className="navigation">
        {navigation.map((item) => (
          <a key={item.name} href={item.href}>
            {item.name}
          </a>
        ))}
      </nav>

      <section className="page-content"></section>
    </main>
  );
}
