import { DEFAULT_PAGE_TITLE } from "./contants";

const toId = (val: string) => val.toLowerCase().replaceAll(" ", "_");

export function pageTitleToId(
  pageTitle = DEFAULT_PAGE_TITLE,
  suffix = "",
  preffix = "",
) {
  let id = "";

  if (preffix.length) {
    id = toId(suffix).concat("-");
  }

  id = id.concat(toId(pageTitle));

  if (suffix.length) {
    id = id.concat("-", toId(suffix));
  }

  return id;
}
