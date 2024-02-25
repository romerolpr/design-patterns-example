import { ImageFormat } from "../../domain/entities/image-format";
import { IImageFormatByClientSetupService } from "../../domain/services/image-format-by-client-setup.service";

export class ImageFormatByClientSetupService
  implements IImageFormatByClientSetupService
{
  /**
   * The function `getClientSetup` is currently throwing an error with the message "Method not
   * implemented."
   * @param {Request} request - The `request` parameter in the `getClientSetup` function likely
   * represents an object containing information or data related to a client setup process. This object
   * could include details such as client preferences, configuration settings, authentication
   * credentials, or any other relevant information needed for setting up a client.
   */
  getClientSetup(request: Request) {
    throw new Error("Method not implemented.");
  }
  /**
   * The function getFormatByClientSetup takes a client setup as input and returns an ImageFormat.
   * @param {any} clientSetup - ClientSetup is an object that contains information about the client's
   * preferences and settings for image formats. You can access properties such as preferred image
   * format, quality settings, color profile, etc.
   */
  getFormatByClientSetup(clientSetup: any): ImageFormat {
    throw new Error("Method not implemented.");
  }
}
