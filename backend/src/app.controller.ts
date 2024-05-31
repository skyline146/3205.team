import { Controller, Get, Query } from "@nestjs/common";
import { UseZodGuard } from "nestjs-zod";

import { AppService } from "./app.service";
import { GetUsersDto } from "./dtos";

import type { User } from "./types";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseZodGuard("query", GetUsersDto)
  @Get("/users")
  async getUsers(@Query() query: User): Promise<User[]> {
    return await this.appService.getUsersByParams(query.email, query.number);
  }
}
