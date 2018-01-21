import Vue from 'vue';

const plugins = {
    install: function(Vue, options) {
        //获取X轴坐标
        Vue.getX = function(evt) {
            evt = evt || window.event;
            return evt.clientX;
        };
        //获取Y轴坐标
        Vue.getY = function(evt) {
            evt = evt || window.event;
            return evt.clientY
        };
        // 过滤search条件
        Vue.parseSearch =  function(searchCondition) {
            let result = [];
            if (Object.keys(searchCondition).length == 0) {
                return result;
            }
            for (let key in searchCondition) {
                if (searchCondition[key].value === '' || searchCondition[key].value === [] || searchCondition[key].value === {}) {
                    continue;
                }
                let temp = {};
                temp[key] = [searchCondition[key].value, searchCondition[key].type];
                result.push(temp);
            }
            return JSON.stringify(result);
        }
    }
};
Vue.use(plugins);
export default plugins;