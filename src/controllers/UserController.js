import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default {
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

  async findAllUser(req, res) {
    try {
      const user = await prisma.user.findMany();
      return res.json(users)

    } catch (error) {
      return res.json({ error })
    }
   
  }

}