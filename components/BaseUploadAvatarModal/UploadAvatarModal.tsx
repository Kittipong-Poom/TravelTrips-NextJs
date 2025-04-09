// import React, { useState } from "react";
// import Image from "next/image";
// import { createClient } from "@/utils/supabase/client";
// import { v4 as uuidv4 } from "uuid";

// interface UploadAvatarModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   userId: string;
//   onUploadSuccess: (newAvatarUrl: string) => void;
// }

// const UploadAvatarModal: React.FC<UploadAvatarModalProps> = ({
//   isOpen,
//   onClose,
//   userId,
//   onUploadSuccess,
// }) => {
//   const [previewUrl, setPreviewUrl] = useState<string | null>(null);
//   const [selectedFile, setSelectedFile] = useState<File | null>(null);
//   const [loading, setLoading] = useState(false);

//   const supabase = createClient();

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       setSelectedFile(file);
//       setPreviewUrl(URL.createObjectURL(file));
//     }
//   };

//   const handleUpload = async () => {
//     if (!selectedFile) return;
//     setLoading(true);

//     const fileName = `${userId}/${uuidv4()}.png`;

//     const { error: uploadError } = await supabase.storage
//       .from("avatars")
//       .upload(fileName, selectedFile, {
//         cacheControl: "3600",
//         upsert: true,
//       });

//     if (uploadError) {
//       alert("เกิดข้อผิดพลาดระหว่างอัปโหลด: " + uploadError.message);
//       setLoading(false);
//       return;
//     }

//     const { data: publicUrlData } = supabase.storage
//       .from("avatars")
//       .getPublicUrl(fileName);

//     const publicUrl = publicUrlData?.publicUrl;

//     // ✅ แก้ตรงนี้ให้ update ไปยัง table `profiles`
//     const { error: updateError } = await supabase
//       .from("profiles")
//       .update({ avatar_url: publicUrl })
//       .eq("id", userId);

//     if (updateError) {
//       alert("เกิดข้อผิดพลาดในการบันทึกลิงก์รูปภาพ: " + updateError.message);
//     } else {
//       alert("อัปโหลดรูปภาพสำเร็จ!");
//       onUploadSuccess(publicUrl || "");
//       onClose();
//     }

//     setLoading(false);
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999]">
//       <div className="bg-white p-4 rounded shadow-lg max-w-sm w-full">
//         <h2 className="text-lg font-semibold mb-4">อัปโหลดรูปโปรไฟล์</h2>

//         {previewUrl && (
//           <Image
//             src={previewUrl}
//             alt="Preview"
//             width={120}
//             height={120}
//             className="rounded-full mx-auto mb-4"
//           />
//         )}

//         <input type="file" accept="image/*" onChange={handleFileChange} />

//         <div className="flex justify-end space-x-2 mt-4">
//           <button onClick={onClose} className="text-gray-500">
//             ยกเลิก
//           </button>
//           <button
//             onClick={handleUpload}
//             disabled={loading}
//             className="bg-blue-500 text-white px-4 py-2 rounded"
//           >
//             {loading ? "กำลังอัปโหลด..." : "อัปโหลด"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UploadAvatarModal;
