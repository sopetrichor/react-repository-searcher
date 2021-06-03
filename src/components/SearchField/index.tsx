import React, { useState, useCallback } from 'react';
import { useDispatch } from 'redux-react-hook';
import { GitHub, Search } from '@material-ui/icons';

import { fetchSearchReposRequest } from '@store/repositories/actions';

import { Props } from './types';
import './style.scss';

const SearchField: React.FC<Props> = React.memo((props) => {
    const { perPage } = props;
    const dispatch = useDispatch();
    const [query, setQuery] = useState<string>('');

    const handleOnInput = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setQuery(e.target.value);
        },
        [query]
    );

    const handleOnSearch = useCallback(() => {
        if (query.length) {
            dispatch(fetchSearchReposRequest({ query: query, page: 1, perPage: perPage, reload: true }));
        } else {
        }
    }, [query]);

    const handleOnKeyDown = useCallback(
        (e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Enter') {
                handleOnSearch();
            }
        },
        [handleOnSearch]
    );

    return (
        <div className="search-field">
            <div className="search-field__icon">
                <GitHub fontSize="large" />
            </div>
            <div className="search-field__operation">
                <Search fontSize="large" color="disabled" />
                <input
                    className="search-field__query-field"
                    type="text"
                    placeholder={'Search repositories...'}
                    onChange={(e) => handleOnInput(e)}
                    onKeyDown={(e) => handleOnKeyDown(e)}
                />
                <button className="search-field__search-btn" onClick={handleOnSearch}>
                    Search
                </button>
            </div>
        </div>
    );
});

export default SearchField;
