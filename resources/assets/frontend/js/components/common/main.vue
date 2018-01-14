<template>
    <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo"></div>
                    <div class="layout-nav">
                        <Menu mode="horizontal" :theme="theme1" active-name="1">
                            <MenuItem name="1">
                            <Icon type="ios-paper"></Icon>
                            git文档
                            </MenuItem>
                            <MenuItem name="2">
                            <Icon type="ios-people"></Icon>
                            swoole文档
                            </MenuItem>
                            <Submenu name="3">
                                <template slot="title">
                                    <Icon type="stats-bars"></Icon>
                                    PHP相关
                                </template>
                                <MenuGroup title="基础">
                                    <MenuItem name="3-1">安装和使用</MenuItem>
                                    <MenuItem name="3-2">活跃分析</MenuItem>
                                    <MenuItem name="3-3">时段分析</MenuItem>
                                </MenuGroup>
                                <MenuGroup title="进阶">
                                    <MenuItem name="3-4">用户留存</MenuItem>
                                    <MenuItem name="3-5">流失用户</MenuItem>
                                </MenuGroup>
                            </Submenu>
                            <MenuItem name="4">
                            <Icon type="settings"></Icon>
                            linux服务器
                            </MenuItem>
                        </Menu>
                    </div>
                </Menu>
            </Header>
            <Layout>
                <Sider hide-trigger :style="{background: '#fff'}">
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
                <Layout :style="{padding: '0 24px 24px'}">
                    <Breadcrumb :style="{margin: '24px 0'}">
                        <BreadcrumbItem>Home</BreadcrumbItem>
                        <BreadcrumbItem>Components</BreadcrumbItem>
                        <BreadcrumbItem>Layout</BreadcrumbItem>
                    </Breadcrumb>
                    <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                        <router-view></router-view>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    </div>
    </div>
</template>
<style type="text/scss" scope="scope">
    @import "../../../sass/common/main.scss";
</style>
<script src="./main.js"></script>