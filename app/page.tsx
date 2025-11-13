// app/page.tsx
export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* ヘッダー */}
      <header className="border-b border-slate-800">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <div className="text-lg font-semibold tracking-tight">
            Physiteq
          </div>
          <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#services" className="hover:text-white">
              サービス
            </a>
            <a href="#strength" className="hover:text-white">
              特長
            </a>
            <a href="#contact" className="hover:text-white">
              お問い合わせ（準備中）
            </a>
          </nav>
        </div>
      </header>

      {/* ヒーロー */}
      <section className="border-b border-slate-900 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-16 md:flex-row md:items-center md:py-24">
          <div className="flex-1">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
              Fitness × Technology
            </p>
            <h1 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              小さなジムのための
              <br />
              「ちゃんと測る」集客パートナー。
            </h1>
            <p className="mb-6 text-sm leading-relaxed text-slate-300 md:text-base">
              Physiteq は、パーソナルジムやスモールビジネス向けに
              Google広告運用と計測環境（GTM / GA4 / コンバージョン）の
              設計・改善を行う個人運営のマーケティング支援サービスです。
            </p>
            <p className="mb-8 text-xs text-slate-400">
              ※ まだ実験中のサイトです。内容は少しずつアップデートしていきます。
            </p>
            <div className="flex flex-wrap gap-3 text-xs text-slate-200">
              <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1">
                Google 広告運用
              </span>
              <span className="rounded-full border border-sky-400/40 bg-sky-400/10 px-3 py-1">
                GTM / GA4 設計
              </span>
              <span className="rounded-full border border-slate-500/60 bg-slate-500/10 px-3 py-1">
                LP 改善・ABテスト
              </span>
            </div>
          </div>
          <div className="flex-1 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-sm text-slate-200">
            <p className="mb-3 text-xs font-semibold text-slate-400">
              こんな相談を想定しています
            </p>
            <ul className="space-y-2 text-sm leading-relaxed">
              <li>・ジムのLPはあるけど、どの広告が効いているか分からない</li>
              <li>・LINE 追加や体験申込みをちゃんと計測したい</li>
              <li>・代理店に丸投げではなく、数字を理解しながら改善したい</li>
            </ul>
            <p className="mt-4 text-xs text-slate-400">
              将来的には、パーソナルトレーニング × デジタル広告の両方に
              実務経験のある立場から「小回りのきく運用」を提供していく予定です。
            </p>
          </div>
        </div>
      </section>

      {/* サービス概要 */}
      <section id="services" className="border-b border-slate-900">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <h2 className="mb-6 text-xl font-semibold tracking-tight">
            提供予定のサービス
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
              <h3 className="mb-2 text-sm font-semibold">Google 広告運用</h3>
              <p className="text-xs text-slate-300">
                検索 / ディスプレイ / 地域名 × パーソナルジムなど、
                小規模予算でも成果が出る構成を一緒に組み立てます。
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
              <h3 className="mb-2 text-sm font-semibold">GTM / GA4 設計</h3>
              <p className="text-xs text-slate-300">
                LINE 追加・体験申込み・予約完了など、
                「ビジネスとして本当に知りたい数字」が取れる状態を作ります。
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
              <h3 className="mb-2 text-sm font-semibold">LP 改善の伴走</h3>
              <p className="text-xs text-slate-300">
                タップ率やスクロール率などのデータを見ながら、
                少しずつコンテンツと導線を磨いていきます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 強み */}
      <section id="strength" className="border-b border-slate-900 bg-slate-950">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <h2 className="mb-4 text-xl font-semibold tracking-tight">
            Physiteq の強み（予定）
          </h2>
          <ul className="space-y-3 text-sm text-slate-300">
            <li>・自分自身がフィジーク選手＆ジム運営側の立場であること</li>
            <li>・エンジニア／ITコンサル出身で、計測まわりをちゃんと組めること</li>
            <li>・広告だけでなく、LPや導線も含めて数字で話せること</li>
          </ul>
        </div>
      </section>

      {/* フッター */}
      <footer id="contact" className="border-t border-slate-900 bg-slate-950">
        <div className="mx-auto max-w-5xl px-6 py-6 text-xs text-slate-500">
          <p className="mb-1">© {new Date().getFullYear()} Physiteq.</p>
          <p>お問い合わせフォームや詳細なサービス内容は、順次追加していきます。</p>
        </div>
      </footer>
    </main>
  );
}