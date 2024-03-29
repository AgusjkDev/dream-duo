"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type z from "zod";
import type { User } from "@prisma/client";

import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormDescription,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { Spinner } from "@/components/svgs";
import { profileSchema } from "@/lib/schemas";
import { updateProfile } from "../../_actions";
import FieldGroup from "./field-group";

interface ProfileFormProps {
    profile: Omit<User, "password">;
}

export default function ProfileForm({ profile }: Readonly<ProfileFormProps>) {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const form = useForm<z.infer<typeof profileSchema>>({
        resolver: zodResolver(profileSchema),
        defaultValues: {
            ...Object.fromEntries(
                Object.entries(profile).map(([k, v]) => [k, v == null ? undefined : v]),
            ),
        },
    });

    async function onSubmit(values: z.infer<typeof profileSchema>) {
        setIsLoading(true);

        if (
            Object.entries(values)
                .filter(([_, v]) => v !== undefined)
                .every(([k, v]) => v === profile[k as keyof typeof profile])
        ) {
            toast({ description: "No changes were made." });
        } else {
            const { success, error } = await updateProfile(values);

            toast({
                description: success ? "Profile updated successfully." : error,
                variant: success ? "default" : "destructive",
            });
        }

        form.reset();
        setIsLoading(false);
    }

    return (
        <Form {...form}>
            <form
                noValidate
                autoComplete="off"
                className="flex flex-col gap-y-12 lg:max-w-xl md:max-w-lg"
                onSubmit={form.handleSubmit(onSubmit)}
            >
                <FieldGroup title="Personal Information">
                    <FormField
                        disabled
                        control={form.control}
                        name="firstname"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>First name</FormLabel>

                                <FormControl>
                                    <Input placeholder="First name" {...field} />
                                </FormControl>

                                <FormDescription>
                                    Updating this field is not available at the moment&#46;
                                </FormDescription>

                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        disabled
                        control={form.control}
                        name="lastname"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Last name</FormLabel>

                                <FormControl>
                                    <Input placeholder="Last name" {...field} />
                                </FormControl>

                                <FormDescription>
                                    Updating this field is not available at the moment&#46;
                                </FormDescription>

                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        disabled
                        control={form.control}
                        name="age"
                        render={({ field: { onChange, ...field } }) => (
                            <FormItem>
                                <FormLabel>Age</FormLabel>

                                <FormControl>
                                    <Input
                                        placeholder="Age"
                                        type="number"
                                        onChange={(e) => onChange(Number(e.target.value))}
                                        {...field}
                                    />
                                </FormControl>

                                <FormDescription>
                                    Updating this field is not available at the moment&#46;
                                </FormDescription>

                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="weight"
                        render={({ field: { onChange, ...field } }) => (
                            <FormItem>
                                <FormLabel>Weight</FormLabel>

                                <FormControl>
                                    <Input
                                        placeholder="Weight"
                                        type="number"
                                        onChange={(e) => onChange(Number(e.target.value))}
                                        {...field}
                                    />
                                </FormControl>

                                <FormDescription>
                                    This field is expressed in kilograms&#46;
                                </FormDescription>

                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="height"
                        render={({ field: { onChange, ...field } }) => (
                            <FormItem>
                                <FormLabel>Height</FormLabel>

                                <FormControl>
                                    <Input
                                        placeholder="Height"
                                        type="number"
                                        onChange={(e) => onChange(Number(e.target.value))}
                                        {...field}
                                    />
                                </FormControl>

                                <FormDescription>
                                    This field is expressed in centimeters&#46;
                                </FormDescription>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </FieldGroup>

                <Button
                    {...(isLoading && { "aria-label": "Loading..." })}
                    disabled={isLoading}
                    type="submit"
                    className="mt-3 [animation-duration:3s]"
                    variant="shine"
                >
                    {isLoading ? (
                        <Spinner className="aspect-square w-4 fill-foreground" />
                    ) : (
                        "Update profile"
                    )}
                </Button>
            </form>
        </Form>
    );
}
