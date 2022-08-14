import InvalidIdError from "@src/@shared/errors/invalid-id.error";
import Id from "./id";
import * as _uuid from "uuid";

jest.mock("uuid", () => {
  return {
    __esModule: true,
    ...jest.requireActual("uuid"),
  };
});

describe("Id unit test", () => {
  it("should throws InvalidIdError if invalid id is provided", () => {
    const invalid_id = "invalid_id";

    expect(() => new Id(invalid_id)).toThrowError(InvalidIdError);
  });

  it("should call validate", () => {
    const invalid_id = "invalid_id";
    const validateSpyOn = jest.spyOn(Id.prototype as any, "validate");

    expect(() => new Id(invalid_id)).toThrowError(InvalidIdError);
    expect(validateSpyOn).toHaveBeenCalled();
  });

  it("should receive a valid id if validate pass", () => {
    const valid_id = "valid_id";

    jest.spyOn(_uuid, "validate").mockReturnValue(true);

    const id = new Id(valid_id);

    expect(id.value).toBe(valid_id);
  });
});
