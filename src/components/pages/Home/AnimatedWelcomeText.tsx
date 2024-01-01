import React, {HTMLAttributes, PropsWithChildren} from "react";
import { motion } from "framer-motion";
import classNames from "classnames";

const Wrapper = (props: PropsWithChildren<HTMLAttributes<HTMLElement>>) => {
    return <span className="word-wrapper flex flex-nowrap">{props.children}</span>
}

interface TagMap {
    [key: string]: string
}

const tagMap: TagMap = {
    paragraph: "p",
    heading1: "h1",
    heading2: "h2"
}


const AnimatedWelcomeText = (props: { key: number; type: string; text: string}) => {
    const item = {
        hidden: {
            y: "200%",
            color: "#0055FF",
            transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 }
        },
        visible: {
            y: 0,
            color: "#ffffff",
            transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 }
        }
    }

    const splitWords = props?.text?.split(" ")

    const words = [] as string[][]

    for (const [, item] of splitWords?.entries()) {
        words.push(item.split(""))
    }

    // Add a space ("\u00A0") to the end of each word
    words.map((word) => {
        return word.push("\u00A0")
    })

    const Tag = tagMap[props.type] as React.ReactNode

    return (
        // @ts-ignore
        <Tag className={classNames("", {
            "md:text-[48px] font-medium flex flex-nowrap sm:text-[20px] smmaxw:text-[20px] xl:max-w-[450px] font-inter xlmaxw:w-full justify-self-start": props.type === "heading1",
            "flex flex-wrap font-medium font-spaceMono xl:max-w-[750px] smmaxw:text-[10px] text-[18px] xlmaxw:w-full justify-self-end pt-[10px]": props.type === "heading2",
        })}>
            {words.map((word, index) => {
                return (
                        <Wrapper key={index}>
                            {words[index].flat().map((element, index) => {
                                return (
                                    <span
                                        style={{
                                            overflow: "hidden",
                                            display: "inline-block"
                                        }}
                                        key={index}
                                    >
                                  <motion.span
                                      style={{ display: "inline-block" }}
                                      variants={item}
                                  >
                                    {element}
                                  </motion.span>
                                </span>
                                )
                            })}
                        </Wrapper>
                )
            })}
        </Tag>
    )
}

export default AnimatedWelcomeText
