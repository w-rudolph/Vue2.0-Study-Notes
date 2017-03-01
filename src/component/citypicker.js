 var cityPicker = Vue.component('citypicker', {
            template: '#citypicker-tpl',
            data: function () {
                return {
                    province: '0',
                    city: '0',
                    district: '0'
                }
            },
            computed: {
                provinces: function(){
                    return cityData.map(function (item) {
                        return {
                            item_code: item.item_code,
                            item_name: item.item_name
                        }
                    })
                },
                cities: function () {
                    return this.getData(cityData, this.province);
                },
                districts: function () {
                    return this.getData(this.cities, this.city);
                }
            },
            methods:{
                getData: function (data, key) {
                    var res = data.filter(function (item) {
                        return item.item_code === key;
                    })
                    if (res.length) return res[0].childnodes;
                    return [];
                }
            },
            watch: {
                province: function (newV, oldV) {
                    this.city = '0';
                },
                city: function (newV, oldV) {
                    this.district = '0';
                }
            }
        });