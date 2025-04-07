import dayjs from "dayjs";

import en from "dayjs/locale/en";
import pt from "dayjs/locale/pt";

import { DEFAULT_LANG, useTranslation } from "../config";
import { DEFAULT_DATE_FORMAT } from "./contants";
import { capitalize } from "./text";

export type DateLikeObj = {
  start: string;
  end?: string;
};

export function formatDate(
  obj: DateLikeObj,
  language = DEFAULT_LANG,
  fallback?: string,
) {
  const { t } = useTranslation({ language });
  const locale = language.split("-")[0];

  try {
    const { start, end } = obj;

    const a = capitalize(
      dayjs(start).locale(locale).format(DEFAULT_DATE_FORMAT),
    );
    let b = "";

    if (end?.length) {
      b = capitalize(dayjs(end).locale(locale).format(DEFAULT_DATE_FORMAT));
    } else if (fallback) {
      b = t(fallback);
    }

    return a.concat(b?.length ? ` - ${b}` : "");
  } catch {
    return "";
  }
}
