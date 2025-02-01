import { NextResponse } from "next/server";

export function middleware(request){
    console.log("test middleware");
    //get back to home 
    // return NextResponse.redirect(new URL('/' , request.url))
}

export const config = {
    //สัญลักษณ์ของ path ใดๆ
    matcher : '/about/:path*',
}