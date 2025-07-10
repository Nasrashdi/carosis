import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(_req: Request, { params }: { params: { id: string } }) {
  const car = await prisma.car.findUnique({ where: { id: params.id } })
  if (!car) return NextResponse.json({ error: 'غير موجود' }, { status: 404 })
  return NextResponse.json(car)
}