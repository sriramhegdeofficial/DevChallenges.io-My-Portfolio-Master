import { Constants } from './../constants/constants';
import PropTypes from 'prop-types';

const ProjectDisplay = (props) => {


    return (
        <React.Fragment>
            <div className="wrapper">
                <img className="project-image" src={`/${props.imgName}`} alt="recipe image" />
                <div className="projects-details-wrapper">
                        <div className="tags-wrapper">
                            {   
                                props.portfolio ? 
                                props.tags.map(tag => <span className="tags" key={tag}>#{tag}</span>) : null
                            }
                        </div>
                        <h2 className="projects-details-title">{props.title}</h2>
                        <p className="projects-details">
                                {props.children}
                        </p>
                        <div className="display-button-wrapper">
                            <button className="button button-primary margin-right"href="">Demo</button>
                            <button className="button button-secondary" href="">Code</button>
                        </div>
                        <a className="blog-link">{props.link}</a>
                </div>
            </div>
            <style jsx>
                {
                    `

                    .blog-link {
                        display: ${props.portfolio ? "none" : "block"};
                        color: ${Constants.buttonPrimaryBlue};
                        cursor: pointer;
                    }

                    .wrapper {
                        width: 100%;
                        min-height: 300px;
                        border-radius: ${Constants.projectsBorderRadius};
                        display: flex;
                        padding: ${Constants.elementPadding};
                        background: white;
                        margin: ${Constants.elementPadding} 0px;
                        flex-direction : ${props.portfolio ? "row" : "row-reverse"};
                        
                    }

                    .project-image {
                        width: 35%;
                        object-fit: cover;
                        border-radius: ${Constants.projectsBorderRadius};
                        margin-right: ${props.portfolio ? Constants.elementPadding : "0px"};
                        margin-left: ${props.portfolio ? "0px" : Constants.elementPadding}
                    }

                    .projects-details-wrapper {
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        
                    }

                

                    .tags {
                        margin-right: 20px;
                        font-style: normal;
                        font-weight: 500;
                        font-size: 1rem;
                        line-height: 20px;
                        color: ${Constants.mainLightBlackColor};
                    }

                    .projects-details-title {
                        font-style: normal;
                        font-weight: 500;
                        font-size: 1.5rem;
                        line-height: 29px;
                        color: ${Constants.projectDisplayBlackColor};
                        text-transform: capitalize;
                    }
                    

                    .projects-details {
                        font-style: normal;
                        font-weight: 500;
                        font-size: 0.85rem;
                        line-height: 25px;
                       
                        color: ${Constants.mainLightBlackColorSemiTransparent};
                    }

                   

                    .button {
                        text-decoration: none;
                        padding: 10px 30px;
                        outline: none;
                        border: none;
                        font-family: 'Montserrat', sans-serif;
                        border-radius: 5px;
                        color: black;
                        text-transform: capitalize;
                    }

                    .button-primary {
                        background: ${Constants.buttonPrimaryBlue};
                        color: white;
                    }

                    .button-secondary {
                        border: 1px solid ${Constants.buttonPrimaryBlue};
                        color: ${Constants.buttonPrimaryBlue};
                        background: white;
                    }

                  

                    .margin-right {
                        margin-right: 20px;
                    } 

                    .display-button-wrapper {
                        display: ${props.portfolio ? "block" : "none"};
                    }


                    @media screen and (max-width: ${Constants.mediumSize}px) { 

                        .wrapper {
                           padding: ${Constants.elementPaddingMD};
                           min-width: 200px;
                           margin-bottom: ${Constants.elementPaddingMD}

                        }

                        .project-image {
                            width: 28%;
                            margin-right: ${Constants.elementPaddingMD};
                            
                        }

                        .tags {
                            margin-right: 15px;
                            font-size: 0.8rem;
                        }

                        .projects-details-title {
                           font-size: 1.35rem;
                        }

                        .projects-details {
                            font-size: 0.75rem;
                        }
                    }

                    @media screen and (max-width: ${Constants.smallSize}px) {

                        .wrapper {
                            flex-direction: column;
                            
                        }
                            
                        .project-image {
                            width: 100%;
                            margin-bottom: 15px;
                            margin-left: 0px;
                            
                        }

                       

                        .tags-wrapper {
                            margin-bottom: 15px;
                        }

                        .projects-details-title {
                            margin-bottom: 15px;
                        }

                        .projects-details {
                            margin-bottom: 15px;
                        }


                    }
                    
                    
                    `
                }
            </style>
        </React.Fragment>
    );
}

export default ProjectDisplay;

ProjectDisplay.propTypes = {
    tags: PropTypes.array,
    imgName : PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    portfolio : PropTypes.bool.isRequired

}