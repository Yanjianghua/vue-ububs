export default {
    data() {
        return {
            formValidate: {
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
        handleSubmit(name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    this.$Message.success('Success!');
                } else {
                    this.$Message.error('Fail!');
                }
            })
        },
        handleReset(name) {
            this.$refs[name].resetFields();
        }
    },
}