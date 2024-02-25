import { FileImage } from "../entities/file-image";

export interface IImageConverterToPNGService {
  convertToPng(fileImage: FileImage): Promise<FileImage>;
}
