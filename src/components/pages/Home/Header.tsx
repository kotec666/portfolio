"use client"
import {
    motion,
    useScroll,
    useTransform,
    useMotionValue,
    useMotionValueEvent,
    useMotionTemplate,
    useSpring
} from "framer-motion"
import React from "react"
import { Link } from "react-scroll"
import classNames from "classnames"
import { useMediaQuery } from "@/hooks/useMediaQuery"
import Image from "next/image";

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max)
const scrollDistance = 1400

function useBoundedScroll(bounds: number) {
    const { scrollY } = useScroll()
    const scrollYBounded = useMotionValue(0)

    useMotionValueEvent(scrollY, "change", (value) => {
        const previousScrollY = scrollY.getPrevious()
        const scrollYDiff = value - previousScrollY
        scrollYBounded.set(clamp(scrollYBounded.get() + scrollYDiff, 0, bounds))
    })

    const scrollYBoundedProgress = useTransform(
        scrollYBounded,
        [0, bounds],
        [0, 1]
    )

    return { scrollYBoundedProgress }
}

export default function Header() {
    const { scrollYBoundedProgress } = useBoundedScroll(scrollDistance)

    const scrollYThrottledProgress = useTransform(
        scrollYBoundedProgress,
        [0, 0.25, 1],
        [0, 0, 1]
    )

    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    const isMedia800 = useMediaQuery(800)

    const opacity = useSpring(scrollYProgress, {
        stiffness: isMedia800 ? 80 : 50,
        damping: isMedia800 ? 5 : 10
    })

    return (
        <div className="fixed top-0 mx-auto z-10 flex w-full max-w-3xl flex-1 text-slate-600">
            <motion.header
                style={{
                    opacity: opacity,
                    height: useTransform(scrollYThrottledProgress, [0, 1], [80, 50]),
                    backgroundColor: useMotionTemplate`rgb(${useTransform(
                        scrollYThrottledProgress,
                        [0, 1],
                        [1, 0.1]
                    )}`,
                    willChange: "opacity, height, background-color"
                }}
                className="fixed inset-x-0 top-0 flex h-20 shadow-sm backdrop-blur-md"
            >
                <div className="mx-auto flex w-full max-w-3xl items-center justify-between px-8">
                    <motion.p
                        style={{
                            scale: useTransform(scrollYThrottledProgress, [0, 1], [1, 0.9]),
                            willChange: "transform"
                        }}
                        className="flex origin-left items-center text-xl font-semibold uppercase"
                    >
                        <Image width={35} height={35} className="w-[35px] h-[35px]" src="/svgs/whiteCat.svg" alt="whiteCat" />
                    </motion.p>
                    <motion.nav
                        style={{
                            opacity: 1,
                            willChange: "opacity"
                        }}
                        className="flex space-x-4 text-xs font-medium text-white"
                    >
                        <Link className="flex items-center" to="skills" spy={true} smooth={true} duration={500}>
                            <span className={classNames("cursor-pointer")} >Навыки</span>
                        </Link>
                        <Link className="flex items-center" to="projects" spy={true} smooth={true} duration={500}>
                            <span className={classNames("cursor-pointer")} >Проекты</span>
                        </Link>
                        <Link className="flex items-center" to="contacts" spy={true} smooth={true} duration={500}>
                            <span className={classNames("cursor-pointer")} >Связаться</span>
                        </Link>
                    </motion.nav>
                    <motion.div
                        className="fixed top-[50px] left-0 right-0 bg-white origin-[0%] z-10"
                        style={{
                            scaleX,
                            height: useTransform(scrollYThrottledProgress, [0, 1], [0.3, 1]),
                            top: useTransform(scrollYThrottledProgress, [0, 1], [80, 50]),
                            willChange: "transform, height, top"
                        }}
                    />
                </div>
            </motion.header>
        </div>
    )
}