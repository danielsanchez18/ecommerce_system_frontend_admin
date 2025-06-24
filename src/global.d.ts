import type { IStaticMethods } from "preline/dist";

declare global {
  interface Window {
    // Optional third-party libraries
    _;
    $: typeof import("jquery");
    jQuery: typeof import("jquery");
    DataTable;
    Dropzone;
    VanillaCalendarPro;
    Lodash;

    // Preline UI
    HSStaticMethods: IStaticMethods;
  }
}

export {};