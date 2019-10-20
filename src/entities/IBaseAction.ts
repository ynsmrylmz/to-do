import { Collection, List, Map, OrderedMap, OrderedSet, Record, Seq, Set, Stack } from 'immutable';

export type primitiveTypes = string | number | boolean | null | undefined;
export type immutableIndexedTypes<T> = Record<T> | List<T> | Set<T> | OrderedSet<T> | Stack<T>;
export type immmutableKeyedTypes<T, K> = Map<T, K> | Collection<T, K> | OrderedMap<T, K> | Seq<T, K>;
export type immutableTypes = primitiveTypes | immutableIndexedTypes<any> | immmutableKeyedTypes<any, any>;

export interface IBaseAction<T extends immutableTypes> {
    type: string,
    payload: T
}

export interface IBaseMutableAction<T> {
    type: string,
    payload: T
}

export function createImmtableAction<T extends immutableTypes>(type: string, payload: T): IBaseAction<T> {
    return {
        type: type,
        payload: payload
    }
}

export function createMutableAction<T>(type: string, payload: T): IBaseMutableAction<T> {
    return {
        type: type,
        payload: payload
    }
}