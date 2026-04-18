import { Hono } from 'hono'
import quran from '../data/quran.json'
import { response } from '../utils/response'
import { asyncHandler } from '../utils/handler'
import { TAyah, TQuran } from '../types/TQuran'
import { textNormalize } from '../utils/normalize'

const search = new Hono()

search.get(
  '/',
  asyncHandler((c) => {
    const query = textNormalize(c.req.query('q') || '')

    if (!query) {
      return c.json(response.error('Search query is required'), 400)
    }

    const results: any[] = []

    quran.forEach((surah: TQuran) => {
      surah.ayahs.forEach((ayah: TAyah) => {
        const textEn = textNormalize(ayah.text_en)
        const textAr = textNormalize(ayah.text_ar)

        if (textEn.includes(query) || textAr.includes(query)) {
          results.push({
            surah: surah.surah,
            surah_name_en: surah.name_en,
            surah_name_ar: surah.name_ar,
            ayah_number: ayah.number, 
            text_en: ayah.text_en,
            text_ar: ayah.text_ar
          })
        }
      })
    })

    return c.json(
      response.success(
        `Found ${results.length} results`,
        results.slice(0, 50)
      )
    )
  })
)

export default search
