import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

interface FeedbackRequest {
  email?: string;
  message: string;
  type: "bug" | "feature" | "other";
  userAgent?: string;
}

/**
 * POST /api/feedback
 * 收集用户反馈
 */
export async function POST(request: NextRequest) {
  try {
    const body: FeedbackRequest = await request.json();

    // 验证必填字段
    if (!body.message || !body.type) {
      return NextResponse.json(
        { error: "Message and type are required" },
        { status: 400 }
      );
    }

    // 验证消息长度
    if (body.message.length < 10 || body.message.length > 1000) {
      return NextResponse.json(
        { error: "Message must be between 10 and 1000 characters" },
        { status: 400 }
      );
    }

    // 验证邮箱格式（如果提供）
    if (body.email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(body.email)) {
        return NextResponse.json(
          { error: "Invalid email format" },
          { status: 400 }
        );
      }
    }

    // 收集额外信息
    const feedbackData = {
      ...body,
      userAgent: request.headers.get("user-agent") || "Unknown",
      timestamp: new Date().toISOString(),
      ip: request.ip || request.headers.get("x-forwarded-for") || "Unknown",
    };

    // TODO: 实际部署时可以：
    // 1. 发送到数据库
    // 2. 发送到 Discord/Slack webhook
    // 3. 发送邮件通知
    // 4. 集成到 GitHub Issues

    console.log("Feedback received:", feedbackData);

    // 示例：发送到 Discord Webhook (需要配置环境变量 DISCORD_WEBHOOK_URL)
    if (process.env.DISCORD_WEBHOOK_URL) {
      await fetch(process.env.DISCORD_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: `**新反馈 [${body.type}]**\n\n${body.message}\n\n邮箱: ${body.email || "未提供"}\nUser-Agent: ${feedbackData.userAgent}`,
        }),
      });
    }

    return NextResponse.json(
      { success: true, message: "Thank you for your feedback!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Failed to process feedback:", error);
    return NextResponse.json(
      { error: "Failed to process feedback" },
      { status: 500 }
    );
  }
}

/**
 * OPTIONS /api/feedback
 * CORS 预检请求
 */
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
