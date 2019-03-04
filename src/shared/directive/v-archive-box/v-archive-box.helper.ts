export class ArchiveBoxHelper {
  public initMenu(id?: number, name?: string) {
    const menu = [
      { name: 'home', path: 'home', children: [] },
      { name: 'Tạo thiệp', path: 'templates', children: [] },
      {
        name: 'Quản lý thiệp',
        path: 'manager-templates',
        children: [
          {
            name: 'Cặp đôi',
            path: 'couple-info',
          },
          {
            name: 'Câu chuyện',
            path: 'stories',
          },
          {
            name: 'Châm ngôn',
            path: 'maxims',
          },
          {
            name: 'Sự kiện',
            path: 'events',
          },
          {
            name: 'RSVP',
            path: 'rsvp',
          },
          {
            name: 'Nhạc nền',
            path: 'music',
          },
          {
            name: 'Album',
            path: 'album',
            children: [
              {
                name: 'Sửa',
                path: 'edit',
                children: []
              },
              {
                name: 'Chi tiết',
                path: `${id}`,
              }
            ]
          },
          {
            name: 'Slide',
            path: 'slide',
          },
          {
            name: 'Video',
            path: 'video',
          },
          {
            name: 'Thiệp',
            path: 'user-templates',
          },
        ]
      },
      {
        name: id ? 'Cửa hàng của tôi' : 'Cửa hàng',
        path: 'stores',
        children: [
          {
            name: '',
            path: `${id}`,
            children: [
              {
                name: 'Thông tin',
                path: 'infor',
              }
            ]
          }
        ]
      },
      {
        name: 'Tài khoản',
        path: 'account',
          children: [
          {
            name: 'Thông tin',
            path: 'infor'
          }
        ]
      },
    ];

    return menu;
  }
}
