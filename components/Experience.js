import { Constants } from './../constants/constants';
import PropTypes from 'prop-types';


const Experience = (props) => {
    return (
        <React.Fragment>
            <div className="wrapper">
                <img className="experience-image" src={`/${props.imgName}`} alt={props.alt} />
                <div className="info-wrapper">
                    <p className="p1">{props.p1}</p>
                    <p className="p2">{props.p2}</p>
                    <p className="p3">{props.p3}</p>
                </div>
            </div>
            <style jsx>
                {
                    `

                    .wrapper {
                        display: flex;
                        
                        margin-bottom: ${Constants.elementPadding}
                    }

                   
                    
                    .experience-image {
                        display: inline-block;
                        width: 28%;
                        max-height: 170px;
                        object-fit: cover;
                        margin-right: 15px;
                        border-radius: ${Constants.portfolioBorderRadius};
                    }
                    
                    .p1 {
                        font-style: normal;
                        font-weight: 500;
                        font-size: 0.875rem;
                        line-height: 17px;
                        color: ${Constants.mainLightBlackColorSemiTransparent};
                        margin-bottom : 10px;
                    }

                    .p2 {
                        font-style: normal;
                        font-weight: 600;
                        font-size: 1rem;
                        line-height: 20px;
                        color: ${Constants.projectDisplayBlackColor};
                        margin-bottom: 15px;
                    }

                    .p3 {
                        font-family: Montserrat;
                        font-style: normal;
                        font-weight: 500;
                        font-size: 1rem;
                        line-height: 20px;
                        color: ${Constants.mainLightBlackColorSemiTransparent};
                    }
                    
                
                    `
                }
            </style>
        </React.Fragment>
    )
}

export default Experience;

Experience.propTypes = {
    imgName: PropTypes.string.isRequired,
    p1 : PropTypes.string.isRequired,
    p2 : PropTypes.string.isRequired,
    p3 : PropTypes.string.isRequired

}