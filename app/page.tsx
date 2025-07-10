import Link from 'next/link'

async function getCars() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'}/api/cars`, { cache: 'no-store' })
    if (!res.ok) {
      return []
    }
    return res.json()
  } catch (error) {
    console.error('Failed to fetch cars:', error)
    return []
  }
}

export default async function HomePage() {
  const cars = await getCars()
  
  return (
    <main dir="rtl" className="max-w-5xl mx-auto py-10 font-sans px-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">مرحبًا بك في كاروسيس 🚗</h1>
        <p className="text-lg text-gray-600 mb-6">واحتك الشاملة للسيارات: اشترِ، بع، موّل، أمّن، وسجّل مركبتك — كل ذلك في منصة واحدة.</p>
      </div>

      {cars.length === 0 ? (
        <div className="text-center py-12">
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">🚗 مرحباً بكم في كاروسيس</h2>
            <p className="text-gray-600 mb-6">منصتكم الشاملة لشراء وبيع السيارات في سلطنة عمان</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-3xl mb-3">🛒</div>
                <h3 className="font-semibold mb-2">اشترِ سيارتك</h3>
                <p className="text-sm text-gray-600">تصفح آلاف السيارات المتاحة</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-3xl mb-3">💰</div>
                <h3 className="font-semibold mb-2">بع سيارتك</h3>
                <p className="text-sm text-gray-600">اعرض سيارتك بسهولة</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-3xl mb-3">🏦</div>
                <h3 className="font-semibold mb-2">التمويل والتأمين</h3>
                <p className="text-sm text-gray-600">خدمات مالية متكاملة</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car: any) => (
            <Link href={`/buy/${car.id}`} key={car.id} className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition-shadow block">
              <img 
                src={car.images?.[0] || '/placeholder-car.jpg'} 
                alt={`${car.year} ${car.make} ${car.model}`} 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="font-semibold text-lg mb-2">{car.year} {car.make} {car.model}</div>
                <div className="text-2xl font-bold text-blue-600 mb-2">ر.ع {car.price?.toLocaleString('ar-OM') || 'غير محدد'}</div>
                <div className="text-gray-600">المسافة: {car.mileage?.toLocaleString('ar-OM') || '0'} كم</div>
                <div className="text-sm text-gray-500 mt-2">{car.status === 'listed' ? 'متاح للبيع' : 'مباع'}</div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  )
}