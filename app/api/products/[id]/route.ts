import { NextResponse } from "next/server";
import connect from "@/lib/data";
import Products from "@/models/Products";


export async function GET(request: Request, { params }: { params: { id: string } }) {
    await connect();
    if (!connect) {
        return new NextResponse("Error connecting to MongoDB", { status: 500 });
    }
    try {
        const product = await Products.findById(params.id);
        if (!product) {
            return new NextResponse("Product not found", { status: 404 });
        }
        return new NextResponse(JSON.stringify(product), { status: 200 });
    } catch (error) {
        console.error("Error fetching product:", error);
        return new NextResponse("Error fetching product", { status: 500 });
    }
}