import { real } from "drizzle-orm/cockroach-core";
import { int, text } from "drizzle-orm/sqlite-core";

import { app } from "./casing";

export const location = app.table("location", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  slug: text().notNull().unique(),
  description: text(),
  lat: real().notNull(),
  long: real().notNull(),
  createdAt: int().notNull().$default(() => Date.now()),
  updatedAt: int().notNull().$default(() => Date.now()).$onUpdate(() => Date.now()),
});
