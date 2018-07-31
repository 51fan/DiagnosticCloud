<template>
      <div class="linkage">
        <el-select
        style="width: 35%;"
        v-model="selectProvince"
        @change="choseProvince"
        :disabled="!showCityPicker"
        filterable
        placeholder="省级地区">
        <el-option
            v-for="item in provinceArray"
            :key="item.id"
            :label="item.value"
            :value="item.id">
        </el-option>
        </el-select>
        <el-select
        style="width: 32%;"
        v-model="selectCity"
        @change="choseCity"
        :disabled="!showCityPicker"
        filterable
        placeholder="市级地区">
        <el-option
            v-for="item in shiArray"
            :key="item.id"
            :label="item.value"
            :value="item.id">
        </el-option>
        </el-select>
        <el-select
        style="width: 31%;"
        v-model="selectCounty"
        @change="choseBlock"
        :disabled="!showCityPicker"
        filterable
        placeholder="区级地区">
        <el-option
            v-for="item in quArray"
            :key="item.id"
            :label="item.value"
            :value="item.id">
        </el-option>
        </el-select>
    </div>
</template>

<script>
import axios from "axios";
import mapdata from "./mapdata.js";

export default {
  name: "city-picker",
  data: () => ({
    mapJson: "/static/jsons/map.json",
    provinceArray: "",
    // sheng: "",
    // shi: "",
    shiArray: "",
    // qu: "",
    quArray: "",
    city: "",
    block: ""
  }),
  mounted: () => {
    console.log(this.selectProvince);
    console.log(this.selectCity);
    console.log(this.selectCounty);
  },
  methods: {
    getEnterprierData() {
      let $this = this,
        apikey = "",
        request = {
          email: this.useremail,
          session_id: this.session_id
        };
      $this.$http
        .post("/IBUS/DAIG_SYS/getEnterpriseInfo", {
          apikey,
          request
        })
        .then(res => {
          $this.selectProvince = res.data.return.province;
          $this.selectCity = res.data.return.city;
          $this.selectCounty = res.data.return.area;

          $this.getCityData();
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 加载china地点数据，三级
    getCityData() {
      var data = mapdata;
      this.provinceArray = [];
      this.city = [];
      this.block = [];
      this.shiArray = [];
      this.quArray = [];
      // 省市区数据分类
      for (var item in data) {
        if (item.match(/0000$/)) {
          //省
          this.provinceArray.push({
            id: item,
            value: data[item],
            children: []
          });
        } else if (item.match(/00$/)) {
          //市
          this.city.push({ id: item, value: data[item], children: [] });
        } else {
          //区
          this.block.push({ id: item, value: data[item] });
        }
      }

      // 分类市级
      for (var index in this.provinceArray) {
        for (var index1 in this.city) {
          if (
            this.provinceArray[index].id.slice(0, 2) ===
            this.city[index1].id.slice(0, 2)
          ) {
            this.provinceArray[index].children.push(this.city[index1]);
          }
        }
      }

      // 分类区级
      for (var item1 in this.city) {
        for (var item2 in this.block) {
          if (
            this.block[item2].id.slice(0, 4) === this.city[item1].id.slice(0, 4)
          ) {
            this.city[item1].children.push(this.block[item2]);
          }
        }
      }
      if (this.selectProvince) {
        for (var i in this.provinceArray) {
          if (this.provinceArray[i].id === this.selectProvince) {
            this.shiArray = this.provinceArray[i].children;
            console.log(this.shiArray);
          }
        }
        for (var j in this.city) {
          if (this.city[j].id === this.selectCity) {
            this.quArray = this.city[j].children;
            console.log(this.quArray);
          }
        }
      }
    },
    // 选省
    choseProvince(e) {
      for (var index2 in this.provinceArray) {
        if (e === this.provinceArray[index2].id) {
          this.shiArray = this.provinceArray[index2].children;
          this.selectCity = this.provinceArray[index2].children[0].value;
          this.quArray = this.provinceArray[index2].children[0].children;
          this.selectCounty = this.provinceArray[
            index2
          ].children[0].children[0].value;
          this.E = this.quArray[0].id;
        }
      }
    },
    // 选市
    choseCity(e) {
      for (var index3 in this.city) {
        if (e === this.city[index3].id) {
          this.quArray = this.city[index3].children;
          this.qu = this.city[index3].children[0].value;
          this.E = this.quArray[0].id;
          // console.log(this.E)
        }
      }
    },
    // 选区
    choseBlock(e) {
      this.E = e;
      // console.log(this.E)
    }
  },
  computed: {
    showCityPicker() {
      return this.$store.state.UserCenter.enterpriseInfo.showCityPicker;
    },
    selectProvince: {
      get: function() {
        return this.$store.state.UserCenter.enterpriseInfo.selectProvince;
      },
      set: function(newValue) {
        this.$store.state.UserCenter.enterpriseInfo.selectProvince = newValue;
      }
    },
    selectCity: {
      get: function() {
        return this.$store.state.UserCenter.enterpriseInfo.selectCity;
      },
      set: function(newValue) {
        this.$store.state.UserCenter.enterpriseInfo.selectCity = newValue;
      }
    },
    selectCounty: {
      get: function() {
        return this.$store.state.UserCenter.enterpriseInfo.selectCounty;
      },
      set: function(newValue) {
        this.$store.state.UserCenter.enterpriseInfo.selectCounty = newValue;
      }
    },
    useremail() {
      return this.$store.state.loginPage.useremail;
    },
    session_id() {
      return this.$store.state.loginPage.session_id;
    },
    firstLogin() {
      return this.$store.state.loginPage.firstLogin;
    }
  },
  created: function() {
    this.getEnterprierData();
  }
};
</script>

<style>
</style>