// app/page.tsx
export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* ヘッダー */}
      <header className="sticky top-0 z-20 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-3 md:flex-row md:items-center md:justify-between">
          <div className="text-lg font-semibold tracking-tight">
            Physiteq
          </div>
          <nav className="flex flex-wrap gap-4 text-xs text-slate-300 md:text-sm">
            <a href="#services" className="hover:text-white">
              サービス
            </a>
            <a href="#strength" className="hover:text-white">
              特長
            </a>
            <a href="#flow" className="hover:text-white">
              進め方
            </a>
            <a href="#contact" className="hover:text-emerald-300">
              お問い合わせ（準備中）
            </a>
          </nav>
        </div>
      </header>

      {/* ヒーロー */}
      <section className="border-b border-slate-900 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-14 md:flex-row md:items-center md:py-20">
          {/* 左カラム：コピー */}
          <div className="flex-1">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-emerald-400">
              Fitness × Technology
            </p>
            <h1 className="mb-5 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              パーソナルジムのための、
              <br />
              「ちゃんと測る」集客パートナー。
            </h1>
            <p className="mb-4 text-sm leading-relaxed text-slate-300 md:text-base">
              Physiteq は、パーソナルジムやスモールビジネス向けに
              Google 広告運用と計測環境（GTM / GA4 / コンバージョン）の
              設計・改善を行う個人運営のマーケティング支援サービスです。
            </p>
            <p className="mb-8 text-xs text-slate-400">
              「とりあえず広告を回す」のではなく、
              どの経路から、どれだけ反応が取れているのかを
              一緒に整理していくことを重視しています。
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
                まずは自分のジム運営で検証したノウハウから、少しずつ公開予定です。
              </span>
            </div>

            {/* タグ */}
            <div className="flex flex-wrap gap-2 text-[11px] text-slate-200">
              <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1">
                Google 広告運用
              </span>
              <span className="rounded-full border border-sky-400/40 bg-sky-400/10 px-3 py-1">
                GTM / GA4 設計
              </span>
              <span className="rounded-full border border-fuchsia-400/40 bg-fuchsia-400/10 px-3 py-1">
                LINE 計測・CV 設計
              </span>
              <span className="rounded-full border border-slate-500/60 bg-slate-500/10 px-3 py-1">
                LP 改善・AB テスト
              </span>
            </div>
          </div>

          {/* 右カラム：カード（ペルソナ・課題） */}
          <div className="flex-1 rounded-2xl border border-slate-800 bg-slate-900/70 p-6 text-sm text-slate-200">
            <p className="mb-3 text-xs font-semibold text-slate-400">
              こんなジム・店舗をイメージしています
            </p>
            <ul className="space-y-2 text-sm leading-relaxed">
              <li>・駅チカ / 商店街エリアのパーソナルジム</li>
              <li>・広告を出しているが、数字の見方に自信がない</li>
              <li>・「代理店に丸投げ」ではなく、一緒に改善していきたい</li>
            </ul>

            <p className="mt-5 mb-2 text-xs font-semibold text-slate-400">
              よくあるお悩み
            </p>
            <ul className="space-y-1 text-xs leading-relaxed text-slate-300">
              <li>・LP はあるが、どこまで読まれているか分からない</li>
              <li>・LINE 追加や体験申込みが、どの広告から来たか分からない</li>
              <li>・CV数ではなく「問い合わせ単価」で判断したい</li>
            </ul>
            <p className="mt-4 text-xs text-slate-400">
              将来的には、自分自身のジム運営での検証結果も交えながら、
              「現場感のある集客」を一緒に組み立てていく予定です。
            </p>
          </div>
        </div>
      </section>

      {/* サービス概要 */}
      <section id="services" className="border-b border-slate-900 bg-slate-950">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <h2 className="mb-2 text-xl font-semibold tracking-tight">
            提供予定のサービス
          </h2>
          <p className="mb-8 text-xs text-slate-400">
            まだ準備中ですが、実際の相談内容に合わせて、下記のようなメニューを想定しています。
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <h3 className="mb-2 text-sm font-semibold">Google 広告運用</h3>
              <p className="text-xs text-slate-300">
                検索・ディスプレイ・地域名 × ジムなど、
                小規模予算でも回しやすい構成を一緒に設計します。
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <h3 className="mb-2 text-sm font-semibold">GTM / GA4 設計</h3>
              <p className="text-xs text-slate-300">
                LINE 追加・体験申込み・予約完了など、
                ビジネスとして知りたい数値が取れるようにタグを整理します。
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <h3 className="mb-2 text-sm font-semibold">LP 改善の伴走</h3>
              <p className="text-xs text-slate-300">
                タップ率・スクロール率・離脱ポイントを見ながら、
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
            <li>・エンジニア／ITコンサル出身で、GTM / GA4 / 計測まわりをちゃんと組めること</li>
            <li>・広告だけでなく、LPや導線も含めて数字で会話できること</li>
          </ul>
        </div>
      </section>

      {/* 進め方 */}
      <section id="flow" className="border-b border-slate-900 bg-slate-950">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <h2 className="mb-4 text-xl font-semibold tracking-tight">
            ご相談の進め方（イメージ）
          </h2>
          <ol className="space-y-3 text-sm text-slate-300">
            <li>1. 現在の集客状況・広告アカウント・LP をヒアリング</li>
            <li>2. 「まずどこから測るべきか」を一緒に整理</li>
            <li>3. GTM / GA4 / コンバージョンの設計・実装</li>
            <li>4. 簡単なレポートフォーマットを作り、定点で数字を確認</li>
          </ol>
          <p className="mt-4 text-xs text-slate-400">
            ※ まだ正式なメニューや料金は決めていません。
            自分のジム運営での検証をしつつ、形を固めていく予定です。
          </p>
        </div>
      </section>

      {/* フッター */}
      <footer id="contact" className="border-t border-slate-900 bg-slate-950">
        <div className="mx-auto max-w-5xl px-6 py-8 text-xs text-slate-500">
          <p className="mb-2 font-semibold text-slate-300">お問い合わせ（準備中）</p>
          <p className="mb-3">
            まだフォームやLINE公式アカウントは整備中です。
            立ち上げができ次第、このスペースに窓口を設置する予定です。
          </p>
          <p className="mb-1">© {new Date().getFullYear()} Physiteq.</p>
          <p>このサイト自体も、計測と改善の実験台として少しずつアップデートしていきます。</p>
        </div>
      </footer>
    </main>
  );
}