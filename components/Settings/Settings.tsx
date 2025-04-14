"use client";

import { useEffect, useRef, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import Image from "next/image";
import { Button } from "../ui/button";
import { User } from "@supabase/auth-js";

const SettingsComponent = () => {
  const supabase = createClient();
  const [user, setUser] = useState<User | null>(null);
  const [fullName, setFullName] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();

      if (error) {
        console.error("Failed to get user:", error.message);
        return;
      }
      setUser(user);
      setFullName(user?.user_metadata?.full_name || "");
      setAvatarUrl(user?.user_metadata?.avatar_url || "");
      setEmail(user?.email || "");
      setLoading(false);
    };

    getUser();
  }, []);

  const handleUpdateProfile = async () => {
    const { error } = await supabase.auth.updateUser({
      data: {
        full_name: fullName,
        avatar_url: avatarUrl,
      },
    });

    if (error) {
      alert("❌ Failed to update profile: " + error.message);
    } else {
      alert("✅ Profile updated successfully!");
    }
  };

  const handleEmailUpdate = async () => {
    const { error } = await supabase.auth.updateUser({
      email: email,
    });

    if (error) {
      alert("❌ Failed to update email: " + error.message);
    } else {
      alert("✅ Email updated. Please verify your new email.");
    }
  };
  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file || !user) return;

    const fileExt = file.name.split(".").pop();
    const fileName = `${user.id}.${fileExt}`;
    const filePath = `avatars/${fileName}`;

    // Upload the file to Supabase storage
    const { error: uploadError } = await supabase.storage
      .from("avatars")
      .upload(filePath, file, { upsert: true });

    if (uploadError) {
      console.error("Upload failed:", uploadError.message);
      alert("❌ Upload failed: " + uploadError.message);
      return;
    }

    // Get the public URL of the uploaded file
    const { data: publicData } = supabase.storage
      .from("avatars")
      .getPublicUrl(filePath);

    const newAvatarUrl = publicData.publicUrl;

    // Update the user's avatar URL in the database
    const { error: updateError } = await supabase.auth.updateUser({
      data: { avatar_url: newAvatarUrl },
    });

    if (updateError) {
      alert("❌ Failed to update avatar URL: " + updateError.message);
    } else {
      setAvatarUrl(newAvatarUrl);
      alert("✅ Avatar updated!");
    }
  };
  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6 pt-24">
      <div className="w-full max-w-3xl space-y-8">
        <h1 className="text-2xl font-semibold text-center">Profile Settings</h1>

        {/* Avatar Section */}
        <div className="flex items-center space-x-4">
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-200 text-lg font-medium">
            {fullName
              ?.split(" ")
              .map((n: string) => n[0])
              .join("")}
          </div>
          <div>
            <span className="mb-2 block">Profile Photo</span>
            <p className="text-sm text-gray-500 mb-1">
              We support PNGs, JPEGs and GIFs under 10MB
            </p>

            <input
              type="file"
              accept="image/*"
              className="hidden"
              ref={fileInputRef}
              onChange={handleUpload}
            />

            <Button
              variant="secondary"
              className="border px-4 py-1 rounded-xl mt-1 shadow-sm text-sm"
              onClick={() => fileInputRef.current?.click()}
            >
              Upload image
            </Button>
          </div>
        </div>

        {/* Form Fields */}
        <div className="space-y-4">
          <div className="grid md:grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Full Name
              </label>
              <input
                type="text"
                className="border border-gray-300 rounded px-3 py-2 w-full"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
          </div>

          <div className="md:flex md:items-center md:space-x-4">
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">
                Email Address
              </label>
              <input
                type="email"
                className="border border-gray-300 rounded px-3 py-2 w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <p className="text-xs text-gray-500 mt-1">
                You may need to log out and back in to see any change.
              </p>
            </div>
            <Button
              className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded mt-4 md:mt-1"
              onClick={handleEmailUpdate}
            >
              Update e-mail
            </Button>
          </div>
        </div>

        {/* Avatar Preview */}
        {avatarUrl && (
          <div className="mt-4 flex justify-center">
            <Image
              src={avatarUrl}
              alt="Avatar Preview"
              width={80}
              height={80}
              className="rounded-full border"
            />
          </div>
        )}

        {/* Save Button */}
        <Button
          onClick={handleUpdateProfile}
          className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded w-full"
        >
          Save Changes
        </Button>
      </div>
    </div>
  );
};

export default SettingsComponent;
