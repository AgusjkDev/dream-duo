import type { MetadataRoute } from "next";

import { siteConfig } from "@/config";

export const dynamic = "error";

export default function robots(): MetadataRoute.Robots {
    return {
        host: siteConfig.baseUrl,
        rules: [
            {
                userAgent: "*",
                allow: "/",
            },
        ],
    };
}
