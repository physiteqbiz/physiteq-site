// app/page.tsx
export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* ヘッダー */}
      <header className="sticky top-0 z-20 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-3 md:flex-row md:items-center md:justify-between">
          <div className="text-lg font-semibold tracking-tight">Physiteq</div>

          <nav className="flex flex-wrap gap-4 text-xs text-slate-300 md:text-sm">
            <a href="#services" className="hover:text-white">
              できること
            </a>
            <a href="/services" className="hover:text-white">
              機能詳細
            </a>
            <a href="/pricing" className="hover:text-white">
              料金
            </a>
            <a href="#strength" className="hover:text-white">
              特長
            </a>
            <a href="#flow" className="hover:text-white">
              導入の流れ
            </a>
            <a href="/about" className="hover:text-white">
              作った人
            </a>
            <a href="#contact" className="hover:text-emerald-300">
              お問い合わせ準備中
            </a>
          </nav>
        </div>
      </header>

      {/* ヒーロー */}
      <section className="border-b border-slate-900 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-14 md:flex-row md:items-center md:py-20">
          {/* 左カラム */}
          <div className="flex-1">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-emerald-400">
              Scheduling × Simple Ops
            </p>

            <h1 className="mb-5 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              予約の事故（漏れ・二重・共有ミス）を
              <br />
              “軽く・安く”止める。
            </h1>

            <p className="mb-4 text-sm leading-relaxed text-slate-300 md:text-base">
              Physiteq は、パーソナルジム / ピラティス向けの
              <span className="font-semibold text-emerald-300">
                軽量な予約管理（台帳＋フォーム）
              </span>
              です。<br />
              大手SaaSみたいに全部入りじゃなくていい。必要なところだけ整えて、現場が回る状態を作ります。
            </p>

            <p className="mb-6 text-xs text-slate-400">
              予約を「スマホのフォーム入力 → 自動で台帳に反映」。
              さらに顧客別の予約確認リンク、ステータス管理（確定/当日キャンセル/振替）まで。
            </p>

            {/* CTA */}
            <div className="mb-6 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-emerald-400"
              >
                デモ / 先行案内（準備中）
              </a>
              <a
                href="/pricing"
                className="inline-flex items-center justify-center rounded-lg border border-slate-700 bg-slate-900 px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:bg-slate-800"
              >
                料金を見る
              </a>
              <span className="text-xs text-slate-400">
                広告費なしで運用を安定させたい店舗向け。
              </span>
            </div>

            {/* タグ */}
            <div className="flex flex-wrap gap-2 text-[11px] text-slate-200">
              <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1">
                フォーム→自動反映
              </span>
              <span className="rounded-full border border-sky-400/40 bg-sky-400/10 px-3 py-1">
                顧客別の予約確認
              </span>
              <span className="rounded-full border border-fuchsia-400/40 bg-fuchsia-400/10 px-3 py-1">
                ステータス管理
              </span>
              <span className="rounded-full border border-slate-500/60 bg-slate-500/10 px-3 py-1">
                ダブルブッキング防止
              </span>
              <span className="rounded-full border border-emerald-300/60 bg-emerald-300/10 px-3 py-1">
                小規模向け
              </span>
            </div>
          </div>

          {/* 右カラム（現場あるある） */}
          <div className="flex-1 rounded-2xl border border-slate-800 bg-slate-900/70 p-6 text-sm text-slate-200">
            <p className="mb-3 text-xs font-semibold text-slate-400">
              こういう “あるある” を止めたい人向け
            </p>

            <ul className="space-y-2 text-sm leading-relaxed">
              <li>・LINE/DM/口頭で予約が散らばって、漏れる</li>
              <li>・スタッフ間共有が弱くて二重予約が起きる</li>
              <li>・キャンセル/振替の履歴が追えない</li>
              <li>・顧客に「予約いつだっけ？」と何度も聞かれる</li>
              <li>・大手SaaSは高い＆設定が重い</li>
            </ul>

            <div className="mt-5 rounded-xl border border-slate-800 bg-slate-950/40 p-4">
              <p className="text-xs font-semibold text-slate-300">
                まず狙うのはここだけ
              </p>
              <p className="mt-2 text-xs text-slate-400">
                「予約の事故が止まる」状態を最短で作る。
                それ以上（会員/回数券/決済/来店）は、必要になってからでいい。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* できること */}
      <section id="services" className="border-b border-slate-900 bg-slate-950">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <h2 className="mb-2 text-xl font-semibold tracking-tight">できること</h2>
          <p className="mb-8 text-xs text-slate-400">
            “現場が回る”に必要な機能だけを、軽くまとめています。
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <h3 className="mb-2 text-sm font-semibold">フォーム入力 → 台帳へ自動反映</h3>
              <p className="text-xs text-slate-300">
                スマホから予約を入れても、裏で自動で Master に反映。入力のばらつきを減らします。
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <h3 className="mb-2 text-sm font-semibold">顧客別の予約確認（共有リンク）</h3>
              <p className="text-xs text-slate-300">
                顧客ごとの「予約一覧」シートを自動で作成・更新。問い合わせ対応が減ります。
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <h3 className="mb-2 text-sm font-semibold">確定/当日キャンセル/振替</h3>
              <p className="text-xs text-slate-300">
                ステータス変更は Master でOK。顧客側にも同期して、履歴の認識違いを防ぎます。
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <h3 className="mb-2 text-sm font-semibold">ダブルブッキング防止</h3>
              <p className="text-xs text-slate-300">
                トレーナー/場所で重なりを検知して、保存を無効化。事故る前に止めます。
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <h3 className="mb-2 text-sm font-semibold">選択肢の自動同期</h3>
              <p className="text-xs text-slate-300">
                顧客名の追加・更新に合わせて、フォーム/プルダウンの候補も自動で同期できます。
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="/services"
              className="inline-flex items-center justify-center rounded-lg border border-slate-700 bg-slate-900 px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:bg-slate-800"
            >
              機能詳細を見る
            </a>
            <a
              href="/pricing"
              className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-emerald-400"
            >
              料金を見る
            </a>
            <span className="text-xs text-slate-400">
              まずは Starter/Standard で十分な店舗が多い想定。
            </span>
          </div>
        </div>
      </section>

      {/* 特長 */}
      <section id="strength" className="border-b border-slate-900 bg-slate-950">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <h2 className="mb-4 text-xl font-semibold tracking-tight">特長</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <h3 className="mb-2 text-sm font-semibold text-emerald-300">
                “全部入り”じゃないのが強み
              </h3>
              <p className="text-xs leading-relaxed text-slate-300">
                会員管理・回数券・決済・来店管理…全部ほしいなら大手が最適。
                でも多くの小規模店舗はまず「予約の事故」を止めるだけで利益が出る。
                そこに全振りして、軽く・速く・安くしています。
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <h3 className="mb-2 text-sm font-semibold text-emerald-300">
                現場運用に合わせて伸ばせる
              </h3>
              <p className="text-xs leading-relaxed text-slate-300">
                店舗ごとの「ルールの違い（枠/担当/場所/例外運用）」に合わせて、必要な機能だけ足す設計。
                まずは運用を固めてから、通知・権限・複数店舗などを段階的に追加できます。
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <h3 className="mb-2 text-sm font-semibold">最初の躓きポイントを潰す</h3>
              <ul className="space-y-2 text-xs text-slate-300">
                <li>・入力がバラける → フォームとプルダウンで統一</li>
                <li>・顧客追加で壊れる → 選択肢同期を自動化</li>
                <li>・キャンセルが迷子 → ステータスで一本化</li>
                <li>・二重予約 → 保存前に検知して止める</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <h3 className="mb-2 text-sm font-semibold">小規模でも続けられる価格</h3>
              <p className="text-xs leading-relaxed text-slate-300">
                初期費用で回収するモデルに寄せず、月額で続けやすい設計にする想定。
                「広告費に回す余裕はないけど、運用のムダは減らしたい」店舗に刺す。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 導入の流れ */}
      <section id="flow" className="border-b border-slate-900 bg-slate-950">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <h2 className="mb-4 text-xl font-semibold tracking-tight">導入の流れ</h2>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-xs font-semibold text-slate-400">STEP 1</p>
              <h3 className="mt-2 text-sm font-semibold">テンプレ複製</h3>
              <p className="mt-2 text-xs text-slate-300">
                店舗用テンプレ（台帳/顧客/フォーム）を複製して、まず動く状態にします。
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-xs font-semibold text-slate-400">STEP 2</p>
              <h3 className="mt-2 text-sm font-semibold">現場ルールを反映</h3>
              <p className="mt-2 text-xs text-slate-300">
                コース/場所/担当などの選択肢を設定。事故が起きやすい運用だけ先に固定します。
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-xs font-semibold text-slate-400">STEP 3</p>
              <h3 className="mt-2 text-sm font-semibold">運用スタート</h3>
              <p className="mt-2 text-xs text-slate-300">
                スマホ入力 → 台帳反映 → 顧客側にも共有。まずはここが回れば勝ちです。
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <h3 className="mb-2 text-sm font-semibold text-emerald-300">
              追加したくなったら、必要な分だけ
            </h3>
            <p className="text-xs text-slate-300">
              通知、権限設計、複数店舗、例外ルール…。
              “全部一気に”じゃなく、現場が詰まったところだけを順番に足す方が失敗しません。
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-slate-900 bg-slate-900/40">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <h2 className="mb-4 text-xl font-semibold tracking-tight">よくある質問</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <h3 className="text-sm font-semibold">Q. 大手予約SaaSじゃだめ？</h3>
              <p className="mt-2 text-xs text-slate-300">
                全部必要なら大手が最適。
                ただ「予約の事故を止める」だけなら、軽い仕組みの方が早く・安く回ります。
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <h3 className="text-sm font-semibold">Q. まず何ができれば“世に出せる”？</h3>
              <p className="mt-2 text-xs text-slate-300">
                ①既存顧客の予約がフォームから安定して入る
                ②二重予約が止まる
                ③顧客側が予約確認できる
                まずはこの3点で十分、価値になります。
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <h3 className="text-sm font-semibold">Q. 権限や“パクられ”が心配</h3>
              <p className="mt-2 text-xs text-slate-300">
                “テンプレ配布＝丸パクリ可能”になりやすいので、
                配布方法（コピー許可/権限/キー管理）を設計してから公開するのが安全です。
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <h3 className="text-sm font-semibold">Q. 決済（Stripe）連携は必要？</h3>
              <p className="mt-2 text-xs text-slate-300">
                いまは不要。まず予約事故を止めて価値を出す。
                決済は“欲しい人だけ”が次に必要になる機能なので後回しでOK。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer id="contact" className="border-t border-slate-900 bg-slate-950">
        <div className="mx-auto max-w-5xl px-6 py-8 text-xs text-slate-500">
          <p className="mb-2 font-semibold text-slate-300">お問い合わせ（準備中）</p>
          <p className="mb-3">
            まずは「1店舗で予約事故が止まる」状態を最短で作るのが優先。<br />
            そこまでできたら、次に “権限 / 複数店舗 / 通知 / 決済” を順番に詰めていく。
          </p>
          <p className="mb-1">© {new Date().getFullYear()} Physiteq.</p>
          <p>現場で使いながら、必要な機能だけを増やしていきます。</p>
        </div>
      </footer>
    </main>
  );
}