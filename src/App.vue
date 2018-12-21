<template>
  <div id="app">
    <nav class="header"></nav>
    <div class="member-top">
      <div class="member-header-title member-header-title-position">会员档案</div>
    </div>
    <form>
      <div class="member-row">
        <div class="member-gender member-female">
          <input type="radio" id="female" name="sex" value="F" ng-model="sex" checked="checked">
          <label for="female">女士</label>
        </div>
        <div class="member-gender">
          <input type="radio" id="male" name="sex" value="M" ng-model="sex">
          <label for="male">先生</label>
        </div>
      </div>
      <div class="member-row">
        <div class="member-mame member-name-last">
          <label class="member-name-label">
            姓
            <span class="member-star">*</span>
          </label>
          <input class="member-input" type="text" name="lastName" style="width: 94.31%" required>
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
        <div class="member-input" @click="selectBirthDay"></div>
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
      <button class="btn bg-dark">
        <span class="btn-content">确认并提交</span>
      </button>
    </div>
    <van-popup v-model="showDatePicker" position="bottom" :overlay="true">
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        :min-date="minDate"
        :max-date="maxDate"
      />
    </van-popup>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      showDatePicker: false,
      minHour: 10,
      maxHour: 20,
      minDate: new Date(),
      maxDate: new Date(2019, 10, 1),
      currentDate: new Date()
    };
  },
  created() {},
  methods: {
    selectBirthDay: function() {
      this.showDatePicker = true;
    }
  }
};
</script>

<style lang="scss">
</style>
