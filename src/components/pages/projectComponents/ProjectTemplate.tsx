import React from 'react';
import Link from "next/link";
import {DEVELOPER_ROLE, PROJECT_ROLE, PROJECT_STATUS} from "@/types/enums";

type Props = {
    projectData: {
        projectName: string
        stack: string[]
        myRole: DEVELOPER_ROLE
        projectRole: PROJECT_ROLE
        projectStatus: PROJECT_STATUS
        projectDescription: string
        href_url?: string
    }
}

const ProjectTemplate = (props: Props) => {

    const returnMyRole = (role: string) => {
        switch(role) {
            case DEVELOPER_ROLE.fullstack:
            return "fullstack-разработчик"

            case DEVELOPER_ROLE.frontend:
                return "frontend-разработчик"

            case DEVELOPER_ROLE.backend:
                return "backend-разработчик"

            default:
                return "frontend-разработчик"
        }

    }


    const returnProjectRole = (role: PROJECT_ROLE) => {
        switch(role) {
            case PROJECT_ROLE.commercial:
                return "коммерческий проект"

            case PROJECT_ROLE.pet:
                return "пет-проект"

            default:
                return "коммерческий проект"
        }

    }


 const returnProjectStatus = (status: PROJECT_STATUS) => {
        switch(status) {
            case PROJECT_STATUS.development:
                return "в разработке"

            case PROJECT_STATUS.finished:
                return "завершен"

            default:
                return "в разработке"
        }

    }

    return (
        <div className="bg-[#0C090D] p-[35px] smmaxw:p-[15px] rounded-bl-[20px] rounded-br-[20px]">
            <div className="flex flex-col gap-y-[25px] smmaxw:gap-y-[15px]">
                <span
                    className="font-medium md:text-2xl sm:text-lg smmaxw:text-sm">Проект "{props?.projectData?.projectName}"</span>
                <span className="font-medium text-base mdmaxw:text-sm">Технологии проекта:</span>
                <div className="flex gap-[15px] flex-wrap">

                    {props?.projectData?.stack?.map((technology) => {
                        return (
                            <div key={technology}
                                 className="w-[70px] h-[70px] smmaxw:w-[40px] smmaxw:h-[40px] smmaxw:p-[30px] bg-white rounded-[50%] border-red-500 border-2 flex justify-center items-center">
                            <span
                                className="text-black  flex justify-center items-center font-medium text-sm mdmaxw:text-xs text-center">
                                {technology}
                            </span>
                            </div>
                        )
                    })}

                </div>
                <div className="mt-[35px] smmaxw:mt-[0px]">
                    <span
                        className="font-medium text-base mdmaxw:text-sm">Участие в проекте: {returnMyRole(props?.projectData?.myRole)}</span>
                </div>
                <div>
                    <span
                        className="font-medium text-base mdmaxw:text-sm">Категория проекта: {returnProjectRole(props?.projectData?.projectRole)}</span>
                </div>
                <div>
                    <span
                        className="font-medium text-base mdmaxw:text-sm">Статус проекта: {returnProjectStatus(props?.projectData?.projectStatus)}</span>
                </div>
                <div className="mt-[30px] smmaxw:mt-[0px]">
                    <span className="font-medium text-base mdmaxw:text-sm">
                        {props?.projectData?.projectDescription}
                    </span>
                </div>
                {props?.projectData?.href_url && (
                    <div className="flex justify-end items-center mt-[35px] smmaxw:mt-[10px]">
                        <div className="mdmaxw:w-full">
                            <Link href={props?.projectData?.href_url} rel="noopener noreferrer" target="_blank"
                                  className="flex justify-center items-center rounded-[10px] bg-[#1A131C] mdmaxw:px-[18px] mdmaxw:py-[12px] px-[24px] py-[18px] font-medium text-base mdmaxw:text-sm">
                                Перейти на страницу проекта
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectTemplate;