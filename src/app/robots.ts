import type { MetadataRoute } from "next";

import { BASE_URL } from "@/lib/constants";

export const dynamic = "error";

export default function robots(): MetadataRoute.Robots {
    return {
        host: BASE_URL,
        rules: [
            {
                userAgent: "*",
                allow: "/",
            },
        ],
    };
}
