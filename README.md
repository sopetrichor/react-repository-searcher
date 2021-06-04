# React Repository Searcher
Implement a web application to search the GitHub repository.


## Installation
```
$ git clone https://github.com/sopetrichor/react-repository-searcher.git
$ cd react-repository-searcher
$ npm install
$ npm run dev
```

## Tech Stack
* React
* Redux
* Redux-Saga
* TypeScript

## Feature
* Infinite Scroll
* Virtualized List

### Infinite Scroll
Implement infinite scroll with [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) and automatically load more data when the scrolling reached the bottom of list.

### Virtualized List
Use [react-window](https://github.com/bvaughn/react-window) to create virtualized list to improve performance when render large lists in React. 


## Project Structure
```
src/  
|-- assets/  
    |-- images/  
        |-- ctocat.png  
|-- components/  
    |-- App  
    |-- List  
    |-- ListItem  
    |-- Placeholder  
    |-- SearchField  
|-- hooks/  
    |-- useHover  
    |-- useRepo  
    |-- useUser  
|-- mock-data/  
|-- sass/  
    |-- _global.scss  
    |-- _mixin.scss  
    |-- _variables.scss  
|-- services/  
    |-- api.ts  
    |-- index.ts  
|-- store/  
    |-- appSearch  
        |-- parser.ts  
        |-- reducer.ts  
        |-- types.ts  
    |-- repositories  
        |-- action-types.ts  
        |-- actions.ts  
        |-- parsers.ts  
        |-- reducer.ts  
        |-- saga.ts  
        |-- types.ts  
    |-- users  
        |-- parser.ts  
        |-- reducer.ts  
        |-- types.ts  
    |-- index.ts  
    |-- rootReducer.ts  
    |-- rootSaga.ts  
```

## Types
* Repository
* User

### Repository
```typescript
interface RepositoryInterface {
    id: number;
    name: string;
    fullName: string;
    htmlURL: string;
    description: string;
    createDate: Date;
    updateDate: Date;
    pushDate: Date;
    stargazersCount: number;
    watchersCount: number;
    language: string;
    spdxId: string;
    ownerId: number;
}
```
### User
```typescript
enum UserType {
    Organization = 0,
    User = 1,
}

interface UserInterface {
    id: number;
    avatarURL: string;
    htmlURL: string;
    type: UserType;
}
```

## Redux Store Structure
```
rootReducer
|-- appSearch
|-- repositories
|-- users
```

### appSearch reducer
```typescript
//State Interface
interface AppSearchSI {
    isPending: boolean;
    error: Error;
    query: string;
    page: number;
    perPage: number;
    itemIds: number[];
    itemTotalCount: number;
}
```
`isPending`: the status of fetch data task.  
`error`: the error message of fetch data task.  
`query`: search keywords.  
`page`: page number of the results to fetch.  
`perPage`: search results per page.  
`itemIds`: the `id` of repository which from search results and it will correspond to `repositories` reducer.  
`itemTotalCount`: the total count of search results.  

### repositories reducer
```typescript
//State Interface
interface RepositoriesSI {
    [key: number]: Repository;
}
```

### users reducer
```typescript
//State Interface
interface UsersSI {
    [key: number]: User;
}
```
