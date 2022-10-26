// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace EnsTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
};

export type AbiChanged = ResolverEvent & {
  id: Scalars['ID'];
  resolver: Resolver;
  blockNumber: Scalars['Int'];
  transactionID: Scalars['Bytes'];
  contentType: Scalars['BigInt'];
};

export type AbiChanged_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  resolver?: InputMaybe<Scalars['String']>;
  resolver_not?: InputMaybe<Scalars['String']>;
  resolver_gt?: InputMaybe<Scalars['String']>;
  resolver_lt?: InputMaybe<Scalars['String']>;
  resolver_gte?: InputMaybe<Scalars['String']>;
  resolver_lte?: InputMaybe<Scalars['String']>;
  resolver_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_not_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_contains?: InputMaybe<Scalars['String']>;
  resolver_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_contains?: InputMaybe<Scalars['String']>;
  resolver_not_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_starts_with?: InputMaybe<Scalars['String']>;
  resolver_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_ends_with?: InputMaybe<Scalars['String']>;
  resolver_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_?: InputMaybe<Resolver_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['Bytes']>;
  transactionID_not?: InputMaybe<Scalars['Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['Bytes']>;
  contentType?: InputMaybe<Scalars['BigInt']>;
  contentType_not?: InputMaybe<Scalars['BigInt']>;
  contentType_gt?: InputMaybe<Scalars['BigInt']>;
  contentType_lt?: InputMaybe<Scalars['BigInt']>;
  contentType_gte?: InputMaybe<Scalars['BigInt']>;
  contentType_lte?: InputMaybe<Scalars['BigInt']>;
  contentType_in?: InputMaybe<Array<Scalars['BigInt']>>;
  contentType_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type AbiChanged_orderBy =
  | 'id'
  | 'resolver'
  | 'blockNumber'
  | 'transactionID'
  | 'contentType';

export type Account = {
  id: Scalars['ID'];
  domains: Array<Domain>;
  registrations?: Maybe<Array<Registration>>;
};


export type AccountdomainsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Domain_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Domain_filter>;
};


export type AccountregistrationsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Registration_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Registration_filter>;
};

export type Account_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  domains_?: InputMaybe<Domain_filter>;
  registrations_?: InputMaybe<Registration_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Account_orderBy =
  | 'id'
  | 'domains'
  | 'registrations';

export type AddrChanged = ResolverEvent & {
  id: Scalars['ID'];
  resolver: Resolver;
  blockNumber: Scalars['Int'];
  transactionID: Scalars['Bytes'];
  addr: Account;
};

