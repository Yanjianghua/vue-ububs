export default {
    data() {
        return {
        };
    },
    mounted() {
    },
    methods: {
    	logout: function() {
            let _this = this;
            axios.post('/backend/logout').then((response) => {
                let { message } = response.data;
                localStorage.removeItem("admin_data");
                _this.$store.commit('setStateValue', { 'admin_data': {} });
                _this.$Message.success(message);
                _this.$router.push({ path: '/login' });
            });
        }
    }
}