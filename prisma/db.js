// Import PrismaClient from @prisma/client
const { PrismaClient } = require('@prisma/client');

// Create a new instance of PrismaClient
const prisma = new PrismaClient();

// Export the PrismaClient instance for use in other parts of your application
module.exports = prisma;
