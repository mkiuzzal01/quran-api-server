import { Context, Next } from 'hono'

type Handler = (c: Context, next: Next) => Promise<Response> | Response

export const asyncHandler = (fn: Handler) => {
  return async (c: Context, next: Next) => {
    try {
      return await fn(c, next)
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : 'Something went wrong'

      return c.json(
        {
          success: false,
          message
        },
        500
      )
    }
  }
}
