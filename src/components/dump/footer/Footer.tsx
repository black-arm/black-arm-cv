import Link from "next/link";
import { devPortfolio } from "@/config/portfolio";

export function Footer() {

    return <footer className="footer footer-center p-5 bg-base-200 text-base-content rounded mt-10">
    <nav className="grid grid-flow-col gap-4">
      <Link href="/" className="link link-hover hover:text-primary">Home</Link> 
      <Link href="/projects" className="link link-hover hover:text-primary">Progetti</Link> 
    </nav> 
    <nav>
      <div data-testid="externalLink" className="grid grid-flow-col gap-4">
        {devPortfolio.footerLink.map((link, index) => <div key={index} className="h-10 w-10 hover:text-primary">
            <Link  href={link.link} target="_blank">{link.icon}</Link>
        </div>)}
        </div>
    </nav> 
  </footer>;
}