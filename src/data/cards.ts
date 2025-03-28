import kichiImg from '../Assets/Home/Kichi.png';
import ratiezaImg from '../Assets/Home/Ratieza.png';
import saruffyImg from '../Assets/Home/Saruffy.png';
import akaiTsukiImg from '../Assets/Home/Akai Tsuki.png';
import cattoImg from '../Assets/Home/Catoo.png';
import coorogiImg from '../Assets/Home/Coorogi.png';
import toroImg from '../Assets/Home/Toro.png';
import horichiImg from '../Assets/Home/Horichi.png';
import rezaImg from '../Assets/Home/Reza.png';
import sukusaImg from '../Assets/Home/Sukusa.png';
import gotsuImg from '../Assets/Home/Gotsu.png';
import toguneImg from '../Assets/Home/Togune.png';
import kumamoImg from '../Assets/Home/Kumamo.png';
import kanopioImg from '../Assets/Home/Kanopio.png';

// Import all videos
import kichiVideo from '../Assets/VideoCards/Kichi Card.mp4';
import ratiezaVideo from '../Assets/VideoCards/Ratieza Card.mp4';
import saruffyVideo from '../Assets/VideoCards/Saruffy Card.mp4';
import akaiTsukiVideo from '../Assets/VideoCards/Akai Tsuki Card.mp4';
import cattoVideo from '../Assets/VideoCards/Catto Card.mp4';
import coorogiVideo from '../Assets/VideoCards/Coorogi Card.mp4';
import toroVideo from '../Assets/VideoCards/Toro Card.mp4';
import horichiVideo from '../Assets/VideoCards/Horichi Card.mp4';
import rezaVideo from '../Assets/VideoCards/Reza Card.mp4';
import sukusaVideo from '../Assets/VideoCards/Sukusa Card.mp4';
import gotsuVideo from '../Assets/VideoCards/Gotsu Card.mp4';
import toguneVideo from '../Assets/VideoCards/Togune Card.mp4';
import kumamoVideo from '../Assets/VideoCards/Kumamo Card.mp4';
import kanopioVideo from '../Assets/VideoCards/Kanopio Card.mp4';

export interface Card {
  id: number;
  name: string;
  image: string;
  video: string;
  description: string;
}

export const cards: Card[] = [
  { 
    id: 1, 
    name: 'Kichi', 
    image: kichiImg,
    video: kichiVideo,
    description: 'A legendary warrior fox with mastery over fire elements. Known for quick, devastating attacks that can turn the tide of battle in an instant.'
  },
  { 
    id: 2, 
    name: 'Ratieza', 
    image: ratiezaImg,
    video: ratiezaVideo,
    description: 'An ancient dragon spirit in feline form. Possesses the ability to manipulate cosmic energies and create dimensional rifts.'
  },
  { 
    id: 3, 
    name: 'Saruffy', 
    image: saruffyImg,
    video: saruffyVideo,
    description: 'A cheerful adventurer with the power to harness nature\'s energy. Their presence boosts the morale of all allied cards.'
  },
  { 
    id: 4, 
    name: 'Akai Tsuki', 
    image: akaiTsukiImg,
    video: akaiTsukiVideo,
    description: 'Guardian of the Blood Moon, wielding dark magic that grows stronger as night falls. Can sacrifice health for powerful abilities.'
  },
  { 
    id: 5, 
    name: 'Catto', 
    image: cattoImg,
    video: cattoVideo,
    description: 'A mystical feline sage with the power to heal allies and predict enemy movements. Masters both defensive and supportive tactics.'
  },
  { 
    id: 6, 
    name: 'Coorogi', 
    image: coorogiImg,
    video: coorogiVideo,
    description: 'An agile insectoid warrior skilled in stealth and precision strikes. Can bypass enemy defenses with lightning-fast movements.'
  },
  { 
    id: 7, 
    name: 'Toro', 
    image: toroImg,
    video: toroVideo,
    description: 'A mighty guardian with impenetrable defenses. Specializes in protecting allies and absorbing devastating blows.'
  },
  { 
    id: 8, 
    name: 'Horichi', 
    image: horichiImg,
    video: horichiVideo,
    description: 'A master of ancient martial arts who channels chi energy. Can chain together devastating combo attacks.'
  },
  { 
    id: 9, 
    name: 'Reza', 
    image: rezaImg,
    video: rezaVideo,
    description: 'A swift assassin who moves like shadows. Excels at single-target elimination and strategic positioning.'
  },
  { 
    id: 10, 
    name: 'Sukusa', 
    image: sukusaImg,
    video: sukusaVideo,
    description: 'A mystical enchanter who weaves powerful spells. Can control the battlefield through area denial and status effects.'
  },
  { 
    id: 11, 
    name: 'Gotsu', 
    image: gotsuImg,
    video: gotsuVideo,
    description: 'A battle-hardened warrior with unmatched strength. Specializes in breaking through enemy lines and disrupting formations.'
  },
  { 
    id: 12, 
    name: 'Togune', 
    image: toguneImg,
    video: toguneVideo,
    description: 'A mysterious shapeshifter with the ability to mimic any creature\'s form and abilities. Masters the art of deception and adaptability.'
  },
  { 
    id: 13, 
    name: 'Kumamo', 
    image: kumamoImg,
    video: kumamoVideo,
    description: 'An ancient bear spirit with dominion over the elements. Commands respect through both wisdom and raw power.'
  },
  { 
    id: 14, 
    name: 'Kanopio', 
    image: kanopioImg,
    video: kanopioVideo,
    description: 'A mischievous trickster with mastery over illusions. Can create duplicates and confuse enemies with phantom images.'
  }
];