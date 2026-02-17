import { Mdx } from '@/components/mdx-content'
import PageTitle from '@/components/page-title'
import { allWorks } from 'content-collections'

export default async function Work() {
  const work = allWorks.find((work) => work.slug === 'index')!

  return (
    <>
      <PageTitle
        title={work.title}
        description={work.description}
        fromColor={work.fromColor}
        toColor={work.toColor}
      />
      <Mdx code={work.mdx} />
    </>
  )
}



