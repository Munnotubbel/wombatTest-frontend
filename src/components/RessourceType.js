import React from 'react'
import PropTypes from 'prop-types';

const RessourceType = (props) => {
    const eosIcon="https://res.cloudinary.com/munnotubbel/image/upload/v1581182752/wombat/5a52232c2f93c7a8d5137fdd_izhtxc.png"
    const type = props ? props.type : " - ";
    const consumption = props ? props.consumption : "";  
    const staked = props ? props.staked : (0).toFixed(4);
    const withIcon = props ? props.withIcon : false;

    return (
        <div className="ressource_type">
            <div id="type">{type}</div>
            <div id="consumption">{consumption}</div>
          
            <div className="stakedinfo"><p>{staked}</p>{withIcon===true ?<img className="coinIcon" alt="EOS-ICON" src={eosIcon}/>:null}</div>
        </div>
    )
}

RessourceType.propTypes = {
    type: PropTypes.string,
    consumption: PropTypes.string,
    staked: PropTypes.string,
    withIcon: PropTypes.bool
    
  };

export default RessourceType;
