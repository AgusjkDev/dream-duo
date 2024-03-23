import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const gradientVariants = cva("-inset-full absolute animate-spin", {
    variants: {
        variant: {
            default:
                "lg:bg-[conic-gradient(from_90deg_at_50%_50%,hsl(var(--background))_0%,hsl(var(--foreground)/0.5)_50%,hsl(var(--background))_100%)]",
            primary:
                "lg:bg-[conic-gradient(from_90deg_at_50%_50%,hsl(var(--background))_0%,hsl(var(--primary)/0.5)_50%,hsl(var(--background))_100%)]",
        },
        speed: {
            default: "[animation-duration:2s]",
            slow: "[animation-duration:3s]",
            fast: "[animation-duration:1s]",
        },
    },
    defaultVariants: {
        variant: "default",
        speed: "default",
    },
});

interface AnimatedGradientBorderCardProps<T extends keyof JSX.IntrinsicElements>
    extends React.HTMLAttributes<T>,
        VariantProps<typeof gradientVariants> {
    children: React.ReactNode;
    as?: keyof JSX.IntrinsicElements;
}

export default function AnimatedGradientBorderCard<T extends keyof JSX.IntrinsicElements>({
    className,
    children,
    variant,
    speed,
    ...props
}: Readonly<AnimatedGradientBorderCardProps<T>>) {
    const Comp = props.as ?? "div";

    return (
        <Comp
            className={cn(
                "relative aspect-square w-full overflow-hidden rounded-xl border p-px lg:backdrop-blur-3xl",
                className,
            )}
        >
            <span aria-hidden="true" className={gradientVariants({ variant, speed })} />

            <div className="h-full w-full rounded-xl bg-background lg:backdrop-blur-3xl">
                {children}
            </div>
        </Comp>
    );
}
