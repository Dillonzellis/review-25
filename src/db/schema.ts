import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const CurriculumLinks = sqliteTable("curriculum_links_table", {
  id: int().primaryKey({ autoIncrement: true }),
  title: text().notNull(),
  link: text(),
});

export type CurriculumLinksType = typeof CurriculumLinks.$inferSelect;
