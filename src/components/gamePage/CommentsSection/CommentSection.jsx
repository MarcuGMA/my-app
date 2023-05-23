import React from "react";
import CommentEl from "./CommentEl";
import { useTranslation } from "react-i18next";

function CommentSection() {
  const { t } = useTranslation();
  return (
    <div className="commentsSection wrapper">
      <h1>{t("Comment_Section")}</h1>
      <div className="commentBox">
        <CommentEl
          user="King1"
          rating="5/5"
          date="2"
          comment="After 1200 hours i am a hollow husk of the man i once used to be. This game has ruined me physically, mentally and socially . Please for the love of god dont get into this trap of a game."
        />
        <CommentEl 
        user="Luca2330"
        rating="5/5"
        date="2"
        comment="If you are into sadism or masochism this game is for you, because you will suffer a lot and you will also see others suffer, specially when you come back online to see your little base got raided by a MASSIVE clan in your neighborhood, you will get gang banged and anally stretched by sweat lords and clans, overall it is a great game.
        also there are modded servers that you can play on that are easier than officials more or less."
        />
        <CommentEl 
        user="dorororor"
        rating="5/5"
        date="2"
        comment="Decent game I guess. No getting back these 5k hours now.."
        />
        <CommentEl 
        user="Master1"
        rating="5/5"
        date="2"
        comment="
        its aight"
        />
        <CommentEl 
        user="?"
        rating="5/5"
        date="2"
        comment="After 1200 hours i am a hollow husk of the man i once used to be. This game has ruined me physically, mentally and socially . Please for the love of god dont get into this trap of a game."
        />
      </div>
    </div>
  );
}

export default CommentSection;
