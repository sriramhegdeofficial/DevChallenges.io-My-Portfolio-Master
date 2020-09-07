import { Constants } from './../constants/constants';
import Experience from './Experience';

const ExperienceWrapper = () => {
    return (
        <React.Fragment>
            <div className="experience-wrapper">
                <h2 className="title">Experiences</h2>
                <Experience 
                    imgName = "adidas.jpg"
                    alt="image of adidas"
                    p1="Feb 2017 - Current"
                    p2="Front-end develope"
                    p3="Donec aliquam est dui, 
                    vel vestibulum diam s
                    ollicitudin id. Quisque 
                    feugiat malesuada molestie."/>
                <Experience 
                    imgName = "bugati.jpg"
                    alt="image of bugati"
                    p1="Aug 2016 - Feb 2018"
                    p2="Full-stack developer"
                    p3="Donec aliquam est dui, 
                    vel vestibulum diam sollicitudin 
                    id. Quisque feugiat malesuada 
                    molestie."/>
                <Experience
                    imgName = "h&m.jpg"
                    alt="image of h&m"
                    p1="Jun 2015 - Aug 2016"
                    p2="Junior front-end developer"
                    p3="Donec aliquam est dui, 
                    vel vestibulum diam sollicitudin 
                    id. Quisque feugiat malesuada 
                    molestie." />
                    
            </div>
            <style jsx>
                {
                    `

                    .experience-wrapper {
                        background: white;
                        border-radius: ${Constants.portfolioBorderRadius};
                        padding: ${Constants.elementPadding};
                        margin-bottom: ${Constants.elementPadding}
                    }
                    
                   .title {
                        font-style: normal;
                        font-weight: 500;
                        font-size: 1.5rem;
                        line-height: 29px;
                        color: ${Constants.mainLightBlackColor};
                        margin-bottom: ${Constants.elementPadding};
                        
                   }
                    
                    
                    `
                }
            </style>
        </React.Fragment>
    );
}

export default ExperienceWrapper;