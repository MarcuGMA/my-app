import React from "react";
import { ButtonHeader } from "../buttons";

function Streams() {
  return (
    <div className="streamsContainer">
      <div className="streamBox">
        <h1>STREAMS</h1>
        <div className="boxStream">
          <div className="streamRow">
            <div className="itemGame">
              <img
                src="https://th.bing.com/th/id/R.bc569eb87ff3ae10168dca1a35c752e5?rik=aUaCBGEnsn67HQ&pid=ImgRaw&r=0"
                alt="game"
              />
              <div className="gameName">
                <h2>Overwatch 2</h2>
                <ButtonHeader text="View game" />
              </div>
            </div>
          </div>
          <div className="streamTwich">
            {Array(4).fill(
              <div className="streamTwichItem">
                <img
                  src="https://th.bing.com/th/id/R.6583525723cc16b74688f487ca8b52a3?rik=fr24g4b5G6MTAw&riu=http%3a%2f%2fi.ytimg.com%2fvi%2fBMy9XCgffjw%2fmaxresdefault.jpg&ehk=Qgl6RzX338QMB7LU9Wd2ZfQICzmsYHBnRIghtNReXZA%3d&risl=&pid=ImgRaw&r=0"
                  alt="game"
                />
                <div className="gameName">
                  <h2>Stream</h2>
                  <p>123412 people</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Streams;
