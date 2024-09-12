import { db } from "."
import { arenas } from "./schema"

async function seed() {
    await db.delete(arenas)
}

seed()