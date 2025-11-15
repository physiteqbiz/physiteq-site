// app/pricing/page.tsx
export default function Pricing() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* ヘッダー */}
      <section className="border-b border-slate-900 bg-slate-950">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            料金の目安
          </h1>
          <p className="text-sm text-slate-300 md:text-base">
            Physiteq のサポートは、ジムや店舗の規模・状況・ご希望の範囲によって
            必要な工数が大きく変わるため、
            <span className="font-semibold text-emerald-300">
              「完全な一律料金」ではなく、目安レンジ
            </span>
            をお伝えした上で個別にお見積もりする形を想定しています。
          </p>
          <p className="mt-3 text-xs text-slate-400">
            下記はあくまで初期のイメージです。実際にはご相談の中で、
            予算感とやりたいことのバランスを一緒に決めていきます。
          </p>
        </div>
      </section>

      {/* プラン */}
      <section className="border-b border-slate-900 bg-slate-900/40">
        <div className="mx-auto max-w-5xl px-6 py-14 grid gap-6 md:grid-cols-3">
          {/* 計測セットアップ */}
          <div className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <h2 className="mb-1 text-sm font-semibold tracking-tight">
              計測セットアップパック
            </h2>
            <p className="mb-3 text-xs text-slate-400">
              GA4 / GTM / LINE 計測の初期構築
            </p>
            <p className="mb-4 text-2xl font-bold">
              ¥80,000<span className="text-sm font-normal text-slate-400">〜</span>
            </p>
            <ul className="mb-4 space-y-1 text-xs text-slate-300">
              <li>・GA4 / GTM の初期設定</li>
              <li>・主要コンバージョン（LINE / 問い合わせなど）の計測</li>
              <li>・簡易レポートテンプレートの共有</li>
            </ul>
            <p className="mt-auto text-[11px] text-slate-500">
              サイト構成や既存の設定状況によって前後します。
            </p>
          </div>

          {/* 広告初期構築 */}
          <div className="flex flex-col rounded-2xl border border-emerald-500/50 bg-slate-900 p-6 shadow-lg shadow-emerald-950/40">
            <h2 className="mb-1 text-sm font-semibold tracking-tight text-emerald-300">
              Google 広告 初期構築パック
            </h2>
            <p className="mb-3 text-xs text-slate-400">
              アカウント作成〜少額テスト配信まで
            </p>
            <p className="mb-4 text-2xl font-bold">
              ¥70,000<span className="text-sm font-normal text-slate-400">〜</span>
            </p>
            <ul className="mb-4 space-y-1 text-xs text-slate-300">
              <li>・アカウント作成／請求設定サポート</li>
              <li>・基本キャンペーン構成の設計</li>
              <li>・キーワード／広告文のたたき台作成</li>
              <li>・◯週間分の少額テスト配信設計</li>
              <li>・テスト結果の簡易振り返り</li>
            </ul>
            <p className="mt-auto text-[11px] text-slate-500">
              計測セットアップと合わせてご依頼いただくケースが多い想定です。
            </p>
          </div>

          {/* 月次伴走 */}
          <div className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <h2 className="mb-1 text-sm font-semibold tracking-tight">
              月次伴走サポート
            </h2>
            <p className="mb-3 text-xs text-slate-400">
              数字を一緒に見ながら改善していくプラン
            </p>
            <p className="mb-4 text-2xl font-bold">
              月額 ¥40,000<span className="text-sm font-normal text-slate-400">〜</span>
            </p>
            <ul className="mb-4 space-y-1 text-xs text-slate-300">
              <li>・月1回のオンラインミーティング</li>
              <li>・広告／LP／計測の状況整理</li>
              <li>・翌月の改善提案・宿題の整理</li>
              <li>・チャットでの簡易相談（回数は応相談）</li>
            </ul>
            <p className="mt-auto text-[11px] text-slate-500">
              広告費の規模や、関与する範囲によって金額を調整します。
            </p>
          </div>
        </div>
      </section>

      {/* 注意書き */}
      <section className="border-b border-slate-900 bg-slate-950">
        <div className="mx-auto max-w-5xl px-6 py-10 text-xs text-slate-400 space-y-2">
          <p>※ 上記はあくまで初期の目安です。正式な料金は個別のお見積もりとなります。</p>
          <p>※ 「まずは相談だけ」「一部分だけお願いしたい」といったご要望にも柔軟に対応します。</p>
        </div>
      </section>

      {/* フッター */}
      <footer className="border-t border-slate-900 bg-slate-950">
        <div className="mx-auto max-w-5xl px-6 py-8 text-xs text-slate-500">
          <p className="mb-1">
            料金や進め方について不安な点があれば、最初のヒアリングの中で遠慮なく聞いてください。
          </p>
          <p>© {new Date().getFullYear()} Physiteq.</p>
        </div>
      </footer>
    </main>
  );
}