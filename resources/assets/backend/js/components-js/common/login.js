export default {
    data() {
        return {
            loginForm: {
                account: '',
                password: '',
                remeber: true
            },
            loading: false,
            ruleValidate: {
                account: [
                    { required: true, message: 'The account cannot be empty', trigger: 'blur' },
                    { type: 'string', min: 2, message: 'The account no less than 2 words', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: 'Password cannot be empty', trigger: 'blur' },
                ],
            }
        }
    },
    methods: {
        login(name) {
            let _this = this;
            _this.$refs[name].validate((valid) => {
                if (valid) {
                    _this.$store.commit('setStateValue', {'loading': true});
                    axios.post('/backend/login', _this.loginForm).then((response) => {
                        let { data, message } = response.data;
                        localStorage.setItem('admin_data',JSON.stringify(data.list));
                        _this.$store.commit('setStateValue', { 'loading': false, 'admin_data': JSON.parse(localStorage.getItem('admin_data')) });
                        _this.$Message.success(message);
                        _this.$router.push({ path: '/index' });
                    });
                }
            })
        },
        reset(name) {
            this.$refs[name].resetFields();
        }
    },
}