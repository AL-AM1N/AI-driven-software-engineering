import { prisma } from "../../lib/prisma";
import { ICreatePostPayload } from "./post.interface";

const createPost = async (payload: ICreatePostPayload, userId: string) => {
  const result = await prisma.post.create({
    data: {
      ...payload,
      authorId: userId,
    },
  });
  return result;
};

const getAllPosts = async () => {
    const posts = await prisma.post.findMany({
        include: {
            author: {
                omit: {
                    password: true
                }
            },
            comments: true
        }
    })

    return posts;
}

const getPostById = async (postId: string) => {
  const post = await prisma.post.findUniqueOrThrow({
    where: {
      id: postId
    }
  })

  //* joto bar amra post take dekhbo, toto bar "views" 1 kore barbe, youtube er moto
  const updatedPost = await prisma.post.update({
    where: {
      id: postId
    },
    data :{
      views: {
        increment: 1
      }
    },
    include: {
      author: {
        omit: {
          password: true
        }
      },
      comments: true
    }
  })

  return updatedPost;
}

const getMyPosts = async(authorId: string) => {
  const result = await prisma.post.findMany({
    where: {
      authorId
    },
    orderBy: {
      createdAt: "desc"
    },
    include: {
      comments: true,
      author: {
        omit: {
          password: true
        }
      },
      //* kono akta array te koyta element ase sheta dekhar jonno:
      _count: {
        select: {
          comments: true
        }
      }
    },
  })
  return result;
}

export const postService = {
  createPost,
  getAllPosts,
  getPostById,
  getMyPosts
};
