<template>
    <div>
        <div class="search-box">
            <Input v-model="search.username" placeholder="请输入搜索帐号" style="width: 150px"></Input>
            <Select v-model="search.permission_id"placeholder="请选择管理员等级" style="width:150px">
                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
            <Button type="primary">搜索</Button>
        </div>
        <Table border :columns="columns" :data="data"></Table>
        <div class="table-footer">
            <div class="batch-box">
                <Button size="small" @click="handleSelectAll(true)">批量删除</Button>
            </div>
            <div class="pagination-box">
            <Page size="small" :total="pagination.total" :current="pagination.currentPage" :page-size="pagination.pageSize" @on-change="currentPageChange" @on-page-size-change="pageSizeChange" :page-size-opts="[20, 50, 100]" show-total show-sizer></Page>
        </div>
        </div>
        
    </div>
</template>
<style type="text/scss" scope="scope">
    @import "../../../sass/admin/lists.scss";
</style>
<script src="../../components-js/admin/lists.js"></script>