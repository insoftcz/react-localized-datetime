import { createElement, Fragment, ReactNode } from "react";
import { useDateTimeLocalizationContext } from "./DateTimeLocalizationContext";

const typeToMethodMap: Record<
  "date" | "time" | "datetime",
  "toLocaleDateString" | "toLocaleTimeString" | "toLocaleString"
> = {
  date: "toLocaleDateString",
  time: "toLocaleTimeString",
  datetime: "toLocaleString",
};

const localizedDateTimeCreator =
  (type: "date" | "time" | "datetime") =>
  ({ children }: { children: string }) => {
    const lang = useDateTimeLocalizationContext();

    const localized = new Date(children)[typeToMethodMap[type]](lang);

    return createElement(
      Fragment,
      {},
      localized === "Invalid Date" ? "" : localized
    );
  };

export default localizedDateTimeCreator;
