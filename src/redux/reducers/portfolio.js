import { INCREMENT } from "../constant";
import ReactRedux from "../../components/Main/Portfolio/React-Redux";

const initState = [
    {id:'11', name:'Yilan', url: 'yilan', title:'2023/02/25宜蘭遊'},
    {id:'00' ,name:'SectumSempra', url: 'sectumsempra', title:'SectumSempra'},
    {id:'01' ,name:'TaiwanMap', url: 'taiwanmap', title:'TaiwanMap'},
    {id:'02' ,name:'ReactRedux', url: 'reactredux', title:'React-Redux'},
    {id:'03' ,name:'Poker', url: 'poker', title:'Poker'},
    {id:'04' ,name:'UserSearch', url: 'usersearch', title:'UserSearch'},
    {id:'05' ,name:'TodoList', url: 'todolist', title:'TodoList'},
    {id:'06' ,name:'MouseMove', url: 'mousemove', title:'MouseMove!'},
    {id:'07' ,name:'KFC', url: 'kfc', title:'KFC優惠券快選'},
    {id:'08' ,name:'Natsumatsuri', url: 'natsumatsuri', title:'夏季開始!'},
    {id:'09' ,name:'Roulette', url: 'roulette', title:'想不到吃甚麼?'},
    {id:'10' ,name:'50on', url: '50on', title:'來學習50音吧!'},
];
export default function portfolioReducer(prevState=initState, action){
    const {type, data} = action
    switch(type) {
        case INCREMENT :
            return [data, ...prevState]
        default:
            return prevState;
    }
}