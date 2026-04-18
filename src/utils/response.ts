export const response = {
  success: (message: string, data: any = null) => {
    return {
      success: true,
      message,
      data,
      error: null
    }
  },

  error: (message: string, error: any = null) => {
    return {
      success: false,
      message,
      data: null,
      error
    }
  }
}
