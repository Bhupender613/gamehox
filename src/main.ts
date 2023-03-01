import { ValidationPipe } from "@nestjs/common";
import { ValidatorOptions } from "@nestjs/common/interfaces/external/validator-options.interface";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import * as bodyParser from "body-parser";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use(bodyParser.json({ limit: "50mb" }));
  const config = new DocumentBuilder()
    .setTitle("GameHook API's")
    .setDescription("GameHook API description")
    .setVersion("1.0")
    .addBearerAuth()
    .addTag("mrs")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("documentation", app, document);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT);
}
bootstrap();
