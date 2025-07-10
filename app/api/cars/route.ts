import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  const cars = await prisma.car.findMany({
    where: { status: 'listed' },
    orderBy: { createdAt: 'desc' },
  })
  return NextResponse.json(cars)
}

export async function POST(req: Request) {
  const form = await req.formData()
  const data = {
    title: form.get('title') as string,
    make: form.get('make') as string,
    model: form.get('model') as string,
    year: Number(form.get('year')),
    price: Number(form.get('price')),
    mileage: Number(form.get('mileage')),
    description: form.get('description') as string,
    images: (form.get('images') as string).split(',').map(s => s.trim()),
    status: 'listed',
  }
  const car = await prisma.car.create({ data })
  return NextResponse.json(car)
}