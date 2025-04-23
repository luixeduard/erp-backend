import { Controller } from "@nestjs/common";
import { GenericController } from "src/core/global/controller/base.controller";
import { CreateColorDTO } from "./dto/create.dto";
import { FindColorDTO } from "./dto/find.dto";
import { PatchColorDTO, UpdateColorDTO } from "./dto/update.dto";
import { ColorDTO, ColorPaggingDTO } from "./dto/color.dto";
import { ColorService } from "./color.service";

@Controller('color')
export class ColorController extends GenericController<CreateColorDTO, FindColorDTO, UpdateColorDTO, PatchColorDTO, ColorDTO, ColorPaggingDTO>(
  CreateColorDTO,
  FindColorDTO,
  UpdateColorDTO,
  PatchColorDTO,
  ColorDTO,
  ColorPaggingDTO,
  'Color'
) {
  constructor(private readonly colorService: ColorService) {
    super(colorService);
  }
}