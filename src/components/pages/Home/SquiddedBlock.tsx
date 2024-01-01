"use client"
import {motion, useScroll, useTransform} from 'framer-motion';
import React, {useRef} from 'react';
import hover3d from "@/utils/hover3d";

const SquiddedBlock = () => {
    const secRef = React.useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({
        //target is the element that we want to track
        target: secRef,
        offset: ["start end", "end start"],
    })

    const hero = useRef<HTMLDivElement>(null)

    const hover = hover3d(hero, {
        x: 40,
        y: 20,
        z: 70,
    })

    const scale = useTransform(scrollYProgress, [0, 0.5], [0.4, 1])
    return (
        <div className="py-[40px] flex justify-center items-center w-full  bg-[#0C090D]" ref={hero}>
                <motion.div
                    ref={secRef}
                    className="flex justify-center items-center m-auto w-full"
                    style={{
                        scale: scale,
                    }}
                >
                    <div className="h-[462px] w-full bg-[length:462px] mdmaxw:bg-[length:40%]" style={{
                        objectFit: "cover",
                        backgroundImage: "url('/images/squiggle.png')",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center center",
                        transform: hover.transform,
                        transition: hover.transition,
                    }} />
                </motion.div>
        </div>
    );
};

export default SquiddedBlock;