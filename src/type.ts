interface Job {
    id: number,
    company: string,
    logo: string,
    new: boolean,
    featured: boolean,
    position: string,
    role: string,
    level: string,
    postedAt: string,
    contract: string,
    location: string,
    languages: string[],
    tools: string[]
}
interface Category {
    value: string
}
interface Tag {
    value: string,
    color: string
}
interface AppState {
    jobs : Job[],
    filters : string[],
    loading: boolean
  }
export type { Job, Tag, Category, AppState }