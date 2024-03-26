import { Suspense } from "react";

import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import AuthForm from "./auth-form";
import AuthAlternateLink, { type AuthAlternateLinkProps } from "./auth-alternate-link";

interface AuthCardProps {
    variant: "signup" | "login";
    title: string;
    description: string;
    footer: {
        text: string;
        link: AuthAlternateLinkProps;
    };
}

export default function AuthCard({ variant, title, description, footer }: Readonly<AuthCardProps>) {
    return (
        <Suspense
            fallback={
                <Skeleton
                    className={cn("rounded-xl", variant === "signup" ? "h-[664px]" : "h-[388px]")}
                />
            }
        >
            <Card>
                <CardHeader>
                    <CardTitle>{title}</CardTitle>

                    <CardDescription>{description}</CardDescription>
                </CardHeader>

                <CardContent>
                    <AuthForm variant={variant} />
                </CardContent>

                <CardFooter>
                    <p className="flex gap-x-1">
                        <span className="text-muted-foreground text-xs">{footer.text}</span>

                        <AuthAlternateLink {...footer.link} />
                    </p>
                </CardFooter>
            </Card>
        </Suspense>
    );
}
