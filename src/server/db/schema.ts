// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
  index,
  pgTableCreator,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
import {z} from "zod";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `registrationsampleapp_${name}`);

export const registrants = createTable(
  "registrants",
  {
    id: serial("id").primaryKey(),
    firstname: varchar("firstname", { length: 256 }).notNull().default(""),
    lastname: varchar("lastname", { length: 256 }).notNull().default(""),
    email: varchar("email", { length: 256 }).notNull().default(""),
    mobile: varchar("mobile", { length: 15 }).notNull().default(""),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updatedAt", { withTimezone: true }),
  },
  (table) => ({
    nameIndex: index("email_idx").on(table.email),
  })
);

export type IRegistrant = typeof registrants.$inferSelect;
export type IRegistrantInsert = Omit<IRegistrant, "id" | "createdAt" | "updatedAt">;
export const RegistrantValidator = z.object({
  firstname: z.string(),
  lastname: z.string(),
  email: z.string().email(),
  mobile: z.string().regex(/^(09|\+639)\d{9}$/),
})