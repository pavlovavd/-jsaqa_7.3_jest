const sorting = require("../../app");

describe("Books names test suit", () => {
  test("should be sorted in ascending order", () => {
    expect(
      sorting.sortByName([
        "Гарри Поттер",
        "Властелин Колец",
        "Волшебник изумрудного города",
      ])
    ).toEqual([
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]);
  });

  test("not sorted", () => {
    expect(
      sorting.sortByName(["Гарри Поттер", "Гарри Поттер", "Гарри Поттер"])
    ).toEqual(["Гарри Поттер", "Гарри Поттер", "Гарри Поттер"]);
  });
});