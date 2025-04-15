import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Input, Button } from '@heroui/react';
import { IMeme } from '../../data/memes';

interface EditMemeModalProps {
  meme: IMeme | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (updated: IMeme) => void;
}

export function EditMemeModal({ meme, isOpen, onClose, onSave }: EditMemeModalProps) {
  if (!meme) return null;

  const handleChange = (field: keyof IMeme, value: string | number) => {
    onSave({ ...meme, [field]: value });
  };

  const handleSubmit = () => {
    const { title, image, likes } = meme;

    if (!title || title.length < 3 || title.length > 100) {
      alert('Title must be between 3 and 100 characters.');
      return;
    }

    const urlRegex = /^https?:\/\/.*\.(jpg|jpeg)$/i;
    if (!urlRegex.test(image)) {
      alert('Image must be a valid .jpg or .jpeg URL.');
      return;
    }

    if (isNaN(likes) || likes < 0 || likes > 99) {
      alert('Likes must be a number between 0 and 99.');
      return;
    }

    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      backdrop='blur'
      placement='center'
      scrollBehavior='inside'
    >
      <ModalContent>
        {close => (
          <>
            <ModalHeader>Edit Meme</ModalHeader>
            <ModalBody className='flex flex-col gap-4'>
              <Input
                isReadOnly
                label='ID'
                value={meme.id.toString()}
              />
              <Input
                label='Title'
                value={meme.title}
                onChange={e => handleChange('title', e.target.value)}
              />
              <Input
                label='Image URL (.jpg only)'
                value={meme.image}
                onChange={e => handleChange('image', e.target.value)}
              />
              <Input
                label='Likes'
                type='number'
                min={0}
                max={99}
                value={meme.likes.toString()}
                onChange={e => handleChange('likes', Number(e.target.value))}
              />
            </ModalBody>
            <ModalFooter>
              <Button
                variant='light'
                onPress={close}
              >
                Cancel
              </Button>
              <Button
                color='primary'
                onPress={handleSubmit}
              >
                Save
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
