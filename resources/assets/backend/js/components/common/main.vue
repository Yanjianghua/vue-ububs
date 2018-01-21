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
                    <Content :style="{padding: '14px', minHeight: '400px', background: '#fff'}">
                        <router-view></router-view>
                    </Content>
                    <Footer class="layout-footer-center">
                        <p>版权所有：2018 &copy; www.ububs.com</p>
                        <p>联系邮箱：linlm1994@gmail.com</p>
                    </Footer>
                </Layout>
            </Layout>
            <div class="top-inner" v-show="scrollTopVisit" @click.stop="returnTop">
                <span><Icon type="chevron-up"></Icon></span>
            </div>
        </Layout>
    </div>
</template>
<style rel="stylesheet/sass" lang="sass">
    @import "../../../sass/common/main.scss";
</style>
<script src="../../components-js/common/main.js"></script>