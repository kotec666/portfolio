"use client"
import React, {useState} from 'react';
import ProjectCard from "../projectComponents/ProjectCard";
import { Element } from "react-scroll"
import ProjectTemplate from "@/components/pages/projectComponents/ProjectTemplate"
import { projectsData } from "@/components/pages/projectComponents/projectsData"
import {DEVELOPER_ROLE, PROJECT_ROLE, PROJECT_STATUS} from "@/types/enums";

export interface IItem {
  src: string;
  content: (props: {projectData: IItem}) => React.JSX.Element;
  className: string;
  id: number;
  projectName: string;
  stack: string[];
  myRole: DEVELOPER_ROLE;
  projectRole: PROJECT_ROLE;
  projectStatus: PROJECT_STATUS;
  projectDescription: string;
  href_url?: string;
  img_src: string;
}
const ProjectsBlock = () => {

    const projects = projectsData?.map((project, idx) => {
      return { ...project, src:`${project?.img_src}`, content: ProjectTemplate, className: `${idx === 0 && "lg:col-span-2"}` }
    })

    // const projects = [
    //     {id: 1, src: "url('/images/qwr.png')", content: QwrProject, className: "lg:col-span-2"},
    //     {id: 2, src: "url('/images/bankiProject.svg')", content: FirstProject},
    //     // {id: 3, src: "url('/images/grooming.png')", content: SecondProject},
    //     {id: 4, src: "url('/images/audioPlatform.png')", content: ThirdProject},
    //
    // ]
    const [expanded, setExpanded] = useState<IItem>()


    return (
        <Element name="projects" className="element">
            <div className="w-full flex justify-center items-center mt-[74px]">
                <span className="font-spaceMono lg:text-[32px] sm:25px smmaxw:text-[20px] font-semibold">
                    Мои проекты
                </span>
            </div>
            <div className="grid lg:grid-cols-2 lgmaxw:grid-cols-1 grid-flow-row gap-x-[20px] gap-y-[35px] mt-[74px] mb-[74px] ">
                    {projects.map((item)=> {
                        return (
                            <ProjectCard
                                key={item?.id}
                                item={item}
                                expanded={expanded}
                                isExpanded={expanded?.id === item?.id}
                                setExpanded={setExpanded}
                            />
                        )
                    })}
            </div>
        </Element>
    )
}

export default ProjectsBlock;