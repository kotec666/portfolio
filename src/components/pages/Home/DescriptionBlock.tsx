"use client"
import {motion} from 'framer-motion';
import React from 'react';
import Image from "next/image";
import ParallaxCombinedLeftWrapper from "@/components/ui/ParallaxCombinedLeftWrapper";
import ParallaxCombinedRightWrapper from "@/components/ui/ParallaxCombinedRightWrapper";

const DescriptionBlock = () => {

    return (
        <div className="relative grid grid-cols-[1fr,1fr] smmaxw:grid-cols-1 smmaxw:gap-y-[20px] gap-x-[20px] mt-[7rem]">
            <ParallaxCombinedLeftWrapper className="bg-[#1A131C]">
                <motion.div
                    className="flex justify-center items-center flex-col gap-y-[40px]  mdmaxw:px-[10px] sm:py-[140px] smmaxw:py-[50px] px-[40px]"
                    style={{
                        willChange: "transform",
                    }}
                >
                    <motion.div
                        className="text-[#F9C22E] lg:text-[20px] font-spaceMono text-center sm:text-[15px] smmaxw:text-[12px] smmaxw:w-[16px] smmaxw:h-[16px] max-w-[24px] max-h-[24px]"
                        initial={{ scale: 1 }}
                        animate={{ scale: 1.2 }}
                        transition={{
                            type: "smooth",
                            repeatType: "mirror",
                            duration: 1.5,
                            repeat: Infinity,
                        }}
                    >
                        <Image width={15} height={15} className="w-full h-full" src="/svgs/code.svg"  alt="star"/>
                    </motion.div>
                    <div className="text-[#F9C22E] lg:text-[20px] font-spaceMono text-center sm:text-[15px] smmaxw:text-[12px]">‘Программирование - это как искусство, каждая строка кода - это кисть, а каждый проект - это произведение искусства.’</div>
                    {/*<div className="text-[#F9C22E] lg:text-[20px] font-spaceMono text-center sm:text-[15px] smmaxw:text-[12px]">TechNova</div>*/}
                </motion.div>
            </ParallaxCombinedLeftWrapper>

            <ParallaxCombinedRightWrapper className="bg-[#1A131C]">
                <motion.div
                    className="flex justify-center items-center flex-col gap-y-[40px]  mdmaxw:px-[10px] sm:py-[140px] smmaxw:py-[50px] px-[40px]"
                    style={{
                        willChange: "transform"
                    }}
                >
                    <motion.div
                        className="text-[#F9C22E] lg:text-[20px] font-spaceMono text-center sm:text-[15px] smmaxw:text-[12px] smmaxw:w-[16px] smmaxw:h-[16px] max-w-[24px] max-h-[24px]"
                        initial={{ rotate: 0 }}
                        animate={{ rotate: 360 }}
                        transition={{
                            ease: "linear",
                            // type: "smooth",
                            // repeatType: "loop",
                            duration: 3,
                            repeat: Infinity,
                        }}
                    >
                        <Image width={15} height={15} className="w-full h-full" src="/svgs/secondGear.svg"  alt="Gear"/>
                    </motion.div>
                    <div className="text-[#F9C22E] lg:text-[20px] font-spaceMono text-center sm:text-[15px] smmaxw:text-[12px]">‘В мире разработки нет ничего невозможного, только задачи, которые ещё не решены.’</div>
                    {/*<div className="text-[#F9C22E] lg:text-[20px] font-spaceMono text-center sm:text-[15px] smmaxw:text-[12px]">TechNova</div>*/}
                </motion.div>
            </ParallaxCombinedRightWrapper>
        </div>
    );
};

export default DescriptionBlock;