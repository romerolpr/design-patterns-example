import { FileImage } from "../../domain/entities/file-image";
import { IImageConverterUseCase } from "../../domain/use-cases/image-converter.use-case";
import { IImageConverterToAVIFService } from "../../domain/services/image-converter-to-avif.service";
import { IImageConverterToJPEGService } from "../../domain/services/image-converter-to-jpeg.service";
import { IImageConverterToPNGService } from "../../domain/services/image-converter-to-png.service";
import { IImageConverterToWEBPService } from "../../domain/services/image-converter-to-webp.service";
import { IStorageSourceImageExtractionService } from "../../domain/services/storage-source-image-extraction.service";
import { IStorageTargetImageDestinationService } from "../../domain/services/storage-target-image-destination.service";
import { IImageFormatByClientSetupService } from "../../domain/services/image-format-by-client-setup.service";
import { ImageFormats } from "../../domain/entities/image-format";

/* The `ImageConverterUseCase` class asynchronously converts an image file to a specified format based
on client setup and uploads the converted image to a target destination. */
export class ImageConverterUseCase implements IImageConverterUseCase {
  convertedImage: FileImage;

  constructor(
    private readonly _imageConverterToAVIFService: IImageConverterToAVIFService,
    private readonly _imageConverterToJpegService: IImageConverterToJPEGService,
    private readonly _imageConverterToPngService: IImageConverterToPNGService,
    private readonly _imageConverterToWebpService: IImageConverterToWEBPService,
    private readonly _storageSourceImageExtractionService: IStorageSourceImageExtractionService,
    private readonly _storageTargetImageDestination: IStorageTargetImageDestinationService,
    private readonly _imageFormatByClientSetup: IImageFormatByClientSetupService
  ) {}
  /**
   * The `convert` function asynchronously converts an image file to a specified format based on client
   * setup and uploads the converted image to a target destination.
   * @param {string} fileKeyFromStorage - The `fileKeyFromStorage` parameter is a string that
   * represents the key or identifier of the file in the storage system that you want to convert to a
   * different image format.
   * @param {Request} request - The `request` parameter in the `convert` function is likely an object
   * that contains information about the client making the request. This information is used to
   * determine the image format to convert to based on the client setup. The `getClientSetup` method
   * retrieves the client setup from the request, and the `
   * @returns The `convert` function returns a Promise that resolves to a `FileImage` object, which is
   * the converted image after processing based on the specified format determined by the client setup.
   */
  async convert(
    fileKeyFromStorage: string,
    request: Request
  ): Promise<FileImage> {
    const clientSetup = this._imageFormatByClientSetup.getClientSetup(request);
    const formatToConverter =
      this._imageFormatByClientSetup.getFormatByClientSetup(clientSetup);

    const image = await this._storageSourceImageExtractionService.extract(
      fileKeyFromStorage
    );

    if (formatToConverter === ImageFormats.AVIF) {
      this.convertedImage =
        await this._imageConverterToAVIFService.convertToAvif(image);
    }

    if (formatToConverter === ImageFormats.JPEG) {
      this.convertedImage =
        await this._imageConverterToJpegService.convertToJpeg(image);
    }

    if (formatToConverter === ImageFormats.PNG) {
      this.convertedImage = await this._imageConverterToPngService.convertToPng(
        image
      );
    }

    if (formatToConverter === ImageFormats.WEBP) {
      this.convertedImage =
        await this._imageConverterToWebpService.convertToWebp(image);
    }

    // optionally upload. It just an example code implemenation
    await this._storageTargetImageDestination.upload(this.convertedImage);

    return this.convertedImage;
  }
}
