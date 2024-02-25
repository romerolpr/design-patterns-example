import { FileImage } from "../../domain/entities/file-image";
import { IImageConverterToAVIFService } from "../../domain/services/image-converter-to-avif.service";

export class ImageConverterToAVIFService
  implements IImageConverterToAVIFService
{
  /**
   * The function `convertToAvif` in TypeScript takes a `FileImage` object as input and returns a
   * Promise that resolves to the same `FileImage` object after converting it to AVIF format.
   * @param {FileImage} fileImage - The `fileImage` parameter represents an image file that you want to
   * convert to the AVIF format. To implement the `convertToAvif` function, you would typically need to
   * read the image file, perform the conversion to AVIF format, and then return the resulting AVIF
   * image file.
   */
  convertToAvif(fileImage: FileImage): Promise<FileImage> {
    throw new Error("Method not implemented.");
  }
  
}
