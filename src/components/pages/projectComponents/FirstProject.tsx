import React from 'react';

const FirstProject = () => {
    return (
        <div className="bg-[#0C090D] p-[35px] smmaxw:p-[15px] rounded-bl-[20px] rounded-br-[20px]">
            <div className="flex flex-col gap-y-[25px] smmaxw:gap-y-[15px]">
                <span className="font-medium md:text-2xl sm:text-lg smmaxw:text-sm">Проект "Bankir.kg"</span>
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

                    <div className="w-[70px] h-[70px] smmaxw:w-[40px] smmaxw:h-[40px] smmaxw:p-[30px] bg-white rounded-[50%] flex justify-center items-center">
                        <span className="text-black font-medium text-sm mdmaxw:text-xs">
                            Axios
                        </span>
                    </div>

                    <div className="w-[70px] h-[70px] smmaxw:w-[40px] smmaxw:h-[40px] smmaxw:p-[30px] bg-white rounded-[50%] flex justify-center items-center">
                        <span className="text-black font-medium text-sm mdmaxw:text-xs">
                            Swr
                        </span>
                    </div>

                    <div className="w-[70px] h-[70px] smmaxw:w-[40px] smmaxw:h-[40px] smmaxw:p-[30px] bg-white rounded-[50%] flex justify-center items-center">
                        <span className="text-black font-medium text-sm mdmaxw:text-xs">
                            Nest.js
                        </span>
                    </div>

                    <div className="w-[70px] h-[70px] smmaxw:w-[40px] smmaxw:h-[40px] smmaxw:p-[30px] bg-white rounded-[50%] flex justify-center items-center">
                        <span className="text-black font-medium text-sm mdmaxw:text-xs">
                            Sequelize
                        </span>
                    </div>

                    <div className="w-[70px] h-[70px] smmaxw:w-[40px] smmaxw:h-[40px] smmaxw:p-[30px] bg-white rounded-[50%] flex justify-center items-center">
                        <span className="text-black font-medium text-sm mdmaxw:text-xs">
                            Swagger
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
                        "Bankir.kg" - это крупный киргизский информационный портал, который специализируется на предоставлении информации о финансовых продуктах, банках, страховых компаниях, кредитах, инвестициях и других финансовых услугах. Сайт предоставляет сравнительные данные о различных банковских продуктах, а также новости и статьи о финансовой сфере.
                         Пользователи могут находить на "Bankir.kg" информацию о процентных ставках по вкладам, кредитах, ипотеке, а также сравнивать различные банковские предложения. Сайт также предоставляет полезные советы и инструменты для принятия финансовых решений.
                         Помимо этого, "Bankir.kg" также предоставляет информацию о страховых услугах, инвестициях, курсах валют и других финансовых темах. Этот ресурс может быть полезным и для российских граждан, ищущих информацию о финансовых продуктах и услугах, а также для принятия обоснованных решений в сфере финансов.
                    </span>
                </div>
                <div className="flex justify-end items-center mt-[35px] smmaxw:mt-[10px]">
                    <div className="mdmaxw:w-full">
                        <a href="https://bankir.kg/" rel="noopener noreferrer" target="_blank" className="flex justify-center items-center rounded-[10px] bg-[#1A131C] mdmaxw:px-[18px] mdmaxw:py-[12px] px-[24px] py-[18px] font-medium text-base mdmaxw:text-sm">
                            Перейти на страницу проекта
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FirstProject;