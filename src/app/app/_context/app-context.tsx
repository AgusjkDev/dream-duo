"use client";

import { createContext, useContext } from "react";
import type { User } from "@prisma/client";

type AppContext = { profile: Omit<User, "password"> };
const AppContext = createContext<AppContext | null>(null);

export function useAppContext() {
    const appContext = useContext(AppContext);
    if (!appContext) {
        throw new Error("App context must be used within its provider.");
    }

    return appContext;
}

interface AppContextProviderProps {
    children: React.ReactNode;
    data: Pick<AppContext, "profile">;
}

export default function AppContextProvider({ children, data }: Readonly<AppContextProviderProps>) {
    return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
}
