import React from 'react';
import './loading.css';

const Loading = (props) => {
    
    const { width, height } = props
    return (
        <div 
            className="Loading" 
            style={{
                width,
                height
            }}
        
        />
    )
}
Loading.defaultProps = {
    width: '30px',
    height: '30px'
}

export default Loading;