import { ImageFormat } from "./image-format";

export type FileImage = {
  key: string;
  name: string;
  originalFormat: string;
  convertedFormat: ImageFormat;
  size: number;
};
