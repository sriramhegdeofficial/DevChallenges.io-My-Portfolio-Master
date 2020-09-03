import Head from 'next/head'
import { Constants} from './../constants/constants';
import useMediaQuery from 'react-hook-media-query';



import SideBar from './../components/SideBar';
import ProgressSkill from './../components/ProgressSkill';


const  Home = () => {
    const medium = useMediaQuery('(max-width: 1000px)');
    const small = useMediaQuery('(max-width: 650px)')

    const getWidthOfSidebar = () => {
        if(medium) {
            return 25;
       }else {
            return 0;
        }
    }
    return(
        <React.Fragment>
            <Head>
                <title>Welcome | Portfolio</title>
            </Head>
            <div className="wrapper">
                <SideBar width={getWidthOfSidebar()}/>
                <div className="main-wrapper">
                    <div className="skills-container">
                    <div className="skills-wrapper add-margin">
                        <h3 className="skills-title">Front end</h3>
                        <div className="skill-container">
                            <h4 className="skill-name">React</h4>
                            <ProgressSkill value={70}/>
                        </div>
                        <div className="skill-container">
                            <h4 className="skill-name">JavaScript</h4>
                            <ProgressSkill value={63}/>
                        </div>
                        <div className="skill-container">
                            <h4 className="skill-name">CSS</h4>
                            <ProgressSkill value={55}/>
                        </div>
                        <div className="skill-container">
                            <h4 className="skill-name">Redux</h4>
                            <ProgressSkill value={29}/>
                        </div>
                        <div className="skill-container">
                            <h4 className="skill-name">Nodejs</h4>
                            <ProgressSkill value={90}/>
                        </div>
                      
                    </div>
                    <div className="skills-wrapper auto-height">
                    <h3 className="skills-title">Design</h3>
                        <div className="skill-container">
                            <h4 className="skill-name">Figma</h4>
                            <ProgressSkill value={55}/>
                        </div>
                        <div className="skill-container">
                            <h4 className="skill-name">Illustrator</h4>
                            <ProgressSkill value={88}/>
                        </div>
                    </div>
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

                .skill-container {
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items : center;
                    margin: ${Constants.skillContainerMargin} 0px;
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

                

                .skill-name {
                    color: ${Constants.mainLightBlackColor};
                    font-size: 1rem;
                }

                
                @media screen and (max-width: 1000px) { 
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

                    .skill-name {
                        font-size: 0.8rem;
                    }
    

                }
               

                @media screen and (max-width: 650px) { 
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

                    .skill-name {
                        font-size: 1rem;
                    }

                }
                

           

                
                `}
            </style>
        </React.Fragment>
    )
}

export default Home;