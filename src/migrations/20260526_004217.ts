import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-d1-sqlite'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.run(sql`ALTER TABLE \`pages_blocks_media_news_list_items\` ADD \`image_id\` integer REFERENCES media(id);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_media_news_list_items_image_idx\` ON \`pages_blocks_media_news_list_items\` (\`image_id\`);`)
  await db.run(sql`ALTER TABLE \`pages_blocks_media_news_list_items\` DROP COLUMN \`image\`;`)
  await db.run(sql`ALTER TABLE \`_pages_v_blocks_media_news_list_items\` ADD \`image_id\` integer REFERENCES media(id);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_media_news_list_items_image_idx\` ON \`_pages_v_blocks_media_news_list_items\` (\`image_id\`);`)
  await db.run(sql`ALTER TABLE \`_pages_v_blocks_media_news_list_items\` DROP COLUMN \`image\`;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.run(sql`PRAGMA foreign_keys=OFF;`)
  await db.run(sql`CREATE TABLE \`__new_pages_blocks_media_news_list_items\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text,
  	\`description\` text,
  	\`link\` text,
  	\`image\` text,
  	\`publication\` text,
  	\`date\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_media_news_list\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`INSERT INTO \`__new_pages_blocks_media_news_list_items\`("_order", "_parent_id", "id", "title", "description", "link", "image", "publication", "date") SELECT "_order", "_parent_id", "id", "title", "description", "link", "image", "publication", "date" FROM \`pages_blocks_media_news_list_items\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_media_news_list_items\`;`)
  await db.run(sql`ALTER TABLE \`__new_pages_blocks_media_news_list_items\` RENAME TO \`pages_blocks_media_news_list_items\`;`)
  await db.run(sql`PRAGMA foreign_keys=ON;`)
  await db.run(sql`CREATE INDEX \`pages_blocks_media_news_list_items_order_idx\` ON \`pages_blocks_media_news_list_items\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_media_news_list_items_parent_id_idx\` ON \`pages_blocks_media_news_list_items\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`__new__pages_v_blocks_media_news_list_items\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`title\` text,
  	\`description\` text,
  	\`link\` text,
  	\`image\` text,
  	\`publication\` text,
  	\`date\` text,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_media_news_list\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`INSERT INTO \`__new__pages_v_blocks_media_news_list_items\`("_order", "_parent_id", "id", "title", "description", "link", "image", "publication", "date", "_uuid") SELECT "_order", "_parent_id", "id", "title", "description", "link", "image", "publication", "date", "_uuid" FROM \`_pages_v_blocks_media_news_list_items\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_media_news_list_items\`;`)
  await db.run(sql`ALTER TABLE \`__new__pages_v_blocks_media_news_list_items\` RENAME TO \`_pages_v_blocks_media_news_list_items\`;`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_media_news_list_items_order_idx\` ON \`_pages_v_blocks_media_news_list_items\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_media_news_list_items_parent_id_idx\` ON \`_pages_v_blocks_media_news_list_items\` (\`_parent_id\`);`)
}
