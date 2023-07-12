import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default {
  async createPost(req, res) {
    const { content } = req.body;
    const { id } = req.param;

    try {
      const user = await prisma.user.findUnique({
        where: { id: Number(id) },
      });

      if (!user) {
        return res.json({ message: "Usuário inexistente" });
      }

      const post = prisma.post.create({
        data: {
          content,
          userID: user.id,
        },
        include: {
          // traz as informações dos usuários junto ao post criado
          author: true,
        },
      });
      return res.json(post);
    } catch (error) {
      res.json({ message: error.message });
    }
  },

  async findAllPost(req, res) {
    try {
      const post = await prisma.post.findMany();

      return res.json(post);
    } catch (error) {
      return res.json({ error });
    }
  },

  async updatePost(req, res) {
    const { id } = req.params;
    const { content } = req.body

    try {
      let post = await prisma.post.findUnique({
        where: { id: Number(id) },
      });

      if (!post) {
        return res.json({ message: "Post inexistente" });
      }

      post = await prisma.post.update({
        where: { id: Number(id) },
        data: { content },
      });

      return res.json({ message: "Post atualizado com sucesso!" });
    } catch (error) {
      return res.json({ error });
    }
  },
};
