import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

async function test() {
	/* const user = await db.user.create({
		data: {
			username: "tester",
		},
	}); */
	const user = await db.user.findMany({
		where: {
			username: "nulnu",
		},
	});
	console.log(user);
}

test();

export default db;
