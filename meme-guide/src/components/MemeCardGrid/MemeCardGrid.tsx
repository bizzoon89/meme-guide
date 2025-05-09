import { Card, CardHeader, CardBody, Image } from '@heroui/react';
import { IMeme } from '../../data/memes';

interface MemeCardGridProps {
  memes: IMeme[];
}

export function MemeCardGrid({ memes }: MemeCardGridProps) {
  return (
    <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto max-w-7xl px-4'>
      {memes.map(meme => (
        <Card
          key={meme.id}
          className='w-full flex flex-col justify-between'
          shadow='md'
          radius='lg'
          isHoverable
        >
          <a
            href={meme.image}
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              removeWrapper
              src={meme.image}
              alt={meme.title}
              radius='lg'
              className='w-full h-48 object-cover mx-auto'
            />
          </a>
          <CardHeader className='pt-4 px-4 text-lg font-semibold'>{meme.title}</CardHeader>
          <CardBody className='px-4 pb-4 text-sm text-gray-600'>❤️ {meme.likes} likes</CardBody>
        </Card>
      ))}
    </div>
  );
}
