"use client"
import { Category } from "@prisma/client"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"

type CategoryIconProps = {
    category: Category
}

export const CategoryIcon = ({ category }: CategoryIconProps)=> {
    const params = useParams()

    return (
        <div className={`${params.category === category.slug ? 'bg-orange-400' : ''} flex items-center w-full border border-gray-200 p-3 last-of-type:border-b`}>
            <div className="w-16 h-16 relative">
                <Image src={`/icon_${category.slug}.svg`} alt={category.name} fill/>
            </div>
            <Link className="ml-4 font-bold text-xl cursor-pointer" href={`/order/${category.slug}`}>{category.name}</Link>
        </div>
    )
}