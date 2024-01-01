"use client"
import React from 'react';
import classNames from "classnames";
import {AnimatePresence, motion, MotionConfig} from "framer-motion";
import ResizablePanel from "../../ui/ResiziblePanel";
import { IItem } from "../Home/ProjectsBlock";
// import {sendMetrik} from "../../../utils/metriks";
import {useMetrica} from "@/hooks/useMetrica";

type Props = {
    item: IItem
    setExpanded: (arg0: (prev: IItem | undefined) => IItem | undefined) => void
    expanded: IItem | undefined
    isExpanded: boolean
    // parallaxRef: React.RefObject<HTMLDivElement> | null
}

const duration = 0.4

const ProjectCard = (props: Props) => {

    const { reachGoal } = useMetrica()

    const handleClickExpand = (item: IItem) => {
        reachGoal('ExpandProjectClicked')
        // sendMetrik('reachGoal', 'ExpandProjectClicked')
        const alreadyExist = props.expanded?.id === item.id;
        if (alreadyExist) {
            return props.setExpanded(() => {
                return { id: 0, src: "", content: null, className: "" } as unknown as IItem
            })
       } else {
            return props.setExpanded(() => {
                return item
            })
        }
    }

    return (
        <motion.div
            key={props.item?.id}
            className={classNames("w-full cursor-pointer hover:grayscale-0 duration-300  rounded-[20px]", props.item?.className, {
                "grayscale-0": props?.isExpanded,
                "grayscale": !props?.isExpanded,
            })}
            onClick={() => handleClickExpand(props.item)}
        >
            <div>
                <motion.div
                    animate={{ borderRadius: props.isExpanded ? "20px 20px 0px 0px" : "20px 20px 20px 20px" }}
                    initial={{
                        borderRadius: "20px 20px 20px 20px"
                    }}
                    className="w-full h-[400px] bg-cover"
                    style={{
                        backgroundImage: `${props.item?.src}`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center center",
                    }}
                />
            </div>
            <div>
                <MotionConfig transition={{ duration }}>
                    <ResizablePanel>
                        {props.expanded?.id === props.item?.id ? React.createElement(props.item.content, { projectData: props?.item }) : <>&nbsp;</>}
                    </ResizablePanel>
                </MotionConfig>
            </div>
        </motion.div>
    );
};

export default ProjectCard;