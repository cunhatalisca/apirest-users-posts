import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default {

  // criação de um usuário
  async createUser(req, res) {
    try {
      const { name, email } = req.body;
  
      // verificação pra saber se já existe um usuário com o e-mail
      let user = await prisma.user.findUnique({
        where: { email }
      })
  
      // verificando se um usuário existe com o e-mail cadastrado
      if(user) {
        return res.json({ error: 'Já existe um usuário com esse e-mail' })
      }
  
      user = await prisma.user.create({
        data: {
          name,
          email,
        },
      });
  
      return res.json(user);
    } catch (error) {
      return res.json({
         error 
      })
    }
  },

  // listagem de todos os usuários
  async findAllUser(req, res) {
    try {
      const user = await prisma.user.findMany();
      return res.json(user)

    } catch (error) {
      return res.json({ error })
    }
   
  },

  // procura de somente um usuário
  async findUser(req, res) {
    try {
      const { id } = req.params
      const user = await prisma.user.findUnique({
        where: {id: Number(id)}
      })

      if(!user) {
        return res.json({error: "Não foi possível encontrar esse usuário"})
      }

      return res.json(user)

    } catch (error) {
      return res.json({ error })
    }
   
  },

  async updateUsers(req, res) {
    try {
      const { id } = req.params
      const { name, email } = req.body

      let user = await prisma.user.findUnique({
        where: {id: Number(id)}
      })

      if(!user) {
        return res.json({error: "Não foi possível encontrar esse usuário"})
      }

      user = await prisma.user.update({
        where: { id },
        data: { name, email }
      })

    } catch (error) {
      
    }
  }

}