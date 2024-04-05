"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import type z from "zod";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { toast } from "@/components/ui/use-toast";
import { Calendar as CalendarIcon, Spinner } from "@/components/svgs";
import { MAX_BIRTHDATE, MIN_BIRTHDATE } from "@/lib/constants";
import { profileSchema } from "@/lib/schemas";
import { cn } from "@/lib/utils";

import { updateProfile } from "../../_actions";
import { useAppContext } from "../../../_context/app-context";
import FieldGroup from "./field-group";

export default function ProfileForm() {
    const { profile } = useAppContext();
    const form = useForm<z.infer<typeof profileSchema>>({
        resolver: zodResolver(profileSchema),
        defaultValues: {
            ...Object.fromEntries(
                Object.entries(profile.data).map(([k, v]) => [k, v == null ? undefined : v]),
            ),
        },
    });
    const [isLoading, setIsLoading] = useState<boolean>(false);

    async function onSubmit(values: z.infer<typeof profileSchema>) {
        setIsLoading(true);

        if (
            Object.entries(values)
                .filter(([_, v]) => v !== undefined)
                .every(([k, v]) => {
                    const profileValue = profile.data[k as keyof typeof profile.data];
                    if (v instanceof Date && profileValue instanceof Date) {
                        return v.getTime() === profileValue.getTime();
                    }

                    return v === profileValue;
                })
        ) {
            toast({ description: "No changes were made." });
        } else {
            const { success, error } = await updateProfile(profile, values);

            toast({
                description: success ? "Profile updated successfully." : error,
                variant: success ? "default" : "destructive",
            });
        }

        setIsLoading(false);
    }

    return (
        <Form {...form}>
            <form
                noValidate
                autoComplete="off"
                className="flex flex-col gap-y-12 md:max-w-lg lg:max-w-xl"
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
                        control={form.control}
                        name="birthdate"
                        render={({ field }) => (
                            <FormItem className="flex flex-col">
                                <FormLabel>Date of birth</FormLabel>

                                <Popover>
                                    <PopoverTrigger asChild>
                                        <FormControl>
                                            <Button
                                                disabled
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
                                            disabled={date =>
                                                date > MAX_BIRTHDATE || date < MIN_BIRTHDATE
                                            }
                                        />
                                    </PopoverContent>
                                </Popover>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="weight"
                        render={({ field: { value, onChange, ...field } }) => (
                            <FormItem>
                                <FormLabel>Weight</FormLabel>

                                <FormControl>
                                    <Input
                                        placeholder="Weight"
                                        type="number"
                                        value={value ?? ""}
                                        onChange={e => onChange(Number(e.target.value))}
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
                        render={({ field: { value, onChange, ...field } }) => (
                            <FormItem>
                                <FormLabel>Height</FormLabel>

                                <FormControl>
                                    <Input
                                        placeholder="Height"
                                        type="number"
                                        value={value ?? ""}
                                        onChange={e => onChange(Number(e.target.value))}
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
