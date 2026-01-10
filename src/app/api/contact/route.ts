import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { UAParser } from "ua-parser-js";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, subject, message, token } = body;

    // Validate required fields
    if (!name || !subject || !message || !token) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 },
      );
    }

    // Verify Turnstile token
    const tsResponse = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          secret: process.env.TURNSTILE_SECRET_KEY,
          response: token,
        }),
      },
    );

    const tsData = await tsResponse.json();

    if (!tsData.success) {
      return NextResponse.json(
        { error: "Verification failed. Please try again." },
        { status: 400 },
      );
    }

    const ua = new UAParser(req.headers.get("user-agent") || "").getResult();
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0].trim() || "Unknown IP";

    const payload = {
      flags: 32768,
      username: name,
      avatar_url: `https://api.dicebear.com/9.x/identicon/png?seed=${encodeURIComponent(name)}&backgroundColor=ffffff`,
      components: [
        {
          type: 17,
          components: [
            { type: 10, content: `## ${subject}` },
            { type: 14, divider: true, spacing: 1 },
            { type: 10, content: message },
            { type: 14, divider: true, spacing: 1 },
            {
              type: 10,
              content: `${ua.browser.name || "Unknown browser"}  **·**  ${ua.os.name || "unknown OS"}  →  [\`${ip.length > 15 ? `${ip.slice(0, 15)}...` : ip}\`](https://whatismyipaddress.com/ip/${ip})`,
            },
          ],
        },
      ],
    };

    const webhookUrl = new URL(process.env.DISCORD_WEBHOOK_URL!);
    webhookUrl.searchParams.set("with_components", "true");

    const discordResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!discordResponse.ok) {
      return NextResponse.json(
        { error: "Failed to send message" },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { success: true, message: "Message sent successfully!" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 },
    );
  }
}
