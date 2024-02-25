import { FileImage } from "../../domain/entities/file-image";
import { IImageConverterToWEBPService } from "../../domain/services/image-converter-to-webp.service";

export class ImageConverterToWEBPService
  implements IImageConverterToWEBPService
{
  /* In the provided TypeScript code snippet, there is no reference to a variable or identifier
  named `t`. It seems like `t` is not defined or used within the context of the code you
  shared. If you have any specific context or additional information about `t`, please provide
  more details so that I can assist you further. */
  convertToWebp(fileImage: FileImage): Promise<FileImage> {
    throw new Error("Method not implemented.");
  }
}
