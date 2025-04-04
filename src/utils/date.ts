import dayjs from "dayjs";
import { DEFAULT_LANG, useTranslation } from "../config";
import { DEFAULT_DATE_FORMAT } from "./contants";

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

  try {
    const { start, end } = obj;

    const a = dayjs(start).format(DEFAULT_DATE_FORMAT);
    let b = "";

    if (end?.length) {
      b = dayjs(end).format(DEFAULT_DATE_FORMAT);
    } else if (fallback) {
      b = t(fallback);
    }

    return a.concat(b?.length ? ` - ${b}` : "");
  } catch {
    return "";
  }
}
