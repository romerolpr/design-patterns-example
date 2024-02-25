import { FileImage } from "../../domain/entities/file-image";
import { IStorageTargetImageDestinationService } from "../../domain/services/storage-target-image-destination.service";

export class StorageTargetImageDestinationService
  implements IStorageTargetImageDestinationService
{
  /**
   * The `upload` function in TypeScript takes a `FileImage` parameter and returns a Promise that
   * resolves to void.
   * @param {FileImage} fileImage - The `fileImage` parameter is likely an object representing an image
   * file that you want to upload. It could contain properties such as the file name, file size, file
   * type, and the actual file data.
   */
  upload(fileImage: FileImage): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
