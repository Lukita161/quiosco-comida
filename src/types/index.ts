import { Order, OrderProducts, Product } from "@prisma/client";

export type OrderItem = Pick<Product, 'name'|'price'|'id'> & {
    quantity: number,
    subtotal: number
}

export type OrderWithProducts = Order & {
    orderProducts: (OrderProducts & {
        product: Product
    })[]
}