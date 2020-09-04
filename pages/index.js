import Head from 'next/head'
import { Constants} from './../constants/constants';




import SideBarAbout from '../components/SideBarAbout';
import ProgressSkill from './../components/ProgressSkill';
import SkillContainer from './../components/SkillContainer';

import ProjectDisplay from './../components/ProjectDisplay';

const  Home = () => {
    
    return(
        <React.Fragment>
            <Head>
                <title>Welcome | Portfolio</title>
            </Head>
            <div className="wrapper">
                <SideBarAbout width={33.33 || 0}/>
                <div className="main-wrapper">
                    <div className="skills-container">
                    <div className="skills-wrapper add-margin">
                        <h3 className="skills-title">Front end</h3>
                        <SkillContainer value={80} name="react"/>
                        <SkillContainer value={90} name="javaScript"/>
                        <SkillContainer value={65} name="CSS"/>
                        <SkillContainer value={70} name="redux"/>
                        <SkillContainer value={97} name="nodejs"/>
                      
                    </div>
                    <div className="skills-wrapper auto-height">
                        <h3 className="skills-title">Design</h3>
                            <SkillContainer value={67} name="figma"/>
                            <SkillContainer value={37} name="Illustrator"/>
                        </div>
                    </div>
                    <div className="projects">Projects (3)</div>
                    <div className="projects-display-wrapper">
                        <ProjectDisplay 
                        tags = {['html', 'css', 'responsive']}
                        title="Recipe blog"
                        imgName="recipe.jpg"
                        
                        >
                        In this project, I work with HTML and CSS to create a responsive page . 
                                The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum 
                                diam sollicitudin id. Quisque feugiat malesuada molestie.
                        </ProjectDisplay>
                        <ProjectDisplay tags = {['html', 'css', 'responsive']}
                        imgName="gallery.jpg"
                        title="Gallery App">
                        In this project, I work with HTML and CSS to create a responsive page . 
                                The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum 
                                diam sollicitudin id. Quisque feugiat malesuada molestie.
                        </ProjectDisplay>
                        <ProjectDisplay tags = {['html', 'css', 'responsive']}
                        imgName="office.jpg"
                        title="Office blog">
                        In this project, I work with HTML and CSS to create a responsive page . 
                                The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum 
                                diam sollicitudin id. Quisque feugiat malesuada molestie.
                        </ProjectDisplay>
                    </div>
                   </div>
            </div>
            <style jsx>
                {`
                
                .wrapper {
                    width: 100%;
                    display: flex;
                    padding: ${Constants.mainPagePadding};
                    
                }

                

                .main-wrapper {
                    width: 66.6666%;
                    display: flex;
                    flex-direction: column;
                }

                .skills-container  {
                    display: flex;
                    
                }

                .skills-wrapper {
                    width: 50%;
                    padding: ${Constants.skillsWrapperPadding};
                    border-radius: ${Constants.portfolioBorderRadius};
                    background: white;
                    
                }

             

                .auto-height {
                    align-self: flex-start;
                }

                .add-margin {
                    margin-right: ${Constants.elementPadding};
                }

                .skills-title {
                    font-family: 'Montserrat', sans-serif;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 1.125rem;
                    line-height: 22px;
                    text-transform: uppercase;
                    color: ${Constants.mainLightBlackColor};
                }

                
                .projects {
                    text-transform: capitalize;
                    width: 100%;
                    background: white;
                    border-radius: ${Constants.projectsBorderRadius};
                    height: 66px;
                    display: flex;
                    align-items : center;
                    justify-content: flex-start;
                    padding: 0px ${Constants.projectsPadding};
                    margin-top: ${Constants.projectsPadding};
                    font-family: 'Montserrat', sans-serif;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 1.125rem;
                    line-height: 22px;
                    color: ${Constants.mainLightBlackColor};
                }

                .projects-display-wrapper {
                    width: 100%;
                    margin-top: ${Constants.projectsPadding};
                }
                

                
                @media screen and (max-width: ${Constants.mediumSize}px) { 
                    .wrapper {
                        
                        padding: ${Constants.mainPagePaddingMD};
                    }

                    .main-wrapper {
                       width: 80%;
                       padding: ${Constants.elementPaddingMD};
                    }

                    .skills-container {
                        width: 100%;
                    }

                    .skills-wrapper {
                        padding: ${Constants.skillsWrapperPaddingMD};
                        
                    }

                    .skills-title {
                        font-size: 0.95rem;
                    }

                   
    

                }
               

                @media screen and (max-width: ${Constants.smallSize}px) { 
                    .wrapper {
                        padding: ${Constants.mainPagePaddingMD};
                        flex-direction: column;
                        min-width: 100%;
                        align-items : center;
                    }

                    .main-wrapper {
                        min-width: 100%;
                        padding: 0;
                    }

                    .skills-container {
                        flex-direction: column;
                        width: 100%;
                        
                        
                    }

                    .skills-wrapper {
                        width: 100%;
                        margin-bottom: ${Constants.skillsWrapperMarginBottomSM};
                        
                    }

                    .skills-title { 
                        font-size: 1.125rem;
                    }

                   
                }
                

           

                
                `}
            </style>
        </React.Fragment>
    )
}

export default Home;