import {
  siteDescription,
  siteInstagram,
  siteName,
  sitePhone,
  sitePhoneRaw
} from "../lib/site";

const packages = [
  {
    name: "Starter",
    price: "$50",
    features: ["2 reels, well-planned and edited", "1 x 60 mins shoot", "Delivery: 1-2 days"]
  },
  {
    name: "Standard",
    price: "$150",
    features: [
      "1 teaser",
      "3 reels, well-planned and edited",
      "2 posts (your choice)",
      "Delivery: 3-5 days"
    ]
  },
  {
    name: "Pro",
    price: "$200",
    features: [
      "1 teaser",
      "4 reels, well-planned and edited",
      "1 post (your choice)",
      "5 edited photos (your choice)",
      "Delivery: 7 days"
    ]
  },
  {
    name: "VIP",
    price: "$350",
    features: [
      "1 cinematic commercial",
      "2 reels cut-downs",
      "8 edited photos",
      "Delivery: 7-10 days"
    ]
  }
];

export default function Home() {
  return (
    <main className="page">
      <header className="hero">
        <div className="hero-topline">{siteName}</div>
        <p className="hero-role">Editor, photographer, and After Effects artist.</p>
        <h1>Content Packages</h1>
        <p className="hero-blurb">{siteDescription}</p>
        <a className="book-now" href={`tel:${sitePhoneRaw}`}>
          Book Now: {sitePhone}
        </a>
      </header>

      <section className="pricing" aria-label="Content packages">
        {packages.map((pkg, index) => (
          <div
            className="pricing-row"
            style={{ animationDelay: `${index * 120}ms` }}
            key={pkg.name}
          >
            <div className="tier">
              <span className="tier-name">{pkg.name}</span>
            </div>
            <ul className="features">
              {pkg.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <div className="price">{pkg.price}</div>
          </div>
        ))}
      </section>

      <footer className="notes">
        <p>
          Includes: filming + editing, 1 revision/content, Tripoli/Beirut area,
          50% deposit to book.
        </p>
        <a className="ig" href={siteInstagram}>
          Instagram: j.visuals0
        </a>
      </footer>
    </main>
  );
}
