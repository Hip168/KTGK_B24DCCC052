import { Post } from './types'


export const SAMPLE_POSTS: Post[] = [
{
id: 'p1',
title: '10 xu hướng công nghệ 2025',
author: 'Nguyễn Văn A',
thumbnail: 'https://picsum.photos/seed/p1/400/250',
content: 'Nội dung dài... '.repeat(30),
category: 'Công nghệ',
createdAt: new Date().toISOString(),
},
{
id: 'p2',
title: 'Hướng dẫn du lịch Đà Nẵng',
author: 'Lê Thị B',
thumbnail: 'https://picsum.photos/seed/p2/400/250',
content: 'Nội dung dài... '.repeat(30),
category: 'Du lịch',
createdAt: new Date().toISOString(),
},
{
id: 'p3',
title: 'Các món ăn Hà Nội nên thử',
author: 'Trần C',
thumbnail: 'https://picsum.photos/seed/p3/400/250',
content: 'Nội dung dài... '.repeat(30),
category: 'Ẩm thực',
createdAt: new Date().toISOString(),
},
{
id: 'p4',
title: 'Sống tối giản: Lời khuyên thực tế',
author: 'Phạm D',
thumbnail: 'https://picsum.photos/seed/p4/400/250',
content: 'Nội dung dài... '.repeat(30),
category: 'Đời sống',
createdAt: new Date().toISOString(),
},
{
id: 'p5',
title: 'Mẹo nhỏ cho lập trình viên mới',
author: 'Võ E',
thumbnail: 'https://picsum.photos/seed/p5/400/250',
content: 'Nội dung dài... '.repeat(30),
category: 'Công nghệ',
createdAt: new Date().toISOString(),
}
]