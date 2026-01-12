// app/pricing/page.tsx
export default function Pricing() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* ヘッダー */}
      <section className="border-b border-slate-900 bg-slate-950">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            料金（サブスク想定）
          </h1>
          <p className="text-sm text-slate-300 md:text-base">
            Physiteq は「予約事故を止める」ための小規模向け。
            大手の全部入りと違って、運用が軽いぶん{" "}
            <span className="font-semibold text-emerald-300">月額を低く</span>{" "}
            する設計にしています。
          </p>
          <p className="mt-3 text-xs text-slate-400">
            ※ いまは検証フェーズ想定なので、正式リリース時に調整する可能性があります。
          </p>
        </div>
      </section>

      {/* プラン */}
      <section className="border-b border-slate-900 bg-slate-900/40">
        <div className="mx-auto max-w-5xl px-6 py-14 grid gap-6 md:grid-cols-3">
          {/* Starter */}
          <div className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <h2 className="mb-1 text-sm font-semibold tracking-tight">
              Starter
            </h2>
            <p className="mb-3 text-xs text-slate-400">
              まず1店舗で “事故を止める”
            </p>
            <p className="mb-4 text-2xl font-bold">
              月額 ¥4,980<span className="text-sm font-normal text-slate-400">〜</span>
            </p>

            <ul className="mb-5 space-y-1 text-xs text-slate-300">
              <li>・フォーム → Master 自動反映</li>
              <li>・コース/場所/時刻のプルダウン運用</li>
              <li>・status（確定/当日キャンセル/振替）</li>
              <li>・顧客別予約確認リンク（閲覧）</li>
            </ul>

            <div className="mt-auto rounded-xl border border-slate-800 bg-slate-950/40 p-4">
              <p className="text-[11px] font-semibold text-slate-300">想定</p>
              <p className="mt-1 text-[11px] text-slate-400">
                スタッフ少人数・枠が固定寄りの店舗。
              </p>
            </div>
          </div>

          {/* Standard */}
          <div className="flex flex-col rounded-2xl border border-emerald-500/50 bg-slate-900 p-6 shadow-lg shadow-emerald-950/40">
            <h2 className="mb-1 text-sm font-semibold tracking-tight text-emerald-300">
              Standard
            </h2>
            <p className="mb-3 text-xs text-slate-400">
              日々の運用に “強い”
            </p>
            <p className="mb-4 text-2xl font-bold">
              月額 ¥9,980<span className="text-sm font-normal text-slate-400">〜</span>
            </p>

            <ul className="mb-5 space-y-1 text-xs text-slate-300">
              <li>・Starter の全機能</li>
              <li>・ダブルブッキング検知（保存無効化）</li>
              <li>・顧客追加→選択肢の同期（自動）</li>
              <li>・運用ルール差分（店舗ごとの微調整）</li>
            </ul>

            <div className="mt-auto rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4">
              <p className="text-[11px] font-semibold text-emerald-200">おすすめ</p>
              <p className="mt-1 text-[11px] text-slate-300">
                まずこれで “事故ゼロ運用” を作る想定。
              </p>
            </div>
          </div>

          {/* Pro */}
          <div className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <h2 className="mb-1 text-sm font-semibold tracking-tight">
              Pro
            </h2>
            <p className="mb-3 text-xs text-slate-400">
              複数店舗/権限/通知など
            </p>
            <p className="mb-4 text-2xl font-bold">
              月額 ¥19,800<span className="text-sm font-normal text-slate-400">〜</span>
            </p>

            <ul className="mb-5 space-y-1 text-xs text-slate-300">
              <li>・Standard の全機能</li>
              <li>・複数店舗 / 複数担当の運用拡張</li>
              <li>・通知（リマインド等）※将来拡張枠</li>
              <li>・権限分離（見える範囲の整理）※設計込み</li>
            </ul>

            <div className="mt-auto rounded-xl border border-slate-800 bg-slate-950/40 p-4">
              <p className="text-[11px] font-semibold text-slate-300">想定</p>
              <p className="mt-1 text-[11px] text-slate-400">
                複数スタッフ・複数拠点で “事故が起きやすい” 組織向け。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 初期費用（ゼロ寄せ） */}
      <section className="border-b border-slate-900 bg-slate-950">
        <div className="mx-auto max-w-5xl px-6 py-10 space-y-3">
          <h2 className="text-lg font-semibold tracking-tight">初期費用について</h2>
          <p className="text-xs text-slate-400">
            原則は「初期費用ゼロ寄せ」を想定（テンプレ複製で導入）。
            ただし、店舗ごとのルールが複雑な場合は初期セットアップ（スポット）を提案する可能性があります。
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <h3 className="text-sm font-semibold">テンプレ導入（基本）</h3>
              <p className="mt-2 text-xs text-slate-300">
                できるだけコストをかけずに始めたい店舗向け。<br />
                月額のみでスタートできる形に寄せます。
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <h3 className="text-sm font-semibold">運用ルール調整（必要な場合だけ）</h3>
              <p className="mt-2 text-xs text-slate-300">
                例外が多い/複数店舗/権限が必要など、導入時に設計がいる場合のみ。<br />
                “必要な分だけ” のスポット対応想定。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <footer className="border-t border-slate-900 bg-slate-950">
        <div className="mx-auto max-w-5xl px-6 py-8 text-xs text-slate-500">
          <p className="mb-2 font-semibold text-slate-300">デモ / 先行案内（準備中）</p>
          <p className="mb-3">
            まずは「既存顧客の予約がフォームから安定して入る」まで作る。<br />
            そこから二重予約・権限・通知を詰めていく流れにします。
          </p>
          <p className="mb-1">© {new Date().getFullYear()} Physiteq.</p>
        </div>
      </footer>
    </main>
  );
}