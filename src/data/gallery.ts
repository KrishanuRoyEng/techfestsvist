export interface GalleryImage {
    id: string;
    url: string;
    caption: string;
    category?: string;
}

export const galleryImages: GalleryImage[] = [
    // Add your Vercel Blob URLs here
    // Example:
    // {
    //     id: '1',
    //     url: 'https://xxx.public.blob.vercel-storage.com/image1.jpg',
    //     caption: 'Opening Ceremony',
    //     category: 'Events'
    // },
];
