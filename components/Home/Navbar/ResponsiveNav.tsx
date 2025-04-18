"use client";
import React, { useState } from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { User } from "@supabase/supabase-js";

const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const handNavShow = () => setShowNav(true);
  const handleCloseNav = () => setShowNav(false);
  return (
    <div>
      <Nav openNav={handNavShow} setUser={setUser} user={user} />
      <MobileNav showNav={showNav} closeNav={handleCloseNav} user={user} />
    </div>
  );
};

export default ResponsiveNav;
