import {DEVELOPER_ROLE, PROJECT_ROLE, PROJECT_STATUS} from "@/types/enums";

export const projectsData = [
	{
		id: 1,
		projectName:"Quartzwerke Russia",
		stack:["Next.js", "TS", "Tailwind", "Framer motion", "Zustand", "Socket.io", "KY", "Nest.js", "Prisma", "Postgres", "Redis"],
		myRole: DEVELOPER_ROLE.frontend,
		projectRole: PROJECT_ROLE.commercial,
		projectStatus: PROJECT_STATUS.development,
		projectDescription:"\"Quartzwerke Russia\" - это крупная компания, занимающаяся производством и продажей цветного и белого кварцевого песка оптом и в розницу. На момент написания этого текста компания имеет 4 крупных предприятия в России.",
		href_url:"https://qw-russia.ru/",
		img_src:"url('./images/qwr.webp')",

	},
	{
		id: 2,
		projectName:"2chrg",
		stack:["React", "TS", "zustand", "Tailwind", "i18", "capacitor", "ky", "NestJS", "Prisma", "MySQL"],
		myRole: DEVELOPER_ROLE.frontend,
		projectRole: PROJECT_ROLE.commercial,
		projectStatus: PROJECT_STATUS.development,
		projectDescription:"Мобильное приложение для отображения зарядных станций и зарядки электромобилей. Мобильное приложение реализуется на связке React + Capacitor",
		href_url:"https://www.2chrg.com/",
		img_src:"url('/images/2chrg.webp')"
	},
	{
		id: 3,
		projectName:"Bankir.kg",
		stack:["Next.js", "TS", "Tailwind", "Axios", "SWR", "Nest.js", "Sequelize", "Postgres",],
		myRole: DEVELOPER_ROLE.frontend,
		projectRole: PROJECT_ROLE.commercial,
		projectStatus: PROJECT_STATUS.finished,
		projectDescription:"\"Bankir.kg\" - это крупный киргизский информационный портал, который специализируется на предоставлении информации о финансовых продуктах, банках, страховых компаниях, кредитах, инвестициях и других финансовых услугах. Сайт предоставляет сравнительные данные о различных банковских продуктах, а также новости и статьи о финансовой сфере. Пользователи могут находить на \"Bankir.kg\" информацию о процентных ставках по вкладам, кредитах, ипотеке, а также сравнивать различные банковские предложения. Сайт также предоставляет полезные советы и инструменты для принятия финансовых решений. Помимо этого, \"Bankir.kg\" также предоставляет информацию о страховых услугах, инвестициях, курсах валют и других финансовых темах. Этот ресурс может быть полезным и для российских граждан, ищущих информацию о финансовых продуктах и услугах, а также для принятия обоснованных решений в сфере финансов.",
		img_src:"url('/images/bankiProject.webp')",
	},
]


// projectData: {
//     projectName: string
//     stack: string[]
//     myRole: DEVELOPER_ROLE
//     projectRole: PROJECT_ROLE
//     projectStatus: PROJECT_STATUS
//     projectDescription: string
//     href_url?: string
// }