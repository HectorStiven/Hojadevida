import Link from "next/link";
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiBehanceLine,
  RiPinterestLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiYoutubeLine />
      </Link>

      <a 
        href="https://www.instagram.com/hectorvigo.a/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-accent transition-all duration-300"
      >
        <RiInstagramLine />
      </a>

      <a
        href="https://www.facebook.com/hectorvigo.a/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-accent transition-all duration-300"
      >
        <RiFacebookLine />
      </a>



      <a 
        href="https://www.instagram.com/hectorvigo.a/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-accent transition-all duration-300"
      >
        <RiDribbbleLine />
      </a>

      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiBehanceLine />
      </Link>

      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiPinterestLine />
      </Link>
    </div>
  );
};

export default Socials;
