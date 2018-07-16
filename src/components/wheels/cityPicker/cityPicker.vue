<template>
    <div class="container">
       <section class="city-picker" v-if="showCityPicker">
            
            <am-select  @select="proviceHandle" :options="province" search placeholder="请选择省、直辖市"></am-select>
            <am-select v-if="city.length > 0" @select="cityHandle" search :options="city" placeholder="请选择市、区"></am-select>
            <am-select v-if="county.length > 0" @select="countyHandle" search :options="county" placeholder="请选择区、县"></am-select>
        </section>
        <section class="city-picker" v-if="!showCityPicker">
            <!-- <span>{{selectProvince}}-</span>
            <span>{{selectCity}}-</span>
            <span>{{selectCounty}}</span> -->
            <select  disabled="disabled" style="background-color: lightgray;">
                <option value="diable">{{selectProvince}}</option>
            </select>
             <select  disabled="disabled" style="background-color: lightgray;">
                <option value="diable">{{selectCity}}</option>
            </select>
             <select  disabled="disabled" style="background-color: lightgray;">
                <option value="diable">{{selectCounty}}</option>
            </select>
            <!-- <am-select  @select="proviceHandle" :options="province" search placeholder="请选择省、直辖市"></am-select>
            <am-select v-if="city.length > 0" @select="cityHandle" search :options="city" placeholder="请选择市、区"></am-select>
            <am-select v-if="county.length > 0" @select="countyHandle" search :options="county" placeholder="请选择区、县"></am-select> -->
        </section>
    </div>
</template>

<script>
import locationData from "./location";
import Axios from "axios";

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
        // selectProvince: null,
        // selectCity: null,
        // selectCounty: null,
    };
  },
  props: {
    selectIndy: Object
  },
  mounted: () => {
    // console.log(this.selectIndy);
    // this.province = [this.selectProvince];
    // this.city = [this.selectCity];
    // this.county = [this.selectCounty];
    eventBus.$on("eventBusName", function(data) {
      console.log(data);
      this.selectProvince = data.province;
      this.selectCity = data.city;
      this.selectCounty = data.county;
    });
  },
  watch: {
    selectIndy(newvalue, oldvalue) {
      console.log(newvalue);
    }
  },
  updated: () => {
    console.log(this.selectIndy);
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
      this.$store.commit("UserCenter/changeSelectProvince", value.name);
      //   this.selectProvince = value.name;
      //   this.selectCity = null;
      //   this.selectCounty = null;
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
      this.$store.commit("UserCenter/changeSelectCity", value.name);
      //   this.selectCity = value.name;
      //   this.selectCounty = null;
    },
    countyHandle(value) {
      //   this.selectCounty = value.name;
      //   this.$store.commit("UserCenter/changeSelectProvince", this.selectProvince);
      //   this.$store.commit("UserCenter/changeSelectCity", this.selectCity);
      this.$store.commit("UserCenter/changeSelectCounty", value.name);
      console.log(this.selectProvince);
      console.log(this.selectCity);
      console.log(this.selectCounty);
    }
  },
  computed: {
    showCityPicker() {
      return this.$store.state.UserCenter.enterpriseInfo.showCityPicker;
    },
    selectProvince() {
      return this.$store.state.UserCenter.enterpriseInfo.selectProvince;
    },
    selectCity() {
      return this.$store.state.UserCenter.enterpriseInfo.selectCity;
    },
    selectCounty() {
      return this.$store.state.UserCenter.enterpriseInfo.selectCounty;
    },
    useremail() {
      return this.$store.state.loginPage.useremail;
    },
    session_id() {
      return this.$store.state.loginPage.session_id;
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