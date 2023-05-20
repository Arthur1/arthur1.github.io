import Container from '@/components/common/Container'
import Headline1 from '@/components/common/Headline1'
import Headline2 from '@/components/common/Headline2'
import Script from 'next/script'

export default function Biography() {
  return (
    <div>
      <Headline1>Biography</Headline1>
      <Container>
        <h1>ASAKURA Kazuki a.k.a. Arthur</h1>
        <Headline2>学歴</Headline2>
        <dl>
          <dt>2022.03</dt>
          <dd>東京工業大学 工学部 情報工学科 卒業 学士(工学)</dd>
          <dt>2021.03</dt>
          <dd>同 IT特別教育プログラム基礎 (enPiT AiBiC) 修了</dd>
          <dt>2015.04</dt>
          <dd>同 第5類 入学</dd>
          <dt>2015.03</dt>
          <dd>静岡県立沼津東高等学校 普通科 卒業</dd>
        </dl>
        <Headline2>現所属・役職</Headline2>
        <ul>
          <li>株式会社はてな アプリケーションエンジニア</li>
          <li>Teleneco Works 代表</li>
          <li>Titech App Project</li>
          <li>静岡県東部高等学校軽音楽部 合同発表会 音響チーム</li>
        </ul>
        <Headline2>過去の所属・役職</Headline2>
        <ul>
          <li>東京工業大学 情報理工学院 小野（峻）研究室 RA (2021-2022)</li>
          <li>
            東京工業大学 2021年度 [CSC.T364]システム設計演習・[CSC.T375]システム構築演習 画像解析 TA
          </li>
          <li>工大祭実行委員会 ネットワーク局 (2015-2018)</li>
          <li>東京工業大学 情報理工学院 バスゼミスタッフ (2015-2022)</li>
          <li>静岡県立沼津東高等学校 海浜教室 助手 (2015-2018)</li>
          <li>第67回香陵祭祭典委員長</li>
        </ul>
        <Headline2>受賞</Headline2>
        <ul>
          <li>東京工業大学 IT特別教育プログラム グローバルシステム開発研修 参加 (2020)</li>
          <li>
            東京工業大学 システム構築演習 Webプログラミング成果発表会
            チーム「システム構築演習完全に理解した」 最優秀賞 (2020)
          </li>
          <li>
            enPiT AiBiC東日本 夏合宿 チーム「C#++」 マホロバマインズ賞・enPiT AiBiC賞・NSSOL賞
            (2019)
          </li>
        </ul>
        <Headline2>資格</Headline2>
        <ul>
          <li>AWS Certified Solutions Architect - Associate (2023)</li>
          <li>応用情報技術者試験 合格 (2021)</li>
          <li>TOEIC L&R 800点 (2020)</li>
        </ul>
        <div
          data-iframe-width="150"
          data-iframe-height="270"
          data-share-badge-id="4bf6d3ba-905b-461d-a6f0-293a59c22ec3"
          data-share-badge-host="https://www.credly.com"
        ></div>
        <Script src="//cdn.credly.com/assets/utilities/embed.js"></Script>
      </Container>
    </div>
  )
}
