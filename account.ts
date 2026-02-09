// Request Messages
export interface CreateAccountRequest {
  email: string;
  name: string;
  password: string;
  phoneNumber?: string;
  postalCode?: string;
}

export interface CompensateAccountRequest {
  accountId: string;
}

export interface GetAccountRequest {
  accountId: string;
}

export interface UpdateAccountRequest {
  accountId: string;
  email?: string;
  name?: string;
  password?: string;
}

export interface DeleteAccountRequest {
  accountId: string;
}

export interface ListAccountsRequest {
  page?: number;
  limit?: number;
}

// Response Messages
export interface AccountResponse {
  id: string;
  email: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string | null;

  parameters: AccountParameter[];
}

export interface AccountParameter {
  id: string;
  name: string;
  value: string;
  createdAt: string;
  updatedAt: string;
}

export interface ListAccountsResponse {
  accounts: AccountResponse[];
  total: number;
  page: number;
  limit: number;
}

export interface Empty {}

// Service Client Interface
// Note: Observable types are handled by NestJS gRPC client
export interface AccountServiceClient {
  CreateAccount(data: CreateAccountRequest): any;
  CompensateAccount(data: CompensateAccountRequest): any;
  GetAccount(data: GetAccountRequest): any;
  UpdateAccount(data: UpdateAccountRequest): any;
  DeleteAccount(data: DeleteAccountRequest): any;
  ListAccounts(data: ListAccountsRequest): any;
}

