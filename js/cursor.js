import { DOM } from "./dom.js";

export class Cursor {
  constructor(highlightSelector) {
    this.highlightSelector = highlightSelector || '.cursor-target-js';
    this.setup(this.highlightSelector);
  }

  setMouseHighlight = (e) => {
    DOM("body").map((el) => el.style.setProperty("--cursor-scale", 2));
    DOM("body").map((el) =>
      el.style.setProperty(
        "--cursor-text",
        `"${e.target.getAttribute("data-cursor-text") || ""}"`
      )
    );
  };

  removeMouseHighlight = () => {
    DOM("body").map((el) => el.style.setProperty("--cursor-scale", 1));
    DOM("body").map((el) => el.style.setProperty("--cursor-text", ""));
  };

  storeMouseCoordinates = (e) => {
    DOM("body").map((el) => el.style.setProperty("--x", e.clientX + "px"));
    DOM("body").map((el) => el.style.setProperty("--y", e.clientY + "px"));
  };

  refresh = () => {
    this.setup(this.highlightSelector);
  };

  setup = (targetSelector) => {
    const mouseOverHighlightTargets = document.querySelectorAll(targetSelector);
    mouseOverHighlightTargets.forEach((target) => {
      target.addEventListener("mouseover", this.setMouseHighlight);
      target.addEventListener("mouseout", this.removeMouseHighlight);
    });
    document.addEventListener("mousemove", this.storeMouseCoordinates);

    return () => {
      mouseOverHighlightTargets.forEach((target) => {
        target.removeEventListener("mouseover", this.setMouseHighlight);
        target.removeEventListener("mouseout", this.removeMouseHighlight);
      });
      document.removeEventListener("mousemove", this.storeMouseCoordinates);
    };
  };
}
