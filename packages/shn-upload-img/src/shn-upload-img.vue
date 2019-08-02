<template>
  <div class="shn-upload-img clearfloat">
    <div
      :key="index"
      :style="{width:width + 'px',height:height + 'px'}"
      class="shn-img-block"
      v-for="(item,index) in list"
    >
      <div class="img-box">
        <img :src="item" />
        <div class="img-box-mask">
          <i
            @click="previewImg = item;previewImgShow = true"
            class="shni shn-eye"
            title="预览"
            v-if="view"
          ></i>
          <i @click="list.splice(index, 1)" class="shni shn-delete" title="删除"></i>
        </div>
      </div>
    </div>
    <div :style="{width:width + 'px',height:height + 'px'}" class="shn-upload-img-block">
      <div>
        <input
          @change="changeImage($event)"
          accept="image/gif, image/jpeg, image/jpg, image/png"
          class="shn-img-input"
          name="zjimg"
          ref="imgInput"
          type="file"
        />
        <div>
          <i class="shni shn-plus" style="font-size:24px"></i>
          <p>{{addText}}</p>
        </div>
      </div>
    </div>

    <shn-preview-img :list="list" :visible.sync="previewImgShow" v-model="previewImg" />
    <shn-modal :maskClosable="false" :visible.sync="cropperShow" title="裁剪图片" v-if="cropper">
      <template v-slot:body>
        <div style="width:600px;height:500px">
          <vue-cropper
            :fixedNumber="[width,height]"
            :full="true"
            :img="cropperImg"
            :outputSize="outputSize"
            autoCrop
            fixed
            ref="cropper"
          />
        </div>
      </template>
      <template v-slot:footer>
        <shn-button @click="cropperShow = false">取消</shn-button>
        <shn-button @click="cropperConfirm" type="primary">确定</shn-button>
      </template>
    </shn-modal>
  </div>
</template>
<script>
export default {
  name: 'shn-upload-img',
  props: {
    value: {
      type: Array,
      default: function() {
        return []
      }
    },
    addText: {
      type: String,
      default: ''
    },
    width: {
      type: Number,
      default: 104
    },
    height: {
      type: Number,
      default: 104
    },
    view: {
      type: Boolean,
      default: true
    },
    cropper: {
      type: Boolean,
      default: false
    },
    cropType: {
      type: String,
      default: 'base64'
    },
    outputSize: {
      type: Number,
      default: 1
    }
  },
  watch: {
    list: function() {
      this.$emit('input', this.list)
    }
  },
  data() {
    return {
      list: this.value,
      cropperShow: false,
      cropperImg: '',
      previewImg: '',
      previewImgShow: false
    }
  },
  methods: {
    changeImage(e) {
      let file = e.target.files[0]
      let reader = new FileReader()
      let _this = this
      reader.onloadend = function() {
        // 图片的 base64 格式, 可以直接当成 img 的 src 属性值
        let dataURL = reader.result
        if (_this.cropper) {
          _this.cropperImg = dataURL
          _this.cropperShow = true
        } else {
          _this.list.push(dataURL)
        }

        e.target.value = ''
        // 插入到 DOM 中预览
      }

      reader.readAsDataURL(file) // 读出 base64
    },
    cropperConfirm() {
      // if (this.cropType == 'base64') {
      //   this.$refs.cropper.getCropData(data => {
      //     this.list.push(data)
      //   })
      // } else if (this.cropType == 'blob') {
      //   this.$refs.cropper.getCropBlob(data => {
      //     this.list.push(data)
      //   })
      // } else {
      //   this.$refs.cropper.getCropData(data => {
      //     this.list.push(data)
      //   })
      // }
      this.$refs.cropper.getCropData(data => {
        this.list.push(data)
      })
      this.cropperShow = false
    }
    // filteListFun() {
    //   let _this = this
    //   this.filteList = []
    //   for (let i = 0; i < this.list.length; i++) {
    //     if (typeof this.list[i] === 'object') {
    //       let reader = new FileReader()
    //       reader.readAsDataURL(this.list[i])
    //       reader.onload = function(e) {
    //         _this.filteList.push(e.target.result)
    //       }
    //     } else {
    //       this.filteList.push(this.list[i])
    //     }
    //   }
    //   console.log(this.list)
    // }
  }
}
</script>
<style lang="scss" scoped>
.shn-upload-img {
  position: relative;
  width: 100%;
  .shn-img-block {
    position: relative;
    float: left;
    display: block;
    padding: 8px;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    margin: 0 8px 8px 0;
    .del {
      cursor: pointer;
      position: absolute;
      right: 10px;
      // background-color: $textcolortheme;
      width: 30px;
      height: 30px;
      border-radius: 0 0 0 30px;
      color: #fff;
      transition: all 0.1s linear;
      transform-origin: 100% 0;
      &:hover {
        transform: scale(1.05);
      }
      i {
        position: relative;
        left: 12px;
        top: 4px;
        font-size: 14px;
      }
    }
    .img-box {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;
      overflow: hidden;
      img {
        // height: 100%;
        width: 100%;
      }
      .img-box-mask {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        background: rgba(0, 0, 0, 0.274);
        transition: all 0.3s;
        color: #fff;
        font-size: 22px;
        i {
          margin: 0 5px;
          cursor: pointer;
        }
      }
      &:hover {
        .img-box-mask {
          opacity: 1;
        }
      }
    }
  }
  .shn-upload-img-block {
    position: relative;
    float: left;
    display: block;
    > div {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      border: 1px dashed #d6d6d6;
      border-radius: 4px;
      color: #d6d6d6;
      background: #fafafa;
      transition: border-color 0.3s ease;
      &:hover {
        border-color: $--color-primary;
      }
      .shn-img-input {
        cursor: pointer;
        position: absolute;
        height: 100%;
        width: 100%;
        opacity: 0;
      }
      > div {
        text-align: center;
        p {
          margin-top: 5px;
          font-size: 14px;
        }
      }
    }
  }
}
</style>
