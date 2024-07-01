import { Maybe } from "./maybe.js";

/*
 * DOM always store elements in the Maybe monad.
 * This way we can avoid null pointer exceptions.
 * We can chain methods on the DOM object.
 * We can map over the element to apply a function.
 * We can flatMap over the element to apply a function that returns a DOM object.
 * We can use the identity method to return the DOM object.
 * {param} selector {string}
 * {param} el {Just<HTMLElement> | Nothing}
 */
export const DOM = (selector, el) => {
  /*
   * If el is not null, check if it is a Just or Nothing.
   * If it is a Just, return it.
   * If it is a Nothing, return Nothing.
   * If el is null, query the document for the selector.
   * This is because transformations chains pass around also the element in order to avoid querying the DOM multiple times.
   */
  const element =
    el && el !== null
      ? el?._tag === "Just"
        ? el
        : Nothing
      : Maybe(document.querySelector(selector));

  return {
    element: element,
    _tag: "DOM",
    from: (selector) => DOM(selector),
    map: (f) => element.map(f),
    flatMap: (f) => element.map(f),
    identity: (DOM) => DOM,
  };
};
