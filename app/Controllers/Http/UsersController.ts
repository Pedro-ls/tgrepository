import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import User from "App/Models/User";
import { IUser } from "App/Contracts/ITypes";

export default class UsersController {
  public async index() {
    const users = await User.all(); // procura todos os usuarios no banco
    return users; // retorna todos os usuários
  }

  public async store({ request }: HttpContextContract) {
    const body: IUser /* este é um tipo que
    ajuda a saber oque tem
    dentro do body ele esta dentro de app/Contracts/ITypes */ = request.only([
      "name",
      "email",
      "password",
      "city",
      "state",
      "country",
    ]); // pega do corpo da requisição apenas os valores informados no array e coloca naa variaveis body

    const user = await User.create(body); // cria um usuário usando os dados de body

    return user; //retorna usuarios
  }

  public async show({ params }: HttpContextContract) {
    const { id } = params; // pega o parametro id de params esta sintaxy é  a mesma coisa de const id = params;

    const user = await User.findOrFail(id); // procura um usuario pelo id caso não ache ele dá erro

    return user; //retorna o usuario
  }

  public async update({ params, request }: HttpContextContract) {
    const { id } = params;
    const body: IUser = request.only([
      "name",
      "email",
      "password",
      "city",
      "state",
      "country",
    ]);

    const user = await User.findOrFail(id);

    user.merge(body); // mescla dados antigos com os novos

    const newUser = await user.save(); // salva mesclagem

    return newUser; // retorna novo usuário
  }

  public async destroy({ params }: HttpContextContract) {
    const { id } = params;

    const user = await User.findOrFail(id);
    await user.delete(); // deleta usuário

    return {
      id,
    }; // retorna id do usuario deletado
  }
}
