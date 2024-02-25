import { ImageFormat } from "../entities/image-format";

export interface IImageFormatByClientSetupService {
  getClientSetup(request: Request): any;
  getFormatByClientSetup(clientSetup: any): ImageFormat;
}
