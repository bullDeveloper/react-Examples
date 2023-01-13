import React from 'react';
import * as FaIcons from 'react-icons/fa';

export const SidebarData = [
  /*
  {
    title: 'Messages',
    path: '/messages',
    icon: <FaIcons.FaEnvelopeOpenText />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Message 1',
        path: '/messages/message1',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Message 2',
        path: '/messages/message2',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  */
  {
    title: 'Registro de usuario',
    path: '/add-user',
    icon: <FaIcons.FaUserPlus />
  },
  {
    title: 'Modificación de usuario',
    path: '/alter-uSer',
    icon: <FaIcons.FaUserEdit />
  },
  {
    title: 'Eliminación de usuario',
    path: '/delete-user',
    icon: <FaIcons.FaUserTimes />
  },
  {
    title: 'Acerca de Nosotros',
    path: '/about-us',
    icon: <FaIcons.FaInfo />
  }
  ,
  {
    title: 'Cerrar sesión',
    path: '/logout',
    icon: <FaIcons.FaDoorClosed />
  }
];
