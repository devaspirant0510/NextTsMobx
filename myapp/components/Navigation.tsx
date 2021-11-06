import {FunctionComponent} from "react";
import Link from "next/link";

const Navigation: FunctionComponent = () => {
    return (
        <>
            <ul>
                <Link href="/">홈</Link>
                <Link href="/my">내정보</Link>
                <Link href="/setting">설정</Link>
            </ul>
        </>
    )
}


export default Navigation;