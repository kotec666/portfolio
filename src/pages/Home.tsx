import React from 'react'
import MainNavBlock from "../components/pages/Home/MainNavBlock"
import WelcomeBlock from "../components/pages/Home/WelcomeBlock";
import Container from "../components/ui/Container";
import SkillsBlock from "../components/pages/Home/SkillsBlock";
import SquiddedBlock from "../components/pages/Home/SquiddedBlock";
import ProjectsBlock from "../components/pages/Home/ProjectsBlock";
import DescriptionBlock from "../components/pages/Home/DescriptionBlock";
import Footer from "../components/pages/Home/Footer";
import Header from "../components/pages/Home/Header";


const Home = () => {
    return (
        <>
            <Header/>
            <MainNavBlock/>
            <div className="bg-[#0C090D]">
                <Container>
                    <WelcomeBlock/>
                </Container>
            </div>
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