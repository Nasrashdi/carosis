import Link from 'next/link'

async function getCars() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || ''}/api/cars`, { cache: 'no-store' })
  return res.json()
}

export default async function HomePage() {
  const cars = await getCars()
  return (
    <main dir="rtl" className="max-w-5xl mx-auto py-10 font-sans">
      <h1 className="text-3xl font-bold mb-6">مرحبًا بك في كاروسيس 🚗</h1>
      <p className="mb-4">واحتك الشاملة للسيارات: اشترِ، بع، موّل، أمّن، وسجّل مركبتك — كل ذلك في منصة واحدة.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cars.map((car: any) => (
          <Link href={`/buy/${car.id}`} key={car.id} className="border rounded-lg p-4 hover:shadow-xl block">
            <img src={car.images[0]} alt={car.make} className="w-full h-48 object-cover mb-3 rounded" />
            <div className="font-semibold">{car.year} {car.make} {car.model}</div>
            <div className="text-lg font-bold">ر.ع {car.price.toLocaleString('ar-OM')}</div>
            <div>المسافة: {car.mileage.toLocaleString('ar-OM')} كم</div>
          </Link>
        ))}
      </div>
    </main>
  )
}