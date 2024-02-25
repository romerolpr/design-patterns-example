import { FileImage } from "../../domain/entities/file-image";
import { IImageConverterToPNGService } from "../../domain/services/image-converter-to-png.service";

export class ImageConverterToPNGService implements IImageConverterToPNGService {
  /**
   * The function `convertToPng` takes a `FileImage` as input and returns a Promise that resolves to
   * the same `FileImage`.
   * @param {FileImage} fileImage - The `fileImage` parameter represents an image file that you want to
   * convert to a PNG format. The function `convertToPng` takes this `FileImage` as input and returns a
   * Promise that resolves to the converted PNG `FileImage`.
   */
  convertToPng(fileImage: FileImage): Promise<FileImage> {
    throw new Error("Method not implemented.");
  }
}
