import React from 'react';

const SecondProject = () => {
    return (
        <div className="bg-[#0C090D] p-[35px] smmaxw:p-[15px] rounded-bl-[20px] rounded-br-[20px]">
            <div className="flex flex-col gap-y-[25px] smmaxw:gap-y-[15px]">
                <span className="font-medium md:text-2xl sm:text-lg smmaxw:text-sm">Проект "Груминг"</span>
                <span className="font-medium text-base mdmaxw:text-sm">Технологии проекта:</span>
                <div className="flex gap-[15px] flex-wrap">

                    <div className="w-[70px] h-[70px] smmaxw:w-[40px] smmaxw:h-[40px] smmaxw:p-[30px] bg-white rounded-[50%] flex justify-center items-center">
                        <span className="text-black font-medium text-sm mdmaxw:text-xs">
                            React
                        </span>
                    </div>

                    <div className="w-[70px] h-[70px] smmaxw:w-[40px] smmaxw:h-[40px] smmaxw:p-[30px] bg-white rounded-[50%] flex justify-center items-center">
                        <span className="text-black font-medium text-sm mdmaxw:text-xs">
                            TS
                        </span>
                    </div>

                    <div className="w-[70px] h-[70px] smmaxw:w-[40px] smmaxw:h-[40px] smmaxw:p-[30px] bg-white rounded-[50%] flex justify-center items-center">
                        <span className="text-black font-medium text-sm mdmaxw:text-xs">
                            Redux
                        </span>
                    </div>

                    <div className="w-[70px] h-[70px] smmaxw:w-[40px] smmaxw:h-[40px] smmaxw:p-[30px] bg-white rounded-[50%] flex justify-center items-center flex-col">
                        <span className="text-black font-medium text-sm mdmaxw:text-xs">
                            RTK
                        </span>
                        <span className="text-black font-medium text-sm mdmaxw:text-xs">
                            Query
                        </span>
                    </div>

                    <div className="w-[70px] h-[70px] smmaxw:w-[40px] smmaxw:h-[40px] smmaxw:p-[30px] bg-white rounded-[50%] flex justify-center items-center">
                        <span className="text-black font-medium text-sm mdmaxw:text-xs">
                            Axios
                        </span>
                    </div>


                    <div className="w-[70px] h-[70px] smmaxw:w-[40px] smmaxw:h-[40px] smmaxw:p-[30px] bg-white rounded-[50%] flex justify-center items-center">
                        <span className="text-black font-medium text-sm mdmaxw:text-xs">
                            Express
                        </span>
                    </div>

                    <div className="w-[70px] h-[70px] smmaxw:w-[40px] smmaxw:h-[40px] smmaxw:p-[30px] bg-white rounded-[50%] flex justify-center items-center">
                        <span className="text-black font-medium text-sm mdmaxw:text-xs">
                            Sequelize
                        </span>
                    </div>


                    <div className="w-[70px] h-[70px] smmaxw:w-[40px] smmaxw:h-[40px] smmaxw:p-[30px] bg-white rounded-[50%] flex justify-center items-center">
                        <span className="text-black font-medium text-sm mdmaxw:text-xs">
                            MySQL
                        </span>
                    </div>



                </div>
                <div className="mt-[35px] smmaxw:mt-[0px]">
                    <span className="font-medium text-base mdmaxw:text-sm">Участие в проекте: Fullstack-разработчик</span>
                </div>
                <div>
                    <span className="font-medium text-base mdmaxw:text-sm">Категория проекта: пет-проект</span>
                </div>

                <div className="mt-[30px] smmaxw:mt-[0px]">
                    <span className="font-medium text-base mdmaxw:text-sm">
                        Идея проекта заключается в том, чтобы оказывать услуги груминга для животных и продавать на сайте зоотовары.
                        <br/>
                        Возможности пользователя:
                        добавление услуг или товаров в корзину, оплата выбранных сущностей в корзине.
                        <br/>
                        Возможности администратора:
                        добавление, удаление, редактирование: услуг, товаров, типов услуг.
                    </span>
                </div>
                <div className="flex justify-end items-center mt-[35px] smmaxw:mt-[10px]">
                    <div className="mdmaxw:w-full">
                        <a href="https://github.com/kotec666/grooming" rel="noopener noreferrer" target="_blank" className="flex justify-center items-center rounded-[10px] bg-[#1A131C] mdmaxw:px-[18px] mdmaxw:py-[12px] px-[24px] py-[18px] font-medium text-base mdmaxw:text-sm">
                            Перейти на страницу проекта
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecondProject;