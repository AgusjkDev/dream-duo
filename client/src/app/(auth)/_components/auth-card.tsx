import { Suspense } from "react";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

import AuthAlternateLink, { type AuthAlternateLinkProps } from "./auth-alternate-link";
import AuthForm from "./auth-form";

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
                        <span className="text-xs text-muted-foreground">{footer.text}</span>

                        <AuthAlternateLink {...footer.link} />
                    </p>
                </CardFooter>
            </Card>
        </Suspense>
    );
}
