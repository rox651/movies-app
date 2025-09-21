import type { CloudinaryUploadResult } from "@/domain/entities/common/cloudinary";
import { API_URL } from "@/domain/entities/common/constants";

export const uploadImageToCloudinary = async (
  file: File,
): Promise<CloudinaryUploadResult> => {
  if (!API_URL) throw new Error("Missing API_URL");

  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch(`${API_URL}/api/upload/image`, {
    method: "POST",
    body: formData,
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Upload failed: ${res.status} ${text}`);
  }
  return (await res.json()) as CloudinaryUploadResult;
};
