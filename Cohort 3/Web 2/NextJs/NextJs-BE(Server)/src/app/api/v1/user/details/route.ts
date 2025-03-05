import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    user: "Shivam",
    email: "shivamhonrao@gmail.com",
  });
}

export function POST() {
  return NextResponse.json({
    msg: "User created successfully",
  });
}

export function PUT() {
  return NextResponse.json({
    msg: "User updated successfully",
  });
}

export function DELETE() {
  return NextResponse.json({
    msg: "User deleted successfully",
  });
}
