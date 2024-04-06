import { PrismaClient } from "@prisma/client";

import { IS_DEVELOPMENT } from "./constants";

declare global {
    var prisma: PrismaClient;
}

const prismaClient = global.prisma || new PrismaClient();

if (IS_DEVELOPMENT) global.prisma = prismaClient;

export default prismaClient;
