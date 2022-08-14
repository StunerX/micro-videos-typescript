import InvalidIdError from "@src/@shared/errors/invalid-id.error";
import Category from "./category";

describe("Category unit test", () => {
  it("should throws if invalid name is provided", () => {
    const payload = {
      name: "",
    };

    expect(() => new Category(payload)).toThrow();
  });

  it("should create a category without id", () => {
    const created_at = new Date();
    const payload = {
      name: "any_name",
      description: "any_description",
      created_at,
    };

    const category = new Category(payload);

    expect(category).toBeInstanceOf(Category);
    expect(category.id).toBeTruthy();
    expect(category.name).toBe("any_name");
    expect(category.description).toBe("any_description");
    expect(category.is_active).toBe(true);
    expect(category.created_at).toBe(created_at);
  });

  it("should create a category without description", () => {
    const created_at = new Date();
    const payload = {
      name: "any_name",
      is_active: true,
      created_at,
    };

    const category = new Category(payload);

    expect(category).toBeInstanceOf(Category);
    expect(category.name).toBe("any_name");
    expect(category.description).toBeUndefined();
    expect(category.is_active).toBe(true);
    expect(category.created_at).toBe(created_at);
  });

  it("should create a category without is_active", () => {
    const created_at = new Date();
    const payload = {
      name: "any_name",
      description: "any_description",
      created_at,
    };

    const category = new Category(payload);

    expect(category).toBeInstanceOf(Category);
    expect(category.name).toBe("any_name");
    expect(category.description).toBe("any_description");
    expect(category.is_active).toBe(true);
    expect(category.created_at).toBe(created_at);
  });

  it("should create a category without created_at", () => {
    const payload = {
      name: "any_name",
      description: "any_description",
      is_active: true,
    };

    const category = new Category(payload);

    expect(category).toBeInstanceOf(Category);
    expect(category.name).toBe("any_name");
    expect(category.description).toBe("any_description");
    expect(category.is_active).toBe(true);
    expect(category.created_at).toBeInstanceOf(Date);
  });
});
