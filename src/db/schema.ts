import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const CurriculumLinks = sqliteTable("curriculum_links_table", {
  id: int().primaryKey({ autoIncrement: true }),
  title: text().notNull(),
  link: text(),
});

export type CurriculumLinksType = typeof CurriculumLinks.$inferSelect;

function generateUUID() {
  return crypto.randomUUID();
}

export const phases = sqliteTable("phases", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => generateUUID()),
  title: text("title").notNull(),
  orderIndex: int("order_index").notNull(),
});

export const topics = sqliteTable("topics", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => generateUUID()),
  phasesId: text("phases_id")
    .notNull()
    .references(() => phases.id),
  title: text("title").notNull(),
  orderIndex: int("order_index").notNull(),
});

export const resources = sqliteTable("resources", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => generateUUID()),
  phasesId: text("phases_id")
    .notNull()
    .references(() => phases.id),
  topicsId: text("topics_id")
    .notNull()
    .references(() => topics.id),
  title: text("title").notNull(),
  orderIndex: int("order_index").notNull(),
});

export type PhaseSelectType = typeof phases.$inferSelect;
export type PhaseInsertType = typeof phases.$inferInsert;
export type TopicType = typeof topics.$inferSelect;
export type ResourceType = typeof resources.$inferSelect;
