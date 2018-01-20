<template>
    <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo"></div>
                    <headerMenu></headerMenu>
                </Menu>
            </Header>
            <Layout>
                <Sider hide-trigger :style="{background: '#fff'}">
                    <sidebarMenu></sidebarMenu> 
                </Sider>
                <Layout :style="{padding: '14px'}">
                    <Content :style="{padding: '14px', minHeight: '280px', background: '#fff'}">
                        <router-view></router-view>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>
<style type="text/scss" scope="scope">
    @import "../../../sass/common/main.scss";
</style>
<script src="../../components-js/common/main.js"></script>