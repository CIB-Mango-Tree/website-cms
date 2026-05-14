import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-d1-sqlite'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.run(sql`CREATE TABLE \`pages_blocks_selector_tabs\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text,
  	\`icon\` text,
  	\`content\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_selector\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_selector_tabs_order_idx\` ON \`pages_blocks_selector_tabs\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_selector_tabs_parent_id_idx\` ON \`pages_blocks_selector_tabs\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_selector\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_selector_order_idx\` ON \`pages_blocks_selector\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_selector_parent_id_idx\` ON \`pages_blocks_selector\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_selector_path_idx\` ON \`pages_blocks_selector\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_accordion_items\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text,
  	\`content\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_accordion\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_accordion_items_order_idx\` ON \`pages_blocks_accordion_items\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_accordion_items_parent_id_idx\` ON \`pages_blocks_accordion_items\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_accordion\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_accordion_order_idx\` ON \`pages_blocks_accordion\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_accordion_parent_id_idx\` ON \`pages_blocks_accordion\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_accordion_path_idx\` ON \`pages_blocks_accordion\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_badge_list_items\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`content\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_badge_list\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_badge_list_items_order_idx\` ON \`pages_blocks_badge_list_items\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_badge_list_items_parent_id_idx\` ON \`pages_blocks_badge_list_items\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_badge_list\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_badge_list_order_idx\` ON \`pages_blocks_badge_list\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_badge_list_parent_id_idx\` ON \`pages_blocks_badge_list\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_badge_list_path_idx\` ON \`pages_blocks_badge_list\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_media_news_list_items\` (
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
  await db.run(sql`CREATE INDEX \`pages_blocks_media_news_list_items_order_idx\` ON \`pages_blocks_media_news_list_items\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_media_news_list_items_parent_id_idx\` ON \`pages_blocks_media_news_list_items\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_media_news_list\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_media_news_list_order_idx\` ON \`pages_blocks_media_news_list\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_media_news_list_parent_id_idx\` ON \`pages_blocks_media_news_list\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_media_news_list_path_idx\` ON \`pages_blocks_media_news_list\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_tools_list_items\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`name\` text,
  	\`description\` text,
  	\`link\` text,
  	\`color\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_tools_list\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_tools_list_items_order_idx\` ON \`pages_blocks_tools_list_items\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_tools_list_items_parent_id_idx\` ON \`pages_blocks_tools_list_items\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_tools_list\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_tools_list_order_idx\` ON \`pages_blocks_tools_list\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_tools_list_parent_id_idx\` ON \`pages_blocks_tools_list\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_tools_list_path_idx\` ON \`pages_blocks_tools_list\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_dataset_list_items\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`name\` text,
  	\`description\` text,
  	\`link\` text,
  	\`access\` text,
  	\`color\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_dataset_list\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_dataset_list_items_order_idx\` ON \`pages_blocks_dataset_list_items\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_dataset_list_items_parent_id_idx\` ON \`pages_blocks_dataset_list_items\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_dataset_list\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_dataset_list_order_idx\` ON \`pages_blocks_dataset_list\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_dataset_list_parent_id_idx\` ON \`pages_blocks_dataset_list\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_dataset_list_path_idx\` ON \`pages_blocks_dataset_list\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_contribution_step_list_steps\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text,
  	\`icon\` text,
  	\`cta_link\` text,
  	\`cta_name\` text,
  	\`description\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_contribution_step_list\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_contribution_step_list_steps_order_idx\` ON \`pages_blocks_contribution_step_list_steps\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_contribution_step_list_steps_parent_id_idx\` ON \`pages_blocks_contribution_step_list_steps\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_contribution_step_list\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_contribution_step_list_order_idx\` ON \`pages_blocks_contribution_step_list\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_contribution_step_list_parent_id_idx\` ON \`pages_blocks_contribution_step_list\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_contribution_step_list_path_idx\` ON \`pages_blocks_contribution_step_list\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_platform_download_list_items\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`name\` text,
  	\`description\` text,
  	\`download_link\` text,
  	\`file_name\` text,
  	\`file_size\` numeric,
  	\`requirements\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_platform_download_list\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_platform_download_list_items_order_idx\` ON \`pages_blocks_platform_download_list_items\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_platform_download_list_items_parent_id_idx\` ON \`pages_blocks_platform_download_list_items\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_platform_download_list\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_platform_download_list_order_idx\` ON \`pages_blocks_platform_download_list\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_platform_download_list_parent_id_idx\` ON \`pages_blocks_platform_download_list\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_platform_download_list_path_idx\` ON \`pages_blocks_platform_download_list\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_install_method_list_block_commands\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`content\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_install_method_list_block\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_install_method_list_block_commands_order_idx\` ON \`pages_blocks_install_method_list_block_commands\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_install_method_list_block_commands_parent_id_idx\` ON \`pages_blocks_install_method_list_block_commands\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_install_method_list_block\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`platform\` text,
  	\`title\` text,
  	\`footnote\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_install_method_list_block_order_idx\` ON \`pages_blocks_install_method_list_block\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_install_method_list_block_parent_id_idx\` ON \`pages_blocks_install_method_list_block\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_install_method_list_block_path_idx\` ON \`pages_blocks_install_method_list_block\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_selector_tabs\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`title\` text,
  	\`icon\` text,
  	\`content\` text,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_selector\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_selector_tabs_order_idx\` ON \`_pages_v_blocks_selector_tabs\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_selector_tabs_parent_id_idx\` ON \`_pages_v_blocks_selector_tabs\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_selector\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_selector_order_idx\` ON \`_pages_v_blocks_selector\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_selector_parent_id_idx\` ON \`_pages_v_blocks_selector\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_selector_path_idx\` ON \`_pages_v_blocks_selector\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_accordion_items\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`title\` text,
  	\`content\` text,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_accordion\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_accordion_items_order_idx\` ON \`_pages_v_blocks_accordion_items\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_accordion_items_parent_id_idx\` ON \`_pages_v_blocks_accordion_items\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_accordion\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_accordion_order_idx\` ON \`_pages_v_blocks_accordion\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_accordion_parent_id_idx\` ON \`_pages_v_blocks_accordion\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_accordion_path_idx\` ON \`_pages_v_blocks_accordion\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_badge_list_items\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`content\` text,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_badge_list\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_badge_list_items_order_idx\` ON \`_pages_v_blocks_badge_list_items\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_badge_list_items_parent_id_idx\` ON \`_pages_v_blocks_badge_list_items\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_badge_list\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_badge_list_order_idx\` ON \`_pages_v_blocks_badge_list\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_badge_list_parent_id_idx\` ON \`_pages_v_blocks_badge_list\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_badge_list_path_idx\` ON \`_pages_v_blocks_badge_list\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_media_news_list_items\` (
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
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_media_news_list_items_order_idx\` ON \`_pages_v_blocks_media_news_list_items\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_media_news_list_items_parent_id_idx\` ON \`_pages_v_blocks_media_news_list_items\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_media_news_list\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_media_news_list_order_idx\` ON \`_pages_v_blocks_media_news_list\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_media_news_list_parent_id_idx\` ON \`_pages_v_blocks_media_news_list\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_media_news_list_path_idx\` ON \`_pages_v_blocks_media_news_list\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_tools_list_items\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`name\` text,
  	\`description\` text,
  	\`link\` text,
  	\`color\` text,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_tools_list\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_tools_list_items_order_idx\` ON \`_pages_v_blocks_tools_list_items\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_tools_list_items_parent_id_idx\` ON \`_pages_v_blocks_tools_list_items\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_tools_list\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_tools_list_order_idx\` ON \`_pages_v_blocks_tools_list\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_tools_list_parent_id_idx\` ON \`_pages_v_blocks_tools_list\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_tools_list_path_idx\` ON \`_pages_v_blocks_tools_list\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_dataset_list_items\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`name\` text,
  	\`description\` text,
  	\`link\` text,
  	\`access\` text,
  	\`color\` text,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_dataset_list\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_dataset_list_items_order_idx\` ON \`_pages_v_blocks_dataset_list_items\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_dataset_list_items_parent_id_idx\` ON \`_pages_v_blocks_dataset_list_items\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_dataset_list\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_dataset_list_order_idx\` ON \`_pages_v_blocks_dataset_list\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_dataset_list_parent_id_idx\` ON \`_pages_v_blocks_dataset_list\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_dataset_list_path_idx\` ON \`_pages_v_blocks_dataset_list\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_contribution_step_list_steps\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`title\` text,
  	\`icon\` text,
  	\`cta_link\` text,
  	\`cta_name\` text,
  	\`description\` text,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_contribution_step_list\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_contribution_step_list_steps_order_idx\` ON \`_pages_v_blocks_contribution_step_list_steps\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_contribution_step_list_steps_parent_id_idx\` ON \`_pages_v_blocks_contribution_step_list_steps\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_contribution_step_list\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_contribution_step_list_order_idx\` ON \`_pages_v_blocks_contribution_step_list\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_contribution_step_list_parent_id_idx\` ON \`_pages_v_blocks_contribution_step_list\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_contribution_step_list_path_idx\` ON \`_pages_v_blocks_contribution_step_list\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_platform_download_list_items\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`name\` text,
  	\`description\` text,
  	\`download_link\` text,
  	\`file_name\` text,
  	\`file_size\` numeric,
  	\`requirements\` text,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_platform_download_list\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_platform_download_list_items_order_idx\` ON \`_pages_v_blocks_platform_download_list_items\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_platform_download_list_items_parent_id_idx\` ON \`_pages_v_blocks_platform_download_list_items\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_platform_download_list\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_platform_download_list_order_idx\` ON \`_pages_v_blocks_platform_download_list\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_platform_download_list_parent_id_idx\` ON \`_pages_v_blocks_platform_download_list\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_platform_download_list_path_idx\` ON \`_pages_v_blocks_platform_download_list\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_install_method_list_block_commands\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`content\` text,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_install_method_list_block\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_install_method_list_block_commands_order_idx\` ON \`_pages_v_blocks_install_method_list_block_commands\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_install_method_list_block_commands_parent_id_idx\` ON \`_pages_v_blocks_install_method_list_block_commands\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_install_method_list_block\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`platform\` text,
  	\`title\` text,
  	\`footnote\` text,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_install_method_list_block_order_idx\` ON \`_pages_v_blocks_install_method_list_block\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_install_method_list_block_parent_id_idx\` ON \`_pages_v_blocks_install_method_list_block\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_install_method_list_block_path_idx\` ON \`_pages_v_blocks_install_method_list_block\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`meeting_schedule_items\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`type\` text NOT NULL,
  	\`name\` text NOT NULL,
  	\`day\` text NOT NULL,
  	\`time\` text,
  	\`link\` text,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`meeting_schedule_items_name_idx\` ON \`meeting_schedule_items\` (\`name\`);`)
  await db.run(sql`CREATE INDEX \`meeting_schedule_items_updated_at_idx\` ON \`meeting_schedule_items\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`meeting_schedule_items_created_at_idx\` ON \`meeting_schedule_items\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`research_sources\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`title\` text NOT NULL,
  	\`authors\` text,
  	\`publication\` text,
  	\`year\` numeric,
  	\`link\` text NOT NULL,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE INDEX \`research_sources_updated_at_idx\` ON \`research_sources\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`research_sources_created_at_idx\` ON \`research_sources\` (\`created_at\`);`)
  await db.run(sql`ALTER TABLE \`payload_locked_documents_rels\` ADD \`meeting_schedule_items_id\` integer REFERENCES meeting_schedule_items(id);`)
  await db.run(sql`ALTER TABLE \`payload_locked_documents_rels\` ADD \`research_sources_id\` integer REFERENCES research_sources(id);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_meeting_schedule_items_id_idx\` ON \`payload_locked_documents_rels\` (\`meeting_schedule_items_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_research_sources_id_idx\` ON \`payload_locked_documents_rels\` (\`research_sources_id\`);`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.run(sql`DROP TABLE \`pages_blocks_selector_tabs\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_selector\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_accordion_items\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_accordion\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_badge_list_items\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_badge_list\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_media_news_list_items\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_media_news_list\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_tools_list_items\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_tools_list\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_dataset_list_items\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_dataset_list\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_contribution_step_list_steps\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_contribution_step_list\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_platform_download_list_items\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_platform_download_list\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_install_method_list_block_commands\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_install_method_list_block\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_selector_tabs\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_selector\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_accordion_items\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_accordion\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_badge_list_items\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_badge_list\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_media_news_list_items\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_media_news_list\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_tools_list_items\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_tools_list\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_dataset_list_items\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_dataset_list\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_contribution_step_list_steps\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_contribution_step_list\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_platform_download_list_items\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_platform_download_list\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_install_method_list_block_commands\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_install_method_list_block\`;`)
  await db.run(sql`DROP TABLE \`meeting_schedule_items\`;`)
  await db.run(sql`DROP TABLE \`research_sources\`;`)
  await db.run(sql`PRAGMA foreign_keys=OFF;`)
  await db.run(sql`CREATE TABLE \`__new_payload_locked_documents_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`pages_id\` integer,
  	\`posts_id\` integer,
  	\`media_id\` integer,
  	\`categories_id\` integer,
  	\`users_id\` integer,
  	\`redirects_id\` integer,
  	\`forms_id\` integer,
  	\`form_submissions_id\` integer,
  	\`search_id\` integer,
  	\`payload_folders_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`payload_locked_documents\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`pages_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`posts_id\`) REFERENCES \`posts\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`media_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`categories_id\`) REFERENCES \`categories\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`users_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`redirects_id\`) REFERENCES \`redirects\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`forms_id\`) REFERENCES \`forms\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`form_submissions_id\`) REFERENCES \`form_submissions\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`search_id\`) REFERENCES \`search\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`payload_folders_id\`) REFERENCES \`payload_folders\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`INSERT INTO \`__new_payload_locked_documents_rels\`("id", "order", "parent_id", "path", "pages_id", "posts_id", "media_id", "categories_id", "users_id", "redirects_id", "forms_id", "form_submissions_id", "search_id", "payload_folders_id") SELECT "id", "order", "parent_id", "path", "pages_id", "posts_id", "media_id", "categories_id", "users_id", "redirects_id", "forms_id", "form_submissions_id", "search_id", "payload_folders_id" FROM \`payload_locked_documents_rels\`;`)
  await db.run(sql`DROP TABLE \`payload_locked_documents_rels\`;`)
  await db.run(sql`ALTER TABLE \`__new_payload_locked_documents_rels\` RENAME TO \`payload_locked_documents_rels\`;`)
  await db.run(sql`PRAGMA foreign_keys=ON;`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_order_idx\` ON \`payload_locked_documents_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_parent_idx\` ON \`payload_locked_documents_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_path_idx\` ON \`payload_locked_documents_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_pages_id_idx\` ON \`payload_locked_documents_rels\` (\`pages_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_posts_id_idx\` ON \`payload_locked_documents_rels\` (\`posts_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_media_id_idx\` ON \`payload_locked_documents_rels\` (\`media_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_categories_id_idx\` ON \`payload_locked_documents_rels\` (\`categories_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_users_id_idx\` ON \`payload_locked_documents_rels\` (\`users_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_redirects_id_idx\` ON \`payload_locked_documents_rels\` (\`redirects_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_forms_id_idx\` ON \`payload_locked_documents_rels\` (\`forms_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_form_submissions_id_idx\` ON \`payload_locked_documents_rels\` (\`form_submissions_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_search_id_idx\` ON \`payload_locked_documents_rels\` (\`search_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_payload_folders_id_idx\` ON \`payload_locked_documents_rels\` (\`payload_folders_id\`);`)
}
