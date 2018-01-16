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
                    axios.post('/backend/login', _this.loginForm).then(function(response) {
                        _this.$store.commit('setStateValue', {'loading': false});
                        let { data, message } = response.data;
                        _this.$store.commit('setStateValue', { 'admin_data': data.list });
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