import { CommentStatus, PostStatus } from "../../../generated/prisma/enums";
import { prisma } from "../../lib/prisma";
import { ICreatePostPayload, IUpdatePostPayload } from "./post.interface";

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

     // filtering / exact match without AND Operator

            // where : {
            //     title: "My Fourth Post",
            //     content : "Ronaldo"
            // },


            // filtering / exact match with AND Operator

            // where : {
            //     AND : [
            //         {
            //             title: "My Fourth Post",
            //         },
            //         {
            //             content: "Ronaldo"
            //         },
            //         {
            //             tags : {
                            
            //             }
            //         }
            //     ]
            // },

            // searching / partial match

            // where : {
            //     title : {
            //         contains : "ronaLdo",
            //         mode : "insensitive"
            //     },

            //     // X -> Not ideal for partial match
            //     // content : {
            //     //     contains : "Ronaldo"
            //     // }
            // },

            // searching / partial search with OR operator

            // where : {
            //     OR : [
            //         {
            //             title : {
            //                 contains : "Ron",
            //                 mode : "insensitive"
            //             },
                       
            //         },


            //         {
            //             content : {
            //                 contains : "Ro",
            //                 mode : "insensitive"
            //             }
            //         }
            //     ]
            // },


            // combining search (OR Operator) and filtering (AND)

            // where : {
            //     //filtering & searching combined
            //     AND : [
            //         {
            //             // searching
            //             OR : [
            //                 {
            //                     title : {
            //                         contains : "Ron",
            //                         mode : "insensitive"
            //                     }
            //                 },

            //                 {
            //                     content : {
            //                         contains : "Ron",
            //                         mode : "insensitive"
            //                     }
                                
            //                 }
            //             ]
            //         },

            //         // filtering
            //         {
            //             title : "Ronaldo Nazario"
            //         },

            //         {
            //             content : "Ronaldo"
            //         }
            //     ]
            // },

            // Pagination with (limit or take) and (skip or page )

            // take : 1, 
            // take : 2, 
            // for first page skip is 0
            // skip : 1, // visiting page 2
            // skip : 2, // visiting page 3
            // skip : 3, // visiting page 4
            //page =4 , limit / take = 1 => skip : (page-1) * limit => 

            //page = 3, limit / take = 10 => skip : (page -1 ) * limit = (3-1) * 10 = 20



            // sorting in ascending or descending order on specific fields

            // orderBy : {
            //     createdAt : "desc",
            //     title : "asc",
            //     content : "desc"
            //     //fieldName : asc/desc
            // },


            // dynamic searching, filtering

            // where : {
            //     AND : [

            //         query.searchTerm ? {
            //             OR : [
            //                 {
            //                     title : {
            //                         contains : query.searchTerm,
            //                         mode : "insensitive"
            //                     }
                               
            //                 },
            //                 {
            //                     content: {
            //                         contains: query.searchTerm,
            //                         mode: "insensitive"
            //                     },
            //                 }
            //             ]
            //         } : {},



            //         //title filtering

            //         // {
            //         //     title : query.title
            //         // },

            //         query.title ? { title : query.title  } : {},

            //         //content filtering
            //         query.content ? { content : query.content} : {},

            //         // {
            //         //     tags : {
            //         //         hasSome : [""]
            //         //     }
            //         // }
            //     ]
            // },


    include: {
      author: {
        omit: {
          password: true,
        },
      },
      comments: true,
    },
  });

  return posts;
};

const getPostById = async (postId: string) => {
  //! Normal approach:
  // const post = await prisma.post.findUniqueOrThrow({
  //   where: {
  //     id: postId
  //   }
  // })

  // //* joto bar amra post take dekhbo, toto bar "views" 1 kore barbe, youtube er moto
  // const updatedPost = await prisma.post.update({
  //   where: {
  //     id: postId
  //   },
  //   data :{
  //     views: {
  //       increment: 1
  //     }
  //   },
  //   include: {
  //     author: {
  //       omit: {
  //         password: true
  //       }
  //     },
  //     comments: true
  //   }
  // })


  //! Using transaction, roll back approach: (ACID) property
  const transactionResult = await prisma.$transaction(async (tx) => {
    await tx.post.update({
      where: {
        id: postId,
      },
      data: {
        views: {
          increment: 1,
        },
      },
    });

    //* ei fake error ta dile full function off hoye jabe, execute hobe na, kono change hobe na, jemon chilo temoni thakbe [ei fake error er karone "views" ar increment hobe na]
    // throw new Error("fake error")

    const post = await tx.post.findUniqueOrThrow({
      where: {
        id: postId,
      },

      include: {
        author: {
          omit: {
            password: true,
          },
        },

        comments: {
          where: {
            status: CommentStatus.APPROVED,
          },

          orderBy: {
            createdAt: "desc",
          },
        },

        _count: {
          select: {
            comments: true,
          },
        },
      },
    });
    return post;
  });

  return transactionResult;
};

