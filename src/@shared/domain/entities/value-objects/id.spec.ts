import InvalidIdError from "@src/@shared/errors/invalid-id.error";
import Id from "./id";

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
});
