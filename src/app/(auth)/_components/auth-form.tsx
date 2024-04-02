"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
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
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { toast } from "@/components/ui/use-toast";
import { Calendar as CalendarIcon, Spinner } from "@/components/svgs";
import { signup, login } from "@/lib/auth";
import { signupSchema, loginSchema } from "@/lib/schemas";
import { MIN_BIRTHDATE, MAX_BIRTHDATE } from "@/lib/constants";
import { cn } from "@/lib/utils";

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
            toast({
                description:
                    variant === "signup"
                        ? "Account created successfully."
                        : "Logged in successfully.",
            });

            return router.push(searchParams.get("next") ?? "/app");
        }

        if (variant === "login") form.reset();

        setIsLoading(false);
        toast({ description: error, variant: "destructive" });
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

                        <FormField
                            control={form.control}
                            name="birthdate"
                            render={({ field }) => (
                                <FormItem className="flex flex-col">
                                    <FormLabel>Date of birth</FormLabel>

                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <FormControl>
                                                <Button
                                                    variant="outline"
                                                    className={cn(
                                                        "justify-between bg-transparent pl-3 font-normal",
                                                        !field.value && "text-muted-foreground",
                                                    )}
                                                >
                                                    <span>
                                                        {field.value
                                                            ? format(field.value, "PPP")
                                                            : "Select your birth date"}
                                                    </span>

                                                    <CalendarIcon className="aspect-square w-4 fill-foreground opacity-50" />
                                                </Button>
                                            </FormControl>
                                        </PopoverTrigger>

                                        <PopoverContent className="w-auto p-0" align="start">
                                            <Calendar
                                                initialFocus
                                                mode="single"
                                                captionLayout="dropdown-buttons"
                                                fromYear={MIN_BIRTHDATE.getUTCFullYear()}
                                                toYear={new Date().getUTCFullYear()}
                                                selected={field.value}
                                                onSelect={field.onChange}
                                                disabled={(date) =>
                                                    date > MAX_BIRTHDATE || date < MIN_BIRTHDATE
                                                }
                                            />
                                        </PopoverContent>
                                    </Popover>
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
