import React from 'react';

function Hero ({heroname}) {
    if (heroname === 'Joker'){
        throw new Error("Not a joker")
    }
    return(
        <div>
            <h1>{heroname}</h1>
        </div>
    )
}

export default Hero