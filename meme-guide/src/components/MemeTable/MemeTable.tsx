import { useEffect, useState } from 'react';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button } from '@heroui/react';
import { defaultMemes, IMeme } from '../../data/memes';
import { EditMemeModal } from '../EditMemeModal';

const LOCAL_KEY = 'memeData';

export function MemeTable() {
  const [memes, setMemes] = useState<IMeme[]>([]);
  const [selectedMeme, setSelectedMeme] = useState<IMeme | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(LOCAL_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) setMemes(parsed);
        else setMemes(defaultMemes);
      } catch {
        setMemes(defaultMemes);
      }
    } else {
      setMemes(defaultMemes);
    }
  }, []);

  const saveToStorage = (updated: IMeme[]) => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(updated));
  };

  const handleEditClick = (meme: IMeme) => {
    setSelectedMeme(meme);
    setIsModalOpen(true);
  };

  const handleSave = (updatedMeme: IMeme) => {
    const updated = memes.map(m => (m.id === updatedMeme.id ? updatedMeme : m));
    setMemes(updated);
    saveToStorage(updated);
    setSelectedMeme(updatedMeme);
  };

  return (
    <>
      <Table aria-label='Meme Table'>
        <TableHeader>
          <TableColumn>ID</TableColumn>
          <TableColumn>Title</TableColumn>
          <TableColumn>Likes</TableColumn>
          <TableColumn className='text-right pr-4'>Actions</TableColumn>
        </TableHeader>
        <TableBody>
          {memes.map(meme => (
            <TableRow key={meme.id}>
              <TableCell>{meme.id}</TableCell>
              <TableCell>{meme.title}</TableCell>
              <TableCell>{meme.likes}</TableCell>
              <TableCell className='text-right'>
                <Button
                  size='sm'
                  color='primary'
                  onPress={() => handleEditClick(meme)}
                >
                  Edit
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <EditMemeModal
        meme={selectedMeme}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSave}
      />
    </>
  );
}
