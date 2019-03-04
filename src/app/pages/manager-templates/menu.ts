export const MENU_ID = {
  COUPLE: 'couple-info',
  STORIES: 'stories',
  MAXIMS: 'maxims',
  EVENTS: 'events',
  RSVP: 'rsvp',
  ALBUM: 'album',
  MUSIC: 'music',
  VIDEO: 'video',
  SLIDE: 'slide',
  TEMPLATES: 'templates',
};

export const MENU = [
  // {
  //   id: 'INVITATION',
  //   name: 'Thư mời',
  //   icon: 'fa fa-envelope-o',
  //   path: 'invitation',
  //   exact: true,
  // },
  // {
  //   id: 'DATING',
  //   name: 'Hẹn hò',
  //   icon: 'fa fa-calendar',
  //   path: 'dating-info',
  //   exact: true,
  // },
  {
    id: MENU_ID.COUPLE,
    name: 'Cặp đôi',
    icon: 'fa fa-id-card-o',
    path: '/manager-templates/couple-info',
  },
  {
    id: MENU_ID.STORIES,
    name: 'Câu chuyện',
    icon: 'fa fa-file-text-o',
    path: '/manager-templates/stories',
  },
  {
    id: MENU_ID.MAXIMS,
    name: 'Châm ngôn',
    icon: 'fa fa-commenting-o',
    path: '/manager-templates/maxims',
  },
  {
    id: MENU_ID.EVENTS,
    name: 'Sự kiện',
    icon: 'fa fa-list-alt',
    path: '/manager-templates/events',
  },
  {
    id: MENU_ID.RSVP,
    name: 'RSVP',
    icon: 'fa fa-th-list',
    path: '/manager-templates/rsvp',
  },
  {
    id: MENU_ID.MUSIC,
    name: 'Nhạc',
    icon: 'fa fa-music',
    path: '/manager-templates/music',
  },
  {
    id: MENU_ID.ALBUM,
    name: 'Album',
    icon: 'fa fa-th-large',
    path: '/manager-templates/album',
  },
  {
    id: MENU_ID.VIDEO,
    name: 'Video',
    icon: 'fa fa-video-camera',
    path: '/manager-templates/video',
  },
  // {
  //   id: 'BACKGROUND',
  //   name: 'Hình nền',
  //   icon: 'fa fa-picture-o',
  //   path: 'background',
  // },
  {
    id: MENU_ID.SLIDE,
    name: 'Slide',
    icon: 'fa fa-picture-o',
    path: '/manager-templates/slide',
  },
  {
    id: MENU_ID.TEMPLATES,
    name: 'Thiệp',
    icon: 'fa fa-th',
    path: '/manager-templates/user-templates',
  },
  // {
  //   id: 'SETTING',
  //   name: 'Tùy chỉnh',
  //   icon: 'fa fa-cog',
  //   path: 'setting',
  // },
];
