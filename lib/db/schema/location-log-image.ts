import { int, text } from "drizzle-orm/sqlite-core";

import { app } from "./casing";
import { locationLog } from "./location-log";

export const locationLogImage = app.table("locationLogImage", {
  id: int().primaryKey({ autoIncrement: true }),
  key: text().notNull(),
  locationLogId: int().notNull().references(() => locationLog.id),
  createdAt: int().notNull().$default(() => Date.now()),
  updatedAt: int().notNull().$default(() => Date.now()).$onUpdate(() => Date.now()),
});
