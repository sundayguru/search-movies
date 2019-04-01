import React from 'react';
import BubblePreloader from 'react-bubble-preloader';


const BubbleLoading = (props) => {
    return (
      <div style={props.style} className="loading">
        {(props.loading && <BubblePreloader
            bubble={{ width: '1rem', height: '1rem' }}
            animation={{ speed: 1 }}
            colors={['#0167c2', '#00B5FF', '#DCEFFA']}
        />) || props.label}
        {props.loading && props.loadingText && <p style={{marginTop: 20}}>{props.loadingText}</p>}
      </div>
    );
};

export default BubbleLoading;