import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { getSession } from "@/lib/auth";

export default async function CallToAction() {
    const session = await getSession();

    return (
        <Link
            href={session ? "/app" : "/signup"}
            className={buttonVariants({ variant: "shine", size: "lg" })}
        >
            {session ? "Continue" : "Join now"}
        </Link>
    );
}
