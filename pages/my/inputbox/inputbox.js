import WxValidate from '../../../utils/WxValidate.js'
const App = getApp()

var total = [];
Page({
  data: {
    form: {
      gender: '',
      assistance: '',
      email: '',
      tel: '',
      idcard: '',
      password: '',
      confirmPassword: '',
      countryIndex: '',
      slider: '',
      agree: '',
      textarea: '',
      name:'',
      regcode:''
    },
    radio: [{
      name: '男',
      value: 'male',
      checked: !1,
    },
    {
      name: '女',
      value: 'female',
    },
    ],
    checkbox: [{
      name: '黄药师',
      value: '0001',
      checked: !1,
    },
    {
      name: '欧阳锋',
      value: '0002',
    },
    {
      name: '段智兴',
      value: '0003',
    },
    {
      name: '洪七公',
      value: '0004',
    },
    ],
    countries: [
      '中国',
      '美国',
      '英国',
    ],
    date: '1990-01-01',
    text:'获取验证码',
    perImgSrc: []
    // component: App.components[2],
  },
  onLoad() {
    this.initValidate()
    console.log(this.WxValidate)
  },
  showModal(error) {
    wx.showModal({
      content: error.msg,
      showCancel: false,
    })
  },
  submitForm(e) {
    const params = e.detail.value

    console.log(params)

    // 传入表单数据，调用验证方法
    if (!this.WxValidate.checkForm(params)) {
      const error = this.WxValidate.errorList[0]
      this.showModal(error)
      return false
    }

    this.showModal({
      msg: '提交成功',
    })
  },
  initValidate() {
    // 验证字段的规则
    const rules = {
      gender: {
        required: true,
      },
      assistance: {
        required: true,
        assistance: true,
      },
       // 配置false可关闭验证
      regcode: {
        required: true,
        minlength: 6
      },
      name: {
       required: true,
       rangelength: [2, 4]
      },
      email: {
        required: true,
        email: true,
      },
      tel: {
        required: true,
        tel: true,
      },
      idcard: {
        required: true,
        idcard: true,
      },
      password: {
        required: true,
        minlength: 6,
        maxlength: 15,
      },
      confirmPassword: {
        required: true,
        minlength: 6,
        maxlength: 15,
        equalTo: 'password',
      },
      countryIndex: {
        required: true,
      },
      slider: {
        required: true,
        min: 40,
        max: 80,
      },
      agree: {
        required: true,
      },
      textarea: {
        required: true,
        contains: '自愿',
      },
    }

    // 验证字段的提示信息，若不传则调用默认的信息
    const messages = {
      gender: {
        required: '请选择性别',
      },
      assistance: {
        required: '请勾选1-2个敲码助手',
      },
      regcode: {
        required: '请输入验证码',
        minlength: '请输入正确的验证码'
      },
      name:{
        required: '请输入姓名',
        rangelength: '请输入2~4个汉字个汉字'
      },
      email: {
        required: '请输入邮箱',
        email: '请输入正确的邮箱',
      },
      tel: {
        required: '请输入手机号',
        tel: '请输入正确的手机号',
      },
      idcard: {
        required: '请输入身份证号码',
        idcard: '请输入正确的身份证号码',
      },
      password: {
        required: '请输入新密码',
        minlength: '密码长度不少于6位',
        maxlength: '密码长度不多于15位',
      },
      confirmPassword: {
        required: '请输入确认密码',
        minlength: '密码长度不少于6位',
        maxlength: '密码长度不多于15位',
        equalTo: '确认密码和新密码保持一致',
      },
      countryIndex: {
        required: '请选择国家/地区',
      },
      slider: {
        required: '请选择年龄',
        min: '年龄不小于18',
        max: '年龄不大于60',
      },
      agree: {
        required: '请同意我们的声明',
      },
      textarea: {
        required: '请输入文本',
        contains: '请输入文本（必须含有自愿两字）',
      },
    }

    // 创建实例对象
    this.WxValidate = new WxValidate(rules, messages)

    // 自定义验证规则
    this.WxValidate.addMethod('assistance', (value, param) => {
      return this.WxValidate.optional(value) || (value.length >= 1 && value.length <= 2)
    }, '请勾选1-2个敲码助手')
  },
  radioChange(e) {
    const value = e.detail.value
    const radio = this.data.radio
    const items = radio.map(n => {
      return Object.assign({}, n, {
        checked: n.value === value,
      })
    })
    console.log(items)
    this.setData({
      radio: items,
      'form.gender': value,
    })
  },
  checkboxChange(e) {
    const values = e.detail.value
    const checkbox = this.data.checkbox
    const items = checkbox.map(n => {
      return Object.assign({}, n, {
        checked: values.includes(n.value),
      })
    })
    console.log(items)
    this.setData({
      checkbox: items,
      'form.assistance': values,
    })
  },
  bindCountryChange(e) {
    const value = e.detail.value
    this.setData({
      'form.countryIndex': value,
    })
  },
   //日历
  bindDateChange(e) {
    this.setData({
      date: e.detail.value
    })
  },
   chooseImg: function () {
    var that = this;
    wx.chooseImage({
      count: 9, // 默认9
      sizeType: ['original'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        console.info(res.tempFilePaths.length);
        that.uploadFile2(tempFilePaths, 0);
      }
    })
  }, uploadFile2: function (file, i) {//递归调用
    var that = this;
    wx.uploadFile({
      url: 'http://localhost:8080/web/uploadImage', //仅为示例，非真实的接口地址
      filePath: file[i],
      name: 'file',
      success: function (res) {
        var obj = new Object();
        obj.ind = i + 1;
        var data = res.data;
        var resultData = JSON.parse(res.data);
        that.setData({
          imageUrl: resultData.url
        });
      }
    })
  }
})
