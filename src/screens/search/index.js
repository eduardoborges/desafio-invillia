import React, { useEffect, useState } from 'react';
import { connect } from 'unistore/react';

import searchActions from '../../actions/searchActions';
import { searchInListByField } from '../../utils';

import { People } from '../../components';

function SearchScreen(props) {
	//

	const { PEOPLE, getPeople } = props;

	const [filter, setFilter] = useState('');
	const deps = [];
	useEffect(() => {
		getPeople();
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const handleScroll = () => {
		const { offsetHeight, scrollTop } = document.documentElement;
		const offset = 100; // um pouquinho antes né bb
		if (window.innerHeight + scrollTop <= offsetHeight - offset) return;
		getPeople();
	};

	return (
		<div className="container">
			<div className="columns">
				<div className="column">
					<h1 className="title">Search Screen</h1>
				</div>
				<div className="column">
					<input
						type="text"
						className="input is-medium"
						placeholder="Filter by name"
						onChange={e => setFilter(e.target.value)}
					/>
				</div>
			</div>

			<hr />

			<div className="peoples columns is-multiline">
				{searchInListByField(PEOPLE.data, 'name', filter).map(item => (
					<div className="column is-one-quarter">
						<People {...item} />
					</div>
				))}
			</div>

			<br />

			{PEOPLE.isLoading && <div className="sub-title">Carregando...</div>}
		</div>
	);
}

export default connect('PEOPLE', searchActions)(SearchScreen);
