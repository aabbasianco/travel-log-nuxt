import { defineRelations } from "drizzle-orm";

import * as schema from "./schema";

export const relations = defineRelations(schema, (/* r */) => ({
  // Define relationships between your tables here.
}));
