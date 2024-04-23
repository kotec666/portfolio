"use client"
import React, {useRef, useState} from 'react';
import { motion, useInView } from "framer-motion";
import {Element} from "react-scroll";
import {OrbitControls, PerspectiveCamera} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import Capybara from "./../../models/Capybara"
import Image from "next/image";
import {yandexMetricaId} from "@/consts/yandexMetricaId";

const initial = {
    isFirstEmailCopied: false,
    isSecondEmailCopied: false,
}
const Footer = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });
    const [data, setData] = useState(initial)


    const updateData = (name:string, value:boolean) => {
        setData({...data, [name]: value})
    }

    const bgVariants = {
        hidden: {
            backgroundColor: "#171717",
        },
        visible: {
            backgroundColor: "#000000",
            transition: { duration: 1.7, delay: 1 }
        }
    }

    const hiddenVariants = {
        hidden: {
            opacity: 1,
        },
        visible: {
            opacity: 0,
            transition: { duration: 1.7, delay: 1 }
        }
    }

    const hiddenVariantsEmail = {
        hidden: {
            opacity: 1,
        },
        visible: {
            opacity: 0,
            transition: { duration: 1 }
        }
    }


    const destroyTooltip = () => {
        setTimeout(() => {
            setData(initial)
        }, 1200)
    }


    const telegramClick = () => {
        // @ts-ignore
        ym?.(yandexMetricaId,'reachGoal','TelegramButtonClicked')
    }

    const githubClick = () => {
        // @ts-ignore
        ym?.(yandexMetricaId,'reachGoal','GithubClickButtonClicked')
    }

    const emailClick = async (id: number) => {
        await navigator?.clipboard?.writeText("alexkotov639@gmail.com")
        // @ts-ignore
        ym?.(yandexMetricaId,'reachGoal','EmailButtonClicked')
        if (id === 1) {
            updateData("isFirstEmailCopied", true)
        }
        if (id === 2) {
            updateData("isSecondEmailCopied", true)
        }
        destroyTooltip()
        return
    }

    const footerRef = useRef(null)

    const isInViewCanvas = useInView(footerRef, { once: true, margin:"150px" })

    return (
        <Element name="contacts">
            <div ref={footerRef}  className="flex w-full flex-col">
                <div className="flex justify-center w-full pt-[100px] pb-[60px]">
                    <motion.div
                        className="max-w-[100px] mt-[5rem] mb-[5rem] w-full h-[100px] bg-[length:100%] mdmaxw:bg-[length:60%]"
                        style={{
                            backgroundImage: "url('/images/squiggle.webp')",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center center",
                        }}
                        initial={{ y: -10 }}
                        animate={{ y: 10 }}
                        transition={{
                            type: "smooth",
                            repeatType: "mirror",
                            duration: 2,
                            repeat: Infinity,
                        }}
                    />
                </div>
                <div className="grid grid-cols-[1fr,1fr,1fr] smmaxw:grid-cols-1 smmaxw:gap-y-[40px]">
                    <div>
                        <div
                            className="min-w-[110px] max-w-[130px] rounded-[10px] p-[15px] flex flex-col gap-y-[15px]"
                        >
                            <span className="text-[14px] font-spaceMono font-medium smmaxw:text-[10px]">Проекты</span>
                            <a href="https://qw-russia.ru/" rel="noopener noreferrer" target="_blank" className="text-[14px] font-spaceMono font-medium cursor-pointer smmaxw:text-[13px]">
                                QW
                            </a>
                            <a href="https://bankir.kg/" rel="noopener noreferrer" target="_blank" className="text-[14px] font-spaceMono font-medium cursor-pointer smmaxw:text-[13px]">
                                Bankir
                            </a>
                            <a href="https://github.com/kotec666/react-audio-platform" rel="noopener noreferrer" target="_blank" className="text-[14px] font-spaceMono font-medium cursor-pointer smmaxw:text-[13px]">
                                Audioplatform
                            </a>
                        </div>
                    </div>
                    <div>
                                <motion.div
                                    className="min-w-[200px] max-w-[180px] rounded-[10px] p-[15px] flex flex-col gap-y-[15px]"
                                    ref={ref}
                                    variants={bgVariants}
                                    initial="hidden"
                                    animate={isInView ? "visible" : "hidden"}
                                >
                                    <div className="flex gap-x-[5px]">
                                        <span
                                            className="text-[14px] font-spaceMono font-medium smmaxw:text-[10px]"
                                        >Связаться</span>
                                        <motion.span
                                            className="flex gap-x-[5px] text-[14px] font-spaceMono font-medium smmaxw:text-[10px]"
                                            variants={hiddenVariants}
                                            ref={ref}
                                            initial="hidden"
                                            animate={isInView ? "visible" : "hidden"}
                                            exit="hidden"
                                        >
                                            <span>со</span><span>мной</span>
                                        </motion.span>
                                    </div>
                                    <div className="relative">
                                        <a onClick={() => emailClick(1)} href="mailto:alexkotov@gmail.com" className="text-[14px] font-spaceMono font-medium cursor-pointer smmaxw:text-[10px]">Почта</a>
                                                <motion.div
                                                    className="absolute top-[-30px] left-[-50px] max-w-[155px] right-0 bg-[#1A131C] rounded-[5px] py-[5px] px-[25px] whitespace-nowrap "
                                                    variants={hiddenVariantsEmail}
                                                    initial="hidden"
                                                    animate={data?.isFirstEmailCopied ? "hidden" : "visible" }
                                                    exit="hidden"
                                                >
                                                    <div className="flex items-center gap-x-[5px]">
                                                        <span className="text-[8px] font-spaceMono">Почта скопирована</span>
                                                        <Image width={12} height={12} className="w-full h-full max-w-[12px] max-h-[12px]" src="/svgs/check.svg" alt="check"/>
                                                    </div>
                                                </motion.div>
                                    </div>
                                    <a onClick={telegramClick} href="https://t.me/imkotec" rel="noopener noreferrer" target="_blank" className="text-[14px] font-spaceMono font-medium cursor-pointer smmaxw:text-[10px]">
                                        Телеграм
                                    </a>
                                </motion.div>
                    </div>
                    <div className="justify-self-center items-center"
                    >
                        {isInViewCanvas ? (
                                <Canvas
                                    flat linear
                                    dpr={[1, 2]}
                                    camera={{ position: [10, 100, 5.5], fov: 45 }}
                                >
                                    <ambientLight intensity={10} />
                                    <pointLight position={[10,10,50]} />
                                    <Capybara />
                                    <PerspectiveCamera makeDefault position={[15,15,10]} />
                                    <OrbitControls enableZoom={false} enableRotate={true} autoRotate={true} autoRotateSpeed={5} />
                                </Canvas>
                        ) : <></>}
                    </div>
                </div>
                <div className="mt-[60px] mb-[60px]">
                    <div className="flex justify-between items-center">
                        <div>
                            <span className="flex justify-start items-center gap-x-[5px] text-[16px] font-spaceMono font-medium smmaxw:text-[13px]">
                                <div className="max-w-[18px] max-h-[18px]">
                                     <Image width={12} height={12} className="w-full h-full" src="/svgs/copyright.svg"  alt="copyright"/>
                                </div>
                                <div>
                                    {new Date().getFullYear()} kotec
                                </div>
                            </span>
                        </div>
                        <div className="flex gap-x-[10px] smmaxw:text-[13px]">
                            <a onClick={() => emailClick(2)} href="mailto:alexkotov@gmail.com"
                               className="text-[16px] font-spaceMono font-medium cursor-pointer smmaxw:text-[13px]">
                                <div className="max-w-[18px] max-h-[18px] relative">
                                    <Image width={12} height={12} className="w-full h-full" src="/svgs/email.svg"
                                           alt="email" title="email"/>
                                    <motion.div
                                        className="absolute top-[25px] left-[-50px] min-w-[150px] right-0 bg-[#1A131C] rounded-[5px] py-[5px] px-[25px] whitespace-nowrap "
                                        variants={hiddenVariantsEmail}
                                        initial="hidden"
                                        animate={data?.isSecondEmailCopied ? "hidden" : "visible"}
                                        exit="hidden"
                                    >
                                        <div className="flex items-center gap-x-[5px]">
                                            <span className="text-[10px] font-spaceMono">Почта скопирована</span>
                                            <Image width={12} height={12}
                                                   className="w-full h-full max-w-[12px] max-h-[12px]"
                                                   src="/svgs/check.svg" alt="check"/>
                                        </div>
                                    </motion.div>
                                </div>
                            </a>
                            <a onClick={telegramClick} href="https://t.me/imkotec" rel="noopener noreferrer"
                               target="_blank"
                               className="text-[16px] font-spaceMono font-medium cursor-pointer smmaxw:text-[13px]">
                                <div className="max-w-[18px] max-h-[18px]">
                                    <Image width={12} height={12} className="w-full h-full" src="/svgs/tg.svg"
                                           alt="tg" title="tg"
                                    />
                                </div>
                            </a>
                            <a onClick={githubClick} href="https://github.com/kotec666" rel="noopener noreferrer"
                               target="_blank"
                               className="text-[16px] font-spaceMono font-medium cursor-pointer smmaxw:text-[13px]">
                                <div className="max-w-[18px] max-h-[18px]">
                                    <Image width={12} height={12} className="w-full h-full" src="/svgs/github.svg"
                                           alt="github"
                                           title="github"
                                    />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    );
};

export default Footer;