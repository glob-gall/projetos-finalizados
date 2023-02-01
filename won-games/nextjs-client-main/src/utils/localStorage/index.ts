const APP_KEY = '@WONGAMES'

export function getStorageItem(key: string) {
  if (window === undefined) return

  const data = window.localStorage.getItem(`${APP_KEY}_${key}`)

  return JSON.parse(data!)
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function setStorageItem(key: string, value: any) {
  if (window === undefined) return

  const data = JSON.stringify(value)
  window.localStorage.setItem(`${APP_KEY}_${key}`, data)
}
