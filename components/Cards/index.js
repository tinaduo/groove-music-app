import React from "react";
import "./Cards.module.css";

export function albumSearch() {
    return (
        <div className="albumContainer">
            <div className="albumImage" />
            <img
                src=""
                alt=""
            />
            <div className="textContainer">
                <h4>{albumName}</h4>
                <h5>{artistName}</h5>
            </div>
        </div>
    );
};

export function AlbumContainerPost() {
    return (
        <div className="albumcontainerPost">
            <div className="albumImage" />
            <div className="overlap-group">
                <div className="albumTitle">
                    <h2>{albumTitle}</h2>
                </div>
                <div className="subext">
                    <h5>{musicType}</h5>
                    <img className="separator" alt="separators" src="vector.svg"/>
                    <h5>{musicYear}</h5>
                </div>
            </div>
            <h5>{albumName}</h5>
        </div>
    );
};
