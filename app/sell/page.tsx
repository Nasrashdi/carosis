'use client'
import { useState } from 'react'

export default function SellCarPage() {
  const [submitted, setSubmitted] = useState(false)

  async function handleSubmit(e: any) {
    e.preventDefault()
    const data = new FormData(e.target)
    await fetch('/api/cars', {
      method: 'POST',
      body: data,
    })
    setSubmitted(true)
  }

  if (submitted)
    return <div className="p-8 text-xl" dir="rtl">شكرًا لك! سيتواصل معك فريقنا لتقييم واستلام السيارة.</div>

  return (
    <div className="max-w-xl mx-auto py-8" dir="rtl">
      <h2 className="text-2xl font-bold mb-4">بيع سيارتك</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input name="title" placeholder="العنوان (مثال: تويوتا كامري 2022)" className="border p-2 w-full" required />
        <input name="make" placeholder="المصنع" className="border p-2 w-full" required />
        <input name="model" placeholder="الموديل" className="border p-2 w-full" required />
        <input name="year" type="number" placeholder="سنة الصنع" className="border p-2 w-full" required />
        <input name="price" type="number" placeholder="السعر المطلوب" className="border p-2 w-full" required />
        <input name="mileage" type="number" placeholder="المسافة (كم)" className="border p-2 w-full" required />
        <textarea name="description" placeholder="الوصف" className="border p-2 w-full" required />
        <input name="images" placeholder="رابط الصورة (افصل بين الروابط بفاصلة)" className="border p-2 w-full" required />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">إرسال</button>
      </form>
    </div>
  )
}