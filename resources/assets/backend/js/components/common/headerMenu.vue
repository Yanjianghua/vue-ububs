<template>
    <div class="layout-nav">
        <MenuItem name="1">
        <Icon type="ios-navigate"></Icon>
        网站首页
        </MenuItem>
        <MenuItem name="2">
        <Icon type="ios-keypad"></Icon>
        网站首页
        </MenuItem>
        <MenuItem name="3">
        <Icon type="ios-analytics"></Icon>
        网站首页
        </MenuItem>
        <Submenu name="3">
            <template slot="title">
                <Icon type="stats-bars"></Icon>
                {{this.$store.state.admin_data.username}}
            </template>
            <MenuItem name="3-1">个人中心</MenuItem>
            <MenuItem name="3-2">网站设置</MenuItem>
            <MenuItem name="3-3">刷新缓存</MenuItem>
            <MenuItem name="3-4" @click.native="logout">退出</MenuItem>
        </Submenu>
    </div>
</template>
<style rel="stylesheet/sass" lang="sass" scoped>
    @import "../../../sass/common/headerMenu.scss";
</style>
<script src="../../components-js/common/headerMenu.js"></script>