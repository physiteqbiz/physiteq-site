// app/about/page.tsx
export default function About() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* 上部セクション */}
      <section className="border-b border-slate-900 bg-slate-950">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            担当者紹介
          </h1>
          <p className="text-sm text-slate-300 md:text-base">
            初めまして。Physiteq（フィジテック）を運営している者です。
            パーソナルジムの現場理解と、ITコンサル／エンジニアの経験を掛け合わせた
            “初心者向けの集客伴走サービス” を提供しています。
          </p>
        </div>
      </section>

      {/* プロフィール本体 */}
      <section className="border-b border-slate-900 bg-slate-900/40">
        <div className="mx-auto max-w-4xl px-6 py-14 grid gap-10 md:grid-cols-3">

          {/* 左カラム（仮の写真枠 or アイコン） */}
          <div className="flex flex-col items-start">
            <div className="flex h-40 w-40 items-center justify-center rounded-full border border-slate-700 bg-slate-800 text-slate-400">
              写真
            </div>
            <p className="mt-4 text-xs text-slate-500">※ 後で差し替え可能</p>
          </div>

          {/* 右カラム（文章） */}
          <div className="md:col-span-2 space-y-6">
            {/* 自己紹介 */}
            <div>
              <h2 className="mb-2 text-xl font-semibold tracking-tight">
                経歴と背景
              </h2>
              <p className="text-sm leading-relaxed text-slate-300">
                元々は{" "}
                <span className="font-semibold text-emerald-300">
                  NTTデータG・国内大手ITコンサル企業
                </span>{" "}
                にて、データ整理・導線改善・業務設計などの
                “複雑な仕組みをシンプルにする仕事” をしていました。
              </p>

              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                その後、エンジニアとして計測設計（GTM / GA4）や
                Web改善の領域も担当しながら、同時に自分自身でも
                <span className="font-semibold text-emerald-300">
                  パーソナルジムにてトレーナーとして運営
                </span>{" "}
                に携わるようになりました。
              </p>

              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                現場とデジタルの両方を経験したことで、
                「ジム運営者が本当に困っていること」と
                「広告・計測の技術的な部分」をつなぐことができ、
                初心者向けの伴走サポートが自然と得意になりました。
              </p>
            </div>

            {/* なぜPhysiteqを作ったか */}
            <div>
              <h2 className="mb-2 text-xl font-semibold tracking-tight">
                Physiteq を立ち上げた理由
              </h2>
              <p className="text-sm leading-relaxed text-slate-300">
                多くのジムオーナーと話す中で、
                「Google広告に興味はあるけど、管理画面も用語も怖くて触れない」
                という声を数え切れないほど聞いてきました。
              </p>

              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                さらに、代理店に任せると内容がブラックボックス化し、
                “何にいくら使って成果がどうだったのか” が分からなくなる…  
                そんな状態にもよく出会いました。
              </p>

              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                だからこそ、
                <span className="font-semibold text-emerald-300">
                  「初心者でも理解できる形で、一緒に成長していける支援」
                </span>
                が必要だと感じ、Physiteq を立ち上げました。
              </p>
            </div>

            {/* 強み */}
            <div>
              <h2 className="mb-2 text-xl font-semibold tracking-tight">
                私の強み
              </h2>
              <ul className="space-y-2 text-sm leading-relaxed text-slate-300">
                <li>
                  ・{" "}
                  <span className="font-semibold text-emerald-300">
                    パーソナルジム運営の現場理解
                  </span>{" "}
                  がある（現場の課題が分かる）
                </li>
                <li>
                  ・ NTTデータG・大手ITコンサルで培った{" "}
                  <span className="font-semibold text-emerald-300">
                    データ整理・導線設計のスキル
                  </span>
                </li>
                <li>
                  ・ エンジニア経験があるため、GTM / GA4 / 計測領域を
                  <span className="font-semibold text-emerald-300">
                    正確に構築
                  </span>
                  できる
                </li>
                <li>
                  ・ 現場へ{" "}
                  <span className="font-semibold text-emerald-300">
                    訪問して導線・LPとのギャップ
                  </span>{" "}
                  まで確認できる
                </li>
                <li>
                  ・ 難しい言葉を使わず、初心者にも分かるように噛み砕ける
                </li>
              </ul>
            </div>
            {/* 保有資格 */}
<div>
  <h2 className="mb-2 text-xl font-semibold tracking-tight">
    保有資格
  </h2>
  <ul className="space-y-2 text-sm leading-relaxed text-slate-300">
    <li>・Google広告 検索広告認定資格</li>
    <li>・NSCA-CPT（認定パーソナルトレーナー）</li>
    <li>・基本情報技術者（国家資格）</li>
  </ul>
</div>

            {/* 最後のメッセージ */}
            <div>
              <h2 className="mb-2 text-xl font-semibold tracking-tight">
                最後に
              </h2>
              <p className="text-sm leading-relaxed text-slate-300">
                Google広告や計測の領域は、最初はとても難しく見えます。  
                でも、正しい順番で整えていけば、初心者でも必ず扱えるようになります。
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                分からないところは一緒にゆっくり進めるので、  
                まずは安心してご相談ください。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="border-t border-slate-900 bg-slate-950">
        <div className="mx-auto max-w-4xl px-6 py-8 text-xs text-slate-500">
          <p className="mb-1">© {new Date().getFullYear()} Physiteq.</p>
          <p>初心者向けの集客伴走サービスとして、少しずつ改善していきます。</p>
        </div>
      </footer>
    </main>
  );
}