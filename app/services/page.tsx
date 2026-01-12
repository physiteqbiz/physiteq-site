// app/services/page.tsx
export default function Services() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* ヘッダー */}
      <section className="border-b border-slate-900 bg-slate-950">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            機能詳細
          </h1>
          <p className="text-sm text-slate-300 md:text-base">
            Physiteq は「予約の事故（漏れ・二重・共有ミス）を止める」ことに絞った、
            小規模向けの予約管理です。全部入りではなく、必要なところだけ軽く整えます。
          </p>
          <p className="mt-3 text-xs text-slate-400">
            ※ ここは “現場で詰まりやすい順” に並べています。
          </p>
        </div>
      </section>

      {/* 本体 */}
      <section className="border-b border-slate-900 bg-slate-900/40">
        <div className="mx-auto max-w-5xl px-6 py-14 space-y-10">
          {/* 1. 予約入力 */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
            <h2 className="mb-2 text-xl font-semibold tracking-tight">
              ① スマホのフォーム入力 → 台帳へ自動反映
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-slate-300">
              予約の入口をフォームに寄せて、入力のばらつきを抑えます。
              送信された内容は自動で台帳（Master）に反映され、裏の整合（開始/終了、担当補完など）も走ります。
            </p>

            <div className="grid gap-4 text-sm md:grid-cols-2">
              <div>
                <h3 className="mb-1 text-xs font-semibold text-slate-400">できること</h3>
                <ul className="space-y-1 text-slate-300">
                  <li>・既存顧客の予約をフォームから登録</li>
                  <li>・コース / 場所 / 時刻をプルダウン化してミス削減</li>
                  <li>・送信後に Master へ自動転記</li>
                  <li>・status は送信時点で「確定」を自動セット</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-1 text-xs font-semibold text-slate-400">現場メリット</h3>
                <ul className="space-y-1 text-slate-300">
                  <li>・LINE/DM/口頭が混ざって漏れるのを止める</li>
                  <li>・スタッフ間共有が「台帳を見る」だけになる</li>
                  <li>・入力ルールが固定されて事故率が下がる</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 2. 顧客別確認 */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
            <h2 className="mb-2 text-xl font-semibold tracking-tight">
              ② 顧客別の予約確認リンク（自動生成）
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-slate-300">
              顧客ごとに “予約一覧” を自動で作って更新します。
              「予約いつだっけ？」対応を減らし、顧客側の認識違いも減ります。
            </p>

            <div className="grid gap-4 text-sm md:grid-cols-2">
              <div>
                <h3 className="mb-1 text-xs font-semibold text-slate-400">できること</h3>
                <ul className="space-y-1 text-slate-300">
                  <li>・Customers に追加したら顧客シートを自動生成</li>
                  <li>・Master の更新が顧客シートに同期</li>
                  <li>・status/note も同期（運用のズレを防ぐ）</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-1 text-xs font-semibold text-slate-400">現場メリット</h3>
                <ul className="space-y-1 text-slate-300">
                  <li>・問い合わせ対応（確認作業）が減る</li>
                  <li>・振替/キャンセル時の認識ズレが減る</li>
                  <li>・「口頭で言った/言わない」問題が減る</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 3. 事故防止 */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
            <h2 className="mb-2 text-xl font-semibold tracking-tight">
              ③ 事故防止（ダブルブッキング検知）
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-slate-300">
              トレーナー/場所の重なりを検知して、保存を無効化します。
              “後から気づく”じゃなく “その場で止める” ための仕組みです。
            </p>

            <div className="grid gap-4 text-sm md:grid-cols-2">
              <div>
                <h3 className="mb-1 text-xs font-semibold text-slate-400">仕様イメージ</h3>
                <ul className="space-y-1 text-slate-300">
                  <li>・時間が被る予約があれば即検知</li>
                  <li>・該当セルを色付けして分かりやすく</li>
                  <li>・開始/終了/rid を自動クリアして “保存しない”</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-1 text-xs font-semibold text-slate-400">狙い</h3>
                <ul className="space-y-1 text-slate-300">
                  <li>・二重予約をゼロに寄せる</li>
                  <li>・現場で一番ダメージが大きい事故を先に潰す</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 4. 運用に合わせて伸ばす */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
            <h2 className="mb-2 text-xl font-semibold tracking-tight">
              ④ 店舗ごとの運用に合わせて伸ばす（段階拡張）
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-slate-300">
              いきなり全部入りにしない。現場が詰まったところだけを順番に足す。
              これが一番失敗しない作り方です。
            </p>

            <div className="grid gap-4 text-sm md:grid-cols-2">
              <div>
                <h3 className="mb-1 text-xs font-semibold text-slate-400">次に入りやすい拡張</h3>
                <ul className="space-y-1 text-slate-300">
                  <li>・予約リマインド通知（LINE/メール）</li>
                  <li>・複数店舗/複数トレーナーの権限分離</li>
                  <li>・回数券/チケットの残数管理</li>
                  <li>・決済（Stripe）連携</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-1 text-xs font-semibold text-slate-400">方針</h3>
                <ul className="space-y-1 text-slate-300">
                  <li>・まずは “予約事故を止める” を完成させる</li>
                  <li>・拡張は「必要になったら、必要な分だけ」</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-6 md:p-8">
            <h2 className="mb-2 text-lg font-semibold tracking-tight">
              まずは「既存顧客の予約が安定して入る」状態を作る
            </h2>
            <p className="text-sm text-slate-300">
              ここまでできれば、もう “現場で価値が出る” ところまで到達です。
              その後に権限/通知/決済を詰めていきます。
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a
                href="/pricing"
                className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-emerald-400"
              >
                料金を見る
              </a>
              <a
                href="/about"
                className="inline-flex items-center justify-center rounded-lg border border-slate-700 bg-slate-900 px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:bg-slate-800"
              >
                作った人を見る
              </a>
              <span className="text-xs text-slate-400">お問い合わせ導線は準備中</span>
            </div>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="border-t border-slate-900 bg-slate-950">
        <div className="mx-auto max-w-5xl px-6 py-8 text-xs text-slate-500">
          <p className="mb-1">© {new Date().getFullYear()} Physiteq.</p>
          <p>小規模店舗の “予約事故” を先に止めるための仕組みです。</p>
        </div>
      </footer>
    </main>
  );
}