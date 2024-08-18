import { formatCurrency, getImagePath } from "@/src/utils"
import { Product } from "@prisma/client"
import Image from "next/image"
import { AddProductButton } from "./AddProductButton"

type ProductCartProps = {
    product: Product
}

export const ProductCart = ({ product }: ProductCartProps)=> {
    const imagePath = getImagePath(product.image)
    return (
        <div className="border bg-white ">
            <Image src={imagePath} alt={`Imagen de ${product.name}`} width={400} height={500} />
            <div className="p-5 text-center space-y-1">
                <h2 className="font-bold text-xl">{product.name}</h2>
                <p className="font-bold text-xl">{formatCurrency(product.price)}</p>
                <AddProductButton product={product} />
            </div>
        </div>
    )
}