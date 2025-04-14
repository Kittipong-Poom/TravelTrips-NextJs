"use client";

import BaseIcon from "@/components/BaseIcons/BaseIcon";
import { Button } from "@/components/ui/button";
import { signInWithGoogle } from "@/lib/auth-actions";
import React from "react";

const SignInWithGoogleButton = () => {
  return (
    <Button
      type="button"
      variant="outline"
      className="w-full"
      onClick={() => {
        signInWithGoogle();
      }}
    >
      <BaseIcon icon="Google" className="mr-2" />
    </Button>
  );
};

export default SignInWithGoogleButton;
