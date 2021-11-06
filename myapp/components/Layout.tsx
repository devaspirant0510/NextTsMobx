import React, {ReactElement} from "react";
import Head from "next/head";
import {FunctionComponent} from "react";

// children 은 요소 엘리먼트
// 나머지값들은 props
const Layout:FunctionComponent<LayoutProps> = ({title,children} :LayoutProps) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <main>
                {children}
            </main>
        </>
    )
}
// props 타입 맞춰주기
interface LayoutProps {
    children: React.ReactNode,
    title:string,
}

export default Layout;
