import setImg from './loadImg'
import {dataFormat} from '@/config'

let mixinBasic = {
  data: function () {
    return {
      errorFlag: false,
    }
  },
  methods: {

    _updateValue: function (evt) {
      return this.$checkInput(this.newUser.title) &&
        this.$checkInput(this.newUser.description) &&
        this.newUser.img !== '';
    },

    createdTask: function () {
      if (this._updateValue()) {
        this._successInput();
      } else {
        this._errorInput();
      }
    },

    _errorInput: function () {
      this.newUser.title = '';
      this.newUser.description = '';
      this.errorFlag = true;
      this.$refs.form.classList.add('errorAnimation');
      setTimeout(() => {
        this.$refs.form.classList.remove('errorAnimation');
      }, 1000);
    },

  },
  mounted: function () {
    setImg(this);
  }
};

export default mixinBasic;
