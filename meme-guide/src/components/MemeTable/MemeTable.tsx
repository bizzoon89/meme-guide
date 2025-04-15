import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button } from '@heroui/react';
import { useState } from 'react';
import { useMemeStorage } from '../../hooks/useMemeStorage';
import { IMeme } from '../../data/memes';
import { EditMemeModal } from '../EditMemeModal';

export function MemeTable() {
  const { memes, setMemes } = useMemeStorage();
  const [selectedMeme, setSelectedMeme] = useState<IMeme | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditClick = (meme: IMeme) => {
    setSelectedMeme(meme);
    setIsModalOpen(true);
  };

  const handleSave = (updatedMeme: IMeme) => {
    const updated = memes.map(m => (m.id === updatedMeme.id ? updatedMeme : m));
    setMemes(updated);
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
