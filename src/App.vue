<template>
  <div id="app">
    <nav class="header"></nav>
    <div class="member-top">
      <div class="member-header-title member-header-title-position">会员档案</div>
    </div>
    <form>
      <div class="member-row">
        <div class="member-gender member-female">
          <input
            type="radio"
            id="female"
            name="sex"
            value="F"
            v-model="person.sex"
            checked="checked"
          >
          <label for="female">女士</label>
        </div>
        <div class="member-gender">
          <input type="radio" id="male" name="sex" value="M" v-model="person.sex">
          <label for="male">先生</label>
        </div>
      </div>
      <div class="member-row">
        <div class="member-mame member-name-last">
          <label class="member-name-label">
            姓
            <span class="member-star">*</span>
          </label>
          <input
            class="member-input"
            type="text"
            name="lastName"
            v-model="person.lastName"
            style="width: 94.31%"
            required
          >
        </div>
        <div class="member-mame member-mame-first">
          <label class="member-name-label">
            名
            <span class="member-star">*</span>
          </label>
          <input
            class="member-input"
            type="text"
            name="firstName"
            v-model="person.firstName"
            style="margin-right: 0rem; width: 91.55% !important;"
            required
          >
        </div>
        <div class="clearfix"></div>
      </div>
      <div class="member-row">
        <div class="member-birthday-label" style="margin-top: 1.08rem">
          <label class="member-font">
            生日
            <span class="member-star">*</span>
          </label>
        </div>
      </div>
      <div class="member-row member-bor">
        <i class="downConer"></i>
        <div class="member-input" @click="selectBirthDay">{{ birthdayLabel }}</div>
      </div>

      <div class="member-row">
        <div class="member-birthday-label">
          <label class="member-font">
            手机号码
            <span class="member-star">*</span>
          </label>
        </div>
      </div>
      <div class="member-row member-bor">
        <div class="auth-code" @click="getAuthCode">
          <span class="auth-code-right"></span>
          <span>{{ label.authCode}}</span>
        </div>
        <input class="member-input" name="tellphone" maxlength="11" v-model="person.tellphone" required>
      </div>

      <div class="member-row">
        <div class="member-birthday-label">
          <label class="member-font">
            验证码
            <span class="member-star">*</span>
          </label>
        </div>
      </div>
      <div class="member-row">
        <input class="member-input" type="number" placeholder="请输入验证码" name="authCode" v-model="person.authcode" required>
      </div>
      <div class="member-row">
        <div class="member-birthday-label" style="margin-top:1.15rem">
          <label class="member-font">
            所在地区
            <span class="member-star">*</span>
          </label>
        </div>
      </div>
      <div class="member-row member-bor" @click="selectArea">
        <i class="downConer"></i>
        <div class="member-input"> {{areaLabel}}</div>
      </div>
      <div class="member-row">
        <div class="member-birthday-label">
          <label class="member-font">详细地址</label>
        </div>
      </div>
      <div class="member-row">
        <input class="member-input" type="text" name="address" v-model="person.address.addressName">
      </div>
      <div class="member-row">
        <div class="member-info">
          <label class="member-info-error">
            <span class="member-star">*</span>为必填信息，性别及生日无法修改
          </label>
        </div>
      </div>
    </form>
    <div class="member-row member-end">
      <button class="btn bg-dark" @click="ensure">
        <span class="btn-content">确认并提交</span>
      </button>
    </div>
    <van-popup v-model="show.showDatePicker" position="bottom" :overlay="true">
      <van-datetime-picker
        v-on:cancel="cancelSelectBirthday"
        v-on:confirm="confirmSeletBirthday"
        v-model="datePicker.currentDate"
        type="date"
        :min-date="datePicker.minDate"
        :max-date="datePicker.maxDate"
      />
    </van-popup>
    <van-popup v-model="show.showAreaPicker" position="bottom" :overlay="true">
      <van-area
        v-on:cancel="cancelSelectArea"
        v-on:confirm="confirmSeletArea"
        :area-list="areaList"
        :columns-num="3"
        :title="省市区"
        :value="person.address.county.code"
      />
    </van-popup>
  </div>
</template>

<script>
import utils from "./assets/js/utils.js";
import AreaList from "./assets/js/area.js";
export default {
  name: "app",
  data() {
    return {
      person: {
        sex: "F",
        lastName: "",
        firstName: "",
        birthday: "",
        tellphone: "",
        authcode: "",
        address: {
          province: {
            code: "",
            name: ""
          },
          city: {
            code: "",
            name: ""
          },
          county: {
            cdoe: "",
            name: ""
          },
          addressName: '',
        }
      },
      show: {
        showDatePicker: false,
        showAreaPicker: false
      },
      label: {
        authCode: "获取验证码",
        authCodeEnable: true
      },
      datePicker: {
        minDate: new Date(1900),
        maxDate: new Date(),
        currentDate: new Date()
      },
      areaList: AreaList
    };
  },
  created() {
    // if (this.timeOut) {
    //   clearTimeout(this.timeOut);
    // }
  },
  computed: {
    birthdayLabel: function() {
      if (this.person.birthday) {
        return utils.formatDate(this.person.birthday, "yyyy-MM-dd");
      } else {
        return "";
      }
    },
    areaLabel: function() {
      if (this.person.address.province.code && this.person.address.city.code && this.person.address.county.code) {
        return this.person.address.province.name + ' ' + this.person.address.city.name + ' ' + this.person.address.county.name;
      } else {
         return (this.person.address.province.code && this.person.address.city.code && this.person.address.county.cdoe);
      }
    },
    timeOut: {
      set(value) {
        this.$store.state.timeout.compileTimeout = value;
      },
      get() {
        return this.$store.state.timeout.compileTimeout;
      }
    }
  },
  methods: {
    selectBirthDay: function() {
      this.show.showDatePicker = true;
      if (this.person.birthday) {
        this.datePicker.currentDate = this.person.birthday;
      }
    },
    cancelSelectBirthday: function() {
      this.show.showDatePicker = false;
    },
    confirmSeletBirthday: function() {
      this.person.birthday = this.datePicker.currentDate;
      this.show.showDatePicker = false;
    },
    selectArea: function() {
      this.show.showAreaPicker = true;
    },
    cancelSelectArea: function() {
      this.show.showAreaPicker = false;
    },
    confirmSeletArea: function(areas) {
      this.person.address.province.code = areas[0].code,
      this.person.address.province.name = areas[0].name,
      this.person.address.city.code = areas[1].code,
      this.person.address.city.name = areas[1].name,
      this.person.address.county.code = areas[2].code,
      this.person.address.county.name = areas[2].name,
      this.show.showAreaPicker = false;
    },
    getAuthCode: function() {
      if (this.label.authCodeEnable) {
        this.label.authCodeEnable = false;
        var _this = this;
        var countdown = 59;
        _this.label.authCode = "重新发送 60 s";
        var interval = setInterval(function() {
          if (countdown === 0) {
            _this.label.authCodeEnable = true;
            _this.label.authCode = "获取验证码";
            clearInterval(interval);
          } else {
            _this.label.authCode = "重新发送" + countdown + "s";
            countdown--;
          }
        }, 1000);
      }
    },

    ensure: function() {
      alert('完成');
    }
  }
};
</script>

<style lang="scss">
@import './assets/css/radio.scss';
</style>
