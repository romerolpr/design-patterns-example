import { FileImage } from "../entities/file-image";

export interface IImageConverterToAVIFService {
  convertToAvif(fileImage: FileImage): Promise<FileImage>;
}
