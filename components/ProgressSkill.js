import {Constants} from './../constants/constants';

const ProgressSkill = (props) => {

    const getWidth = () => {
        let value = props.value;
        if(props.value > 100) {
            value = 100;
        }

        return value;
    }

    return(
        <React.Fragment>

            <div className="progress-bar"></div>
            <style jsx>
                {
                    `

                    .progress-bar {
                        position: relative;
                        width: 50%;
                        background: ${Constants.progressBarBackground};
                        height: 6px;
                        border-radius: ${Constants.portfolioBorderRadius};
                    }
    
                    .progress-bar::before {
                        
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: ${getWidth()}%;
                        content: '';
                        background: ${Constants.progressBarForeground};
                        height: 100%;
                        border-radius: ${Constants.portfolioBorderRadius};
                    }

                    @media screen and (max-width: ${Constants.mediumSize}px) {
                       
        
                      
    

                     }
                    
                    
                    `
                }
            </style>
        </React.Fragment>
    );
}

export default ProgressSkill;