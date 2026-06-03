import { Company, AppPortfolio, Character } from './types.ts';

export const COMPANIES: Company[] = [
  {
    id: 'sk-group',
    name: 'SK GROUP OF COMPANY',
    logo: 'https://i.ibb.co/KptDmbVD/SK-GROUP-OF-COMPANY.jpg',
    description: 'The flagship enterprise established at age 15 - a testament to self-taught innovation and determination, representing the foundation of a growing digital empire. Originally published with just a laptop and pure grit.',
    videoUrl: 'https://cdn.pixabay.com/video/2020/09/24/50176-460613217_large.mp4',
  },
  {
    id: 'shiva-late-arrival',
    name: 'SHIVA LATE ARRIVAL',
    description: 'A creative production initiative bringing storytelling and technology together, pushing the boundaries of narrative media.',
    videoUrl: 'https://cdn.pixabay.com/video/2020/02/02/31888-388835171_large.mp4',
    gradient: 'from-purple-900 via-indigo-900 to-black'
  },
  {
    id: 'dreamforge-productions',
    name: 'SK DREAMFORGE PRODUCTIONS',
    logo: 'https://i.ibb.co/bM71X4s8/Gemini-Generated-Image-1.png',
    description: 'Crafting digital experiences with artistic precision and unparalleled technical expertise.',
    videoUrl: 'https://cdn.pixabay.com/video/2021/04/16/71239-538600115_large.mp4',
    images: [
      'https://i.ibb.co/gZpjtmfD/1780430238284-2.jpg',
      'https://i.ibb.co/5mtZgfF/1780431296914-2.jpg',
      'https://i.ibb.co/KP7psmG/Generated-Image-September-18-2025-7-22-AM.png'
    ]
  },
  {
    id: 'spieoh-pictures',
    name: 'SPIEOH PICTURES',
    logo: 'https://i.ibb.co/8Z1knTf/1777355413875-2.jpg',
    description: 'Visual storytelling through cinematic lenses, establishing a unique identity across global platforms.',
    videoUrl: 'https://cdn.pixabay.com/video/2022/10/26/136458-764353457_large.mp4',
    images: [
      'https://i.ibb.co/Zp9W1rdW/1780468909790-2.jpg',
      'https://i.ibb.co/1Gq3bkbY/1780340276634-2.jpg',
    ]
  },
  {
    id: 'dreamforges-1',
    name: 'DREAMFORGES #1 PRODUCTION',
    description: 'Premier video content creation and storytelling excellence, leading the industry in innovative media.',
    videoUrl: 'https://cdn.pixabay.com/video/2023/11/13/188874-883777598_large.mp4'
  }
];

export const APPS: AppPortfolio[] = [
  {
    id: 'velora',
    name: 'VELORA',
    logo: 'https://i.ibb.co/JRCCb9Ft/Chat-GPT-Image-May-3-2026-07-52-27-PM.png',
    description: 'Next-generation AI companion built on advanced neural frameworks.',
    videoUrl: 'https://cdn.pixabay.com/video/2020/04/14/35767-407604169_large.mp4',
    accentColor: 'from-blue-600/30 via-cyan-500/10 to-transparent'
  },
  {
    id: 'bodybuilding-arena',
    name: 'SK BODYBUILDING ARENA',
    logo: 'https://i.ibb.co/bMWMKmRb/SK-AUTOQUOTES.jpg',
    description: 'A comprehensive fitness transformation platform for peak physical performance.',
    videoUrl: 'https://cdn.pixabay.com/video/2020/03/17/33718-398246401_large.mp4',
    accentColor: 'from-red-600/30 via-orange-500/10 to-transparent'
  },
  {
    id: 'studio-pro',
    name: 'SK STUDIO PRO',
    logo: 'https://i.ibb.co/8DQVdgjf/SK-AUTOQUOTES.jpg',
    description: 'Professional creative suite for high-performance designers and creators.',
    videoUrl: 'https://cdn.pixabay.com/video/2020/12/31/60451-496667597_large.mp4',
    accentColor: 'from-purple-600/30 via-indigo-500/10 to-transparent'
  },
  {
    id: 'backbencher-daily',
    name: 'BACKBENCHER DAILY',
    logo: 'https://i.ibb.co/9mQ2V8C6/Gemini-Generated-Image-h8zxd9h8zxd9h8zx.png',
    description: 'An essential lifestyle app tailored for the modern student experience.',
    videoUrl: 'https://cdn.pixabay.com/video/2023/10/31/187127-879133887_large.mp4',
    accentColor: 'from-green-600/30 via-emerald-500/10 to-transparent'
  },
  {
    id: 'hira-ai',
    name: 'HIRA',
    logo: 'https://i.ibb.co/HDmC1cYm/1000071155.png',
    description: 'AI Girlfriend Experience - a breakthrough in empathetic digital interaction.',
    videoUrl: 'https://cdn.pixabay.com/video/2020/11/05/54316-470295874_large.mp4',
    accentColor: 'from-pink-600/30 via-rose-500/10 to-transparent'
  }
];

export const CHARACTERS: Character[] = [
  { id: '1', name: 'SHIVA', imageUrl: 'https://i.ibb.co/vxQ11g7v/1764430415490.png', role: 'Main Protagonist' },
  { id: '2', name: 'PRAGYA', imageUrl: 'https://i.ibb.co/HDmC1cYm/1000071155.png', role: 'Support Guide' },
  { id: '3', name: 'SK', imageUrl: 'https://i.ibb.co/ZzYwXvLt/1000074123-1.png', role: 'Master Coach' },
  { id: '4', name: 'ANYA', imageUrl: 'https://i.ibb.co/NfwSG3m/1765077842065-3.jpg', role: 'Guardian' },
  { id: '5', name: 'ARJUN', imageUrl: 'https://i.ibb.co/YFkQyVc1/IMG-20251128-053144-477.png', role: 'Elite Coach' },
  { id: '6', name: 'SARA', imageUrl: 'https://i.ibb.co/8gz7TdZF/Gemini-Generated-Image-bldqxzbldqxzbldq-1.png', role: 'Technical Lead' },
  { id: '7', name: 'JR', imageUrl: 'https://i.ibb.co/whkMdV7T/1000070936.png', role: 'Rising Star' },
  { id: '8', name: 'KD', imageUrl: 'https://i.ibb.co/5hLpQjVg/1000070942.png', role: 'System Architect' },
  { id: '9', name: 'STEVE', imageUrl: 'https://i.ibb.co/Mx4m4Y1N/1000072147.png', role: 'Combat Specialist' },
  { id: '10', name: 'SWEETIE', imageUrl: 'https://i.ibb.co/CKqYMhHV/1000074128.png', role: 'Diplomat' },
  { id: '11', name: 'MIZZ MIZUKI', imageUrl: 'https://i.ibb.co/fG14TvVK/1000071154.png', role: 'Wisdom Master' },
  { id: '12', name: 'DHANUSH', imageUrl: 'https://i.ibb.co/gZyzfK8M/1000071035.png', role: 'Strategy Head' },
  { id: '13', name: 'ROSHNA', imageUrl: 'https://i.ibb.co/mVDKKyLV/1000072145.png', role: 'Operations' },
  { id: '14', name: 'ESTELLAH', imageUrl: 'https://i.ibb.co/CKqYMhHV/1000074128.png', role: 'Command Center' },
  { id: '15', name: 'RUBEN', imageUrl: 'https://i.ibb.co/N6h6Gwns/1000070978.png', role: 'Field Agent' },
];
