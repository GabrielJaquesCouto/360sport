import { pgTable, text, integer, timestamp } from "drizzle-orm/pg-core";

export const arenas = pgTable("arenas", {
	id: integer("arena_id").primaryKey(),
	nome: text("arena_nome").notNull(),
	email: text("arena_email").notNull(),
	senha: text("arena_senha").notNull(),
});

export const recursos = pgTable("recursos", {
	id: integer("recursos_id").primaryKey(),
	tipo: text("recurso_tipo").notNull(),
	camera: text("recurso_camera").notNull(),
	arena_id: integer("arena_id")
	.references(() => arenas.id)
});

export const funcionarios = pgTable("funcionarios", {
	id: integer("funcionarios_id").primaryKey(),
	tipo: text("funcionario_tipo").notNull(),
	email: text("funcionario_email").notNull(),
	senha: text("funcionario_senha").notNull(),
	arena_id: integer("arena_id").references(() => arenas.id)
})

export const clientes = pgTable("clientes", {
	id: integer("cliente_id").primaryKey(),
	nome: text("cliente_nome").notNull(),
	email: text("cliente_email").notNull(),
	senha: text("cliente_senha").notNull(),
})

export const reservas = pgTable("reservas", {
	id: integer("reserva_id").primaryKey(),
	data: timestamp("reserva_data", { withTimezone: true }).notNull(),
	recurso_id: integer("recurso_id").references(() => recursos.id),
	cliente_id: integer("cliente_id").references(() => clientes.id),
})

export const cameras = pgTable("cameras", {
	id: integer("camera_id").primaryKey(),
	arena_id: integer("arena_id").references(() => arenas.id),
	recursos_id: integer("recursos_id").references(() => recursos.id),
})

export const gravacoes = pgTable("gravacoes", {
	id: integer("gravacoes_id").primaryKey(),
	local_salvo: text("gravacao_l_salvo").notNull(),
	camera_id: integer("").references(() => cameras.id)
})

export const endereco_arena = pgTable("endereco_arena",{
	id: integer("end_arena_id").primaryKey(),
	logradouro: text("logradouro").notNull(),
	bairro: text("bairro").notNull(),
	municipio: text("municipio").notNull(),
	cep: text("cep").notNull(),
	complemento: text("complemento").notNull(),
	arena_id: integer("arena_id").references(() => arenas.id),
})

export const vendas = pgTable("", {
	id: integer("venda_id").primaryKey(),
	tipo: text("venda_tipo").notNull(),
	status: text("venda_status").notNull(),
	cliente_id: integer("cliente_id").references(() => clientes.id),
	gravacao_id: integer("gravacao_id").references(() => gravacoes.id),
})
 