const Nothing = {
  _tag: "Nothing",
  map: () => Nothing,
  flatMap: () => Nothing,
  unwrapOr: (or) => or,
};

const Just = (value) => ({
  _tag: "Just",
  value,
  map: (f) => Just(f(value)),
  flatMap: (f) => f(value),
  unwrapOr: () => value,
});

export const Maybe = (value) => {
  if (value === null || value === undefined) {
    return Nothing;
  }
  if (typeof value === "string" && value === "") {
    return Nothing;
  }
  if (Array.isArray(value) && value.length === 0) {
    return Nothing;
  }
  if (typeof value === "object" && JSON.stringify(value) === "") {
    return Nothing;
  }
  return Just(value);
};
