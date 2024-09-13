interface Announcement {
    index: number
    id: string
    title: string
    desc: string
    date: string
    time: string
    announcements: string[]
    summaries: string[]
    created_at: string
}

interface Member {
    name: string
    nickname: string
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
    photos: string[]
    keywords: string[]
    location: {
        name: string
        url: string
    }
    created_at: string
}
