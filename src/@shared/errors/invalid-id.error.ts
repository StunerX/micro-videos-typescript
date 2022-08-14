export default class InvalidIdError extends Error {
  constructor(message?: string) {
    super(message || "id must be a valid uuid");
    this.name = "InvalidIdError";
  }
}
