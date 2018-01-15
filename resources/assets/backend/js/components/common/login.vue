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
    @import "../../../sass/common/login.scss";
</style>
<script src="../../components-js/common/login.js"></script>