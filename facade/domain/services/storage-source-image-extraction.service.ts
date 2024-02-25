import { FileImage } from "../entities/file-image";

export interface IStorageSourceImageExtractionService {
  extract(fileKeyFromStorage: string): Promise<FileImage>;
}
