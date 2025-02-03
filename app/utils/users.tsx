export type User = {
  id: number
  name: string
  email: string
}

export const DEPLOY_URL = import.meta.env.VITE_DEPLOY_URL || 'http://localhost:3000'
