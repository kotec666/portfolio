"use client"
import React, {PropsWithChildren} from "react";
import {motion, useScroll, useTransform} from "framer-motion";
import {useMediaQuery} from "@/hooks/useMediaQuery";

interface Props extends PropsWithChildren {
    className:string
}
const ParallaxCombinedLeftWrapper = (props: Props) => {
    const element = React.useRef<HTMLDivElement>(null);
    const isMedia1000 = useMediaQuery(1000)

    const offset = isMedia1000 ? ["end end", "end end"] : ["start end", "end start"]

    const { scrollYProgress } = useScroll({
        target: element,
        offset: offset as unknown as number[]
    })

    const x = useTransform(scrollYProgress, [1, 0.4, 0], [0, 0, -1000])
    const y = useTransform(scrollYProgress, [1, 0.4, 0], [0, 0, 400])


    return (
        <div className={props.className} ref={element}>
            <motion.div style={{ x, y }}>{props.children}</motion.div>
        </div>
    )
}

export default ParallaxCombinedLeftWrapper