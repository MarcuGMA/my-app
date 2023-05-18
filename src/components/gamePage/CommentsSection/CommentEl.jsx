import React from "react";

function CommentEl({ comment,user,rating ,date}) {
    return (
        <div className="commentEl">
            <div className="commentElHeader">
                <div className="commentElHeaderLeft">
                    <h2>{user}</h2>
                    <p>{rating}</p>
                </div>
                <div className="commentElHeaderRight">
                    <p>{date} day ago</p>
                </div>
            </div>
            <div className="commentElBody">
                <p>{comment}</p>
            </div>
        </div>
    );
}

export default CommentEl;

