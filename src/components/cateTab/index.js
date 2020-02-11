import { View, Text, Image, Navigator } from '@tarojs/components';
import Taro, { useState, useEffect } from '@tarojs/taro';
import './index.less'
function CateTab(props) {
    console.log(props)
    const [gameCate, setGameCate] = useState(props.allCate)
    const [cur, setCur] = useState(0);
    function setprops(i) {
        setCur(i);
        props.chooseCate(i)
    }
    return (
        <View className="game_tab">
            {
                gameCate.map((item, index) => {
                    return (
                        <View key={index} className={index == cur ? "active" : ''} onClick={() => setprops(index)}>{item}</View>
                    )
                })
            }
        </View>
    )
}

export default CateTab;