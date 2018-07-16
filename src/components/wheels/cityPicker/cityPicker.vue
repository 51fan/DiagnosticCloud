<template>
    <div class="container">
       <section class="city-picker" v-if="showCityPicker">
            
            <am-select  @select="proviceHandle" :options="province" search placeholder="请选择省、直辖市"></am-select>
            <am-select v-if="city.length > 0" @select="cityHandle" search :options="city" placeholder="请选择市、区"></am-select>
            <am-select v-if="county.length > 0" @select="countyHandle" search :options="county" placeholder="请选择区、县"></am-select>
        </section>
        <section class="city-picker" v-if="!showCityPicker">
            <select  disabled="disabled" style="background-color: lightgray;">
                <option value="diable">请选择省、直辖市</option>
            </select>
        </section>
        
        <!-- <p v-if="address">您选择的是：<span class="am-text-success">{{ address }}</span></p> -->
    </div>
</template>

<script>
import locationData from "./location";

export default {
  name: "city-picker",
  data: () => {
    const province = [];
    for (let code in locationData) {
      let item = locationData[code];
      province.push(
        Object.assign(item, {
          label: item.name
        })
      );
    }
    return {
      province,
      city: [],
      county: [],
      selectProvince: null,
      selectCity: null,
      selectCounty: null,
    };
  },
  methods: {
    proviceHandle(value) {
      const city = [];
      for (let code in value.cities) {
        let item = value.cities[code];
        city.push(
          Object.assign(item, {
            label: item.name
          })
        );
      }
      this.city = city;
      this.county = [];
      this.selectProvince = value.name;
      this.selectCity = null;
      this.selectCounty = null;
    },
    cityHandle(value) {
      const county = [];
      for (let code in value.districts) {
        let item = value.districts[code];
        county.push({
          code,
          label: item,
          name: item
        });
      }
      this.county = county;
      this.selectCity = value.name;
      this.selectCounty = null;
    },
    countyHandle(value) {
      this.selectCounty = value.name;
    }
  },
  computed: {
    address() {
      const { selectProvince, selectCity, selectCounty } = this;
      return (
        (selectProvince ? selectProvince : "") +
        (selectCity ? "，" + selectCity : "") +
        (selectCounty ? "，" + selectCounty : "")
      );
    },
    showCityPicker() {
      return this.$store.state.UserCenter.enterpriseInfo.showCityPicker;
    }
  }
};
</script>

<style>
.container {
  width: 45%;
  text-align: left;
}
.city-picker {
  margin-left: 3%;
}
.am-selected {
  width: 32% !important;
}
</style>