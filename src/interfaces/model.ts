interface Announcement {
    id: string
    title: string
    desc: string
    date: string
    time: string
    announcements: string[]
    summaries: string[]
}

interface Member {
    id: number
    name: string
    role: string
    major: string
    src: string
    instagram: string
}

interface Gallery {
    id: string
    title: string
    date: string
    thumbnail: string
    gdrive: string
}
