
import React from 'react'
import MainNavBlock from "@/components/pages/Home/MainNavBlock";
import Container from "@/components/ui/Container";
import SkillsBlock from "@/components/pages/Home/SkillsBlock";
import SquiddedBlock from "@/components/pages/Home/SquiddedBlock";
import ProjectsBlock from "@/components/pages/Home/ProjectsBlock";
import DescriptionBlock from "@/components/pages/Home/DescriptionBlock";
import Footer from "@/components/pages/Home/Footer";
import dynamic from "next/dynamic"

const HeaderDynamic = dynamic(
  () => import("@/components/pages/Home/Header"),
  {
    ssr: false,
  },
)

const WelcomeBlockDynamic = dynamic(
  () => import("@/components/pages/Home/WelcomeBlock"),
  {
    ssr: false,
  },
)

const Home = () => {


  return (
      <>
              <HeaderDynamic/>
              <MainNavBlock/>
              {/*<div className="bg-[#0C090D]">*/}
              {/*    <Container>*/}
              {/*       <WelcomeBlockDynamic/>*/}
              {/*    </Container>*/}
              {/*</div>*/}
              <Container>
                  <SkillsBlock/>
              </Container>
              <SquiddedBlock/>
              <Container>
                <ProjectsBlock/>
                <DescriptionBlock />
                <Footer/>
              </Container>
      </>
  )
}

export default Home