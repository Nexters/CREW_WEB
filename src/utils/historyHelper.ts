import url from "url";
import { History, Location } from "history";
import queryString from "querystring";

export const getQuery = (location: Location) => {
  return queryString.parse(url.parse(location.search).query || "");
};

export const replaceUrlQuery = (history: History, query: any) => {
  history.replace({
    pathname: history.location.pathname,
    search: queryString.stringify({
      ...getQuery(history.location),
      ...query,
    }),
  });
};

export const pushUrlQuery = (history: History, query: any) => {
  history.push({
    pathname: history.location.pathname,
    search: queryString.stringify({
      ...getQuery(history.location),
      ...query,
    }),
  });
};
