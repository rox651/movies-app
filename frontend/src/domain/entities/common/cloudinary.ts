export type CloudinaryUnsignedUploadResponse = {
  secure_url: string;
  public_id: string;
};

export type CloudinaryUploadResult = {
  url: string;
  publicId: string;
};

export type UploadImageToCloudinary = (
  file: File,
) => Promise<CloudinaryUploadResult>;
