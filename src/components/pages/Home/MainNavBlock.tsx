"use client"
import React from 'react';
import styles from './../../../css/Home.module.css'
import classNames from "classnames";
import SparkledButton from "./SparkledButton";
import { Link } from "react-scroll"
const MainNavBlock = () => {

    return (
        <>
        <div className={classNames("w-full h-[101vh] smmaxw:h-[138vh] flex justify-center items-center flex-col", styles.head_block)}>
                <div className="flex flex-col justify-center items-center smmaxw:mt-[-38vh]">
                    <h1 className={classNames("md:text-[130px] sm:text-[64px] smmaxw:text-[32px] font-chey", styles.typing_1)}>FULLSTACK</h1>
                    <h1 className={classNames("md:text-[130px] sm:text-[64px] smmaxw:text-[32px] font-chey", styles.typing_2)}>DEVELOPER</h1>
                </div>
                <div className="flex gap-[20px] mt-[60px] font-bold ">
                    <Link to="projects" spy={true} smooth={true} duration={500} delay={500}>
                        <SparkledButton text="Проекты" className={classNames("cursor-pointer font-spaceMono text-xs", styles.button_left)} />
                    </Link>
                    <Link to="contacts" spy={true} smooth={true} duration={500} delay={500}>
                        <SparkledButton text="Связаться" className={classNames("cursor-pointer font-spaceMono text-xs", styles.button_right)} />
                    </Link>


                </div>
        </div>
        </>

    )
}

export default MainNavBlock