const getMyPosts = async (authorId: string) => {
  const result = await prisma.post.findMany({
    where: {
      authorId,
    },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      comments: true,
      author: {
        omit: {
          password: true,
        },
      },
      //* kono akta array te koyta element ase sheta dekhar jonno:
      _count: {
        select: {
          comments: true,
        },
      },
    },
  });
  return result;
};

const getPostsStats = async () => {
    const transactionResult = await prisma.$transaction(
        async (tx) => {
            // const totalPosts = await tx.post.count();

            // const totalPublishedPosts = await tx.post.count({
            //     where : {
            //         status : PostStatus.PUBLISHED
            //     }
            // })
            // const totalDraftPosts = await tx.post.count({
            //     where : {
            //         status : PostStatus.DRAFT
            //     }
            // })
            // const totalArchivedPosts = await tx.post.count({
            //     where : {
            //         status : PostStatus.ARCHIVED
            //     }
            // })

            // const totalComments = await tx.comment.count();

            // const totalApprovedComments = await tx.comment.count({
            //     where : {
            //         status : CommentStatus.APPROVED
            //     }
            // });
            // const totalRejectedComments = await tx.comment.count({
            //     where : {
            //         status : CommentStatus.REJECT
            //     }
            // });

            // //Not a good approach: using raw js
            // // const allPosts = await tx.post.findMany();

            // // let totalPostViews = 0;

            // // allPosts.forEach((post)=>{
            // //     totalPostViews = totalPostViews + post.views
            // // })

            // //Good Approach: using aggregate function
            // const totalPostViewsAggregate = await tx.post.aggregate({
            //     _sum : {
            //         views : true
            //     }
            // })

            // const totalPostViews = totalPostViewsAggregate._sum.views

            // return {
            //     totalPosts,
            //     totalPublishedPosts,
            //     totalDraftPosts,
            //     totalArchivedPosts,
            //     totalComments,
            //     totalApprovedComments,
            //     totalRejectedComments,
            //     totalPostViews
            // }

            const [
                totalPosts,
                totalPublishedPosts,
                totalDraftPosts,
                totalArchivedPosts,
                totalComments,
                totalApprovedComments,
                totalRejectedComments,
                totalPostViewsAggregate
            ] = await Promise.all([
                await tx.post.count(),
                await tx.post.count({
                    where: {
                        status: PostStatus.PUBLISHED
                    }
                }),
                await tx.post.count({
                    where: {
                        status: PostStatus.DRAFT
                    }
                }),
                await tx.post.count({
                    where: {
                        status: PostStatus.ARCHIVED
                    }
                }),
                await tx.comment.count(),
                await tx.comment.count({
                    where: {
                        status: CommentStatus.APPROVED
                    }
                }),
                await tx.comment.count({
                    where: {
                        status: CommentStatus.REJECT
                    }
                }),
                await tx.post.aggregate({
                    _sum: {
                        views: true
                    }
                })
            ]);


            return {
                totalPosts,
                totalPublishedPosts,
                totalDraftPosts,
                totalArchivedPosts,
                totalComments,
                totalApprovedComments,
                totalRejectedComments,
                totalPostViews : totalPostViewsAggregate._sum.views
            }


        }
    );

    return transactionResult
}

const updatePost = async (
  postId: string,
  payload: IUpdatePostPayload,
  authorId: string,
  isAdmin: boolean,
) => {
  const post = await prisma.post.findUniqueOrThrow({
    where: {
      id: postId,
    },
  });

  if (!isAdmin && post.authorId !== authorId) {
    throw new Error("You are not the owner of this post!");
  }
  const result = await prisma.post.update({
    where: {
      id: postId,
    },
    data: payload,
    include: {
      author: {
        omit: {
          password: true,
        },
      },
      comments: true,
    },
  });

  return result;
};

const deletePost = async (
  postId: string,
  authorId: string,
  isAdmin: boolean,
) => {
  const post = await prisma.post.findUniqueOrThrow({
    where: {
      id: postId,
    },
  });

  if (!isAdmin && post.authorId !== authorId) {
    throw new Error("You are not the owner of this post!");
  }

  await prisma.post.delete({
    where: {
      id: postId,
    },
  });
};

export const postService = {
  createPost,
  getAllPosts,
  getPostById,
  getMyPosts,
  updatePost,
  deletePost,
  getPostsStats
};
