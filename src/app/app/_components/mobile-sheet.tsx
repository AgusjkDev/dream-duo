"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "@/components/svgs";

import Navbar from "./navbar";

export default function MobileSheet() {
    const [open, onOpenChange] = useState<boolean>(false);

    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetTrigger asChild>
                <Button variant="outline" size="icon" aria-label="Open navigation menu">
                    <Menu className="aspect-square w-5 fill-foreground" />
                </Button>
            </SheetTrigger>

            <SheetContent className="h-full" side="bottom">
                <Navbar onNavigationClick={() => onOpenChange(false)} />
            </SheetContent>
        </Sheet>
    );
}
