import Image from "next/image";
import tower from "@/public/hero section/menara mrp.png";

const Hero = () => {
  return (
      <section
          data-testid="hero-section"
          className={"relative flex h-[650px] w-full"}
      >
        <HeroBackground />
        <div className={"container mx-auto flex "}>
          <HeroLeftSide />
          <HeroRightSide />
        </div>
      </section>
  );
};
export default Hero;

const HeroBackground = () => {
  return (
      <div className={"absolute -z-10 flex size-full"}>
        <div className="glassmorphic-lg h-full grow"></div>
        <div className="hidden h-full grow bg-secondary md:block"></div>
      </div>
  );
};

const HeroLeftSide = () => {
  return (
      <div className={"relative flex size-full flex-col justify-center md:w-1/2"}>
        <p className={"text-center text-4xl text-muted-foreground md:text-left"}>
          Selamat Datang di
        </p>
        <h1
            className={
              "my-2 text-center text-7xl font-bold text-primary md:text-left"
            }
        >
          Masjid Raden Patah
        </h1>
        <p className={"text-center text-3xl text-muted-foreground md:text-left"}>
          Universitas Brawijaya
        </p>
      </div>
  );
};

const HeroRightSide = () => {
  return (
      <div className={"relative hidden h-full w-1/2 md:block"}>

        <div
            className={
              "absolute bottom-0 left-1/2 h-[566px] w-[353px] -translate-x-1/2 rounded-3xl rounded-b-none border-8 border-b-0 border-white"
            }
        />
        <Image
            src={tower}
            alt={"Gambar Menara MRP"}
            className={"absolute bottom-0 left-1/2 -translate-x-1/2"}
        />
      </div>
  );
};
