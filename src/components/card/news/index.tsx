import React from 'react'
import { Card, Button } from 'antd'

import { Paragraph } from '@/typography'

import { TNewsCardProps } from './types'
import { sCardContent, sCard, sCardAuthor, sCardImage } from './styles'
import { getFormattedDate, getFormattedAuthor } from './helpers'

const NewsCard = ({
  title,
  author,
  source,
  urlToImage,
  publishedAt,
}: TNewsCardProps) => {
  return (
    <Card
      key={title}
      title={title}
      className={sCard}
      bodyStyle={{ height: '100%' }}
      cover={
        <img
          src={urlToImage ?? '/image-placeholder.jpg'}
          className={sCardImage}
          alt='image cover card'
          loading='lazy'
          onError={(e) => {
            e.currentTarget.src = '/image-placeholder.jpg'
          }}
        />
      }
      hoverable
    >
      <div className={sCardContent}>
        <Paragraph className={sCardAuthor}>
          {author && getFormattedAuthor(author, source)} at{' '}
          {getFormattedDate(publishedAt)}
        </Paragraph>
        <Button type='primary'>See More</Button>
      </div>
    </Card>
  )
}

export default NewsCard
