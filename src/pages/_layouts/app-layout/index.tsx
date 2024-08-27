import { Outlet } from "react-router-dom";

import { Content } from "./styles";

import { Header } from "@/components/layout/header";

export function AppLayout() {
    return (
        <>
            <Header />
            
            <Content>
                <Outlet />
            </Content>
        </>
    )
}