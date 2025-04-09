"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import { signout } from "@/lib/auth-actions";

const LoginButton = ({
  setUser,
}: {
  setUser: React.Dispatch<React.SetStateAction<any>>;
}) => {
  const [user, setLocalUser] = useState<any>(null);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setLocalUser(user);
      setUser(user);
    };
    fetchUser();
  }, [setUser]);

  if (user) {
    return (
      <Button
        onClick={() => {
          signout();
          setLocalUser(null);
          setUser(null);
        }}
      >
        Log out
      </Button>
    );
  }

  return (
    <Button
      variant="outline"
      onClick={() => {
        router.push("/login");
      }}
    >
      Login
    </Button>
  );
};

export default LoginButton;
