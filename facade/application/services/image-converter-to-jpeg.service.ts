import { FileImage } from "../../domain/entities/file-image";
import { IImageConverterToJPEGService } from "../../domain/services/image-converter-to-jpeg.service";

export class ImageConverterToJPEGService
  implements IImageConverterToJPEGService
{
  /**
   * The function `convertToJpeg` is a placeholder method that has not been implemented yet.
   * @param {FileImage} fileImage - The `fileImage` parameter in the `convertToJpeg` function likely
   * represents an image file that needs to be converted to the JPEG format. The function is expected
   * to take this `FileImage` object as input and return a Promise that resolves to the converted
   * `FileImage` in JPEG format
   */
  convertToJpeg(fileImage: FileImage): Promise<FileImage> {
    throw new Error("Method not implemented.");
  }
}
