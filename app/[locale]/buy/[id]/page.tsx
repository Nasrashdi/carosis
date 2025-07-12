import { notFound } from 'next/navigation'

async function getCar(id: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || ''}/api/cars/${id}`, { cache: 'no-store' })
  if (!res.ok) return null
  return res.json()
}

async function getLoans(carId: string) {
  // Mocked offers, could call /api/loan
  return [
    { bank: 'بنك مسقط', rate: 3.5, approved: true },
    { bank: 'البنك الوطني العماني', rate: 4.1, approved: true },
  ]
}

async function getInsurance(carId: string) {
  // Mocked offers, could call /api/insurance
  return [
    { provider: 'أكسا', price: 220, coverage: 'شامل' },
    { provider: 'عمان للتأمين', price: 180, coverage: 'ضد الغير' },
  ]
}

export default async function CarDetailPage({ params }: { params: { id: string } }) {
  const car = await getCar(params.id)
  if (!car) return notFound()
  const loans = await getLoans(car.id)
  const insurances = await getInsurance(car.id)

  return (
    <main dir="rtl" className="max-w-3xl mx-auto py-10">
      <h2 className="text-2xl font-bold mb-4">{car.year} {car.make} {car.model}</h2>
      <img src={car.images[0]} alt={car.make} className="w-full h-64 object-cover rounded mb-6" />
      <div className="mb-4"><span className="font-bold">السعر:</span> ر.ع {car.price.toLocaleString('ar-OM')}</div>
      <div className="mb-4"><span className="font-bold">المسافة:</span> {car.mileage.toLocaleString('ar-OM')} كم</div>
      <div className="mb-4"><span className="font-bold">الوصف:</span> {car.description}</div>
      <div className="mb-6">
        <h3 className="font-bold mb-2">عروض التمويل البنكي:</h3>
        <ul>
          {loans.map((loan, i) => (
            <li key={i} className="mb-1">
              {loan.bank}: <span className="font-bold">{loan.rate}%</span> {loan.approved ? '✅' : ''}
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-6">
        <h3 className="font-bold mb-2">عروض التأمين:</h3>
        <ul>
          {insurances.map((ins, i) => (
            <li key={i} className="mb-1">
              {ins.provider}: <span className="font-bold">ر.ع {ins.price}</span> ({ins.coverage})
            </li>
          ))}
        </ul>
      </div>
      <button className="bg-green-600 text-white px-6 py-2 rounded">إتمام الشراء والتسجيل</button>
    </main>
  )
}