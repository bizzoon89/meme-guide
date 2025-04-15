export interface IMeme {
  id: number;
  title: string;
  image: string;
  likes: number;
}

export const defaultMemes: IMeme[] = [
  {
    id: 1,
    title: 'Distracted Boyfriend',
    image: 'https://i.imgflip.com/1ur9b0.jpg',
    likes: Math.floor(Math.random() * 100),
  },
  {
    id: 2,
    title: 'Roll Safe',
    image: 'https://i.imgflip.com/1h7in3.jpg',
    likes: Math.floor(Math.random() * 100),
  },
  {
    id: 3,
    title: 'UNO Draw 25',
    image: 'https://i.imgflip.com/3lmzyx.jpg',
    likes: Math.floor(Math.random() * 100),
  },
  {
    id: 4,
    title: 'Success Kid',
    image: 'https://i.imgflip.com/1bhk.jpg',
    likes: Math.floor(Math.random() * 100),
  },
  {
    id: 5,
    title: 'Hide the Pain Harold',
    image: 'https://i.imgflip.com/2gnnjh.jpg',
    likes: Math.floor(Math.random() * 100),
  },
  {
    id: 6,
    title: 'Two Buttons',
    image: 'https://i.imgflip.com/1g8my4.jpg',
    likes: Math.floor(Math.random() * 100),
  },
  {
    id: 7,
    title: 'Mocking SpongeBob',
    image: 'https://i.imgflip.com/1otk96.jpg',
    likes: Math.floor(Math.random() * 100),
  },
  {
    id: 8,
    title: 'Grumpy Cat',
    image: 'https://i.imgflip.com/8p0a.jpg',
    likes: Math.floor(Math.random() * 100),
  },
  {
    id: 9,
    title: 'Is This a Pigeon?',
    image: 'https://i.imgflip.com/1o00in.jpg',
    likes: Math.floor(Math.random() * 100),
  },
  {
    id: 10,
    title: 'This Is Fine',
    image: 'https://i.imgflip.com/wxica.jpg',
    likes: Math.floor(Math.random() * 100),
  },
];
