import headerMenu from '../../components/common/headerMenu.vue';
import sidebarMenu from '../../components/common/sidebarMenu.vue';
export default {
    components: {
        headerMenu,
        sidebarMenu
    },
    data() {
        return {
            scrollTopVisit: false
        };
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            if (scrollTop > 200) {
                this.scrollTopVisit = true;
            } else {
                this.scrollTopVisit = false;
            }
        },
        returnTop() {
            let scroptTopTimer = setInterval(function() {
                document.documentElement.scrollTop = document.documentElement.scrollTop - 50;
                if (document.documentElement.scrollTop == 0) {
                    clearInterval(scroptTopTimer);
                }
            }, 10);

            // console.log(document.body.scrollTop);
            // console.log();
            // document.body.scrollTop = 0
            // document.documentElement.scrollTop = 0
        }
    }
}