import Home from '../Home';
import { Artistas } from '../Artistas';
import { Canciones } from '../Canciones';
import { Albums } from '../Albums';
import Radio from '../Radio';
import Perfil from '../Perfil';
import { Icon } from "react-icons-kit";
import {ic_home} from 'react-icons-kit/md/ic_home';
import {ic_person} from 'react-icons-kit/md/ic_person';
import {ic_music_note} from 'react-icons-kit/md/ic_music_note';
import {ic_disc_full} from 'react-icons-kit/md/ic_disc_full';
import {ic_radio} from 'react-icons-kit/md/ic_radio';

export const SidebarData = [
    {
    
        link: '/',
        defaultRoute: true,
        title: 'Home',
        icon: <Icon icon={ic_home} />,
        component: <Home />,
        
      },
      {
    
        link: '/radio',
        defaultRoute: false,
        title: 'Radio',
        icon: <Icon icon={ic_radio} />,
        component: <Radio />,
        
      },
    {
    
        link: '/artistas',
        defaultRoute: false,
        title: 'Artistas',
        icon: <Icon icon={ic_person} />,
        component: <Artistas />,
        
      },
      {
        
        link: '/canciones',
        defaultRoute: false,
        title: 'Canciones',
        icon: <Icon icon={ic_music_note} />,
        component: <Canciones />,
        
      },
      {
        
        link: '/albums',
        defaultRoute: false,
        title: 'Albums',
        icon: <Icon icon={ic_disc_full} />,
        component: <Albums />
        
      },
      {
        
        link: '/perfil',
        defaultRoute: false,
        title: 'Perfil',
        component: <Perfil />
        
      },
]