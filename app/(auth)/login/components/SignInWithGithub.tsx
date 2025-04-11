"use client";

import React from "react";
import BaseIcon from "@/components/BaseIcons/BaseIcon";
import { Button } from "@/components/ui/button";
import { signInWithGithub } from "@/lib/auth-actions";

const SignInWithGithub = () => {
  return (
    <Button
      type="button"
      variant="outline"
      className="w-full"
      onClick={() => {
        signInWithGithub();
      }}
    >
      <BaseIcon icon="Github" className="mr-2" />
      Login with Github
    </Button>
  );
};

export default SignInWithGithub;
