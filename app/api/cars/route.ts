import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const cars = await prisma.car.findMany({
      include: {
        seller: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    })
    return NextResponse.json(cars)
  } catch (error) {
    console.error('Database error:', error)
    return NextResponse.json({ error: 'Failed to fetch cars' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const car = await prisma.car.create({
      data: body,
    })
    return NextResponse.json(car)
  } catch (error) {
    console.error('Database error:', error)
    return NextResponse.json({ error: 'Failed to create car' }, { status: 500 })
  }
}