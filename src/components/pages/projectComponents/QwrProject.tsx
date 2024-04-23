import React from 'react';

const QwrProject = () => {
    return (
        <div className="bg-[#0C090D] p-[35px] smmaxw:p-[15px] rounded-bl-[20px] rounded-br-[20px]">
            <div className="flex flex-col gap-y-[25px] smmaxw:gap-y-[15px]">
                <span className="font-medium md:text-2xl sm:text-lg smmaxw:text-sm">Проект "Quartzwerke Russia"</span>
                <span className="font-medium text-base mdmaxw:text-sm">Технологии проекта:</span>
                <div className="flex gap-[15px] flex-wrap">

                    <div className="w-[70px] h-[70px] smmaxw:w-[40px] smmaxw:h-[40px] smmaxw:p-[30px] bg-white rounded-[50%] flex justify-center items-center">
                        <span className="text-black font-medium text-sm mdmaxw:text-xs">
                            Next.js
                        </span>
                    </div>

                    <div className="w-[70px] h-[70px] smmaxw:w-[40px] smmaxw:h-[40px] smmaxw:p-[30px] bg-white rounded-[50%] flex justify-center items-center">
                        <span className="text-black font-medium text-sm mdmaxw:text-xs">
                            TS
                        </span>
                    </div>

                    <div className="w-[70px] h-[70px] smmaxw:w-[40px] smmaxw:h-[40px] smmaxw:p-[30px] bg-white rounded-[50%] flex justify-center items-center">
                        <span className="text-black font-medium text-sm mdmaxw:text-xs">
                            Tailwind
                        </span>
                    </div>

                    <div className="w-[70px] h-[70px] smmaxw:w-[40px] smmaxw:h-[40px] smmaxw:p-[30px] bg-white rounded-[50%] flex flex-col justify-center items-center">
                        <span className="text-black font-medium text-sm mdmaxw:text-xs">
                            Framer
                        </span>
                        <span className="text-black font-medium text-sm mdmaxw:text-xs">
                            motion
                        </span>
                    </div>

                    <div className="w-[70px] h-[70px] smmaxw:w-[40px] smmaxw:h-[40px] smmaxw:p-[30px] bg-white rounded-[50%] flex justify-center items-center">
                        <span className="text-black font-medium text-sm mdmaxw:text-xs">
                            KY
                        </span>
                    </div>

                    <div className="w-[70px] h-[70px] smmaxw:w-[40px] smmaxw:h-[40px] smmaxw:p-[30px] bg-white rounded-[50%] flex justify-center items-center">
                        <span className="text-black font-medium text-sm mdmaxw:text-xs">
                            Zustand
                        </span>
                    </div>

                    <div className="w-[70px] h-[70px] smmaxw:w-[40px] smmaxw:h-[40px] smmaxw:p-[30px] bg-white rounded-[50%] flex justify-center items-center">
                        <span className="text-black font-medium text-sm mdmaxw:text-xs">
                            Socket.io
                        </span>
                    </div>


                    <div className="w-[70px] h-[70px] smmaxw:w-[40px] smmaxw:h-[40px] smmaxw:p-[30px] bg-white rounded-[50%] flex justify-center items-center">
                        <span className="text-black font-medium text-sm mdmaxw:text-xs">
                            Nest.js
                        </span>
                    </div>

                    <div className="w-[70px] h-[70px] smmaxw:w-[40px] smmaxw:h-[40px] smmaxw:p-[30px] bg-white rounded-[50%] flex justify-center items-center">
                        <span className="text-black font-medium text-sm mdmaxw:text-xs">
                            Prisma
                        </span>
                    </div>

                    <div className="w-[70px] h-[70px] smmaxw:w-[40px] smmaxw:h-[40px] smmaxw:p-[30px] bg-white rounded-[50%] flex justify-center items-center">
                        <span className="text-black font-medium text-sm mdmaxw:text-xs">
                            Postgres
                        </span>
                    </div>


                    <div className="w-[70px] h-[70px] smmaxw:w-[40px] smmaxw:h-[40px] smmaxw:p-[30px] bg-white rounded-[50%] flex justify-center items-center">
                        <span className="text-black font-medium text-sm mdmaxw:text-xs">
                            Redis
                        </span>
                    </div>


                </div>
                <div className="mt-[35px] smmaxw:mt-[0px]">
                    <span className="font-medium text-base mdmaxw:text-sm">Участие в проекте: Frontend-разработчик</span>
                </div>
                <div>
                    <span className="font-medium text-base mdmaxw:text-sm">Категория проекта: коммерческий проект</span>
                </div>

                <div className="mt-[30px] smmaxw:mt-[0px]">
                    <span className="font-medium text-base mdmaxw:text-sm">
                        "Quartzwerke Russia" - это крупная компания, занимающаяся производством и продажей цветного и белого кварцевого песка оптом и в розницу. На момент написания этого текста компания имеет 4 крупных предприятия в России.
                    </span>
                </div>
                <div className="flex justify-end items-center mt-[35px] smmaxw:mt-[10px]">
                    <div className="mdmaxw:w-full">
                        <a href="https://qw-russia.ru/" rel="noopener noreferrer" target="_blank" className="flex justify-center items-center rounded-[10px] bg-[#1A131C] mdmaxw:px-[18px] mdmaxw:py-[12px] px-[24px] py-[18px] font-medium text-base mdmaxw:text-sm">
                            Перейти на страницу проекта
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QwrProject;