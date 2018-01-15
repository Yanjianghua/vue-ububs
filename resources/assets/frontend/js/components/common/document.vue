<template>
    <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo"></div>
                    <div class="layout-nav">
                        <Menu mode="horizontal" :theme="theme1" active-name="1">
                            <MenuItem name="1"><a href="http://www.baidu.com">首页</a></MenuItem>
                            <MenuItem name="2">
                            <Icon type="ios-paper"></Icon><router-link to="/document/index">git文档</router-link></MenuItem>
                            <MenuItem name="3">
                            <Icon type="ios-people"></Icon>swoole文档</MenuItem>
                            <Submenu name="4">
                                <template slot="title">
                                    <Icon type="stats-bars"></Icon>
                                    PHP相关
                                </template>
                                <MenuGroup title="基础">
                                    <MenuItem name="4-1">安装和使用</MenuItem>
                                    <MenuItem name="4-2">活跃分析</MenuItem>
                                    <MenuItem name="4-3">时段分析</MenuItem>
                                </MenuGroup>
                                <MenuGroup title="进阶">
                                    <MenuItem name="4-4">用户留存</MenuItem>
                                    <MenuItem name="4-5">流失用户</MenuItem>
                                </MenuGroup>
                            </Submenu>
                            <MenuItem name="5">
                            <Icon type="settings"></Icon>
                            linux服务器
                            </MenuItem>
                        </Menu>
                    </div>
                </Menu>
            </Header>
            <Layout>
                <Sider hide-trigger :style="{background: '#fff'}" v-show="this.$route.path != '/'">
                    <Menu :theme="theme3" width="auto" active-name="1">
                        <MenuGroup title="内容管理">
                            <MenuItem name="1">
                            <Icon type="document-text"></Icon>
                            文章管理
                            </MenuItem>
                            <MenuItem name="2">
                            <Icon type="chatbubbles"></Icon>
                            评论管理
                            </MenuItem>
                        </MenuGroup>
                        <MenuGroup title="统计分析">
                            <MenuItem name="3">
                            <Icon type="heart"></Icon>
                            用户留存
                            </MenuItem>
                            <MenuItem name="4">
                            <Icon type="heart-broken"></Icon>
                            流失用户
                            </MenuItem>
                        </MenuGroup>
                    </Menu>
                </Sider>
                <Layout :style="{padding: '14px'}">
                    <Content :style="{padding: '14px', minHeight: '580px', background: '#fff'}">
                        <router-view></router-view>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>
<style type="text/scss" scope="scope">
    @import "../../../sass/common/document.scss";
</style>
<script src="../../components-js/common/document.js"></script>