export type AddrChanged_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  resolver?: InputMaybe<Scalars['String']>;
  resolver_not?: InputMaybe<Scalars['String']>;
  resolver_gt?: InputMaybe<Scalars['String']>;
  resolver_lt?: InputMaybe<Scalars['String']>;
  resolver_gte?: InputMaybe<Scalars['String']>;
  resolver_lte?: InputMaybe<Scalars['String']>;
  resolver_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_not_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_contains?: InputMaybe<Scalars['String']>;
  resolver_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_contains?: InputMaybe<Scalars['String']>;
  resolver_not_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_starts_with?: InputMaybe<Scalars['String']>;
  resolver_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_ends_with?: InputMaybe<Scalars['String']>;
  resolver_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_?: InputMaybe<Resolver_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['Bytes']>;
  transactionID_not?: InputMaybe<Scalars['Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['Bytes']>;
  addr?: InputMaybe<Scalars['String']>;
  addr_not?: InputMaybe<Scalars['String']>;
  addr_gt?: InputMaybe<Scalars['String']>;
  addr_lt?: InputMaybe<Scalars['String']>;
  addr_gte?: InputMaybe<Scalars['String']>;
  addr_lte?: InputMaybe<Scalars['String']>;
  addr_in?: InputMaybe<Array<Scalars['String']>>;
  addr_not_in?: InputMaybe<Array<Scalars['String']>>;
  addr_contains?: InputMaybe<Scalars['String']>;
  addr_contains_nocase?: InputMaybe<Scalars['String']>;
  addr_not_contains?: InputMaybe<Scalars['String']>;
  addr_not_contains_nocase?: InputMaybe<Scalars['String']>;
  addr_starts_with?: InputMaybe<Scalars['String']>;
  addr_starts_with_nocase?: InputMaybe<Scalars['String']>;
  addr_not_starts_with?: InputMaybe<Scalars['String']>;
  addr_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  addr_ends_with?: InputMaybe<Scalars['String']>;
  addr_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addr_not_ends_with?: InputMaybe<Scalars['String']>;
  addr_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addr_?: InputMaybe<Account_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type AddrChanged_orderBy =
  | 'id'
  | 'resolver'
  | 'blockNumber'
  | 'transactionID'
  | 'addr';

export type AuthorisationChanged = ResolverEvent & {
  id: Scalars['ID'];
  resolver: Resolver;
  blockNumber: Scalars['Int'];
  transactionID: Scalars['Bytes'];
  owner: Scalars['Bytes'];
  target: Scalars['Bytes'];
  isAuthorized: Scalars['Boolean'];
};

export type AuthorisationChanged_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  resolver?: InputMaybe<Scalars['String']>;
  resolver_not?: InputMaybe<Scalars['String']>;
  resolver_gt?: InputMaybe<Scalars['String']>;
  resolver_lt?: InputMaybe<Scalars['String']>;
  resolver_gte?: InputMaybe<Scalars['String']>;
  resolver_lte?: InputMaybe<Scalars['String']>;
  resolver_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_not_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_contains?: InputMaybe<Scalars['String']>;
  resolver_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_contains?: InputMaybe<Scalars['String']>;
  resolver_not_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_starts_with?: InputMaybe<Scalars['String']>;
  resolver_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_ends_with?: InputMaybe<Scalars['String']>;
  resolver_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_?: InputMaybe<Resolver_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['Bytes']>;
  transactionID_not?: InputMaybe<Scalars['Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['Bytes']>;
  owner?: InputMaybe<Scalars['Bytes']>;
  owner_not?: InputMaybe<Scalars['Bytes']>;
  owner_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_contains?: InputMaybe<Scalars['Bytes']>;
  owner_not_contains?: InputMaybe<Scalars['Bytes']>;
  target?: InputMaybe<Scalars['Bytes']>;
  target_not?: InputMaybe<Scalars['Bytes']>;
  target_in?: InputMaybe<Array<Scalars['Bytes']>>;
  target_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  target_contains?: InputMaybe<Scalars['Bytes']>;
  target_not_contains?: InputMaybe<Scalars['Bytes']>;
  isAuthorized?: InputMaybe<Scalars['Boolean']>;
  isAuthorized_not?: InputMaybe<Scalars['Boolean']>;
  isAuthorized_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isAuthorized_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type AuthorisationChanged_orderBy =
  | 'id'
  | 'resolver'
  | 'blockNumber'
  | 'transactionID'
  | 'owner'
  | 'target'
  | 'isAuthorized';

export type BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Block_height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type ContenthashChanged = ResolverEvent & {
  id: Scalars['ID'];
  resolver: Resolver;
  blockNumber: Scalars['Int'];
  transactionID: Scalars['Bytes'];
  hash: Scalars['Bytes'];
};

export type ContenthashChanged_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  resolver?: InputMaybe<Scalars['String']>;
  resolver_not?: InputMaybe<Scalars['String']>;
  resolver_gt?: InputMaybe<Scalars['String']>;
  resolver_lt?: InputMaybe<Scalars['String']>;
  resolver_gte?: InputMaybe<Scalars['String']>;
  resolver_lte?: InputMaybe<Scalars['String']>;
  resolver_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_not_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_contains?: InputMaybe<Scalars['String']>;
  resolver_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_contains?: InputMaybe<Scalars['String']>;
  resolver_not_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_starts_with?: InputMaybe<Scalars['String']>;
  resolver_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_ends_with?: InputMaybe<Scalars['String']>;
  resolver_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_?: InputMaybe<Resolver_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['Bytes']>;
  transactionID_not?: InputMaybe<Scalars['Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['Bytes']>;
  hash?: InputMaybe<Scalars['Bytes']>;
  hash_not?: InputMaybe<Scalars['Bytes']>;
  hash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  hash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  hash_contains?: InputMaybe<Scalars['Bytes']>;
  hash_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type ContenthashChanged_orderBy =
  | 'id'
  | 'resolver'
  | 'blockNumber'
  | 'transactionID'
  | 'hash';

export type Domain = {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  labelName?: Maybe<Scalars['String']>;
  labelhash?: Maybe<Scalars['Bytes']>;
  parent?: Maybe<Domain>;
  subdomains: Array<Domain>;
  subdomainCount: Scalars['Int'];
  resolvedAddress?: Maybe<Account>;
  owner: Account;
  resolver?: Maybe<Resolver>;
  ttl?: Maybe<Scalars['BigInt']>;
  isMigrated: Scalars['Boolean'];
  createdAt: Scalars['BigInt'];
  events: Array<DomainEvent>;
};


export type DomainsubdomainsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Domain_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Domain_filter>;
};


export type DomaineventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DomainEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DomainEvent_filter>;
};

export type DomainEvent = {
  id: Scalars['ID'];
  domain: Domain;
  blockNumber: Scalars['Int'];
  transactionID: Scalars['Bytes'];
};

export type DomainEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  domain?: InputMaybe<Scalars['String']>;
  domain_not?: InputMaybe<Scalars['String']>;
  domain_gt?: InputMaybe<Scalars['String']>;
  domain_lt?: InputMaybe<Scalars['String']>;
  domain_gte?: InputMaybe<Scalars['String']>;
  domain_lte?: InputMaybe<Scalars['String']>;
  domain_in?: InputMaybe<Array<Scalars['String']>>;
  domain_not_in?: InputMaybe<Array<Scalars['String']>>;
  domain_contains?: InputMaybe<Scalars['String']>;
  domain_contains_nocase?: InputMaybe<Scalars['String']>;
  domain_not_contains?: InputMaybe<Scalars['String']>;
  domain_not_contains_nocase?: InputMaybe<Scalars['String']>;
  domain_starts_with?: InputMaybe<Scalars['String']>;
  domain_starts_with_nocase?: InputMaybe<Scalars['String']>;
  domain_not_starts_with?: InputMaybe<Scalars['String']>;
  domain_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  domain_ends_with?: InputMaybe<Scalars['String']>;
  domain_ends_with_nocase?: InputMaybe<Scalars['String']>;
  domain_not_ends_with?: InputMaybe<Scalars['String']>;
  domain_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  domain_?: InputMaybe<Domain_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['Bytes']>;
  transactionID_not?: InputMaybe<Scalars['Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type DomainEvent_orderBy =
  | 'id'
  | 'domain'
  | 'blockNumber'
  | 'transactionID';

export type Domain_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  labelName?: InputMaybe<Scalars['String']>;
  labelName_not?: InputMaybe<Scalars['String']>;
  labelName_gt?: InputMaybe<Scalars['String']>;
  labelName_lt?: InputMaybe<Scalars['String']>;
  labelName_gte?: InputMaybe<Scalars['String']>;
  labelName_lte?: InputMaybe<Scalars['String']>;
  labelName_in?: InputMaybe<Array<Scalars['String']>>;
  labelName_not_in?: InputMaybe<Array<Scalars['String']>>;
  labelName_contains?: InputMaybe<Scalars['String']>;
  labelName_contains_nocase?: InputMaybe<Scalars['String']>;
  labelName_not_contains?: InputMaybe<Scalars['String']>;
  labelName_not_contains_nocase?: InputMaybe<Scalars['String']>;
  labelName_starts_with?: InputMaybe<Scalars['String']>;
  labelName_starts_with_nocase?: InputMaybe<Scalars['String']>;
  labelName_not_starts_with?: InputMaybe<Scalars['String']>;
  labelName_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  labelName_ends_with?: InputMaybe<Scalars['String']>;
  labelName_ends_with_nocase?: InputMaybe<Scalars['String']>;
  labelName_not_ends_with?: InputMaybe<Scalars['String']>;
  labelName_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  labelhash?: InputMaybe<Scalars['Bytes']>;
  labelhash_not?: InputMaybe<Scalars['Bytes']>;
  labelhash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  labelhash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  labelhash_contains?: InputMaybe<Scalars['Bytes']>;
  labelhash_not_contains?: InputMaybe<Scalars['Bytes']>;
  parent?: InputMaybe<Scalars['String']>;
  parent_not?: InputMaybe<Scalars['String']>;
  parent_gt?: InputMaybe<Scalars['String']>;
  parent_lt?: InputMaybe<Scalars['String']>;
  parent_gte?: InputMaybe<Scalars['String']>;
  parent_lte?: InputMaybe<Scalars['String']>;
  parent_in?: InputMaybe<Array<Scalars['String']>>;
  parent_not_in?: InputMaybe<Array<Scalars['String']>>;
  parent_contains?: InputMaybe<Scalars['String']>;
  parent_contains_nocase?: InputMaybe<Scalars['String']>;
  parent_not_contains?: InputMaybe<Scalars['String']>;
  parent_not_contains_nocase?: InputMaybe<Scalars['String']>;
  parent_starts_with?: InputMaybe<Scalars['String']>;
  parent_starts_with_nocase?: InputMaybe<Scalars['String']>;
  parent_not_starts_with?: InputMaybe<Scalars['String']>;
  parent_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  parent_ends_with?: InputMaybe<Scalars['String']>;
  parent_ends_with_nocase?: InputMaybe<Scalars['String']>;
  parent_not_ends_with?: InputMaybe<Scalars['String']>;
  parent_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  parent_?: InputMaybe<Domain_filter>;
  subdomains_?: InputMaybe<Domain_filter>;
  subdomainCount?: InputMaybe<Scalars['Int']>;
  subdomainCount_not?: InputMaybe<Scalars['Int']>;
  subdomainCount_gt?: InputMaybe<Scalars['Int']>;
  subdomainCount_lt?: InputMaybe<Scalars['Int']>;
  subdomainCount_gte?: InputMaybe<Scalars['Int']>;
  subdomainCount_lte?: InputMaybe<Scalars['Int']>;
  subdomainCount_in?: InputMaybe<Array<Scalars['Int']>>;
  subdomainCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  resolvedAddress?: InputMaybe<Scalars['String']>;
  resolvedAddress_not?: InputMaybe<Scalars['String']>;
  resolvedAddress_gt?: InputMaybe<Scalars['String']>;
  resolvedAddress_lt?: InputMaybe<Scalars['String']>;
  resolvedAddress_gte?: InputMaybe<Scalars['String']>;
  resolvedAddress_lte?: InputMaybe<Scalars['String']>;
  resolvedAddress_in?: InputMaybe<Array<Scalars['String']>>;
  resolvedAddress_not_in?: InputMaybe<Array<Scalars['String']>>;
  resolvedAddress_contains?: InputMaybe<Scalars['String']>;
  resolvedAddress_contains_nocase?: InputMaybe<Scalars['String']>;
  resolvedAddress_not_contains?: InputMaybe<Scalars['String']>;
  resolvedAddress_not_contains_nocase?: InputMaybe<Scalars['String']>;
  resolvedAddress_starts_with?: InputMaybe<Scalars['String']>;
  resolvedAddress_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolvedAddress_not_starts_with?: InputMaybe<Scalars['String']>;
  resolvedAddress_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolvedAddress_ends_with?: InputMaybe<Scalars['String']>;
  resolvedAddress_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolvedAddress_not_ends_with?: InputMaybe<Scalars['String']>;
  resolvedAddress_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolvedAddress_?: InputMaybe<Account_filter>;
  owner?: InputMaybe<Scalars['String']>;
  owner_not?: InputMaybe<Scalars['String']>;
  owner_gt?: InputMaybe<Scalars['String']>;
  owner_lt?: InputMaybe<Scalars['String']>;
  owner_gte?: InputMaybe<Scalars['String']>;
  owner_lte?: InputMaybe<Scalars['String']>;
  owner_in?: InputMaybe<Array<Scalars['String']>>;
  owner_not_in?: InputMaybe<Array<Scalars['String']>>;
  owner_contains?: InputMaybe<Scalars['String']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_not_contains?: InputMaybe<Scalars['String']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_starts_with?: InputMaybe<Scalars['String']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_starts_with?: InputMaybe<Scalars['String']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_ends_with?: InputMaybe<Scalars['String']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_?: InputMaybe<Account_filter>;
  resolver?: InputMaybe<Scalars['String']>;
  resolver_not?: InputMaybe<Scalars['String']>;
  resolver_gt?: InputMaybe<Scalars['String']>;
  resolver_lt?: InputMaybe<Scalars['String']>;
  resolver_gte?: InputMaybe<Scalars['String']>;
  resolver_lte?: InputMaybe<Scalars['String']>;
  resolver_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_not_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_contains?: InputMaybe<Scalars['String']>;
  resolver_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_contains?: InputMaybe<Scalars['String']>;
  resolver_not_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_starts_with?: InputMaybe<Scalars['String']>;
  resolver_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_ends_with?: InputMaybe<Scalars['String']>;
  resolver_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_?: InputMaybe<Resolver_filter>;
  ttl?: InputMaybe<Scalars['BigInt']>;
  ttl_not?: InputMaybe<Scalars['BigInt']>;
  ttl_gt?: InputMaybe<Scalars['BigInt']>;
  ttl_lt?: InputMaybe<Scalars['BigInt']>;
  ttl_gte?: InputMaybe<Scalars['BigInt']>;
  ttl_lte?: InputMaybe<Scalars['BigInt']>;
  ttl_in?: InputMaybe<Array<Scalars['BigInt']>>;
  ttl_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  isMigrated?: InputMaybe<Scalars['Boolean']>;
  isMigrated_not?: InputMaybe<Scalars['Boolean']>;
  isMigrated_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isMigrated_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  createdAt?: InputMaybe<Scalars['BigInt']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  events_?: InputMaybe<DomainEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Domain_orderBy =
  | 'id'
  | 'name'
  | 'labelName'
  | 'labelhash'
  | 'parent'
  | 'subdomains'
  | 'subdomainCount'
  | 'resolvedAddress'
  | 'owner'
  | 'resolver'
  | 'ttl'
  | 'isMigrated'
  | 'createdAt'
  | 'events';

export type InterfaceChanged = ResolverEvent & {
  id: Scalars['ID'];
  resolver: Resolver;
  blockNumber: Scalars['Int'];
  transactionID: Scalars['Bytes'];
  interfaceID: Scalars['Bytes'];
  implementer: Scalars['Bytes'];
};

export type InterfaceChanged_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  resolver?: InputMaybe<Scalars['String']>;
  resolver_not?: InputMaybe<Scalars['String']>;
  resolver_gt?: InputMaybe<Scalars['String']>;
  resolver_lt?: InputMaybe<Scalars['String']>;
  resolver_gte?: InputMaybe<Scalars['String']>;
  resolver_lte?: InputMaybe<Scalars['String']>;
  resolver_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_not_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_contains?: InputMaybe<Scalars['String']>;
  resolver_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_contains?: InputMaybe<Scalars['String']>;
  resolver_not_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_starts_with?: InputMaybe<Scalars['String']>;
  resolver_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_ends_with?: InputMaybe<Scalars['String']>;
  resolver_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_?: InputMaybe<Resolver_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['Bytes']>;
  transactionID_not?: InputMaybe<Scalars['Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['Bytes']>;
  interfaceID?: InputMaybe<Scalars['Bytes']>;
  interfaceID_not?: InputMaybe<Scalars['Bytes']>;
  interfaceID_in?: InputMaybe<Array<Scalars['Bytes']>>;
  interfaceID_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  interfaceID_contains?: InputMaybe<Scalars['Bytes']>;
  interfaceID_not_contains?: InputMaybe<Scalars['Bytes']>;
  implementer?: InputMaybe<Scalars['Bytes']>;
  implementer_not?: InputMaybe<Scalars['Bytes']>;
  implementer_in?: InputMaybe<Array<Scalars['Bytes']>>;
  implementer_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  implementer_contains?: InputMaybe<Scalars['Bytes']>;
  implementer_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type InterfaceChanged_orderBy =
  | 'id'
  | 'resolver'
  | 'blockNumber'
  | 'transactionID'
  | 'interfaceID'
  | 'implementer';

export type MulticoinAddrChanged = ResolverEvent & {
  id: Scalars['ID'];
  resolver: Resolver;
  blockNumber: Scalars['Int'];
  transactionID: Scalars['Bytes'];
  coinType: Scalars['BigInt'];
  addr: Scalars['Bytes'];
};

export type MulticoinAddrChanged_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  resolver?: InputMaybe<Scalars['String']>;
  resolver_not?: InputMaybe<Scalars['String']>;
  resolver_gt?: InputMaybe<Scalars['String']>;
  resolver_lt?: InputMaybe<Scalars['String']>;
  resolver_gte?: InputMaybe<Scalars['String']>;
  resolver_lte?: InputMaybe<Scalars['String']>;
  resolver_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_not_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_contains?: InputMaybe<Scalars['String']>;
  resolver_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_contains?: InputMaybe<Scalars['String']>;
  resolver_not_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_starts_with?: InputMaybe<Scalars['String']>;
  resolver_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_ends_with?: InputMaybe<Scalars['String']>;
  resolver_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_?: InputMaybe<Resolver_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['Bytes']>;
  transactionID_not?: InputMaybe<Scalars['Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['Bytes']>;
  coinType?: InputMaybe<Scalars['BigInt']>;
  coinType_not?: InputMaybe<Scalars['BigInt']>;
  coinType_gt?: InputMaybe<Scalars['BigInt']>;
  coinType_lt?: InputMaybe<Scalars['BigInt']>;
  coinType_gte?: InputMaybe<Scalars['BigInt']>;
  coinType_lte?: InputMaybe<Scalars['BigInt']>;
  coinType_in?: InputMaybe<Array<Scalars['BigInt']>>;
  coinType_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  addr?: InputMaybe<Scalars['Bytes']>;
  addr_not?: InputMaybe<Scalars['Bytes']>;
  addr_in?: InputMaybe<Array<Scalars['Bytes']>>;
  addr_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  addr_contains?: InputMaybe<Scalars['Bytes']>;
  addr_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type MulticoinAddrChanged_orderBy =
  | 'id'
  | 'resolver'
  | 'blockNumber'
  | 'transactionID'
  | 'coinType'
  | 'addr';

export type NameChanged = ResolverEvent & {
  id: Scalars['ID'];
  resolver: Resolver;
  blockNumber: Scalars['Int'];
  transactionID: Scalars['Bytes'];
  name: Scalars['String'];
};

export type NameChanged_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  resolver?: InputMaybe<Scalars['String']>;
  resolver_not?: InputMaybe<Scalars['String']>;
  resolver_gt?: InputMaybe<Scalars['String']>;
  resolver_lt?: InputMaybe<Scalars['String']>;
  resolver_gte?: InputMaybe<Scalars['String']>;
  resolver_lte?: InputMaybe<Scalars['String']>;
  resolver_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_not_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_contains?: InputMaybe<Scalars['String']>;
  resolver_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_contains?: InputMaybe<Scalars['String']>;
  resolver_not_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_starts_with?: InputMaybe<Scalars['String']>;
  resolver_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_ends_with?: InputMaybe<Scalars['String']>;
  resolver_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_?: InputMaybe<Resolver_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['Bytes']>;
  transactionID_not?: InputMaybe<Scalars['Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['Bytes']>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type NameChanged_orderBy =
  | 'id'
  | 'resolver'
  | 'blockNumber'
  | 'transactionID'
  | 'name';

export type NameRegistered = RegistrationEvent & {
  id: Scalars['ID'];
  registration: Registration;
  blockNumber: Scalars['Int'];
  transactionID: Scalars['Bytes'];
  registrant: Account;
  expiryDate: Scalars['BigInt'];
};

export type NameRegistered_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  registration?: InputMaybe<Scalars['String']>;
  registration_not?: InputMaybe<Scalars['String']>;
  registration_gt?: InputMaybe<Scalars['String']>;
  registration_lt?: InputMaybe<Scalars['String']>;
  registration_gte?: InputMaybe<Scalars['String']>;
  registration_lte?: InputMaybe<Scalars['String']>;
  registration_in?: InputMaybe<Array<Scalars['String']>>;
  registration_not_in?: InputMaybe<Array<Scalars['String']>>;
  registration_contains?: InputMaybe<Scalars['String']>;
  registration_contains_nocase?: InputMaybe<Scalars['String']>;
  registration_not_contains?: InputMaybe<Scalars['String']>;
  registration_not_contains_nocase?: InputMaybe<Scalars['String']>;
  registration_starts_with?: InputMaybe<Scalars['String']>;
  registration_starts_with_nocase?: InputMaybe<Scalars['String']>;
  registration_not_starts_with?: InputMaybe<Scalars['String']>;
  registration_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  registration_ends_with?: InputMaybe<Scalars['String']>;
  registration_ends_with_nocase?: InputMaybe<Scalars['String']>;
  registration_not_ends_with?: InputMaybe<Scalars['String']>;
  registration_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  registration_?: InputMaybe<Registration_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['Bytes']>;
  transactionID_not?: InputMaybe<Scalars['Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['Bytes']>;
  registrant?: InputMaybe<Scalars['String']>;
  registrant_not?: InputMaybe<Scalars['String']>;
  registrant_gt?: InputMaybe<Scalars['String']>;
  registrant_lt?: InputMaybe<Scalars['String']>;
  registrant_gte?: InputMaybe<Scalars['String']>;
  registrant_lte?: InputMaybe<Scalars['String']>;
  registrant_in?: InputMaybe<Array<Scalars['String']>>;
  registrant_not_in?: InputMaybe<Array<Scalars['String']>>;
  registrant_contains?: InputMaybe<Scalars['String']>;
  registrant_contains_nocase?: InputMaybe<Scalars['String']>;
  registrant_not_contains?: InputMaybe<Scalars['String']>;
  registrant_not_contains_nocase?: InputMaybe<Scalars['String']>;
  registrant_starts_with?: InputMaybe<Scalars['String']>;
  registrant_starts_with_nocase?: InputMaybe<Scalars['String']>;
  registrant_not_starts_with?: InputMaybe<Scalars['String']>;
  registrant_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  registrant_ends_with?: InputMaybe<Scalars['String']>;
  registrant_ends_with_nocase?: InputMaybe<Scalars['String']>;
  registrant_not_ends_with?: InputMaybe<Scalars['String']>;
  registrant_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  registrant_?: InputMaybe<Account_filter>;
  expiryDate?: InputMaybe<Scalars['BigInt']>;
  expiryDate_not?: InputMaybe<Scalars['BigInt']>;
  expiryDate_gt?: InputMaybe<Scalars['BigInt']>;
  expiryDate_lt?: InputMaybe<Scalars['BigInt']>;
  expiryDate_gte?: InputMaybe<Scalars['BigInt']>;
  expiryDate_lte?: InputMaybe<Scalars['BigInt']>;
  expiryDate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  expiryDate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type NameRegistered_orderBy =
  | 'id'
  | 'registration'
  | 'blockNumber'
  | 'transactionID'
  | 'registrant'
  | 'expiryDate';

export type NameRenewed = RegistrationEvent & {
  id: Scalars['ID'];
  registration: Registration;
  blockNumber: Scalars['Int'];
  transactionID: Scalars['Bytes'];
  expiryDate: Scalars['BigInt'];
};

export type NameRenewed_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  registration?: InputMaybe<Scalars['String']>;
  registration_not?: InputMaybe<Scalars['String']>;
  registration_gt?: InputMaybe<Scalars['String']>;
  registration_lt?: InputMaybe<Scalars['String']>;
  registration_gte?: InputMaybe<Scalars['String']>;
  registration_lte?: InputMaybe<Scalars['String']>;
  registration_in?: InputMaybe<Array<Scalars['String']>>;
  registration_not_in?: InputMaybe<Array<Scalars['String']>>;
  registration_contains?: InputMaybe<Scalars['String']>;
  registration_contains_nocase?: InputMaybe<Scalars['String']>;
  registration_not_contains?: InputMaybe<Scalars['String']>;
  registration_not_contains_nocase?: InputMaybe<Scalars['String']>;
  registration_starts_with?: InputMaybe<Scalars['String']>;
  registration_starts_with_nocase?: InputMaybe<Scalars['String']>;
  registration_not_starts_with?: InputMaybe<Scalars['String']>;
  registration_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  registration_ends_with?: InputMaybe<Scalars['String']>;
  registration_ends_with_nocase?: InputMaybe<Scalars['String']>;
  registration_not_ends_with?: InputMaybe<Scalars['String']>;
  registration_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  registration_?: InputMaybe<Registration_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['Bytes']>;
  transactionID_not?: InputMaybe<Scalars['Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['Bytes']>;
  expiryDate?: InputMaybe<Scalars['BigInt']>;
  expiryDate_not?: InputMaybe<Scalars['BigInt']>;
  expiryDate_gt?: InputMaybe<Scalars['BigInt']>;
  expiryDate_lt?: InputMaybe<Scalars['BigInt']>;
  expiryDate_gte?: InputMaybe<Scalars['BigInt']>;
  expiryDate_lte?: InputMaybe<Scalars['BigInt']>;
  expiryDate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  expiryDate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type NameRenewed_orderBy =
  | 'id'
  | 'registration'
  | 'blockNumber'
  | 'transactionID'
  | 'expiryDate';

export type NameTransferred = RegistrationEvent & {
  id: Scalars['ID'];
  registration: Registration;
  blockNumber: Scalars['Int'];
  transactionID: Scalars['Bytes'];
  newOwner: Account;
};

export type NameTransferred_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  registration?: InputMaybe<Scalars['String']>;
  registration_not?: InputMaybe<Scalars['String']>;
  registration_gt?: InputMaybe<Scalars['String']>;
  registration_lt?: InputMaybe<Scalars['String']>;
  registration_gte?: InputMaybe<Scalars['String']>;
  registration_lte?: InputMaybe<Scalars['String']>;
  registration_in?: InputMaybe<Array<Scalars['String']>>;
  registration_not_in?: InputMaybe<Array<Scalars['String']>>;
  registration_contains?: InputMaybe<Scalars['String']>;
  registration_contains_nocase?: InputMaybe<Scalars['String']>;
  registration_not_contains?: InputMaybe<Scalars['String']>;
  registration_not_contains_nocase?: InputMaybe<Scalars['String']>;
  registration_starts_with?: InputMaybe<Scalars['String']>;
  registration_starts_with_nocase?: InputMaybe<Scalars['String']>;
  registration_not_starts_with?: InputMaybe<Scalars['String']>;
  registration_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  registration_ends_with?: InputMaybe<Scalars['String']>;
  registration_ends_with_nocase?: InputMaybe<Scalars['String']>;
  registration_not_ends_with?: InputMaybe<Scalars['String']>;
  registration_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  registration_?: InputMaybe<Registration_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['Bytes']>;
  transactionID_not?: InputMaybe<Scalars['Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['Bytes']>;
  newOwner?: InputMaybe<Scalars['String']>;
  newOwner_not?: InputMaybe<Scalars['String']>;
  newOwner_gt?: InputMaybe<Scalars['String']>;
  newOwner_lt?: InputMaybe<Scalars['String']>;
  newOwner_gte?: InputMaybe<Scalars['String']>;
  newOwner_lte?: InputMaybe<Scalars['String']>;
  newOwner_in?: InputMaybe<Array<Scalars['String']>>;
  newOwner_not_in?: InputMaybe<Array<Scalars['String']>>;
  newOwner_contains?: InputMaybe<Scalars['String']>;
  newOwner_contains_nocase?: InputMaybe<Scalars['String']>;
  newOwner_not_contains?: InputMaybe<Scalars['String']>;
  newOwner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  newOwner_starts_with?: InputMaybe<Scalars['String']>;
  newOwner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  newOwner_not_starts_with?: InputMaybe<Scalars['String']>;
  newOwner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  newOwner_ends_with?: InputMaybe<Scalars['String']>;
  newOwner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  newOwner_not_ends_with?: InputMaybe<Scalars['String']>;
  newOwner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  newOwner_?: InputMaybe<Account_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type NameTransferred_orderBy =
  | 'id'
  | 'registration'
  | 'blockNumber'
  | 'transactionID'
  | 'newOwner';

export type NewOwner = DomainEvent & {
  id: Scalars['ID'];
  parentDomain: Domain;
  domain: Domain;
  blockNumber: Scalars['Int'];
  transactionID: Scalars['Bytes'];
  owner: Account;
};

export type NewOwner_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  parentDomain?: InputMaybe<Scalars['String']>;
  parentDomain_not?: InputMaybe<Scalars['String']>;
  parentDomain_gt?: InputMaybe<Scalars['String']>;
  parentDomain_lt?: InputMaybe<Scalars['String']>;
  parentDomain_gte?: InputMaybe<Scalars['String']>;
  parentDomain_lte?: InputMaybe<Scalars['String']>;
  parentDomain_in?: InputMaybe<Array<Scalars['String']>>;
  parentDomain_not_in?: InputMaybe<Array<Scalars['String']>>;
  parentDomain_contains?: InputMaybe<Scalars['String']>;
  parentDomain_contains_nocase?: InputMaybe<Scalars['String']>;
  parentDomain_not_contains?: InputMaybe<Scalars['String']>;
  parentDomain_not_contains_nocase?: InputMaybe<Scalars['String']>;
  parentDomain_starts_with?: InputMaybe<Scalars['String']>;
  parentDomain_starts_with_nocase?: InputMaybe<Scalars['String']>;
  parentDomain_not_starts_with?: InputMaybe<Scalars['String']>;
  parentDomain_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  parentDomain_ends_with?: InputMaybe<Scalars['String']>;
  parentDomain_ends_with_nocase?: InputMaybe<Scalars['String']>;
  parentDomain_not_ends_with?: InputMaybe<Scalars['String']>;
  parentDomain_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  parentDomain_?: InputMaybe<Domain_filter>;
  domain?: InputMaybe<Scalars['String']>;
  domain_not?: InputMaybe<Scalars['String']>;
  domain_gt?: InputMaybe<Scalars['String']>;
  domain_lt?: InputMaybe<Scalars['String']>;
  domain_gte?: InputMaybe<Scalars['String']>;
  domain_lte?: InputMaybe<Scalars['String']>;
  domain_in?: InputMaybe<Array<Scalars['String']>>;
  domain_not_in?: InputMaybe<Array<Scalars['String']>>;
  domain_contains?: InputMaybe<Scalars['String']>;
  domain_contains_nocase?: InputMaybe<Scalars['String']>;
  domain_not_contains?: InputMaybe<Scalars['String']>;
  domain_not_contains_nocase?: InputMaybe<Scalars['String']>;
  domain_starts_with?: InputMaybe<Scalars['String']>;
  domain_starts_with_nocase?: InputMaybe<Scalars['String']>;
  domain_not_starts_with?: InputMaybe<Scalars['String']>;
  domain_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  domain_ends_with?: InputMaybe<Scalars['String']>;
  domain_ends_with_nocase?: InputMaybe<Scalars['String']>;
  domain_not_ends_with?: InputMaybe<Scalars['String']>;
  domain_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  domain_?: InputMaybe<Domain_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['Bytes']>;
  transactionID_not?: InputMaybe<Scalars['Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['Bytes']>;
  owner?: InputMaybe<Scalars['String']>;
  owner_not?: InputMaybe<Scalars['String']>;
  owner_gt?: InputMaybe<Scalars['String']>;
  owner_lt?: InputMaybe<Scalars['String']>;
  owner_gte?: InputMaybe<Scalars['String']>;
  owner_lte?: InputMaybe<Scalars['String']>;
  owner_in?: InputMaybe<Array<Scalars['String']>>;
  owner_not_in?: InputMaybe<Array<Scalars['String']>>;
  owner_contains?: InputMaybe<Scalars['String']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_not_contains?: InputMaybe<Scalars['String']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_starts_with?: InputMaybe<Scalars['String']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_starts_with?: InputMaybe<Scalars['String']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_ends_with?: InputMaybe<Scalars['String']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_?: InputMaybe<Account_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type NewOwner_orderBy =
  | 'id'
  | 'parentDomain'
  | 'domain'
  | 'blockNumber'
  | 'transactionID'
  | 'owner';

export type NewResolver = DomainEvent & {
  id: Scalars['ID'];
  domain: Domain;
  blockNumber: Scalars['Int'];
  transactionID: Scalars['Bytes'];
  resolver: Resolver;
};

export type NewResolver_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  domain?: InputMaybe<Scalars['String']>;
  domain_not?: InputMaybe<Scalars['String']>;
  domain_gt?: InputMaybe<Scalars['String']>;
  domain_lt?: InputMaybe<Scalars['String']>;
  domain_gte?: InputMaybe<Scalars['String']>;
  domain_lte?: InputMaybe<Scalars['String']>;
  domain_in?: InputMaybe<Array<Scalars['String']>>;
  domain_not_in?: InputMaybe<Array<Scalars['String']>>;
  domain_contains?: InputMaybe<Scalars['String']>;
  domain_contains_nocase?: InputMaybe<Scalars['String']>;
  domain_not_contains?: InputMaybe<Scalars['String']>;
  domain_not_contains_nocase?: InputMaybe<Scalars['String']>;
  domain_starts_with?: InputMaybe<Scalars['String']>;
  domain_starts_with_nocase?: InputMaybe<Scalars['String']>;
  domain_not_starts_with?: InputMaybe<Scalars['String']>;
  domain_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  domain_ends_with?: InputMaybe<Scalars['String']>;
  domain_ends_with_nocase?: InputMaybe<Scalars['String']>;
  domain_not_ends_with?: InputMaybe<Scalars['String']>;
  domain_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  domain_?: InputMaybe<Domain_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['Bytes']>;
  transactionID_not?: InputMaybe<Scalars['Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['Bytes']>;
  resolver?: InputMaybe<Scalars['String']>;
  resolver_not?: InputMaybe<Scalars['String']>;
  resolver_gt?: InputMaybe<Scalars['String']>;
  resolver_lt?: InputMaybe<Scalars['String']>;
  resolver_gte?: InputMaybe<Scalars['String']>;
  resolver_lte?: InputMaybe<Scalars['String']>;
  resolver_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_not_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_contains?: InputMaybe<Scalars['String']>;
  resolver_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_contains?: InputMaybe<Scalars['String']>;
  resolver_not_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_starts_with?: InputMaybe<Scalars['String']>;
  resolver_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_ends_with?: InputMaybe<Scalars['String']>;
  resolver_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_?: InputMaybe<Resolver_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type NewResolver_orderBy =
  | 'id'
  | 'domain'
  | 'blockNumber'
  | 'transactionID'
  | 'resolver';

export type NewTTL = DomainEvent & {
  id: Scalars['ID'];
  domain: Domain;
  blockNumber: Scalars['Int'];
  transactionID: Scalars['Bytes'];
  ttl: Scalars['BigInt'];
};

export type NewTTL_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  domain?: InputMaybe<Scalars['String']>;
  domain_not?: InputMaybe<Scalars['String']>;
  domain_gt?: InputMaybe<Scalars['String']>;
  domain_lt?: InputMaybe<Scalars['String']>;
  domain_gte?: InputMaybe<Scalars['String']>;
  domain_lte?: InputMaybe<Scalars['String']>;
  domain_in?: InputMaybe<Array<Scalars['String']>>;
  domain_not_in?: InputMaybe<Array<Scalars['String']>>;
  domain_contains?: InputMaybe<Scalars['String']>;
  domain_contains_nocase?: InputMaybe<Scalars['String']>;
  domain_not_contains?: InputMaybe<Scalars['String']>;
  domain_not_contains_nocase?: InputMaybe<Scalars['String']>;
  domain_starts_with?: InputMaybe<Scalars['String']>;
  domain_starts_with_nocase?: InputMaybe<Scalars['String']>;
  domain_not_starts_with?: InputMaybe<Scalars['String']>;
  domain_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  domain_ends_with?: InputMaybe<Scalars['String']>;
  domain_ends_with_nocase?: InputMaybe<Scalars['String']>;
  domain_not_ends_with?: InputMaybe<Scalars['String']>;
  domain_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  domain_?: InputMaybe<Domain_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['Bytes']>;
  transactionID_not?: InputMaybe<Scalars['Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['Bytes']>;
  ttl?: InputMaybe<Scalars['BigInt']>;
  ttl_not?: InputMaybe<Scalars['BigInt']>;
  ttl_gt?: InputMaybe<Scalars['BigInt']>;
  ttl_lt?: InputMaybe<Scalars['BigInt']>;
  ttl_gte?: InputMaybe<Scalars['BigInt']>;
  ttl_lte?: InputMaybe<Scalars['BigInt']>;
  ttl_in?: InputMaybe<Array<Scalars['BigInt']>>;
  ttl_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type NewTTL_orderBy =
  | 'id'
  | 'domain'
  | 'blockNumber'
  | 'transactionID'
  | 'ttl';

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

export type PubkeyChanged = ResolverEvent & {
  id: Scalars['ID'];
  resolver: Resolver;
  blockNumber: Scalars['Int'];
  transactionID: Scalars['Bytes'];
  x: Scalars['Bytes'];
  y: Scalars['Bytes'];
};

export type PubkeyChanged_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  resolver?: InputMaybe<Scalars['String']>;
  resolver_not?: InputMaybe<Scalars['String']>;
  resolver_gt?: InputMaybe<Scalars['String']>;
  resolver_lt?: InputMaybe<Scalars['String']>;
  resolver_gte?: InputMaybe<Scalars['String']>;
  resolver_lte?: InputMaybe<Scalars['String']>;
  resolver_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_not_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_contains?: InputMaybe<Scalars['String']>;
  resolver_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_contains?: InputMaybe<Scalars['String']>;
  resolver_not_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_starts_with?: InputMaybe<Scalars['String']>;
  resolver_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_ends_with?: InputMaybe<Scalars['String']>;
  resolver_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_?: InputMaybe<Resolver_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['Bytes']>;
  transactionID_not?: InputMaybe<Scalars['Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['Bytes']>;
  x?: InputMaybe<Scalars['Bytes']>;
  x_not?: InputMaybe<Scalars['Bytes']>;
  x_in?: InputMaybe<Array<Scalars['Bytes']>>;
  x_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  x_contains?: InputMaybe<Scalars['Bytes']>;
  x_not_contains?: InputMaybe<Scalars['Bytes']>;
  y?: InputMaybe<Scalars['Bytes']>;
  y_not?: InputMaybe<Scalars['Bytes']>;
  y_in?: InputMaybe<Array<Scalars['Bytes']>>;
  y_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  y_contains?: InputMaybe<Scalars['Bytes']>;
  y_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type PubkeyChanged_orderBy =
  | 'id'
  | 'resolver'
  | 'blockNumber'
  | 'transactionID'
  | 'x'
  | 'y';

export type Query = {
  domain?: Maybe<Domain>;
  domains: Array<Domain>;
  transfer?: Maybe<Transfer>;
  transfers: Array<Transfer>;
  newOwner?: Maybe<NewOwner>;
  newOwners: Array<NewOwner>;
  newResolver?: Maybe<NewResolver>;
  newResolvers: Array<NewResolver>;
  newTTL?: Maybe<NewTTL>;
  newTTLs: Array<NewTTL>;
  account?: Maybe<Account>;
  accounts: Array<Account>;
  registration?: Maybe<Registration>;
  registrations: Array<Registration>;
  nameRegistered?: Maybe<NameRegistered>;
  nameRegistereds: Array<NameRegistered>;
  nameRenewed?: Maybe<NameRenewed>;
  nameReneweds: Array<NameRenewed>;
  nameTransferred?: Maybe<NameTransferred>;
  nameTransferreds: Array<NameTransferred>;
  resolver?: Maybe<Resolver>;
  resolvers: Array<Resolver>;
  addrChanged?: Maybe<AddrChanged>;
  addrChangeds: Array<AddrChanged>;
  multicoinAddrChanged?: Maybe<MulticoinAddrChanged>;
  multicoinAddrChangeds: Array<MulticoinAddrChanged>;
  nameChanged?: Maybe<NameChanged>;
  nameChangeds: Array<NameChanged>;
  abiChanged?: Maybe<AbiChanged>;
  abiChangeds: Array<AbiChanged>;
  pubkeyChanged?: Maybe<PubkeyChanged>;
  pubkeyChangeds: Array<PubkeyChanged>;
  textChanged?: Maybe<TextChanged>;
  textChangeds: Array<TextChanged>;
  contenthashChanged?: Maybe<ContenthashChanged>;
  contenthashChangeds: Array<ContenthashChanged>;
  interfaceChanged?: Maybe<InterfaceChanged>;
  interfaceChangeds: Array<InterfaceChanged>;
  authorisationChanged?: Maybe<AuthorisationChanged>;
  authorisationChangeds: Array<AuthorisationChanged>;
  domainEvent?: Maybe<DomainEvent>;
  domainEvents: Array<DomainEvent>;
  registrationEvent?: Maybe<RegistrationEvent>;
  registrationEvents: Array<RegistrationEvent>;
  resolverEvent?: Maybe<ResolverEvent>;
  resolverEvents: Array<ResolverEvent>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QuerydomainArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydomainsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Domain_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Domain_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Transfer_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerynewOwnerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerynewOwnersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NewOwner_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NewOwner_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerynewResolverArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerynewResolversArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NewResolver_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NewResolver_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerynewTTLArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerynewTTLsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NewTTL_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NewTTL_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryaccountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryaccountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Account_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Account_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryregistrationArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryregistrationsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Registration_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Registration_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerynameRegisteredArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerynameRegisteredsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NameRegistered_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NameRegistered_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerynameRenewedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerynameRenewedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NameRenewed_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NameRenewed_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerynameTransferredArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerynameTransferredsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NameTransferred_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NameTransferred_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryresolverArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryresolversArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Resolver_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Resolver_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryaddrChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryaddrChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AddrChanged_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AddrChanged_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymulticoinAddrChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymulticoinAddrChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MulticoinAddrChanged_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MulticoinAddrChanged_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerynameChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerynameChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NameChanged_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NameChanged_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryabiChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryabiChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AbiChanged_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AbiChanged_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypubkeyChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypubkeyChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PubkeyChanged_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PubkeyChanged_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytextChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytextChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TextChanged_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TextChanged_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycontenthashChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycontenthashChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ContenthashChanged_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ContenthashChanged_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryinterfaceChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryinterfaceChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<InterfaceChanged_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<InterfaceChanged_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryauthorisationChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryauthorisationChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AuthorisationChanged_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AuthorisationChanged_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydomainEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydomainEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DomainEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DomainEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryregistrationEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryregistrationEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RegistrationEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RegistrationEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryresolverEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryresolverEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ResolverEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ResolverEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Query_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type Registration = {
  id: Scalars['ID'];
  domain?: Maybe<Domain>;
  registrationDate: Scalars['BigInt'];
  expiryDate: Scalars['BigInt'];
  cost?: Maybe<Scalars['BigInt']>;
  registrant: Account;
  labelName?: Maybe<Scalars['String']>;
  events: Array<RegistrationEvent>;
};


export type RegistrationeventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RegistrationEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RegistrationEvent_filter>;
};

export type RegistrationEvent = {
  id: Scalars['ID'];
  registration: Registration;
  blockNumber: Scalars['Int'];
  transactionID: Scalars['Bytes'];
};

export type RegistrationEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  registration?: InputMaybe<Scalars['String']>;
  registration_not?: InputMaybe<Scalars['String']>;
  registration_gt?: InputMaybe<Scalars['String']>;
  registration_lt?: InputMaybe<Scalars['String']>;
  registration_gte?: InputMaybe<Scalars['String']>;
  registration_lte?: InputMaybe<Scalars['String']>;
  registration_in?: InputMaybe<Array<Scalars['String']>>;
  registration_not_in?: InputMaybe<Array<Scalars['String']>>;
  registration_contains?: InputMaybe<Scalars['String']>;
  registration_contains_nocase?: InputMaybe<Scalars['String']>;
  registration_not_contains?: InputMaybe<Scalars['String']>;
  registration_not_contains_nocase?: InputMaybe<Scalars['String']>;
  registration_starts_with?: InputMaybe<Scalars['String']>;
  registration_starts_with_nocase?: InputMaybe<Scalars['String']>;
  registration_not_starts_with?: InputMaybe<Scalars['String']>;
  registration_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  registration_ends_with?: InputMaybe<Scalars['String']>;
  registration_ends_with_nocase?: InputMaybe<Scalars['String']>;
  registration_not_ends_with?: InputMaybe<Scalars['String']>;
  registration_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  registration_?: InputMaybe<Registration_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['Bytes']>;
  transactionID_not?: InputMaybe<Scalars['Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type RegistrationEvent_orderBy =
  | 'id'
  | 'registration'
  | 'blockNumber'
  | 'transactionID';

export type Registration_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  domain?: InputMaybe<Scalars['String']>;
  domain_not?: InputMaybe<Scalars['String']>;
  domain_gt?: InputMaybe<Scalars['String']>;
  domain_lt?: InputMaybe<Scalars['String']>;
  domain_gte?: InputMaybe<Scalars['String']>;
  domain_lte?: InputMaybe<Scalars['String']>;
  domain_in?: InputMaybe<Array<Scalars['String']>>;
  domain_not_in?: InputMaybe<Array<Scalars['String']>>;
  domain_contains?: InputMaybe<Scalars['String']>;
  domain_contains_nocase?: InputMaybe<Scalars['String']>;
  domain_not_contains?: InputMaybe<Scalars['String']>;
  domain_not_contains_nocase?: InputMaybe<Scalars['String']>;
  domain_starts_with?: InputMaybe<Scalars['String']>;
  domain_starts_with_nocase?: InputMaybe<Scalars['String']>;
  domain_not_starts_with?: InputMaybe<Scalars['String']>;
  domain_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  domain_ends_with?: InputMaybe<Scalars['String']>;
  domain_ends_with_nocase?: InputMaybe<Scalars['String']>;
  domain_not_ends_with?: InputMaybe<Scalars['String']>;
  domain_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  domain_?: InputMaybe<Domain_filter>;
  registrationDate?: InputMaybe<Scalars['BigInt']>;
  registrationDate_not?: InputMaybe<Scalars['BigInt']>;
  registrationDate_gt?: InputMaybe<Scalars['BigInt']>;
  registrationDate_lt?: InputMaybe<Scalars['BigInt']>;
  registrationDate_gte?: InputMaybe<Scalars['BigInt']>;
  registrationDate_lte?: InputMaybe<Scalars['BigInt']>;
  registrationDate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  registrationDate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  expiryDate?: InputMaybe<Scalars['BigInt']>;
  expiryDate_not?: InputMaybe<Scalars['BigInt']>;
  expiryDate_gt?: InputMaybe<Scalars['BigInt']>;
  expiryDate_lt?: InputMaybe<Scalars['BigInt']>;
  expiryDate_gte?: InputMaybe<Scalars['BigInt']>;
  expiryDate_lte?: InputMaybe<Scalars['BigInt']>;
  expiryDate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  expiryDate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  cost?: InputMaybe<Scalars['BigInt']>;
  cost_not?: InputMaybe<Scalars['BigInt']>;
  cost_gt?: InputMaybe<Scalars['BigInt']>;
  cost_lt?: InputMaybe<Scalars['BigInt']>;
  cost_gte?: InputMaybe<Scalars['BigInt']>;
  cost_lte?: InputMaybe<Scalars['BigInt']>;
  cost_in?: InputMaybe<Array<Scalars['BigInt']>>;
  cost_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  registrant?: InputMaybe<Scalars['String']>;
  registrant_not?: InputMaybe<Scalars['String']>;
  registrant_gt?: InputMaybe<Scalars['String']>;
  registrant_lt?: InputMaybe<Scalars['String']>;
  registrant_gte?: InputMaybe<Scalars['String']>;
  registrant_lte?: InputMaybe<Scalars['String']>;
  registrant_in?: InputMaybe<Array<Scalars['String']>>;
  registrant_not_in?: InputMaybe<Array<Scalars['String']>>;
  registrant_contains?: InputMaybe<Scalars['String']>;
  registrant_contains_nocase?: InputMaybe<Scalars['String']>;
  registrant_not_contains?: InputMaybe<Scalars['String']>;
  registrant_not_contains_nocase?: InputMaybe<Scalars['String']>;
  registrant_starts_with?: InputMaybe<Scalars['String']>;
  registrant_starts_with_nocase?: InputMaybe<Scalars['String']>;
  registrant_not_starts_with?: InputMaybe<Scalars['String']>;
  registrant_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  registrant_ends_with?: InputMaybe<Scalars['String']>;
  registrant_ends_with_nocase?: InputMaybe<Scalars['String']>;
  registrant_not_ends_with?: InputMaybe<Scalars['String']>;
  registrant_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  registrant_?: InputMaybe<Account_filter>;
  labelName?: InputMaybe<Scalars['String']>;
  labelName_not?: InputMaybe<Scalars['String']>;
  labelName_gt?: InputMaybe<Scalars['String']>;
  labelName_lt?: InputMaybe<Scalars['String']>;
  labelName_gte?: InputMaybe<Scalars['String']>;
  labelName_lte?: InputMaybe<Scalars['String']>;
  labelName_in?: InputMaybe<Array<Scalars['String']>>;
  labelName_not_in?: InputMaybe<Array<Scalars['String']>>;
  labelName_contains?: InputMaybe<Scalars['String']>;
  labelName_contains_nocase?: InputMaybe<Scalars['String']>;
  labelName_not_contains?: InputMaybe<Scalars['String']>;
  labelName_not_contains_nocase?: InputMaybe<Scalars['String']>;
  labelName_starts_with?: InputMaybe<Scalars['String']>;
  labelName_starts_with_nocase?: InputMaybe<Scalars['String']>;
  labelName_not_starts_with?: InputMaybe<Scalars['String']>;
  labelName_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  labelName_ends_with?: InputMaybe<Scalars['String']>;
  labelName_ends_with_nocase?: InputMaybe<Scalars['String']>;
  labelName_not_ends_with?: InputMaybe<Scalars['String']>;
  labelName_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  events_?: InputMaybe<RegistrationEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Registration_orderBy =
  | 'id'
  | 'domain'
  | 'registrationDate'
  | 'expiryDate'
  | 'cost'
  | 'registrant'
  | 'labelName'
  | 'events';

export type Resolver = {
  id: Scalars['ID'];
  domain?: Maybe<Domain>;
  address: Scalars['Bytes'];
  addr?: Maybe<Account>;
  contentHash?: Maybe<Scalars['Bytes']>;
  texts?: Maybe<Array<Scalars['String']>>;
  coinTypes?: Maybe<Array<Scalars['BigInt']>>;
  events: Array<ResolverEvent>;
};


export type ResolvereventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ResolverEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ResolverEvent_filter>;
};

export type ResolverEvent = {
  id: Scalars['ID'];
  resolver: Resolver;
  blockNumber: Scalars['Int'];
  transactionID: Scalars['Bytes'];
};

export type ResolverEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  resolver?: InputMaybe<Scalars['String']>;
  resolver_not?: InputMaybe<Scalars['String']>;
  resolver_gt?: InputMaybe<Scalars['String']>;
  resolver_lt?: InputMaybe<Scalars['String']>;
  resolver_gte?: InputMaybe<Scalars['String']>;
  resolver_lte?: InputMaybe<Scalars['String']>;
  resolver_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_not_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_contains?: InputMaybe<Scalars['String']>;
  resolver_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_contains?: InputMaybe<Scalars['String']>;
  resolver_not_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_starts_with?: InputMaybe<Scalars['String']>;
  resolver_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_ends_with?: InputMaybe<Scalars['String']>;
  resolver_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_?: InputMaybe<Resolver_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['Bytes']>;
  transactionID_not?: InputMaybe<Scalars['Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type ResolverEvent_orderBy =
  | 'id'
  | 'resolver'
  | 'blockNumber'
  | 'transactionID';

export type Resolver_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  domain?: InputMaybe<Scalars['String']>;
  domain_not?: InputMaybe<Scalars['String']>;
  domain_gt?: InputMaybe<Scalars['String']>;
  domain_lt?: InputMaybe<Scalars['String']>;
  domain_gte?: InputMaybe<Scalars['String']>;
  domain_lte?: InputMaybe<Scalars['String']>;
  domain_in?: InputMaybe<Array<Scalars['String']>>;
  domain_not_in?: InputMaybe<Array<Scalars['String']>>;
  domain_contains?: InputMaybe<Scalars['String']>;
  domain_contains_nocase?: InputMaybe<Scalars['String']>;
  domain_not_contains?: InputMaybe<Scalars['String']>;
  domain_not_contains_nocase?: InputMaybe<Scalars['String']>;
  domain_starts_with?: InputMaybe<Scalars['String']>;
  domain_starts_with_nocase?: InputMaybe<Scalars['String']>;
  domain_not_starts_with?: InputMaybe<Scalars['String']>;
  domain_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  domain_ends_with?: InputMaybe<Scalars['String']>;
  domain_ends_with_nocase?: InputMaybe<Scalars['String']>;
  domain_not_ends_with?: InputMaybe<Scalars['String']>;
  domain_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  domain_?: InputMaybe<Domain_filter>;
  address?: InputMaybe<Scalars['Bytes']>;
  address_not?: InputMaybe<Scalars['Bytes']>;
  address_in?: InputMaybe<Array<Scalars['Bytes']>>;
  address_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  address_contains?: InputMaybe<Scalars['Bytes']>;
  address_not_contains?: InputMaybe<Scalars['Bytes']>;
  addr?: InputMaybe<Scalars['String']>;
  addr_not?: InputMaybe<Scalars['String']>;
  addr_gt?: InputMaybe<Scalars['String']>;
  addr_lt?: InputMaybe<Scalars['String']>;
  addr_gte?: InputMaybe<Scalars['String']>;
  addr_lte?: InputMaybe<Scalars['String']>;
  addr_in?: InputMaybe<Array<Scalars['String']>>;
  addr_not_in?: InputMaybe<Array<Scalars['String']>>;
  addr_contains?: InputMaybe<Scalars['String']>;
  addr_contains_nocase?: InputMaybe<Scalars['String']>;
  addr_not_contains?: InputMaybe<Scalars['String']>;
  addr_not_contains_nocase?: InputMaybe<Scalars['String']>;
  addr_starts_with?: InputMaybe<Scalars['String']>;
  addr_starts_with_nocase?: InputMaybe<Scalars['String']>;
  addr_not_starts_with?: InputMaybe<Scalars['String']>;
  addr_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  addr_ends_with?: InputMaybe<Scalars['String']>;
  addr_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addr_not_ends_with?: InputMaybe<Scalars['String']>;
  addr_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addr_?: InputMaybe<Account_filter>;
  contentHash?: InputMaybe<Scalars['Bytes']>;
  contentHash_not?: InputMaybe<Scalars['Bytes']>;
  contentHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  contentHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  contentHash_contains?: InputMaybe<Scalars['Bytes']>;
  contentHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  texts?: InputMaybe<Array<Scalars['String']>>;
  texts_not?: InputMaybe<Array<Scalars['String']>>;
  texts_contains?: InputMaybe<Array<Scalars['String']>>;
  texts_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  texts_not_contains?: InputMaybe<Array<Scalars['String']>>;
  texts_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  coinTypes?: InputMaybe<Array<Scalars['BigInt']>>;
  coinTypes_not?: InputMaybe<Array<Scalars['BigInt']>>;
  coinTypes_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  coinTypes_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  coinTypes_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  coinTypes_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  events_?: InputMaybe<ResolverEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Resolver_orderBy =
  | 'id'
  | 'domain'
  | 'address'
  | 'addr'
  | 'contentHash'
  | 'texts'
  | 'coinTypes'
  | 'events';

export type Subscription = {
  domain?: Maybe<Domain>;
  domains: Array<Domain>;
  transfer?: Maybe<Transfer>;
  transfers: Array<Transfer>;
  newOwner?: Maybe<NewOwner>;
  newOwners: Array<NewOwner>;
  newResolver?: Maybe<NewResolver>;
  newResolvers: Array<NewResolver>;
  newTTL?: Maybe<NewTTL>;
  newTTLs: Array<NewTTL>;
  account?: Maybe<Account>;
  accounts: Array<Account>;
  registration?: Maybe<Registration>;
  registrations: Array<Registration>;
  nameRegistered?: Maybe<NameRegistered>;
  nameRegistereds: Array<NameRegistered>;
  nameRenewed?: Maybe<NameRenewed>;
  nameReneweds: Array<NameRenewed>;
  nameTransferred?: Maybe<NameTransferred>;
  nameTransferreds: Array<NameTransferred>;
  resolver?: Maybe<Resolver>;
  resolvers: Array<Resolver>;
  addrChanged?: Maybe<AddrChanged>;
  addrChangeds: Array<AddrChanged>;
  multicoinAddrChanged?: Maybe<MulticoinAddrChanged>;
  multicoinAddrChangeds: Array<MulticoinAddrChanged>;
  nameChanged?: Maybe<NameChanged>;
  nameChangeds: Array<NameChanged>;
  abiChanged?: Maybe<AbiChanged>;
  abiChangeds: Array<AbiChanged>;
  pubkeyChanged?: Maybe<PubkeyChanged>;
  pubkeyChangeds: Array<PubkeyChanged>;
  textChanged?: Maybe<TextChanged>;
  textChangeds: Array<TextChanged>;
  contenthashChanged?: Maybe<ContenthashChanged>;
  contenthashChangeds: Array<ContenthashChanged>;
  interfaceChanged?: Maybe<InterfaceChanged>;
  interfaceChangeds: Array<InterfaceChanged>;
  authorisationChanged?: Maybe<AuthorisationChanged>;
  authorisationChangeds: Array<AuthorisationChanged>;
  domainEvent?: Maybe<DomainEvent>;
  domainEvents: Array<DomainEvent>;
  registrationEvent?: Maybe<RegistrationEvent>;
  registrationEvents: Array<RegistrationEvent>;
  resolverEvent?: Maybe<ResolverEvent>;
  resolverEvents: Array<ResolverEvent>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptiondomainArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondomainsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Domain_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Domain_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Transfer_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionnewOwnerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionnewOwnersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NewOwner_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NewOwner_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionnewResolverArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionnewResolversArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NewResolver_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NewResolver_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionnewTTLArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionnewTTLsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NewTTL_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NewTTL_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionaccountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionaccountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Account_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Account_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionregistrationArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionregistrationsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Registration_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Registration_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionnameRegisteredArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionnameRegisteredsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NameRegistered_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NameRegistered_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionnameRenewedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionnameRenewedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NameRenewed_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NameRenewed_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionnameTransferredArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionnameTransferredsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NameTransferred_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NameTransferred_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionresolverArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionresolversArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Resolver_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Resolver_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionaddrChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionaddrChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AddrChanged_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AddrChanged_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmulticoinAddrChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmulticoinAddrChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MulticoinAddrChanged_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MulticoinAddrChanged_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionnameChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionnameChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NameChanged_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NameChanged_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionabiChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionabiChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AbiChanged_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AbiChanged_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpubkeyChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpubkeyChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PubkeyChanged_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PubkeyChanged_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontextChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontextChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TextChanged_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TextChanged_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncontenthashChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncontenthashChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ContenthashChanged_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ContenthashChanged_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioninterfaceChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioninterfaceChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<InterfaceChanged_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<InterfaceChanged_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionauthorisationChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionauthorisationChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AuthorisationChanged_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AuthorisationChanged_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondomainEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondomainEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DomainEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DomainEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionregistrationEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionregistrationEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RegistrationEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RegistrationEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionresolverEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionresolverEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ResolverEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ResolverEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscription_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type TextChanged = ResolverEvent & {
  id: Scalars['ID'];
  resolver: Resolver;
  blockNumber: Scalars['Int'];
  transactionID: Scalars['Bytes'];
  key: Scalars['String'];
};

export type TextChanged_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  resolver?: InputMaybe<Scalars['String']>;
  resolver_not?: InputMaybe<Scalars['String']>;
  resolver_gt?: InputMaybe<Scalars['String']>;
  resolver_lt?: InputMaybe<Scalars['String']>;
  resolver_gte?: InputMaybe<Scalars['String']>;
  resolver_lte?: InputMaybe<Scalars['String']>;
  resolver_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_not_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_contains?: InputMaybe<Scalars['String']>;
  resolver_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_contains?: InputMaybe<Scalars['String']>;
  resolver_not_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_starts_with?: InputMaybe<Scalars['String']>;
  resolver_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_ends_with?: InputMaybe<Scalars['String']>;
  resolver_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_?: InputMaybe<Resolver_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['Bytes']>;
  transactionID_not?: InputMaybe<Scalars['Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['Bytes']>;
  key?: InputMaybe<Scalars['String']>;
  key_not?: InputMaybe<Scalars['String']>;
  key_gt?: InputMaybe<Scalars['String']>;
  key_lt?: InputMaybe<Scalars['String']>;
  key_gte?: InputMaybe<Scalars['String']>;
  key_lte?: InputMaybe<Scalars['String']>;
  key_in?: InputMaybe<Array<Scalars['String']>>;
  key_not_in?: InputMaybe<Array<Scalars['String']>>;
  key_contains?: InputMaybe<Scalars['String']>;
  key_contains_nocase?: InputMaybe<Scalars['String']>;
  key_not_contains?: InputMaybe<Scalars['String']>;
  key_not_contains_nocase?: InputMaybe<Scalars['String']>;
  key_starts_with?: InputMaybe<Scalars['String']>;
  key_starts_with_nocase?: InputMaybe<Scalars['String']>;
  key_not_starts_with?: InputMaybe<Scalars['String']>;
  key_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  key_ends_with?: InputMaybe<Scalars['String']>;
  key_ends_with_nocase?: InputMaybe<Scalars['String']>;
  key_not_ends_with?: InputMaybe<Scalars['String']>;
  key_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type TextChanged_orderBy =
  | 'id'
  | 'resolver'
  | 'blockNumber'
  | 'transactionID'
  | 'key';

export type Transfer = DomainEvent & {
  id: Scalars['ID'];
  domain: Domain;
  blockNumber: Scalars['Int'];
  transactionID: Scalars['Bytes'];
  owner: Account;
};

export type Transfer_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  domain?: InputMaybe<Scalars['String']>;
  domain_not?: InputMaybe<Scalars['String']>;
  domain_gt?: InputMaybe<Scalars['String']>;
  domain_lt?: InputMaybe<Scalars['String']>;
  domain_gte?: InputMaybe<Scalars['String']>;
  domain_lte?: InputMaybe<Scalars['String']>;
  domain_in?: InputMaybe<Array<Scalars['String']>>;
  domain_not_in?: InputMaybe<Array<Scalars['String']>>;
  domain_contains?: InputMaybe<Scalars['String']>;
  domain_contains_nocase?: InputMaybe<Scalars['String']>;
  domain_not_contains?: InputMaybe<Scalars['String']>;
  domain_not_contains_nocase?: InputMaybe<Scalars['String']>;
  domain_starts_with?: InputMaybe<Scalars['String']>;
  domain_starts_with_nocase?: InputMaybe<Scalars['String']>;
  domain_not_starts_with?: InputMaybe<Scalars['String']>;
  domain_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  domain_ends_with?: InputMaybe<Scalars['String']>;
  domain_ends_with_nocase?: InputMaybe<Scalars['String']>;
  domain_not_ends_with?: InputMaybe<Scalars['String']>;
  domain_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  domain_?: InputMaybe<Domain_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['Bytes']>;
  transactionID_not?: InputMaybe<Scalars['Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['Bytes']>;
  owner?: InputMaybe<Scalars['String']>;
  owner_not?: InputMaybe<Scalars['String']>;
  owner_gt?: InputMaybe<Scalars['String']>;
  owner_lt?: InputMaybe<Scalars['String']>;
  owner_gte?: InputMaybe<Scalars['String']>;
  owner_lte?: InputMaybe<Scalars['String']>;
  owner_in?: InputMaybe<Array<Scalars['String']>>;
  owner_not_in?: InputMaybe<Array<Scalars['String']>>;
  owner_contains?: InputMaybe<Scalars['String']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_not_contains?: InputMaybe<Scalars['String']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_starts_with?: InputMaybe<Scalars['String']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_starts_with?: InputMaybe<Scalars['String']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_ends_with?: InputMaybe<Scalars['String']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_?: InputMaybe<Account_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Transfer_orderBy =
  | 'id'
  | 'domain'
  | 'blockNumber'
  | 'transactionID'
  | 'owner';

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

  export type QuerySdk = {
      /** null **/
  domain: InContextSdkMethod<Query['domain'], QuerydomainArgs, MeshContext>,
  /** null **/
  domains: InContextSdkMethod<Query['domains'], QuerydomainsArgs, MeshContext>,
  /** null **/
  transfer: InContextSdkMethod<Query['transfer'], QuerytransferArgs, MeshContext>,
  /** null **/
  transfers: InContextSdkMethod<Query['transfers'], QuerytransfersArgs, MeshContext>,
  /** null **/
  newOwner: InContextSdkMethod<Query['newOwner'], QuerynewOwnerArgs, MeshContext>,
  /** null **/
  newOwners: InContextSdkMethod<Query['newOwners'], QuerynewOwnersArgs, MeshContext>,
  /** null **/
  newResolver: InContextSdkMethod<Query['newResolver'], QuerynewResolverArgs, MeshContext>,
  /** null **/
  newResolvers: InContextSdkMethod<Query['newResolvers'], QuerynewResolversArgs, MeshContext>,
  /** null **/
  newTTL: InContextSdkMethod<Query['newTTL'], QuerynewTTLArgs, MeshContext>,
  /** null **/
  newTTLs: InContextSdkMethod<Query['newTTLs'], QuerynewTTLsArgs, MeshContext>,
  /** null **/
  account: InContextSdkMethod<Query['account'], QueryaccountArgs, MeshContext>,
  /** null **/
  accounts: InContextSdkMethod<Query['accounts'], QueryaccountsArgs, MeshContext>,
  /** null **/
  registration: InContextSdkMethod<Query['registration'], QueryregistrationArgs, MeshContext>,
  /** null **/
  registrations: InContextSdkMethod<Query['registrations'], QueryregistrationsArgs, MeshContext>,
  /** null **/
  nameRegistered: InContextSdkMethod<Query['nameRegistered'], QuerynameRegisteredArgs, MeshContext>,
  /** null **/
  nameRegistereds: InContextSdkMethod<Query['nameRegistereds'], QuerynameRegisteredsArgs, MeshContext>,
  /** null **/
  nameRenewed: InContextSdkMethod<Query['nameRenewed'], QuerynameRenewedArgs, MeshContext>,
  /** null **/
  nameReneweds: InContextSdkMethod<Query['nameReneweds'], QuerynameRenewedsArgs, MeshContext>,
  /** null **/
  nameTransferred: InContextSdkMethod<Query['nameTransferred'], QuerynameTransferredArgs, MeshContext>,
  /** null **/
  nameTransferreds: InContextSdkMethod<Query['nameTransferreds'], QuerynameTransferredsArgs, MeshContext>,
  /** null **/
  resolver: InContextSdkMethod<Query['resolver'], QueryresolverArgs, MeshContext>,
  /** null **/
  resolvers: InContextSdkMethod<Query['resolvers'], QueryresolversArgs, MeshContext>,
  /** null **/
  addrChanged: InContextSdkMethod<Query['addrChanged'], QueryaddrChangedArgs, MeshContext>,
  /** null **/
  addrChangeds: InContextSdkMethod<Query['addrChangeds'], QueryaddrChangedsArgs, MeshContext>,
  /** null **/
  multicoinAddrChanged: InContextSdkMethod<Query['multicoinAddrChanged'], QuerymulticoinAddrChangedArgs, MeshContext>,
  /** null **/
  multicoinAddrChangeds: InContextSdkMethod<Query['multicoinAddrChangeds'], QuerymulticoinAddrChangedsArgs, MeshContext>,
  /** null **/
  nameChanged: InContextSdkMethod<Query['nameChanged'], QuerynameChangedArgs, MeshContext>,
  /** null **/
  nameChangeds: InContextSdkMethod<Query['nameChangeds'], QuerynameChangedsArgs, MeshContext>,
  /** null **/
  abiChanged: InContextSdkMethod<Query['abiChanged'], QueryabiChangedArgs, MeshContext>,
  /** null **/
  abiChangeds: InContextSdkMethod<Query['abiChangeds'], QueryabiChangedsArgs, MeshContext>,
  /** null **/
  pubkeyChanged: InContextSdkMethod<Query['pubkeyChanged'], QuerypubkeyChangedArgs, MeshContext>,
  /** null **/
  pubkeyChangeds: InContextSdkMethod<Query['pubkeyChangeds'], QuerypubkeyChangedsArgs, MeshContext>,
  /** null **/
  textChanged: InContextSdkMethod<Query['textChanged'], QuerytextChangedArgs, MeshContext>,
  /** null **/
  textChangeds: InContextSdkMethod<Query['textChangeds'], QuerytextChangedsArgs, MeshContext>,
  /** null **/
  contenthashChanged: InContextSdkMethod<Query['contenthashChanged'], QuerycontenthashChangedArgs, MeshContext>,
  /** null **/
  contenthashChangeds: InContextSdkMethod<Query['contenthashChangeds'], QuerycontenthashChangedsArgs, MeshContext>,
  /** null **/
  interfaceChanged: InContextSdkMethod<Query['interfaceChanged'], QueryinterfaceChangedArgs, MeshContext>,
  /** null **/
  interfaceChangeds: InContextSdkMethod<Query['interfaceChangeds'], QueryinterfaceChangedsArgs, MeshContext>,
  /** null **/
  authorisationChanged: InContextSdkMethod<Query['authorisationChanged'], QueryauthorisationChangedArgs, MeshContext>,
  /** null **/
  authorisationChangeds: InContextSdkMethod<Query['authorisationChangeds'], QueryauthorisationChangedsArgs, MeshContext>,
  /** null **/
  domainEvent: InContextSdkMethod<Query['domainEvent'], QuerydomainEventArgs, MeshContext>,
  /** null **/
  domainEvents: InContextSdkMethod<Query['domainEvents'], QuerydomainEventsArgs, MeshContext>,
  /** null **/
  registrationEvent: InContextSdkMethod<Query['registrationEvent'], QueryregistrationEventArgs, MeshContext>,
  /** null **/
  registrationEvents: InContextSdkMethod<Query['registrationEvents'], QueryregistrationEventsArgs, MeshContext>,
  /** null **/
  resolverEvent: InContextSdkMethod<Query['resolverEvent'], QueryresolverEventArgs, MeshContext>,
  /** null **/
  resolverEvents: InContextSdkMethod<Query['resolverEvents'], QueryresolverEventsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Query['_meta'], Query_metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  domain: InContextSdkMethod<Subscription['domain'], SubscriptiondomainArgs, MeshContext>,
  /** null **/
  domains: InContextSdkMethod<Subscription['domains'], SubscriptiondomainsArgs, MeshContext>,
  /** null **/
  transfer: InContextSdkMethod<Subscription['transfer'], SubscriptiontransferArgs, MeshContext>,
  /** null **/
  transfers: InContextSdkMethod<Subscription['transfers'], SubscriptiontransfersArgs, MeshContext>,
  /** null **/
  newOwner: InContextSdkMethod<Subscription['newOwner'], SubscriptionnewOwnerArgs, MeshContext>,
  /** null **/
  newOwners: InContextSdkMethod<Subscription['newOwners'], SubscriptionnewOwnersArgs, MeshContext>,
  /** null **/
  newResolver: InContextSdkMethod<Subscription['newResolver'], SubscriptionnewResolverArgs, MeshContext>,
  /** null **/
  newResolvers: InContextSdkMethod<Subscription['newResolvers'], SubscriptionnewResolversArgs, MeshContext>,
  /** null **/
  newTTL: InContextSdkMethod<Subscription['newTTL'], SubscriptionnewTTLArgs, MeshContext>,
  /** null **/
  newTTLs: InContextSdkMethod<Subscription['newTTLs'], SubscriptionnewTTLsArgs, MeshContext>,
  /** null **/
  account: InContextSdkMethod<Subscription['account'], SubscriptionaccountArgs, MeshContext>,
  /** null **/
  accounts: InContextSdkMethod<Subscription['accounts'], SubscriptionaccountsArgs, MeshContext>,
  /** null **/
  registration: InContextSdkMethod<Subscription['registration'], SubscriptionregistrationArgs, MeshContext>,
  /** null **/
  registrations: InContextSdkMethod<Subscription['registrations'], SubscriptionregistrationsArgs, MeshContext>,
  /** null **/
  nameRegistered: InContextSdkMethod<Subscription['nameRegistered'], SubscriptionnameRegisteredArgs, MeshContext>,
  /** null **/
  nameRegistereds: InContextSdkMethod<Subscription['nameRegistereds'], SubscriptionnameRegisteredsArgs, MeshContext>,
  /** null **/
  nameRenewed: InContextSdkMethod<Subscription['nameRenewed'], SubscriptionnameRenewedArgs, MeshContext>,
  /** null **/
  nameReneweds: InContextSdkMethod<Subscription['nameReneweds'], SubscriptionnameRenewedsArgs, MeshContext>,
  /** null **/
  nameTransferred: InContextSdkMethod<Subscription['nameTransferred'], SubscriptionnameTransferredArgs, MeshContext>,
  /** null **/
  nameTransferreds: InContextSdkMethod<Subscription['nameTransferreds'], SubscriptionnameTransferredsArgs, MeshContext>,
  /** null **/
  resolver: InContextSdkMethod<Subscription['resolver'], SubscriptionresolverArgs, MeshContext>,
  /** null **/
  resolvers: InContextSdkMethod<Subscription['resolvers'], SubscriptionresolversArgs, MeshContext>,
  /** null **/
  addrChanged: InContextSdkMethod<Subscription['addrChanged'], SubscriptionaddrChangedArgs, MeshContext>,
  /** null **/
  addrChangeds: InContextSdkMethod<Subscription['addrChangeds'], SubscriptionaddrChangedsArgs, MeshContext>,
  /** null **/
  multicoinAddrChanged: InContextSdkMethod<Subscription['multicoinAddrChanged'], SubscriptionmulticoinAddrChangedArgs, MeshContext>,
  /** null **/
  multicoinAddrChangeds: InContextSdkMethod<Subscription['multicoinAddrChangeds'], SubscriptionmulticoinAddrChangedsArgs, MeshContext>,
  /** null **/
  nameChanged: InContextSdkMethod<Subscription['nameChanged'], SubscriptionnameChangedArgs, MeshContext>,
  /** null **/
  nameChangeds: InContextSdkMethod<Subscription['nameChangeds'], SubscriptionnameChangedsArgs, MeshContext>,
  /** null **/
  abiChanged: InContextSdkMethod<Subscription['abiChanged'], SubscriptionabiChangedArgs, MeshContext>,
  /** null **/
  abiChangeds: InContextSdkMethod<Subscription['abiChangeds'], SubscriptionabiChangedsArgs, MeshContext>,
  /** null **/
  pubkeyChanged: InContextSdkMethod<Subscription['pubkeyChanged'], SubscriptionpubkeyChangedArgs, MeshContext>,
  /** null **/
  pubkeyChangeds: InContextSdkMethod<Subscription['pubkeyChangeds'], SubscriptionpubkeyChangedsArgs, MeshContext>,
  /** null **/
  textChanged: InContextSdkMethod<Subscription['textChanged'], SubscriptiontextChangedArgs, MeshContext>,
  /** null **/
  textChangeds: InContextSdkMethod<Subscription['textChangeds'], SubscriptiontextChangedsArgs, MeshContext>,
  /** null **/
  contenthashChanged: InContextSdkMethod<Subscription['contenthashChanged'], SubscriptioncontenthashChangedArgs, MeshContext>,
  /** null **/
  contenthashChangeds: InContextSdkMethod<Subscription['contenthashChangeds'], SubscriptioncontenthashChangedsArgs, MeshContext>,
  /** null **/
  interfaceChanged: InContextSdkMethod<Subscription['interfaceChanged'], SubscriptioninterfaceChangedArgs, MeshContext>,
  /** null **/
  interfaceChangeds: InContextSdkMethod<Subscription['interfaceChangeds'], SubscriptioninterfaceChangedsArgs, MeshContext>,
  /** null **/
  authorisationChanged: InContextSdkMethod<Subscription['authorisationChanged'], SubscriptionauthorisationChangedArgs, MeshContext>,
  /** null **/
  authorisationChangeds: InContextSdkMethod<Subscription['authorisationChangeds'], SubscriptionauthorisationChangedsArgs, MeshContext>,
  /** null **/
  domainEvent: InContextSdkMethod<Subscription['domainEvent'], SubscriptiondomainEventArgs, MeshContext>,
  /** null **/
  domainEvents: InContextSdkMethod<Subscription['domainEvents'], SubscriptiondomainEventsArgs, MeshContext>,
  /** null **/
  registrationEvent: InContextSdkMethod<Subscription['registrationEvent'], SubscriptionregistrationEventArgs, MeshContext>,
  /** null **/
  registrationEvents: InContextSdkMethod<Subscription['registrationEvents'], SubscriptionregistrationEventsArgs, MeshContext>,
  /** null **/
  resolverEvent: InContextSdkMethod<Subscription['resolverEvent'], SubscriptionresolverEventArgs, MeshContext>,
  /** null **/
  resolverEvents: InContextSdkMethod<Subscription['resolverEvents'], SubscriptionresolverEventsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Subscription['_meta'], Subscription_metaArgs, MeshContext>
  };

  export type Context = {
      ["ENS"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
