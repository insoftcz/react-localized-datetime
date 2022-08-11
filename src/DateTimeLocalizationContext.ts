import { createContext, useContext } from "react";

const DateTimeLocalizationContext = createContext("en-us");

export const DateTimeLocalizationProvider =
  DateTimeLocalizationContext.Provider;
export const DateTimeLocalizationConsumer =
  DateTimeLocalizationContext.Consumer;
export const useDateTimeLocalizationContext = () =>
  useContext(DateTimeLocalizationContext);
