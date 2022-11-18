import { css } from '@emotion/css'

import { theme } from '@/styles'

export const sHero = css`
  width: 100%;

  padding: 20px 0;

  display: flex;
  align-items: center;

  background-color: ${theme.primary};
`

export const sHeroContent = css`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const sHeroTitle = css`
  font-size: 40px;
`

export const sHeroContentBox = css`
  width: 100%;
`

export const sHeroContentImageBox = css`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const sHeroImage = css`
  height: 100%;
  max-height: 300px;
`
