import { pgTable, text, integer, timestamp } from "drizzle-orm/pg-core";

export const arenas = pgTable("arenas", {
	id: integer("arena_id").primaryKey(),
	nome: text("arena_nome").notNull(),
	email: text("arena_email").notNull(),
	senha: text("arena_senha").notNull(),
	createdAt: timestamp("create_at", { withTimezone: true })
		.notNull()
		.defaultNow(),
});
