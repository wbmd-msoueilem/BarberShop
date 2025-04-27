import {Card, CardContent} from '@/components/ui/card';

const galleryImages = [
  {id: '1', imageUrl: 'https://picsum.photos/id/1015/400/300', caption: 'Fresh fade'},
  {id: '2', imageUrl: 'https://picsum.photos/id/1016/400/300', caption: 'Classic cut'},
  {id: '3', imageUrl: 'https://picsum.photos/id/1018/400/300', caption: 'Sharp beard trim'},
  {id: '4', imageUrl: 'https://picsum.photos/id/1019/400/300', caption: 'Stylish haircut'},
  {id: '5', imageUrl: 'https://picsum.photos/id/1020/400/300', caption: 'Professional grooming'},
  {id: '6', imageUrl: 'https://picsum.photos/id/1021/400/300', caption: 'Modern hairstyle'},
];

export default function GalleryPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-semibold mb-6">Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map(image => (
          <GalleryImage key={image.id} image={image} />
        ))}
      </div>
    </div>
  );
}

function GalleryImage({image}: {image: any}) {
  return (
    <Card>
      <CardContent className="p-0">
        <img src={image.imageUrl} alt={image.caption} className="w-full h-auto object-cover" />
        {image.caption && <div className="p-4">{image.caption}</div>}
      </CardContent>
    </Card>
  );
}
