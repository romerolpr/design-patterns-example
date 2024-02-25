import { FileImage } from "../entities/file-image";

export interface IImageConverterUseCase {
  convert(fileKeyFromStorage: string, request: Request): Promise<FileImage>;
}
