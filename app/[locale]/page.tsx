import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function HomePage() {
  const t = useTranslations('HomePage');

  return (
    <main className="max-w-5xl mx-auto py-10 font-sans px-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          {t('title')}
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          {t('subtitle')}
        </p>
      </div>

      <div className="text-center py-12">
        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">🚗 {t('welcomeMessage')}</h2>
          <p className="text-gray-600 mb-6">{t('platformDescription')}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl mb-3">🛒</div>
              <h3 className="font-semibold mb-2">{t('features.buy')}</h3>
              <p className="text-sm text-gray-600">تصفح آلاف السيارات المتاحة</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="font-semibold mb-2">{t('features.sell')}</h3>
              <p className="text-sm text-gray-600">اعرض سيارتك بسهولة</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl mb-3">🏦</div>
              <h3 className="font-semibold mb-2">{t('features.finance')}</h3>
              <p className="text-sm text-gray-600">خدمات مالية متكاملة</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}