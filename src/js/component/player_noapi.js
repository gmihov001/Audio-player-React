import React from "react";

export class Player2 extends React.Component {
	constructor() {
		super();
		this.state = {
			currentIndex: 0,
			songs: [
				{
					title: "South Park",
					id: "south-park",
					author: "Kyle",
					url:
						"https://assets.breatheco.de/apis/sound/files/cartoons/songs/south-park.mp3"
				},
				{
					title: "Thunder Cats",
					id: "thundercats",
					author: "Moonra",
					url:
						"https://assets.breatheco.de/apis/sound/files/cartoons/songs/thundercats.mp3"
				},
				{
					title: "X-Men",
					id: "x-men",
					author: "Profesor",
					url:
						"https://assets.breatheco.de/apis/sound/files/cartoons/songs/x-men.mp3"
				}
			]
		};
		this.player = null;
	}

	componentDidMount() {
		this.pauseBtn.style.display = "none";
	}

	play(index) {
		const url = this.state.songs[index].url;
		if (url)
			this.player.src = "https://assets.breatheco.de/apis/sound/" + url;
		this.player.play();
		this.playBtn.style.display = "none";
		this.pauseBtn.style.display = "inline-block";
		this.setState({ currentIndex: index });
	}
	pause() {
		this.player.pause();
		this.pauseBtn.style.display = "none";
		this.playBtn.style.display = "inline-block";
	}

	render() {
		const songs = this.state.songs.map((song, i) => {
			return (
				<div
					key={i}
					className={`track ${
						this.state.currentIndex == i ? "active" : ""
					}`}
					onClick={() => {
						this.play(i);
					}}>
					<div className="track__number">{i + 1}</div>
					<div className="track__title featured">
						<span className="title">{song.name}</span>
					</div>
				</div>
			);
		});

		return (
			<div className="player">
				<section className="content">
					<div className="tracks">{songs}</div>
				</section>
				<section className="current-track">
					<div className="current-track__actions">
						<a
							href="#"
							className="skipbackward"
							onClick={() =>
								this.play(this.state.currentIndex - 1)
							}>
							<i className="fas fa-caret-square-left" />
						</a>
						<a
							href="#"
							ref={elm => (this.playBtn = elm)}
							onClick={() => this.play()}>
							<i className="fas fa-play" />
						</a>
						<a
							href="#"
							ref={elm => (this.pauseBtn = elm)}
							onClick={() => this.pause()}>
							<i className="fas fa-pause-circle" />
						</a>
						<a
							href="#"
							className="skipforward"
							onClick={() =>
								this.play(this.state.currentIndex + 1)
							}>
							<i className="fas fa-caret-square-right" />
						</a>
					</div>
				</section>
				<audio ref={t => (this.player = t)} controls />
			</div>
		);
	}
}
