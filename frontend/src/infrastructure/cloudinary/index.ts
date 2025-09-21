import { Cloudinary } from "@cloudinary/url-gen";

export const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
export const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;
const apiKey = import.meta.env.VITE_CLOUDINARY_API_KEY;

if (!cloudName) {
  console.warn("Cloudinary cloud name is not set.");
}

export const cld = new Cloudinary({
  cloud: {
    cloudName: cloudName ?? "",
    apiKey,
  },
  url: { secure: true },
});

export type { Cloudinary };
