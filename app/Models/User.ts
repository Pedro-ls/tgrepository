import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number;
  @column()
  public name: string;
  @column()
  public email: string;
  @column()
  public password: string;
  @column()
  public city: string;
  @column()
  public state: string;
  @column()
  public country: string;
}
