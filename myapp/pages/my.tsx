import {NextPage} from "next";
import { observer } from 'mobx-react'
import countStore from "../store/count";

const my:NextPage = observer(()=>{
    return(
        <>
            <h1>내 페이지</h1>
            <div>{countStore.number}</div>
            <button onClick={countStore.increase}>+</button>
            <button onClick={countStore.decrease}>-</button>
        </>
    )
});
export default my;