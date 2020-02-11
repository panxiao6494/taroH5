import { FetchGameList } from '../constants/funType';


const gameList = [
    [
        { imgUrl: require('../../images/game/1.png'), gameName: '愤怒的小鸟1' },
        { imgUrl: require('../../images/game/13.png'), gameName: '植物大战僵尸' },
        { imgUrl: require('../../images/game/3.png'), gameName: '愤怒的小鸟1' },
        { imgUrl: require('../../images/game/4.png'), gameName: '愤怒的小鸟3' },
        { imgUrl: require('../../images/game/2.png'), gameName: '安卓应用' },
        { imgUrl: require('../../images/game/8.png'), gameName: '逆风飞翔逆风飞翔' },
        { imgUrl: require('../../images/game/11.png'), gameName: '微信talk' },
        { imgUrl: require('../../images/game/7.png'), gameName: '吃糖果小人' },
        { imgUrl: require('../../images/game/5.png'), gameName: '发哥' },
        { imgUrl: require('../../images/game/4.png'), gameName: '愤怒的小鸟3' },
        { imgUrl: require('../../images/game/1.png'), gameName: '愤怒的小鸟1' },
        { imgUrl: require('../../images/game/8.png'), gameName: '逆风飞翔' },
        { imgUrl: require('../../images/game/9.png'), gameName: '水果忍者' },
        { imgUrl: require('../../images/game/4.png'), gameName: '愤怒的小鸟3' },
        { imgUrl: require('../../images/game/7.png'), gameName: '吃糖小人' },
        { imgUrl: require('../../images/game/13.png'), gameName: '植物大战僵尸' },
        { imgUrl: require('../../images/game/8.png'), gameName: '逆风飞翔' },
        { imgUrl: require('../../images/game/6.png'), gameName: '计时器' },
        { imgUrl: require('../../images/game/13.png'), gameName: '植物大战僵尸' },
        { imgUrl: require('../../images/game/12.png'), gameName: '爱冒险的小猪' },
        { imgUrl: require('../../images/game/3.png'), gameName: '愤怒的小鸟2' },
        { imgUrl: require('../../images/game/9.png'), gameName: '水果忍者' },
        { imgUrl: require('../../images/game/1.png'), gameName: '愤怒的小鸟1' },
        { imgUrl: require('../../images/game/11.png'), gameName: '微信talk' }
    ],
    [
        { imgUrl: require('../../images/game/10.png'), gameName: "talk即时聊天" },
        { imgUrl: require('../../images/game/3.png'), gameName: '愤怒的小鸟2' },
        { imgUrl: require('../../images/game/9.png'), gameName: '水果忍者' },
        { imgUrl: require('../../images/game/1.png'), gameName: '愤怒的小鸟1' },
        { imgUrl: require('../../images/game/11.png'), gameName: '微信talk' },
        { imgUrl: require('../../images/game/1.png'), gameName: '愤怒的小鸟1' },
        { imgUrl: require('../../images/game/11.png'), gameName: '微信talk' },
        { imgUrl: require('../../images/game/8.png'), gameName: '逆风飞翔' },
        { imgUrl: require('../../images/game/7.png'), gameName: '吃糖果小人' },
        { imgUrl: require('../../images/game/3.png'), gameName: '愤怒的小鸟2' },
        { imgUrl: require('../../images/game/9.png'), gameName: '水果忍者' },
        { imgUrl: require('../../images/game/1.png'), gameName: '愤怒的小鸟1' },
        { imgUrl: require('../../images/game/11.png'), gameName: '微信talk' },
        { imgUrl: require('../../images/game/8.png'), gameName: '逆风飞翔' }
    ],
    [

        { imgUrl: require('../../images/game/3.png'), gameName: '愤怒的小鸟5' },
        { imgUrl: require('../../images/game/13.png'), gameName: '植物大战僵尸' },
        { imgUrl: require('../../images/game/9.png'), gameName: '水果忍者' },
        { imgUrl: require('../../images/game/8.png'), gameName: '逆风飞翔' },
        { imgUrl: require('../../images/game/11.png'), gameName: '微信talk' },
        { imgUrl: require('../../images/game/8.png'), gameName: '逆风飞翔' },
        { imgUrl: require('../../images/game/1.png'), gameName: '愤怒的小鸟1' },
        { imgUrl: require('../../images/game/3.png'), gameName: '愤怒的小鸟2' },
        { imgUrl: require('../../images/game/7.png'), gameName: '吃糖果小人' },
        { imgUrl: require('../../images/game/1.png'), gameName: '愤怒的小鸟1' },
        { imgUrl: require('../../images/game/11.png'), gameName: '微信talktalktalk' },
        { imgUrl: require('../../images/game/6.png'), gameName: '计时器' },
        { imgUrl: require('../../images/game/9.png'), gameName: '水果忍者' },
        { imgUrl: require('../../images/game/11.png'), gameName: '微信talk' }
    ],
    [
        { imgUrl: require('../../images/game/11.png'), gameName: '微信talk' },
        { imgUrl: require('../../images/game/3.png'), gameName: '愤怒的小鸟5' },
        { imgUrl: require('../../images/game/13.png'), gameName: '植物大战僵尸' },
        { imgUrl: require('../../images/game/8.png'), gameName: '逆风飞翔' },
        { imgUrl: require('../../images/game/3.png'), gameName: '愤怒的小鸟2' },
        { imgUrl: require('../../images/game/7.png'), gameName: '吃糖果小人' },
        { imgUrl: require('../../images/game/6.png'), gameName: '计时器' },
        { imgUrl: require('../../images/game/13.png'), gameName: '植物大战僵尸' },
        { imgUrl: require('../../images/game/9.png'), gameName: '水果忍者' },
        { imgUrl: require('../../images/game/1.png'), gameName: '愤怒的小鸟1' },
        { imgUrl: require('../../images/game/11.png'), gameName: '微信talk' },
        { imgUrl: require('../../images/game/8.png'), gameName: '逆风飞翔' },
        { imgUrl: require('../../images/game/1.png'), gameName: '愤怒的小鸟1' },
        { imgUrl: require('../../images/game/11.png'), gameName: '微信talktalktalk' },
        { imgUrl: require('../../images/game/6.png'), gameName: '计时器' },
        { imgUrl: require('../../images/game/9.png'), gameName: '水果忍者' },
        { imgUrl: require('../../images/game/11.png'), gameName: '微信talk' }
    ]
]
export const fetchGame = (payLoad) => {
    return {
        payLoad: payLoad,
        type: FetchGameList
    }
}


export function asyncGame() {

    return dispatch => {
        const res = gameList;
        setTimeout(() => {
            dispatch(fetchGame(res))
        }, 1500)
    }
}