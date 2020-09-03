import { Constants } from './../constants/constants';
import  EmailIcon  from '@material-ui/icons/Email';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    Icon: {
        fontSize: "1.6rem",
        marginRight: "9px",
        color: Constants.mainLightBlackColor
    },
  });



 
 const SideBar = (props) => {
    const classes = useStyles();
    const getWidth = () => {
        if(props.width === 0) {
            return 33.333;
        } else {
            return props.width;
        }
    }
    return (
    <React.Fragment>
        <div className="sidebar-wrapper">
        <div className="portfolio-image-wrapper">
            <img className="portfolio-image" src="/portfolio.jpg" alt="image of a man behind the portfolio" />
            <h2 className="name">Billy Pearson</h2>
            <h3 className="job-title">Front-end developer</h3>
            <div className="contact-wrapper">
                <EmailIcon className={classes.Icon}/>
                <h2 className="contact">billy@example.com</h2>
            </div> 
            <div className="contact-wrapper">
                <EmailIcon className={classes.Icon}/>
                <h2 className="contact">(+603) 546 624 342</h2>
            </div> 
            <div className="portfolio-about">
                    Self-motivated developer, 
                    who is willing to 
                    learn and create 
                    outstanding UI applications.
            </div>
        </div>
        
    </div>
    <style jsx>
        {
            `
            .sidebar-wrapper {
                width: ${getWidth()}%;
                margin-right: ${Constants.elementPadding};
                padding: ${Constants.elementPadding};
                border-radius: ${Constants.portfolioBorderRadius};
                background: white;
            }

            .portfolio-image-wrapper {
                width: 100%;
                display: flex;
                flex-direction: column;
            }

            .portfolio-image {
                width: 100%;
                object-fit: contain;
                border-radius: ${Constants.portfolioBorderRadius}
                
            }

            .name {
                
                font-style: normal;
                font-weight: 600;
                font-size: 1.5rem;
                color: ${Constants.mainLightBlackColor};
                margin-top: ${Constants.elementPadding} ;
                margin-bottom: ${Constants.contactMargin}
            }

            .job-title {
                font-family: 'Montserrat', sans-serif;
                font-style: normal;
                font-weight: 500;
                font-size: 1.125rem;
                color: ${Constants.mainLightBlackColorSemiTransparent};
                margin-bottom: ${Constants.infoWrapperMArginBottom};
            }

            .contact-wrapper {
                display: flex;
                margin-bottom: ${Constants.contactMargin};
                align-items: center;
            }

            .contact {
                font-family: 'Montserrat', sans-serif;
                font-style: normal;
                font-weight: 500;
                font-size: 1.125rem;
                line-height: 5px,
                color: ${Constants.mainLightBlackColor};
                
            }

            .portfolio-about {
                margin-top: ${Constants.infoWrapperMArginBottom};
                font-family: 'Montserrat', sans-serif;
                font-style: normal;
                font-weight: 500;
                font-size: 1rem;
                color: ${Constants.mainLightBlackColorSemiTransparent};
                line-height: 22px;
                width: 95%;
                min-width: 180px;
                line-height: 30px;
            }

            @media screen and (max-width: 1000px) {

                .sidebar-wrapper {
                    min-width: 250px;
                    margin: ${Constants.elementPaddingMD};
                    padding: ${Constants.elementPadding};
                }

                .name {
                    font-size: 1.4rem;
                    color: ${Constants.mainLightBlackColor};
                    margin-top: ${Constants.elementPaddingMD} ;
                    margin-bottom: ${Constants.contactMarginMD}
                }

                .job-title {
                    font-size: 0.95rem;
                    color: ${Constants.mainLightBlackColorSemiTransparent};
                    margin-bottom: ${Constants.infoWrapperMArginBottomMD};
                
              }

              .portfolio-about {
                margin-top: ${Constants.infoWrapperMArginBottomMD};
                font-size: 0.85rem;
                line-height: 25px;
            }
        }

        @media screen and (max-width: 650px) { 
            .sidebar-wrapper {
                width: 100%;
                min-width: 0;
                word-wrap: break-word;
                overflow-x: hidden;
                margin-bottom: ${Constants.mainPagePaddingMD}
            }

            .portfolio-about {
                min-width: 0;
                line-height: 30px;
            }

          
        }
            
            `
        }
    </style>
    </React.Fragment>
    )
}

export default SideBar;