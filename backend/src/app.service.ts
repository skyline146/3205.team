import { Injectable } from "@nestjs/common";
import { readFileSync } from "fs";
import { join } from "path";
import { User } from "./types";
import { sleep } from "./lib";

@Injectable()
export class AppService {
  private users: User[] = JSON.parse(readFileSync(join(process.cwd(), `db.json`)).toString());

  async getUsersByParams(email: string, number?: string): Promise<User[]> {
    const users = this.users.filter((user) => {
      if (number) {
        return user.email === email && user.number === number;
      }

      return user.email === email;
    });

    await sleep(5000);

    return users;
  }
}
