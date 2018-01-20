export default {
    data() {
        return {
            search: {
                username: '',
                permission_id: '',
            },
            pagination: {
                current_page: ''
            },
            cityList: [{
                    value: 'New York',
                    label: 'New York'
                },
                {
                    value: 'London',
                    label: 'London'
                },
                {
                    value: 'Sydney',
                    label: 'Sydney'
                },
                {
                    value: 'Ottawa',
                    label: 'Ottawa'
                },
                {
                    value: 'Paris',
                    label: 'Paris'
                },
                {
                    value: 'Canberra',
                    label: 'Canberra'
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
            data: [{
                    name: 'John Brown',
                    age: 18,
                    address: 'New York No. 1 Lake Park'
                },
                {
                    name: 'Jim Green',
                    age: 24,
                    address: 'London No. 1 Lake Park'
                },
                {
                    name: 'Joe Black',
                    age: 30,
                    address: 'Sydney No. 1 Lake Park'
                },
                {
                    name: 'Jon Snow',
                    age: 26,
                    address: 'Ottawa No. 2 Lake Park'
                }
            ],
            pagination: {
                total: 100000,
                currentPage: 2,
                pageSize: 15,
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
                'pagination': _this.pagination
            };
            axios.get('/backend/admins', { params: paramsData }).then(response => {

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
        currentPageChange() {},
        pageSizeChange() {},
    }
}