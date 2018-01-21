<template>
    <Menu class="sidebar" active-name="1" theme="light" width="auto" :open-names="['1']">
        <template v-for="item in $router.options.routes" v-if="!item.hidden">
            <MenuItem :name="item.id" v-if="item.noDropdown" :key="item.id" @click.native="toPath(item.path)">
            <Icon type="document-text"></Icon>
            首页
            </MenuItem>
            <Submenu :name="item.id" v-else>
                <template slot="title">
                    <Icon :type="item.iconCls"></Icon>
                    {{item.name}}
                </template>
                <MenuItem :name="child.id" v-for="child in item.children" @click.native="toPath(item.path + '/' + child.path)" :key="child.id"> {{child.name}}
                </MenuItem>
            </Submenu>
        </template>
    </Menu>
</template>
<style rel="stylesheet/sass" lang="sass" scoped>
    @import "../../../sass/common/sidebarMenu.scss";
</style>
<script src="../../components-js/common/sidebarMenu.js"></script>