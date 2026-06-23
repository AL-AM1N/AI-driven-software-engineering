import { constants } from "node:buffer";
import { prisma } from "./lib/prisma";

async function main() {
  //create a new user with a post
  //   const user = await prisma.user.create({
  //     data: {
  //       name: "Alice",
  //       email: "alice@gmail.com",
  //       posts: {
  //         create: {
  //           title: "Hello world",
  //           content: "this is my first",
  //           published: true,
  //         },
  //       },
  //     },
  //     include: {
  //       posts: true,
  //     },
  //   });
  //   console.log("Created user:", user);


  // create another user
     const user2 = await prisma.user.create({
      data: {
        name: "Alice2",
        email: "alice2@gmail.com",
        posts: {
          create: {
            title: "Hello world 2",
            content: "this is my first 2",
            published: true,
          },
        },
      },
      include: {
        posts: true,
      },
    });
    console.log("Created user:", user2);

  const newPost = await prisma.post.create({
    data: {
      authorId: 2,
      title: "hello2",
      content: "2nd",
      published: true,
    },
  });
  console.log(newPost);

  // Fetch all users with their posts
  const allUsers = await prisma.user.findMany({
    include: {
      posts: true,
    },
  });
  console.log("All users:", JSON.stringify(allUsers, null, 2));
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
