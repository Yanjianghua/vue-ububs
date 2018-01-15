<template>
    <div class="login-container">
        <Form ref="formValidate" :model="formValidate" :label-width="60" :rules="ruleValidate" class="login-form">
            <FormItem label="帐号" prop="account">
                <Input v-model="formValidate.account" placeholder="Enter your account"></Input>
            </FormItem>
            <FormItem label="密码" prop="account">
                <Input type="password" v-model="formValidate.password" placeholder="Enter your password"></Input>
            </FormItem>
            <FormItem label="记住密码">
                <i-switch v-model="formValidate.remeber">
                    <span slot="open">是</span>
                    <span slot="close">否</span>
                </i-switch>
            </FormItem>
            <FormItem>
                <Button type="primary" @click="handleSubmit('formValidate')">登录</Button>
                <Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
            </FormItem>
        </Form>
    </div>
</template>
<style type="text/scss" scope="scope">
h2 {
    font-size: 26px;
        font-weight: 400;
        color: #eeeeee;
        margin: 0px auto 40px auto;
        text-align: center;
        font-weight: bold;
}
.login-container {
    position: relative;
    height: 100vh;
    background-color: #2d3a4b;
    
}
.login-form {
        position: absolute;
        left: 0;
        right: 0;
        width: 450px;
        padding: 35px 35px 15px 35px;
        margin: 120px auto;
        background: #fafafa;
    }
</style>
<script type="text/javascript">
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
</script>