import { Constants } from './../constants/constants';
import Hobby from './Hobby';

const HobbyWrapper = () => {
    return (
        <React.Fragment>
            <div className="hobby-wrapper">
                <h2 className="title">Hobbies</h2>
                <Hobby 
                imgName="gaming.jpg"
                alt="gaming image"
                p1="Gaming"
                p2="Quisque feugiat malesuada molestie."/>
                <Hobby 
                imgName="cooking.jpg"
                alt="cooking image"
                p1="Cooking"
                p2="Quisque feugiat malesuada molestie."/>
                <Hobby 
                imgName="biking.jpg"
                alt="biking image"
                p1="Biking"
                p2="Quisque feugiat malesuada molestie."/>
                    
            </div>
            <style jsx>
                {
                    `

                    .hobby-wrapper {
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

export default HobbyWrapper;