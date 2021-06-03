import { Repository } from '@store/repositories/types';
import { User } from '@store/users/types';

export interface RepoInfoProps {
    repoId: number;
}

// export interface ListItemProps extends RepoInfoProps {}
export type ListItemProps = Pick<RepoInfoProps, 'repoId'>;
