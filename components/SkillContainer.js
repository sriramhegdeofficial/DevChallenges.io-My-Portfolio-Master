import ProgressSkill from './ProgressSkill';
import { Constants } from './../constants/constants';
import PropTypes from 'prop-types';

const SkillContainer = (props) => {
    return(
        <React.Fragment>
            <div className="skill-container">
                <h4 className="skill-name">{props.name}</h4>
                <ProgressSkill value={props.value}/>
            </div>
            <style jsx>
                {
                    `
                    .skill-container {
                        width: 100%;
                        display: flex;
                        justify-content: space-between;
                        align-items : center;
                        margin: ${Constants.skillContainerMargin} 0px;
                    }

                    .skill-name {
                        color: ${Constants.mainLightBlackColor};
                        font-size: 1rem;
                        text-transform: capitalize;
                    }

                    @media screen and (max-width: ${Constants.mediumSize}px) { 

                        .skill-name {
                            font-size: 0.8rem;
                        }
                    }

                    @media screen and (max-width: ${Constants.smallSize}px) { 

                        .skill-name {
                            font-size: 1rem;
                        }
    
                    }
                    
                    
                    `
                }
            </style>
        </React.Fragment>
    );
}

export default SkillContainer;

SkillContainer.propTypes = {
    value : PropTypes.number.isRequired,
    name : PropTypes.string.isRequired
}