import './globals.css'
import { NextIntlClientProvider } from 'next-intl'

export const metadata = {
  title: 'كاروسيس | Carosis',
  description: 'منصتك الشاملة لشراء، بيع، تمويل، تأمين وتسجيل السيارات في سلطنة عمان',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-gray-50 font-sans">
        <NextIntlClientProvider locale="ar">
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}