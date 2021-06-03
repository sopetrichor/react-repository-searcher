import React from 'react';
import { formatDistance, subDays } from 'date-fns';
import { FiberManualRecord, Star, Store } from '@material-ui/icons';

import useRepo from '@hooks/useRepo/index';
import useUser from '@hooks/useUser/index';

import { RepoInfoProps, ListItemProps } from './types';
import './style.scss';

const RepoInfo: React.FC<RepoInfoProps> = React.memo((props) => {
    const { repoId } = props;
    const {
        name,
        fullName,
        description,
        htmlURL: repoHtmlURL,
        stargazersCount,
        language,
        spdxId,
        updateDate,
        ownerId,
        stargazersURL,
        formattedStargazersCount,
    } = useRepo(repoId);
    const { id, avatarURL, htmlURL: userHtmlURL, type } = useUser(ownerId);

    return (
        <div className="repo">
            <div className="repo__item">
                <a href={repoHtmlURL} target="_blank">
                    {fullName}
                </a>
            </div>
            <div className="repo__item">{description}</div>
            <div className="repo__item">
                <div className="repo__info">
                    <a href={stargazersURL} target="_blank">
                        <Star fontSize="small" />
                        {formattedStargazersCount}
                    </a>
                </div>
                {language !== null && (
                    <div className="repo__info">
                        <FiberManualRecord fontSize="small" />
                        {language}
                    </div>
                )}
                {spdxId !== null && <div className="repo__info">{`${spdxId} license`}</div>}
                <div className="repo__info">
                    {`Updated on ${formatDistance(subDays(updateDate, 3), new Date(), { addSuffix: true })}`}
                </div>
            </div>
        </div>
    );
});

const ListItem: React.FC<ListItemProps> = React.memo((props) => {
    const { repoId } = props;

    return (
        <div className="list-item">
            <div className="list-item__icon-box">
                <Store />
            </div>
            <div className="list-item__content-box">
                <RepoInfo repoId={repoId} />
            </div>
        </div>
    );
});

export default ListItem;
