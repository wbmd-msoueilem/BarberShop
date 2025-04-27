import {Card, CardContent} from '@/components/ui/card';

const galleryImages = [
  {
    id: '1',
    imageUrl: 'https://picsum.photos/id/1015/400/300',
    caption: 'تلاشي عصري',
  },
  {id: '2', imageUrl: 'https://picsum.photos/id/1016/400/300', caption: 'قصة كلاسيكية'},
  {id: '3', imageUrl: 'https://picsum.photos/id/1018/400/300', caption: 'تشذيب دقيق للحية'},
  {id: '4', imageUrl: 'https://picsum.photos/id/1019/400/300', caption: 'قصة شعر أنيقة'},
  {id: '5', imageUrl: 'https://picsum.photos/id/1020/400/300', caption: 'تجميل احترافي'},
  {id: '6', imageUrl: 'https://picsum.photos/id/1021/400/300', caption: 'تسريحة عصرية'},
];

export default function GalleryPage() {
  return (
    <div className="container mx-auto py-10 rtl">
      <h1 className="text-3xl font-semibold mb-6 text-right">الصور</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {galleryImages.map(image => (
          <GalleryImage key={image.id} image={image} />
        ))}
      </div>
    </div>
  );
};

function GalleryImage({image}: {image: any}) {
  return (
    <Card className="rtl">
      <CardContent className="p-0 rtl">
        <img
          src={image.imageUrl}
          alt={image.caption}
          className="w-full h-auto object-cover"
        />
        {image.caption && <div className="p-4 text-right">{image.caption}</div>}
      </CardContent>
    </Card>
  );
};
