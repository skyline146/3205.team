import { Module } from "@nestjs/common";
import { ZodValidationPipe } from "nestjs-zod";
import { APP_PIPE } from "@nestjs/core";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_PIPE,
      useClass: ZodValidationPipe,
    },
  ],
})
export class AppModule {}
