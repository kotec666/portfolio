"use client"
import React, { useRef } from "react";
import {motion, useInView} from "framer-motion";
import AnimatedWelcomeText from "./AnimatedWelcomeText";
import {useMediaQuery} from "@/hooks/useMediaQuery"

const WelcomeBlock = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    let textTwo = 'Здесь вы найдете мои проекты и узнаете больше о моих навыках в области фуллстек разработки. Не стесняйтесь связаться со мной, чтобы обсудить возможное сотрудничество или просто поздороваться'


    const text = [
        {
            type: "heading1",
            text: "Добро пожаловать!",
        },
        {
            type: "heading2",
            text: textTwo,
        }
    ];

    const container = {
        visible: {
            transition: {
                staggerChildren: 0.01
            }
        }
    }

    return (
        <div>
            <motion.div
                initial="hidden"
                ref={ref}
                animate={isInView ? "visible" : "hidden"}
                variants={container}
            >
                <div className="grid xl:grid-rows-1 xl:grid-cols-[1fr,1fr] xlmaxw:grid-cols-[1fr] xlmaxw:grid-rows-[0fr,1fr] pt-[6.25rem] pb-[6.25rem] smmaxw:pt-[3.25rem] smmaxw:pb-[3.25rem] justify-between">
                    {text.map((item, index) => {
                        return <AnimatedWelcomeText {...item} key={index} />
                    })}
                </div>
            </motion.div>
        </div>
    )
}

export default WelcomeBlock