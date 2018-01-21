export default {
    data() {
        return {
            search: {
                username: '',
                permission_id: '',
            },
            cityList: [{
                    value: 'New York',
                    label: 'New York'
                }
            ],
            columns: [{
                    type: 'selection',
                    width: 60,
                    align: 'center'
                }, {
                    title: '帐号',
                    key: 'username',
                },
                {
                    title: '邮箱',
                    key: 'email'
                },
                {
                    title: '管理员等级',
                    key: 'permission_id'
                },
                {
                    title: '最后登录ip',
                    key: 'last_login_ip'
                },
                {
                    title: '最后登录时间',
                    key: 'last_login_time'
                },
                {
                    title: '操作',
                    key: 'action',
                    width: 150,
                    align: 'center',
                    render: (h, params) => {
                        return h('div', [
                            h('Button', {
                                props: {
                                    type: 'primary',
                                    size: 'small'
                                },
                                style: {
                                    marginRight: '5px'
                                },
                                on: {
                                    click: () => {
                                        this.show(params.index)
                                    }
                                }
                            }, 'View'),
                            h('Button', {
                                props: {
                                    type: 'error',
                                    size: 'small'
                                },
                                on: {
                                    click: () => {
                                        this.remove(params.index)
                                    }
                                }
                            }, 'Delete')
                        ]);
                    }
                }
            ],
            data: [],
            pagination: {
                total: 0,
                currentPage: 1,
                pageSize: 20,
            }
        }
    },
    mounted() {
        this.getLists();
    },
    methods: {
        getLists() {
            let _this = this;
            let paramsData = {
                'search': _this.search,
                'page': _this.pagination.currentPage,
                'pageSize': _this.pagination.pageSize
            };
            axios.get('/backend/admins', { params: paramsData }).then((response) => {
                let {data, message} = response.data;
                _this.data = data.lists.data;
                _this.pagination.total = data.lists.total;
            })
        },
        show(index) {
            this.$Modal.info({
                title: 'User Info',
                content: this.data[index].name
            })
        },
        remove(index) {
            this.data.splice(index, 1);
        },
        currentPageChange: function(currentPage) {
            this.pagination.currentPage = currentPage;
            this.getLists();
        },
        pageSizeChange: function(pageSize) {
            this.pagination.pageSize = pageSize;
            this.getLists();
        },
    }
}