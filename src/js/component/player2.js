import React from "react";

//create your first component
export class Player2 extends React.Component {
    constructor(){
        super();
        this.state = {
            songs: [],
            currentIndex: 0
        };
        this.player = null;
    }


    render(){
        const songs = this.state.songs.map((song,i)=> {
            return (
                <div 
                    key={i} 
                    className={`track ${
                        this.state.currentIndex == i ? "active" : ""
                    } `}
                    onClick={()=> {
                        this.play(i);
                    }}
                >
                    <div className="track_number">{i + 1}</div>
                    <div className="track_title featured">
                        <span className="title">{song.name}</span>
                    </div>
                </div>
            );
        }
        );
        return (
            <div className="player">
                <section className="content">
                    <div className="tracks">{songs}</div>
                </section>
                <section className="current-track"></section>
            </div>
        );
    }
}    