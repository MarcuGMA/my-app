import React from "react";
import buttonHeader from "../../buttons";

function itemGame() {
    return (
        <div className="streamRow">       
            <div className="itemGame">
                <img src="https://static-cdn.jtvnw.net/ttv-boxart/Just%20Chatting-285x380.jpg" alt="game" />
                <div className="gameName">
                    <h2>Just Chatting</h2>
                    <buttonHeader text="View game"/>
                </div>
            </div>
        </div>
    );
}

export default itemGame;