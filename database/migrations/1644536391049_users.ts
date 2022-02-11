import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class Users extends BaseSchema {
  protected tableName = "users";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");
      table.string("name", 120);
      table.string("email", 120);
      table.string("password", 500);
      table.string("city", 150);
      table.string("state", 150);
      table.string("country", 80);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
