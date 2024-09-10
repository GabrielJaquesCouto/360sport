CREATE TABLE IF NOT EXISTS "arenas" (
	"arena_id" integer PRIMARY KEY NOT NULL,
	"arena_nome" text NOT NULL,
	"arena_email" text NOT NULL,
	"arena_senha" text NOT NULL,
	"create_at" timestamp with time zone DEFAULT now() NOT NULL
);
