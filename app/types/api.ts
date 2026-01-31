// API 响应类型定义

export interface VersionInfo {
  version: string;
  releaseDate: string;
  downloadUrl: string;
  changelog: string[];
  minWindowsVersion: string;
}

export interface FeedbackRequest {
  email?: string;
  message: string;
  type: "bug" | "feature" | "other";
}

export interface FeedbackResponse {
  success: boolean;
  message: string;
}

export interface ApiError {
  error: string;
}
