// Request Messages
export interface CreateWorkspaceRequest {
  name: string;
  ownerId: string;
  address?: string;
  country?: string;
}

export interface CompensateWorkspaceRequest {
  workspaceId: string;
}

export interface GetWorkspaceRequest {
  workspaceId: string;
}

export interface GetWorkspacesByOwnerIdRequest {
  ownerId: string;
}

export interface RestoreWorkspaceRequest {
  workspaceId: string;
}

// Response Messages
export interface WorkspaceResponse {
  id: string;
  name: string;
  ownerId: string;
  isDeleted: boolean;
  deletedAt?: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface ListWorkspacesResponse {
  workspaces: WorkspaceResponse[];
  total: number;
}

export interface HealthCheckResponse {
  status: string;
  service: string;
}

export interface Empty {}

// Service Client Interface
// Note: Observable types are handled by NestJS gRPC client
export interface WorkspaceServiceClient {
  CreateWorkspace(data: CreateWorkspaceRequest): any;
  CompensateWorkspace(data: CompensateWorkspaceRequest): any;
  GetWorkspace(data: GetWorkspaceRequest): any;
  GetWorkspacesByOwnerId(data: GetWorkspacesByOwnerIdRequest): any;
  GetAllWorkspacesByOwnerId(data: GetWorkspacesByOwnerIdRequest): any;
  RestoreWorkspace(data: RestoreWorkspaceRequest): any;
  HealthCheck(data?: Empty): any;
}

