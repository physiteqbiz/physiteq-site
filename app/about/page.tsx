// app/about/page.tsx
export default function About() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* 上部セクション */}
      <section className="border-b border-slate-900 bg-slate-950">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            作った人 / 方針
          </h1>
          <p className="text-sm text-slate-300 md:text-base">
            Physiteq は “予約の事故（漏れ・二重・共有ミス）” を止めるために、
            現場の運用から逆算して作っています。
            大手の全部入りSaaSとは違って、まず必要なところだけ軽く整える方針です。
          </p>
        </div>
      </section>

      {/* プロフィール本体 */}
      <section className="border-b border-slate-900 bg-slate-900/40">
        <div className="mx-auto max-w-4xl px-6 py-14 grid gap-10 md:grid-cols-3">
          {/* 左カラム */}
          <div className="flex flex-col items-start">
            <div className="flex h-40 w-40 items-center justify-center rounded-full border border-slate-700 bg-slate-800 text-slate-400">
              写真
            </div>
            <p className="mt-4 text-xs text-slate-500">※ 後で差し替え可能</p>
          </div>

          {/* 右カラム */}
          <div className="md:col-span-2 space-y-6">
            <div>
              <h2 className="mb-2 text-xl font-semibold tracking-tight">
                なんで作ったか
              </h2>
              <p className="text-sm leading-relaxed text-slate-300">
                小規模のジム/ピラティスは、予約管理が “人の記憶と気合” になりがちです。
                そして事故が起きた瞬間に、現場も顧客体験も一気に崩れます。
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                でも大手SaaSは高い/重い/設定が難しい。
                だから「まず事故を止めるだけ」の軽い仕組みを、現場の運用に合わせて作りました。
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-xl font-semibold tracking-tight">
                方針（重要）
              </h2>
              <ul className="space-y-2 text-sm leading-relaxed text-slate-300">
                <li>・“全部入り”より、事故を止める部分に集中</li>
                <li>・まずは1店舗で回る形を作ってから拡張</li>
                <li>・例外運用は後から。最初はルールを固定して強くする</li>
                <li>・導入で現場が疲れない（軽い・速い・安い）</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-2 text-xl font-semibold tracking-tight">
                背景
              </h2>
              <p className="text-sm leading-relaxed text-slate-300">
                現場（ジム運用）と、業務設計/システム構築の両方を触ってきた経験から、
                “運用が続く仕組み” の方に寄せるのが得意です。
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-xl font-semibold tracking-tight">
                まず世に出す最低ライン
              </h2>
              <p className="text-sm leading-relaxed text-slate-300">
                ①既存顧客の予約がフォームから安定して入る<br />
                ②二重予約が止まる<br />
                ③顧客側が予約確認できる<br />
                この3つを最短で作って、そこから段階的に詰めます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="border-t border-slate-900 bg-slate-950">
        <div className="mx-auto max-w-4xl px-6 py-8 text-xs text-slate-500">
          <p className="mb-1">© {new Date().getFullYear()} Physiteq.</p>
          <p>小規模店舗が “予約事故ゼロ” に寄せるための仕組み。</p>
        </div>
      </footer>
    </main>
  );
}