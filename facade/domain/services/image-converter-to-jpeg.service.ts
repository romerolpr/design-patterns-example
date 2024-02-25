import { FileImage } from "../entities/file-image";

export interface IImageConverterToJPEGService {
  convertToJpeg(fileImage: FileImage): Promise<FileImage>;
}
