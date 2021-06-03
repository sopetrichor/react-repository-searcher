import React, { useCallback, useMemo } from 'react';
import { useMappedState, useDispatch } from 'redux-react-hook';
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList } from 'react-window';

import { AppState } from '@store/rootReducer';
import { fetchSearchReposRequest } from '@store/repositories/actions';
import ListItem from '@components/ListItem/index';
import Placeholder from '@components/Placeholder/index';
import octocat from '../../assets/images/octocat.png';

import { Props } from '@components/App/types';
import './style.scss';

const List: React.FC<Props> = (props) => {
    const dispatch = useDispatch();
    const { appSearch }: AppState = useMappedState((state) => state);
    const { isPending, itemIds, query, page, perPage, itemTotalCount } = appSearch;
    const formattedItemTotalCount = useMemo(
        () => new Intl.NumberFormat('en-US').format(itemTotalCount),
        [itemTotalCount]
    );

    const fetchMore = useCallback(
        (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
            if (!isPending && itemIds.length !== itemTotalCount && entries[0].isIntersecting) {
                dispatch(fetchSearchReposRequest({ query: query, page: page + 1, perPage: perPage }));
            }
        },
        [isPending, query, page, perPage, itemIds, itemTotalCount]
    );

    const lastItemRef = useCallback(
        (lastItemNode) => {
            const options: IntersectionObserverInit = {
                root: null,
                rootMargin: '0px',
                threshold: 1.0,
            };
            const observer = new IntersectionObserver(fetchMore, options);

            if (lastItemNode) {
                observer.observe(lastItemNode);
            }

            return () => {
                if (lastItemNode) {
                    observer.unobserve(lastItemNode);
                }
            };
        },
        [fetchMore]
    );

    const itemRow = ({ index, style }) => {
        if (itemIds.length === index + 1) {
            return (
                <div style={style} ref={lastItemRef}>
                    <ListItem repoId={itemIds[index]} />
                    {isPending ? <Placeholder /> : null}
                </div>
            );
        }
        return <div style={style}>{<ListItem repoId={itemIds[index]} />}</div>;
    };

    if (query.length) {
        if (itemIds.length) {
            return (
                <div className="list">
                    <div className="list__total-count">{`${formattedItemTotalCount} repository results`}</div>
                    <AutoSizer>
                        {({ height, width }) => (
                            <FixedSizeList
                                className="list__results"
                                height={height}
                                itemCount={itemIds.length}
                                itemData={itemIds}
                                itemSize={165}
                                width={width}
                            >
                                {itemRow}
                            </FixedSizeList>
                        )}
                    </AutoSizer>
                </div>
            );
        } else {
            return (
                <div className="list">
                    {isPending ? (
                        <Placeholder />
                    ) : (
                        <div className="list__no-matching-results">
                            <div className="list__result-message">{`We couldn’t find any repositories matching '${query}'`}</div>
                            <div className="list__octocat-image">
                                <img src={octocat} />
                            </div>
                        </div>
                    )}
                </div>
            );
        }
    }

    return (
        <div className="list">
            <div className="list__intro">
                <div className="list__message">Search repositories from GitHub</div>
                <div className="list__octocat-image">
                    <img src={octocat} />
                </div>
            </div>
        </div>
    );
};

export default List;
