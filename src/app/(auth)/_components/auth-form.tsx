"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type z from "zod";

import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/svgs";
import { signup, login } from "@/lib/auth";
import { signupSchema, loginSchema } from "@/lib/schemas";

interface AuthFormProps {
    variant: "signup" | "login";
}

export default function AuthForm({ variant }: Readonly<AuthFormProps>) {
    const authSchema = variant === "signup" ? signupSchema : loginSchema;

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const form = useForm<z.infer<typeof authSchema>>({
        resolver: zodResolver(authSchema),
        defaultValues: {
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
    });
    const searchParams = useSearchParams();
    const router = useRouter();

    async function onSubmit(values: z.infer<typeof authSchema>) {
        setIsLoading(true);

        const { success, error } = await ("confirmPassword" in values
            ? signup(values)
            : login(values));
        if (success) {
            alert(
                variant === "signup" ? "Account created successfully." : "Logged in successfully.",
            );

            return router.push(searchParams.get("next") ?? "/");
        }

        if (variant === "login") form.reset();

        setIsLoading(false);
        alert(error);
    }

    return (
        <Form {...form}>
            <form
                noValidate
                autoComplete="off"
                className="flex flex-col gap-y-6"
                onSubmit={form.handleSubmit(onSubmit)}
            >
                {variant === "signup" && (
                    <>
                        <FormField
                            control={form.control}
                            name="firstname"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>First name</FormLabel>

                                    <FormControl>
                                        <Input placeholder="First name" {...field} />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="lastname"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Last name</FormLabel>

                                    <FormControl>
                                        <Input placeholder="Last name" {...field} />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </>
                )}

                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email address</FormLabel>

                            <FormControl>
                                <Input placeholder="Email address" type="email" {...field} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>

                            <FormControl>
                                <Input placeholder="Password" type="password" {...field} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />

                {variant === "signup" && (
                    <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Confirm password</FormLabel>

                                <FormControl>
                                    <Input
                                        placeholder="Confirm password"
                                        type="password"
                                        {...field}
                                    />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                )}

                <Button
                    {...(isLoading && { "aria-label": "Loading..." })}
                    disabled={isLoading}
                    type="submit"
                    className="mt-3 [animation-duration:3s]"
                    variant="shine"
                >
                    {isLoading ? (
                        <Spinner className="aspect-square w-4 fill-foreground" />
                    ) : variant === "signup" ? (
                        "Sign Up"
                    ) : (
                        "Log In"
                    )}
                </Button>
            </form>
        </Form>
    );
}
