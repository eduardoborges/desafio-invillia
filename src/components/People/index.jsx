// @flow

import React, { useState, useEffect } from 'react';
import { StarShips } from '../index';
import Axios from 'axios';

type PeopleProps = {
	name: String,
	height: Number,
	mass: Number,
	hair_color: String,
	skin_color: String,
	eye_color: String,
	birth_year: String,
	gender: String,
	homeworld: String,
	films: Array<String>,
	species: Array<String>,
	vehicles: Array<String>,
	starships: Array<String>,
	created: Date,
	edited: Date,
	url: String
};

export default
	function People(props: PeopleProps) {

	const [imageUrl, setImageUrl] = useState(false);

	useEffect(() => {
		resolveImage();
	}, [])


	const resolveImage = async () => {
		const { data } = await Axios.get('https://api.qwant.com/api/search/images', {
			params: {
				'count': 50,
				'q': "toulouse pink city",
				't': 'images',
				'safesearch': 1,
				'locale': 'en_US',
				'uiv': 4
			}
		});
		setImageUrl(data.result.items[0].thumbnail);
	}

	return (
		<div class="card">
			<div class="card-image">
				<figure class="image is-4by3">
					<img
						src={imageUrl ? imageUrl : "https://bulma.io/images/placeholders/1280x960.png"}
						alt="Placeholder image"
					/>
				</figure>
			</div>
			<div class="card-content">
				<div class="media">
					<div class="media-left">
						<figure class="image is-48x48">
							<img
								src="https://bulma.io/images/placeholders/96x96.png"
								alt="Placeholder image"
							/>
						</figure>
					</div>
					<div class="media-content">
						<p class="title is-4">{props.name}</p>
						<p class="subtitle is-6">
							{props.height * 0.01}m | {props.mass}kgs | borns on {props.birth_year}
						</p>
					</div>
				</div>

				<div class="content">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis
					mauris. <a>@bulmaio</a>.
					<a href="#">#css</a> <a href="#">#responsive</a>
					<br />
					<time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
				</div>
			</div>
		</div>
	);
}
