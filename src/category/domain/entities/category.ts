import { v4 as uuid } from "uuid";
import { CreateCategoryEntityPayload } from "./type/create-category-entity-payload";

export default class Category {
  private readonly _id: string;
  private _name: string;
  private _description: string;
  private _is_active: boolean;
  private _created_at: Date;

  constructor(payload: CreateCategoryEntityPayload) {
    this._id = payload.id ?? uuid();
    this._name = payload.name;
    this._description = payload.description;
    this._is_active = payload.is_active ?? true;
    this._created_at = payload.created_at ?? new Date();

    this.validate();
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get description(): string {
    return this._description;
  }

  get is_active(): boolean {
    return this._is_active;
  }

  get created_at(): Date {
    return this._created_at;
  }

  validate(): void {
    if (!this.name) throw new Error("name is required");
  }
}
