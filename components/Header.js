import Image from "next/Image";
import Link from "next/link";
import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          <Link href={"/"}>
            {/* Aplicar estilos para mantener la proporción de aspecto original */}
            <div style={{ width: "220px", height: "48px" }}>
              <Image
                src={"/logoo.png"}
                alt=""
                layout="responsive" // Esta propiedad indica que mantendrá la proporción de aspecto original
                width={220}
                height={48}
                priority={true}
              />
            </div>
          </Link>
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
