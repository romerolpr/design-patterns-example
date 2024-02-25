import { FileImage } from "../../domain/entities/file-image";
import { IStorageSourceImageExtractionService } from "../../domain/services/storage-source-image-extraction.service";

export class StorageSourceImageExtractionService
  implements IStorageSourceImageExtractionService
{
  /**
   * The function extract takes a file key from storage and returns a Promise containing a FileImage.
   * @param {string} fileKeyFromStorage - File key used to identify the file in the storage system.
   */
  extract(fileKeyFromStorage: string): Promise<FileImage> {
    throw new Error("Method not implemented.");
  }
}
