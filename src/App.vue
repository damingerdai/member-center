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
        <div class="auth-code">
          <span class="auth-code-right"></span>
          <span>获取验证码</span>
        </div>
        <input class="member-input" name="tellphone" maxlength="11" required>
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
        <input class="member-input" type="number" placeholder="请输入验证码" name="authCode" required>
      </div>
      <div class="member-row">
        <div class="member-birthday-label" style="margin-top:1.15rem">
          <label class="member-font">
            所在地区
            <span class="member-star">*</span>
          </label>
        </div>
      </div>
      <div class="member-row member-bor">
        <i class="downConer"></i>
        <div class="member-input"></div>
      </div>
      <div class="member-row">
        <div class="member-birthday-label">
          <label class="member-font">详细地址</label>
        </div>
      </div>
      <div class="member-row">
        <input class="member-input" type="text" name="address">
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
  </div>
</template>

<script>
import utils from "./assets/js/utils.js";
export default {
  name: "app",
  data() {
    return {
      person: {
        sex: "M",
        lastName: "",
        firstName: "",
        birthday: ""
      },
      show: {
        showDatePicker: false
      },
      datePicker: {
        minDate: new Date(1900),
        maxDate: new Date(2019, 10, 1),
        currentDate: new Date()
      }
    };
  },
  created() {},
  computed: {
    birthdayLabel: function() {
      if (this.person.birthday) {
        return utils.formatDate(this.person.birthday, "yyyy-MM-dd");
      } else {
        ("");
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
    ensure: function() {
      alert(this.person.lastName);
    }
  }
};
</script>

<style lang="scss">
</style>
