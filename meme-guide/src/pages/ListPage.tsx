import { useMemeStorage } from '../hooks/useMemeStorage';
import { MemeCardGrid } from '../components/MemeCardGrid';

export function ListPage() {
  const { memes } = useMemeStorage();

  return (
    <div>
      <h1 className='text-2xl font-bold mb-5'>Meme List</h1>
      <MemeCardGrid memes={memes} />
    </div>
  );
}
