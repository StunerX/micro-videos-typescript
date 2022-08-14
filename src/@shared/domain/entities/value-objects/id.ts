import InvalidIdError from "@src/@shared/errors/invalid-id.error";
import { v4 as uuid, validate } from "uuid";

export default class Id {
  constructor(private readonly id: string) {
    this.id = id || uuid();
    this.validate();
  }

  get value(): string {
    return this.id;
  }

  private validate(): void {
    if (!validate(this.id)) throw new InvalidIdError();
  }
}
