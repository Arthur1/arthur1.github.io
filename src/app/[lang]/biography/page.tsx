import Script from 'next/script'

import Container from '@/components/common/Container'
import Headline1 from '@/components/common/Headline1'
import Headline2 from '@/components/common/Headline2'
import { nonDefaultLanguages, useTranslation } from '@/libs/i18n'

import translationDef from './translationDef'

export const generateStaticParams = async () => nonDefaultLanguages.map(lang => ({ lang }))

type BiographyPageProps = Readonly<{
  params: {
    lang: string
  }
}>

export default async function BiographyPage(props: BiographyPageProps) {
  const { lang } = props.params
  const { t } = await useTranslation({ lang, translationDef })
  return (
    <div>
      <Headline1>Biography</Headline1>
      <Container>
        <h1>ASAKURA Kazuki a.k.a. Arthur</h1>
        <Headline2>{t('education.title')}</Headline2>
        <dl>
          {[...Array(lang === 'en' ? 3 : 4)].map((_, i) => (
            <>
              <dt>{t(`education.list.${i}.date`)}</dt>
              <dd>{t(`education.list.${i}.content`)}</dd>
            </>
          ))}
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
