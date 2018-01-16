export default {
    data() {
        return {
            loginForm: {
                account: '',
                password: '',
                remeber: true
            },
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
                    _this.loading = true;
                    axios.post('/backend/login', _this.loginForm).then(function(response) {
                        _this.loading = false;
                        let { status, data, message } = response.data;
                        if (!status) {
                            _this.$message.error(message);
                            return false;
                        }
                        _this.$store.commit('setStateValue', { 'admin_data': data.list });
                        _this.$message.success(message);
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