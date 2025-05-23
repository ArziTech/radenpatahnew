"use client";
import React, { useState } from "react";
// import Image from "next/image";
// import mrplogo from "@/public/icons/Logo MRP Horizontal Text Black.png";

import MenuToggle from "@/components/MenuToggle";
import MobileNavbar from "@/components/MobileNavbar";
// import NavLink from "@/components/NavLink";
import MrpHorizontal from "@/components/MrpHorizontal";

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(false);
  return (
    <header className={"fixed inset-x-0 z-40 bg-white/50 backdrop-blur-2xl"}>
      <nav className={"container min-h-20 mx-auto flex w-full items-center" +
          " justify-between"}>
        <div>
          {/*<Image*/}
          {/*  height={70}*/}
          {/*  src={mrplogo}*/}
          {/*  alt={"Logo Masjid Raden Patah"}*/}
          {/*  quality={100}*/}
          {/*/>*/}
          <MrpHorizontal className={'max-h-20'}></MrpHorizontal>
        </div>
        <div className={"hidden gap-4 md:flex lg:gap-8"}>
        </div>
        <MenuToggle
          value={isNavbarOpen}
          onChange={() => setIsNavbarOpen((prev) => !prev)}
        />
        <div className="absolute top-0 size-full md:hidden">
          <MobileNavbar isNavbarOpen={isNavbarOpen} />
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
