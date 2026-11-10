import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center min-h-screen bg-zinc-50 font-sans dark:bg-zinc-950 p-8">
      <main className="flex flex-col items-center justify-center max-w-4xl w-full bg-white dark:bg-zinc-900 rounded-2xl shadow-xl p-12 text-center gap-8 border border-zinc-200 dark:border-zinc-800">

        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            مرحباً بك في HanOuti Smart
          </h1>
          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            منصتك الذكية لإدارة المتاجر والمبيعات بكل سهولة وفعالية.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl mt-8">
          <Link
            href="/dashboard"
            className="flex flex-col items-center justify-center p-6 bg-zinc-100 dark:bg-zinc-800 rounded-xl hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors border border-zinc-200 dark:border-zinc-700"
          >
            <span className="text-xl font-semibold mb-2 text-zinc-900 dark:text-zinc-100">لوحة التحكم (Dashboard)</span>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">إدارة متجرك ومبيعاتك</span>
          </Link>

          <Link
            href="/platform"
            className="flex flex-col items-center justify-center p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors border border-blue-200 dark:border-blue-800"
          >
            <span className="text-xl font-semibold mb-2 text-blue-700 dark:text-blue-400">المنصة (Platform)</span>
            <span className="text-sm text-blue-600/70 dark:text-blue-400/70">إدارة النظام والاشتراكات</span>
          </Link>

          <Link
            href="/login"
            className="flex items-center justify-center p-4 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 rounded-xl hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors font-medium"
          >
            تسجيل الدخول
          </Link>

          <Link
            href="/register"
            className="flex items-center justify-center p-4 bg-transparent border-2 border-zinc-900 text-zinc-900 dark:border-zinc-100 dark:text-zinc-100 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors font-medium"
          >
            إنشاء حساب جديد
          </Link>
        </div>

      </main>
    </div>
  );
}
