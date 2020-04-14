import Mock from 'mockjs';

Mock.mock('/api/itemlist', 'post', {
    code: 0,
    'data|6': [{
        name: '海上钢琴师',
        imgurl: 'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2574551676.webp',
        'type|1': ['1','2','3']
    }],
    msg: '请求成功'
})

Mock.mock('/movies/v2/movie/in_theaters', 'get', {
    code: 0,
    'data|6': [{
        name: '海上钢琴师',
        imgurl: 'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2574551676.webp',
        'type|1': ['1','2','3']
    }],
    msg: '请求成功'
})
