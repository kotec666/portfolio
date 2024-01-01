import React from 'react';

const ThirdProject = () => {
    return (
        <div className="bg-[#0C090D] p-[35px] smmaxw:p-[15px] rounded-bl-[20px] rounded-br-[20px]">
            <div className="flex flex-col gap-y-[25px] smmaxw:gap-y-[15px]">
                <span className="font-medium md:text-2xl sm:text-lg smmaxw:text-sm">Проект "Аудиоплатформа"</span>
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
                            Socket.io
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

                    <div className="w-[70px] h-[70px] smmaxw:w-[40px] smmaxw:h-[40px] smmaxw:p-[30px] bg-white rounded-[50%] flex justify-center items-center">
                        <span className="text-black font-medium text-sm mdmaxw:text-xs">
                            Passport
                        </span>
                    </div>

                    <div className="w-[70px] h-[70px] smmaxw:w-[40px] smmaxw:h-[40px] smmaxw:p-[30px] bg-white rounded-[50%] flex justify-center items-center">
                        <span className="text-black font-medium text-sm mdmaxw:text-xs">
                            OAuth 2.0
                        </span>
                    </div>


                </div>
                <div className="mt-[35px] smmaxw:mt-[0px]">
                    <span className="font-medium text-base mdmaxw:text-sm">Участие в проекте: Fullstack-разработчик</span>
                </div>
                <div>
                    <span className="font-medium text-base mdmaxw:text-sm">Категория проекта: пет-проект</span>
                </div>

                <div className="mt-[30px]  smmaxw:mt-[0px]">
                    <span className="font-medium text-base mdmaxw:text-sm">
                        Платформа на подобии spotify для прослушивания музыки.
                        <br/>
                        <br/>
                        Возможности гостя:
                        <ul>
                            <li>Прослушивание музыки</li>
                            <li>Поиск музыки, исполнителей, альбомов, музыки по жанрам</li>
                        </ul>
                        <br/>
                        Возможности авторизованного пользователя:
                        <ul>
                            <li>Прослушивание музыки</li>
                            <li>Поиск музыки, исполнителей, альбомов, музыки по жанрам</li>
                            <li>Добавление музыки в категорию "Любимое"</li>
                            <li>Просмотр профиля</li>
                            <li>Возможность оставить заявку на получение роли исполнителя</li>
                            <li>Общение в чате</li>
                        </ul>
                        <br/>
                        Возможности исполнителя:
                        <ul>
                            <li>Загрузка/удаление музыки, музыкальных альбомов</li>
                            <li>Общение в чате</li>
                        </ul>
                        <br/>
                        Возможности администратора:
                        <ul>
                            <li>Добавление/удаление/редактирование жанров, альбомов, треков</li>
                            <li>Отклонение/прием заявок на выдачу роли исполнителя пользователю</li>
                            <li>Общение в чате</li>
                        </ul>
                    </span>
                </div>
                <div className="flex justify-end items-center mt-[35px] smmaxw:mt-[10px]">
                    <div className="mdmaxw:w-full">
                        <a href="https://github.com/kotec666/react-audio-platform" rel="noopener noreferrer" target="_blank" className="flex justify-center items-center rounded-[10px] bg-[#1A131C] mdmaxw:px-[18px] mdmaxw:py-[12px] px-[24px] py-[18px] font-medium text-base mdmaxw:text-sm">
                            Перейти на страницу проекта
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThirdProject;