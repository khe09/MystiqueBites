// Import necessary modules
import { NextResponse } from "next/server";
import prisma from "../../../../prisma/db";

export async function GET(request) {
    // Destructure query parameters from the request
        // Get query string from request URL
        const queryString = request.url.split('?')[1];
        // Parse query string to get query parameters
        const queryParams = new URLSearchParams(queryString);
        // Get individual query parameters
        const spiceLevel = queryParams.get('spiceLevel');
        const curiosityLevel = queryParams.get('curiosityLevel');
        const uniquenessLevel = queryParams.get('uniquenessLevel');


    // Check if any of the parameters are undefined or missing
    if (spiceLevel === undefined || curiosityLevel === undefined || uniquenessLevel === undefined) {
        return NextResponse.error(new Error('Missing parameters'), { status: 400 });
    }

    try {
        // Fetch recommended dishes from Prisma
        const recommendedDishes = await prisma.recommendations.findMany({
            // Example query to find dishes with levels closest to the user's input
            where: {
                spice_level: { lte: parseInt(spiceLevel) + 1, gte: parseInt(spiceLevel) - 1 },
                curiosity_level: { lte: parseInt(curiosityLevel) + 1, gte: parseInt(curiosityLevel) - 1 },
                uniqueness_level: { lte: parseInt(uniquenessLevel) + 1, gte: parseInt(uniquenessLevel) - 1 }
            }
        });

        // Return the recommended dishes
        return NextResponse.json(recommendedDishes);
    } catch (error) {
        // Log and handle errors
        console.error('Error fetching recommended dishes:', error);
        return NextResponse.error(new Error('Internal Server Error'), { status: 500 });
    }
}
