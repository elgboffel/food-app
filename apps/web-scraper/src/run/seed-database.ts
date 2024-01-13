import "dotenv/config";
import { Database } from "database";
import { seedDatabase } from "../features/valdemarsro/seed-database";

async function main() {
  const { db, dispose } = Database.getInstance();

  await seedDatabase(db);

  dispose();
}

main();
