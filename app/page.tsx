// app/page.tsx
export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* ヘッダー */}
      <header className="sticky top-0 z-20 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-3 md:flex-row md:items-center md:justify-between">
          <div className="text-lg font-semibold tracking-tight">Physiteq</div>
          <nav className="flex flex-wrap gap-4 text-xs text-slate-300 md:text-sm">
  <a href="#services" className="hover:text-white">サービス概要</a>
  <a href="/services" className="hover:text-white">サービス詳細</a>
  <a href="/pricing" className="hover:text-white">料金の目安</a>
  <a href="#strength" className="hover:text-white">特長</a>
  <a href="#flow" className="hover:text-white">進め方</a>
  <a href="/about" className="hover:text-white">担当者紹介</a>
  <a href="#contact" className="hover:text-emerald-300">お問い合わせ準備中</a>
</nav>
        </div>
      </header>

      {/* ヒーロー */}
      <section className="border-b border-slate-900 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-14 md:flex-row md:items-center md:py-20">
          {/* 左カラム */}
          <div className="flex-1">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-emerald-400">
              Fitness × Technology
            </p>

            <h1 className="mb-5 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Google広告が“初めて”のパーソナルジムでも、
              <br />
              失敗しないための伴走パートナー。
            </h1>

            <p className="mb-4 text-sm leading-relaxed text-slate-300 md:text-base">
              Physiteq は、パーソナルジム・小規模店舗向けに  
              <span className="font-semibold text-emerald-300">
                Google広告・GTM・GA4・LINE計測の“初期構築〜改善”までを寄り添って整える
              </span>
              個人の集客サポートです。
            </p>

            <p className="mb-4 text-sm leading-relaxed text-slate-300 md:text-base">
              広告を出したことがなくても大丈夫。  
              むしろ初心者ほど、最初の設定を正しく整えることで  
              <span className="font-semibold">ムダな広告費を使わず、短期間で成果が出やすくなります。</span>
            </p>

            <p className="mb-8 text-xs text-slate-400">
              「管理画面を見るのがこわい」「そもそも何から始めれば？」  
              そんな段階から、ゆっくり伴走します。
            </p>

            {/* CTA */}
            <div className="mb-6 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-emerald-400"
              >
                無料相談（準備中）
              </a>
              <span className="text-xs text-slate-400">
                初めての広告出稿でも、基礎から一緒に整えます。
              </span>
            </div>

            {/* タグ */}
            <div className="flex flex-wrap gap-2 text-[11px] text-slate-200">
              <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1">Google広告 初期構築</span>
              <span className="rounded-full border border-sky-400/40 bg-sky-400/10 px-3 py-1">GTM / GA4 設計</span>
              <span className="rounded-full border border-fuchsia-400/40 bg-fuchsia-400/10 px-3 py-1">LINE 計測</span>
              <span className="rounded-full border border-slate-500/60 bg-slate-500/10 px-3 py-1">LP 改善</span>
              <span className="rounded-full border border-emerald-300/60 bg-emerald-300/10 px-3 py-1">初心者歓迎</span>
            </div>
          </div>

          {/* 右カラム（初心者の悩み） */}
          <div className="flex-1 rounded-2xl border border-slate-800 bg-slate-900/70 p-6 text-sm text-slate-200">
            <p className="mb-3 text-xs font-semibold text-slate-400">
              こんなお悩みありませんか？
            </p>

            <ul className="space-y-2 text-sm leading-relaxed">
              <li>・Google広告を触ったことがない</li>
              <li>・LINE追加がどこから来てるか分からない</li>
              <li>・LPを見られているのか知りたい</li>
              <li>・代理店に任せてるけど内容が理解できない</li>
              <li>・少額からでいいから、失敗しない形で始めたい</li>
            </ul>

            <p className="mt-5 mb-2 text-xs font-semibold text-slate-400">
              Physiteq ならではの安心ポイント
            </p>

            <ul className="space-y-1 text-xs leading-relaxed text-slate-300">
              <li>・初心者がつまづきやすい初期設定から丁寧にサポート</li>
              <li>・広告の数字は“3つだけ”見ればいい方法に整理</li>
              <li>・店舗へ伺って、導線やLPとのズレも一緒に確認可能</li>
              <li>・現場理解があるから、無理な提案はしません</li>
            </ul>
          </div>
        </div>
      </section>

      {/* サービス概要 */}
      <section id="services" className="border-b border-slate-900 bg-slate-950">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <h2 className="mb-2 text-xl font-semibold tracking-tight">提供予定のサービス</h2>
          <p className="mb-8 text-xs text-slate-400">
            初心者のジムでも無理なく始められるよう、小さく・安全にスタートできるメニューを中心にしています。
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <h3 className="mb-2 text-sm font-semibold">Google 広告の初期構築</h3>
              <p className="text-xs text-slate-300">
                アカウント作成・初期設定・少額テストまで“横で一緒に”進めます。
                むずかしい設定は全部こちらで操作します。
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <h3 className="mb-2 text-sm font-semibold">GTM / GA4 / LINE 計測</h3>
              <p className="text-xs text-slate-300">
                LP・LINE公式と連動した計測を整え、  
                「どこから問い合わせが来たか？」を明確にします。
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <h3 className="mb-2 text-sm font-semibold">LP改善の伴走</h3>
              <p className="text-xs text-slate-300">
                スクロール率やタップ率を一緒に確認し、  
                “初心者でもできる改善” に絞って少しずつ磨いていきます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Physiteq の強み */}
      <section id="strength" className="border-b border-slate-900 bg-slate-950">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <h2 className="mb-4 text-xl font-semibold tracking-tight">Physiteq の強み</h2>
          <ul className="space-y-3 text-sm text-slate-300">
            <li>・自分自身がジム運営者なので、現場の感覚を理解している</li>
            <li>・初心者の「わからない」に寄り添った伴走スタイル</li>
            <li>・必要に応じて“現場に伺って”導線・LPとのズレも一緒に確認</li>
            <li>・ムダな広告費を使わせないため、少額のテストからスタート</li>
            <li>・数字は“3つだけ”に絞るので、管理画面が苦手でも迷わない</li>
          </ul>
        </div>
      </section>

      {/* 進め方 */}
      <section id="flow" className="border-b border-slate-900 bg-slate-950">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <h2 className="mb-4 text-xl font-semibold tracking-tight">
            ご相談の進め方（初心者向け）
          </h2>
          <ol className="space-y-3 text-sm text-slate-300">
            <li>0. 現状ヒアリング（広告経験ゼロでもOK）</li>
            <li>1. Google広告アカウントの作成から一緒に設定</li>
            <li>2. GTM / GA4 / LINE計測を丁寧に構築</li>
            <li>3. 少額でテスト配信 → 反応を確認</li>
            <li>4. 必要に応じて店舗へ訪問し、導線やLPのギャップを確認</li>
            <li>5. 月単位で“初心者でも理解できる数字だけ”を見ながら改善</li>
          </ol>
        </div>
      </section>

      {/* フッター */}
      <footer id="contact" className="border-t border-slate-900 bg-slate-950">
        <div className="mx-auto max-w-5xl px-6 py-8 text-xs text-slate-500">
          <p className="mb-2 font-semibold text-slate-300">お問い合わせ（準備中）</p>
          <p className="mb-3">
            オンラインはもちろん、  
            <span className="text-slate-300">ご希望があれば店舗へ伺って、集客導線を一緒に整理します。</span>
            Google広告が初めてでも気軽に相談できる伴走型サポートです。
          </p>
          <p className="mb-1">© {new Date().getFullYear()} Physiteq.</p>
          <p>
            このサイト自体も、計測と改善の実験台として少しずつアップデートしていきます。
          </p>
        </div>
      </footer>
    </main>
  );
}