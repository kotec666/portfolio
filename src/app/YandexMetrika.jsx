"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import {yandexMetricaId} from "@/consts/yandexMetricaId";

export default function YandexMetrika() {
    const pathname = usePathname()
    const searchParams = useSearchParams()

    useEffect(() => {
        const url = `${pathname}?${searchParams}`
        ym?.(yandexMetricaId, "hit", url)
    }, [pathname, searchParams])

    return null
}
