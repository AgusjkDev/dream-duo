import type { MetadataRoute } from "next";

import { NEXT_PUBLIC_BASE_URL } from "@/lib/constants";

export const dynamic = "error";

export default function robots(): MetadataRoute.Robots {
    return {
        host: NEXT_PUBLIC_BASE_URL,
        rules: [
            {
                userAgent: "*",
                allow: "/",
            },
        ],
    };
}
