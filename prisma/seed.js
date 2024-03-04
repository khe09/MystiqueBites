const { PrismaClient } = require('@prisma/client');
const { recommendations } = require('./recommendations');

const prisma = new PrismaClient();

async function main() {
    try {
        for (const dish of recommendations) {
            await prisma.recommendations.create({
                data: dish
            });
        }
    } catch (error) {
        console.error(error);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
}

main();
