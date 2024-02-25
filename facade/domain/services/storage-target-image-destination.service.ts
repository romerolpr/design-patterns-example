import { FileImage } from "../entities/file-image";

export interface IStorageTargetImageDestinationService {
  upload(fileImage: FileImage): Promise<void>;
}
