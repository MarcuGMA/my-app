import React from "react";
import gamesData from "../../../api/gamesData";

function CardGamePage() {
  const game = gamesData[0];

  return (
    <div className="cardGamePage">
      <div className="cardGamePage__img">
        <img
          src="https://psxbrasil.com.br/wp-content/uploads/2020/11/spider-8-4k.jpg"
          alt=""
        />
      </div>
      <div className="cardGamePage__info">
        <div className="cardGamePage__info__platforms">
          <p>PC</p>
          <p>PS4</p>
          <p>Steam</p>
        </div>
        <div className="cardGamePage__info__features">
          <p>Casual</p>
          <p>SinglePlayer</p>
          <p>Storyline</p>
        </div>
        <div className="cardGamePage__info__icons">
          <a title="Widget Code" class="cardGamePage__info__icon">
            <svg
              width="15"
              fill="#ffffff"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
            >
              <path d="M40 0c-4.4 0-8 3.6-8 8 0 .6.1 1.1.2 1.6L14 18.8c-1.5-1.7-3.6-2.8-6-2.8-4.4 0-8 3.6-8 8s3.6 8 8 8c2.4 0 4.5-1.1 6-2.8l18.2 9.1c-.1.6-.2 1.1-.2 1.7 0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8c-2.4 0-4.5 1.1-6 2.8l-18.2-9.1c.1-.5.2-1.1.2-1.6s-.1-1.1-.2-1.6L34 13.2c1.5 1.7 3.6 2.8 6 2.8 4.4 0 8-3.6 8-8s-3.6-8-8-8z"></path>
            </svg>
          </a>
          <a
            target="_blank"
            title="Share on Reddit"
            class="cardGamePage__info__icon"
            rel="noreferrer"
          >
            <svg
              width="20"
              fill="#ffffff"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 19 15"
            >
              <path d="M18.2 6.9c0-1.2-1-2.2-2.2-2.2-.5 0-.9.2-1.3.5-1.2-.9-2.8-1.4-4.5-1.5l.9-2.2 2.7.6c.1.8.8 1.5 1.6 1.5.9 0 1.6-.8 1.6-1.7S16.3.2 15.4.2c-.6 0-1.1.3-1.4.8l-3-.8c-.3-.1-.5.1-.6.3L9.1 3.6c-1.8.1-3.6.6-4.9 1.5-.4-.3-.8-.4-1.3-.4-1.2 0-2.2 1-2.2 2.2 0 .8.4 1.6 1.1 1.9v.3c0 3.1 3.4 5.6 7.6 5.6 4.2 0 7.6-2.5 7.6-5.6v-.3c.8-.2 1.2-1 1.2-1.9zm-2.7-5.6c.3 0 .5.3.5.6s-.2.6-.5.6-.5-.3-.5-.6c-.1-.3.2-.6.5-.6zM5.7 8.6c0-.6.5-1.1 1.1-1.1s1 .5 1 1.1c0 .6-.5 1.1-1.1 1.1s-1-.5-1-1.1zm6.3 3.7c-.8.6-1.6.8-2.5.8s-1.8-.3-2.5-.8c-.2-.2-.3-.5-.1-.8.2-.2.5-.3.8-.1 1.1.8 2.6.8 3.8 0 .2-.2.6-.1.8.1 0 .3-.1.7-.3.8zm.2-2.6c-.6 0-1.1-.5-1.1-1.1 0-.6.5-1.1 1.1-1.1.6 0 1.1.5 1.1 1.1 0 .6-.5 1.1-1.1 1.1z"></path>
            </svg>
          </a>
          <a
            target="_blank"
            title="Share on Twitter"
            class="cardGamePage__info__icon"
            rel="noreferrer"
          >
            <svg
              width="20"
              fill="#ffffff"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 18 15"
            >
              <path
                fill-rule="evenodd"
                d="M17.4 1.9c-.4.2-.8.3-1.2.4.5-.4.8-1 1-1.6.1-.2-.1-.3-.3-.2-.6.3-1.2.6-1.8.8H15c-.1 0-.2 0-.3-.1-.7-.6-1.6-.9-2.5-.9-.4 0-.8.1-1.2.2C9.7.8 8.8 1.8 8.5 3c-.1.5-.2 1-.1 1.4v.1h-.1C5.6 4.3 3.2 3 1.4.9c0-.1-.2-.1-.3.1-.3.5-.5 1.2-.5 1.9 0 1 .4 2 1.1 2.7-.3-.1-.6-.2-.8-.4-.1-.1-.3 0-.3.2 0 1.5.9 2.9 2.2 3.5h-.1c-.2 0-.4 0-.6-.1-.1 0-.3.1-.2.3.4 1.4 1.6 2.4 3 2.6-1.2.8-2.5 1.2-3.9 1.2H.5c-.1 0-.2.1-.3.2 0 .1 0 .3.1.3 1.6.9 3.4 1.4 5.2 1.4 1.6 0 3.1-.3 4.4-.9 1.2-.6 2.3-1.4 3.3-2.4.9-1 1.5-2.1 2-3.3.4-1.2.7-2.4.7-3.7v-.2c0-.2.1-.4.2-.5.6-.5 1.1-1 1.5-1.6.2-.2 0-.4-.2-.3"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default CardGamePage;
