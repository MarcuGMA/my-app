import React from "react";
import itemGame from "./itemGame";
import itemStream from "./itemStream";


function Streams() {
    return (

            <div className="streamsContainer">
                <h1>Streams</h1>
                    <itemGame />
                    <div className="streamTwich">
                        <itemStream />
                        <itemStream />
                        <itemStream />
                        <itemStream />
                    </div>
            </div>        
    
    );
    }

export default Streams;