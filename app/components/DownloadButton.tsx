"use client";

import { Download } from "lucide-react";
import { useEffect, useState } from "react";
import { VersionInfo } from "@/app/types/api";

export function DownloadButton() {
  const [downloadUrl, setDownloadUrl] = useState<string>("#");
  const [version, setVersion] = useState<string>("");

  useEffect(() => {
    // 获取最新版本信息
    fetch("/api/version")
      .then((res) => res.json())
      .then((data: VersionInfo) => {
        setDownloadUrl(data.downloadUrl);
        setVersion(data.version);
      })
      .catch((err) => {
        console.error("Failed to fetch version info:", err);
        // 降级到默认链接
        setDownloadUrl("https://github.com/Havenotrouble/WorkSpace-Snap/releases/latest");
      });
  }, []);

  return (
    <a
      href={downloadUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-primary flex items-center gap-2 text-sm md:text-base inline-flex"
      title={version ? `下载 v${version}` : "下载最新版本"}
    >
      <Download className="w-4 h-4 md:w-5 md:h-5" />
      下载 Windows 版本
      {version && <span className="text-xs opacity-75">v{version}</span>}
    </a>
  );
}
