// app/services/page.tsx
export default function Services() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* ヘッダー的な部分 */}
      <section className="border-b border-slate-900 bg-slate-950">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            サービス内容
          </h1>
          <p className="text-sm text-slate-300 md:text-base">
            Physiteq では、Google 広告が初めてのパーソナルジムやスモールビジネス向けに、
            「計測の整備」から「広告の初期構築」「継続的な改善」までを一緒に進める
            伴走型のサポートを提供しています。
          </p>
          <p className="mt-3 text-xs text-slate-400">
            ここでは、想定しているメニューのイメージをお伝えします。
            実際の内容やボリュームは、相談の中で柔軟に調整していきます。
          </p>
        </div>
      </section>

      {/* サービス一覧 */}
      <section className="border-b border-slate-900 bg-slate-900/40">
        <div className="mx-auto max-w-5xl px-6 py-14 space-y-10">
          {/* 1. 計測セットアップ */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
            <h2 className="mb-2 text-xl font-semibold tracking-tight">
              ① 計測セットアップパック（GTM / GA4 / LINE）
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-slate-300">
              まずは <span className="font-semibold text-emerald-300">「ちゃんと数字が取れる状態」</span> にするための
              初期セットアップです。Google 広告を回す前に、土台として整えておきたい部分になります。
            </p>
            <div className="grid gap-4 text-sm md:grid-cols-2">
              <div>
                <h3 className="mb-1 text-xs font-semibold text-slate-400">
                  主な内容
                </h3>
                <ul className="space-y-1 text-slate-300">
                  <li>・GA4 プロパティの確認・初期設定</li>
                  <li>・GTM コンテナの設計・タグ／トリガー整理</li>
                  <li>・LINE 公式アカウントへの遷移・追加計測</li>
                  <li>・問い合わせ／予約完了などのコンバージョン計測</li>
                  <li>・簡易レポート（見るべき指標を3つに絞った形）の共有</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-1 text-xs font-semibold text-slate-400">
                  こういう方に
                </h3>
                <ul className="space-y-1 text-slate-300">
                  <li>・とりあえず GA4 を入れたが、ちゃんと動いているか不安</li>
                  <li>・LINE 追加や問い合わせの数だけでも正確に知りたい</li>
                  <li>・今後広告を出したときに、成果をちゃんと測れるようにしておきたい</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 2. 広告初期構築 */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
            <h2 className="mb-2 text-xl font-semibold tracking-tight">
              ② Google 広告 初期構築パック（少額テストつき）
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-slate-300">
              Google 広告のアカウント作成から、ジム向けの基本的なキャンペーン構成の設計、
              少額テスト配信までを一緒に行うプランです。
            </p>
            <div className="grid gap-4 text-sm md:grid-cols-2">
              <div>
                <h3 className="mb-1 text-xs font-semibold text-slate-400">
                  主な内容
                </h3>
                <ul className="space-y-1 text-slate-300">
                  <li>・アカウント作成／請求設定のサポート</li>
                  <li>・地域名 × パーソナルジム などの基本キャンペーン設計</li>
                  <li>・キーワード／広告文／LP の方向性整理</li>
                  <li>・1日あたりの予算と「やめるライン」の設計</li>
                  <li>・少額テスト配信（◯週間）と簡易振り返り</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-1 text-xs font-semibold text-slate-400">
                  こういう方に
                </h3>
                <ul className="space-y-1 text-slate-300">
                  <li>・Google 広告を触ったことがないので、最初は付き添ってほしい</li>
                  <li>・いきなり大きな予算をかけるのは怖い</li>
                  <li>・「どのくらい反応がありそうか」をまずは試してみたい</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 3. 継続伴走 */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
            <h2 className="mb-2 text-xl font-semibold tracking-tight">
              ③ 月次の改善・伴走サポート
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-slate-300">
              計測や初期構築が終わったあと、月単位で数字を一緒に見ながら、
              少しずつ広告・LP・導線を改善していくための伴走プランです。
            </p>
            <div className="grid gap-4 text-sm md:grid-cols-2">
              <div>
                <h3 className="mb-1 text-xs font-semibold text-slate-400">
                  主な内容
                </h3>
                <ul className="space-y-1 text-slate-300">
                  <li>・月1回のオンラインミーティング</li>
                  <li>・Google 広告／LP／計測まわりの状況確認</li>
                  <li>・次の1ヶ月で試すべき打ち手の提案</li>
                  <li>・チャット等での簡易相談（回数は応相談）</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-1 text-xs font-semibold text-slate-400">
                  こういう方に
                </h3>
                <ul className="space-y-1 text-slate-300">
                  <li>・数字を見るのが苦手なので、毎月一緒に整理してほしい</li>
                  <li>・自分でも理解しながら運用できるようになりたい</li>
                  <li>・代理店に丸投げするのではなく、横で支えてほしい</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 4. 店舗訪問オプション */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
            <h2 className="mb-2 text-xl font-semibold tracking-tight">
              ④ 店舗訪問オプション
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-slate-300">
              希望があれば、実際に店舗へ伺って、
              <span className="font-semibold text-emerald-300">
                入り口〜カウンセリング〜体験〜入会までの導線
              </span>
              を見せてもらいながら、LP や広告文とのギャップを一緒に整理します。
            </p>
            <p className="mb-2 text-xs text-slate-400">
              ※エリアや回数によって条件が変わるため、詳細は個別にご相談ください。
            </p>
          </div>
        </div>
      </section>

      {/* フッターっぽい締め */}
      <footer className="border-t border-slate-900 bg-slate-950">
        <div className="mx-auto max-w-5xl px-6 py-8 text-xs text-slate-500">
          <p className="mb-2">
            具体的な料金感や進め方は、まずは現状をお伺いした上で一緒に決めていきます。
          </p>
          <p className="mb-1">
            「何からお願いすればいいか分からない」という状態からでも大丈夫です。
          </p>
          <p>© {new Date().getFullYear()} Physiteq.</p>
        </div>
      </footer>
    </main>
  );
}