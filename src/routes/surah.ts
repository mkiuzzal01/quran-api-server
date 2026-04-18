import { Hono } from 'hono'
import quran from '../data/quran.json'
import { response } from '../utils/response'
import { asyncHandler } from '../utils/handler'

const surah = new Hono()

// for all surah list
surah.get(
  '/',
  asyncHandler((c) => {
    const result = quran.map((s: any) => ({
      id: s.surah,
      name_ar: s.name_ar,
      name_en: s.name_en
    }))

    return c.json(
      response.success('Surah list fetched successfully', result)
    )
  })
)

// for single surah with ayahs
surah.get('/:id', asyncHandler((c) => {
  const id = Number(c.req.param('id'))

  const data = quran.find((s: any) => s.surah === id)

  if (!data) {
    return c.json(
      response.error('Surah not found'),
      404
    )
  }

  return c.json(
    response.success('Surah fetched successfully', data)
  )
}))

export default surah
