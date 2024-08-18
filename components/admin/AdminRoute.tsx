"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

type AdminRoute = {
    link: {
        url: string;
        text: string;
        blank: boolean;
    }
}

export const AdminRoute = ({ link }: AdminRoute)=> {

    const pathname = usePathname()
    const isActive = useMemo(()=> pathname.startsWith(link.url),[pathname,link])
    return(
        <>
            <Link className={`${isActive && "bg-amber-500"} w-full p-4 border-t border-gray-300 last-of-type:border-b`} href={link.url} target={link.blank?'_blank': ''}> {link.text} </Link>
        </>
    )
}