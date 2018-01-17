<template>
        <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
            <Submenu name="1" v-for="item in $router.options.routes" v-if="!item.hidden">
                <template slot="title">
                    <Icon :type="item.iconCls"></Icon>
                    <!-- <i :class="item.iconCls"></i> -->
                    {{item.name}}
                </template>
                <MenuItem name="1-1" v-for="child in item.children">{{child.name}}</MenuItem>
            </Submenu>
            <!-- <Submenu name="2">
                <template slot="title">
                    <Icon type="ios-keypad"></Icon>
                    Item 2
                </template>
                <MenuItem name="2-1">Option 1</MenuItem>
                <MenuItem name="2-2">Option 2</MenuItem>
            </Submenu>
            <Submenu name="3">
                <template slot="title">
                    <Icon type="ios-analytics"></Icon>
                    Item 3
                </template>
                <MenuItem name="3-1">Option 1</MenuItem>
                <MenuItem name="3-2">Option 2</MenuItem>
            </Submenu> -->
        </Menu>
</template>
<style type="text/scss" scope="scope">
    @import "../../../sass/common/sidebarMenu.scss";
</style>
<script src="../../components-js/common/sidebarMenu.js"></script>