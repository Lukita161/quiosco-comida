import { prisma } from "@/src/lib/prisma"
import { CategoryIcon } from "../ui/CategoryIcon"
import { Logo } from "../ui/Logo"


const getCategories = async() => {
    return await prisma.category.findMany()
}

export const OrderSidebar = async()=> {
    const categories = await getCategories()
    return (
        <aside className="bg-white md:w-72 md:h-screen">
            <Logo />
            <nav className="mt-2">
                {categories.map(category => (
                    <CategoryIcon key={category.id} category={category} />
                ))}
            </nav>
        </aside>
    )
}