import { galleries } from '@/constants/model'

export const galleryService = {
    getAllGalleries: () => galleries,
    getGalleryDetail: (id: string) =>
        galleries.find((gallery: Gallery) => gallery.id === id),
}
