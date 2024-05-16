export type TResponse<T> = {
  messages: string | null;
  pageNumber: number;
  pageSize: number;
  resultType: string;
  results: T;
  totalCount: number;
};

export type TAdvertiser = {
  id: number;
  name: string;
  domainUrl: string;
  categoryIds: string;
  categoryNames: string;
  created: Date;
  programStatus: EProgramStatus;
  lastStatusUpdated: Date;
  applicationStatus: EApplicationStatus;
  applicationStatusDate: Date;
  applicationStatusId: number;
  description: string;
  payout: string;
  imageUrl: string;
  country: string;
  sevenDayEpc: string;
  thirtyDayEpc: string;
  threeMonthEpc: string;
  productAdvertiser: boolean;
  promotionalAdvertiser: boolean;
  allowsDeeplinking: boolean;
  deeplinkURL: string;
  flexLinks: boolean;
  lastCommissionUpdated: Date;
  networkRank: string;
  actions: TAction[];
};

export enum EProgramStatus {
  APPROVED = "Approved",
  DEACTIVATED = "Deactivated",
}

export enum EApplicationStatus {
  ALL = "All",
  APPROVED = "Approved",
  DEACTIVATED = "Deactivated",
  DECLINED = "Declined",
  NOT_APPLY_FOR = "Not Applied For",
  PENDING = "Pending",
  SUSPENDED = "Suspended",
}

export type TAction = {
  action: string;
  actionType: string;
  commissionType: string;
  commission: string;
  description: string;
  programID: number;
  programAction: null;
  descriptionCharsCount: number;
};

export type TGetAdvertiserQueries = Partial<{
  page: number;
  pageSize: number;
  sortOrder: "ASC" | "DESC";
  ApplicationStatus: EApplicationStatus;
  ProgramStatus: EProgramStatus;
  Name: string;
  AdvertiserIds: number;
}>;
