import { socials } from "../constants";
import Section from "./Section";
function Footer() {
  return (
    <Section id="footer" crosses className="!px-0 !py-10">
      <div className="container flex sm:justify-between justify-center overflow-hidden items-center gap-10 max-sm:flex-col">
        <p className="text-n-4 caption lg:block">
          © {new Date().getFullYear()}. All rights reserved.
        </p>
        <ul className="flex flex-wrap gap-5">
          {socials.map((social) => (
            <a
              key={social.id}
              href={social.url}
              target="_blank"
              className="flex justify-center items-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
            >
              <img
                src={social.iconUrl}
                alt={social.title}
                width={16}
                height={16}
              />
            </a>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export default Footer;
