import Link from "next/link";

export default function PlatformAdmin() {
  return (
    <div className="p-8 font-sans bg-zinc-50 dark:bg-zinc-950 min-h-screen text-zinc-900 dark:text-zinc-50">
      <div className="max-w-6xl mx-auto space-y-8">

        <header className="flex justify-between items-center border-b border-zinc-200 dark:border-zinc-800 pb-6">
          <div>
            <h1 className="text-3xl font-bold">منصة الإدارة (Platform Administration)</h1>
            <p className="text-zinc-600 dark:text-zinc-400 mt-2">إدارة جميع المتاجر والاشتراكات في النظام.</p>
          </div>
          <Link href="/" className="px-4 py-2 bg-zinc-200 dark:bg-zinc-800 rounded-lg hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors">
            العودة للرئيسية
          </Link>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <section className="bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-800">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">المتاجر (Tenants)</h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">عرض وإدارة جميع المتاجر المسجلة في النظام.</p>
            <div className="bg-zinc-100 dark:bg-zinc-800 rounded-lg p-8 text-center text-zinc-500">
              قائمة المتاجر ستظهر هنا
            </div>
          </section>

          <section className="bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-800">
            <h2 className="text-2xl font-semibold mb-4 text-emerald-600 dark:text-emerald-400">الاشتراكات (Subscriptions)</h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">متابعة حالة الاشتراكات، الفواتير، والباقات.</p>
            <div className="bg-zinc-100 dark:bg-zinc-800 rounded-lg p-8 text-center text-zinc-500">
              جدول الاشتراكات سيظهر هنا
            </div>
          </section>
        </div>

      </div>
    </div>
  );
}
