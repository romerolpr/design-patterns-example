import { FileImage } from "../entities/file-image";

export interface IImageConverterToWEBPService {
  convertToWebp(fileImage: FileImage): Promise<FileImage>;
}
