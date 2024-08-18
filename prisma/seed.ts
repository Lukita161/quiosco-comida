import { PrismaClient } from "@prisma/client";
import { categories } from "./data/categories";
import { products } from "./data/products";

const prismaClient = new PrismaClient()

async function main() {
    try {
        await prismaClient.category.createMany({data: categories})
        await prismaClient.product.createMany({data: products})
    } catch (error) {
        console.log(error)
    }
}

main()
    .then(async ()=> {
        await prismaClient.$disconnect()
    })
    .catch(async (error)=> {
        console.log(error)
        await prismaClient.$disconnect()
        process.exit(1)
    })