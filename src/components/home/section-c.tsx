import {
  MoonStarIcon,
  CatIcon,
  SendIcon,
  ThumbsUp,
  UsersRound,
} from "lucide-react";

export function SectionC() {
  return (
    <div className="section-c">
      <div className="inner">
        <div className="heading">
          <h2>
            Grow With Our{" "}
            <span className="text-[#f6dd7c] font-bold">Community</span>
          </h2>
          <p>
            Separated they live in Bookmarks right at the coast of the famouse
            Semantics, large language ocean Separated they live in Bookmarks
            right
          </p>
        </div>

        <div className="socials">
          {SOCIAL_LIST.map((social) => (
            <SocialCard key={social.name} {...social} />
          ))}
        </div>

        <MoonStarIcon
          className="absolute opacity-25 md:opacity-100 left-[-130px] md:left-[-100px] text-primary top-[25%]"
          size={200}
          strokeWidth={1}
        />

        <CatIcon
          className="absolute opacity-25 md:opacity-100 top-[-30px] rotate-[-20deg] text-primary"
          strokeWidth={1}
          size={80}
        />

        <SendIcon
          className="absolute opacity-25 md:opacity-100 top-[-30px] left-[120px] rotate-[10deg] text-blue-400"
          strokeWidth={1}
          size={70}
        />

        <ThumbsUp
          className="absolute opacity-25 md:opacity-100 top-[30px] right-[-20px] rotate-[10deg] text-primary"
          strokeWidth={1}
          size={70}
        />

        <UsersRound
          className="absolute opacity-25 md:opacity-100 top-[120px] right-[-10px] rotate-[10deg] text-red-400"
          strokeWidth={1}
          size={70}
        />
      </div>
    </div>
  );
}

type SocialCardProps = {
  name: string;
  image: string;
  href: string;
  label: string;
};
export function SocialCard({ name, image, href, label }: SocialCardProps) {
  return (
    <div className="social-card">
      <a href={href} target="_blank" rel="noreferrer">
        <figure>
          <img src={image} alt={name} />
          <figcaption>{label}</figcaption>
        </figure>
      </a>
    </div>
  );
}

const SOCIAL_LIST = [
  {
    name: "Discord",
    image: "https://luncswap.com/discord.png",
    href: "https://discord.gg/luncswap",
    label: "JOIN CHANNEL",
  },
  {
    name: "Telegram",
    image: "https://luncswap.com/telegram.png",
    href: "https://t.me/luncswap",
    label: "JOIN GROUP",
  },
] as const;
