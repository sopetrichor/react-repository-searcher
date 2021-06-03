import React from 'react';

import SearchField from '@components/SearchField/index';
import List from '@components/List/index';

import { Props } from './types';
import './style.scss';

const App: React.FC<Props> = (props) => {
    return (
        <div className="app">
            <SearchField perPage={30} />
            <List />
        </div>
    );
};

export default App;
