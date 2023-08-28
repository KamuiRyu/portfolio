import Link from "next/link";
import useSocials from "./useSocials";

const Socials = () => {
  const { socialsData } = useSocials();
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialsData.map((social, index) => {
        return (
          <Link
            key={index}
            href={social.path}
            className="hover:text-accent transition-all duration-300"
            target="_black" rel="external"
            alt={`Profile ${social.name}`}
          >
            {social.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
