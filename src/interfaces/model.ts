interface Announcement {
    index: number
    id: string
    title: string
    desc: string
    date: string
    time: string
    announcements: string[]
    summaries: string[]
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
    medias: string[]
    location: {
        name: string
        url: string
    }
}
