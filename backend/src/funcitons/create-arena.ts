import { db } from '../db'
import { arenas } from '../db/schema'


interface CreateArenaRequest {
    id: IntegerConfig;
	nome: string;
	email: string;
	senha: string;
}

export async function createArena ({id, nome, email, senha} : CreateArenaRequest) {
    const result = await db.insert(arenas).values({
        id,
        nome, 
        email, 
        senha
    })
};