import { prisma } from "../index";

const addBooks = async (req, res) => {
  const { name, publishedYear } = req.body;
  const book = await prisma.book.create({
    data: {
      name,
      publishedYear
    }
  })

  res
    .status(200)
    .json({
      "book": book
    })
}


export { addBooks }
