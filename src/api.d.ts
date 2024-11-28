import type { paths } from "./api.gen";
import type { Get, StringKeyOf, ValueOf } from "type-fest";

type HttpMethods = "get" | "post" | "put" | "delete";

type Path<TMethod extends HttpMethods> = ValueOf<{
  [Path in StringKeyOf<paths>]: Get<
    paths,
    `${Path}.${TMethod}`
  > extends undefined
    ? never
    : Path;
}>;

type GetPath = Path<"get">;
