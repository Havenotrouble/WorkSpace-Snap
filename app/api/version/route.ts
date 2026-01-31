import { NextResponse } from "next/server";

export const runtime = "edge";

interface VersionInfo {
  version: string;
  releaseDate: string;
  downloadUrl: string;
  changelog: string[];
  minWindowsVersion: string;
}

/**
 * GET /api/version
 * 获取最新版本信息
 */
export async function GET() {
  try {
    // TODO: 实际部署时从 GitHub API 获取最新 release 信息
    // const response = await fetch('https://api.github.com/repos/Havenotrouble/WorkSpace-Snap/releases/latest');
    // const data = await response.json();

    const versionInfo: VersionInfo = {
      version: "1.0.0",
      releaseDate: new Date().toISOString(),
      downloadUrl: "https://github.com/Havenotrouble/WorkSpace-Snap/releases/latest/download/WorkSpaceSnap-Setup.exe",
      changelog: [
        "🎉 首次发布",
        "✨ 智能扫描和捕获应用程序",
        "⚡ 一键启动工作空间",
        "📁 智能分类管理",
      ],
      minWindowsVersion: "Windows 10 (Build 19041)",
    };

    return NextResponse.json(versionInfo, {
      headers: {
        "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
      },
    });
  } catch (error) {
    console.error("Failed to fetch version info:", error);
    return NextResponse.json(
      { error: "Failed to fetch version information" },
      { status: 500 }
    );
  }
}
