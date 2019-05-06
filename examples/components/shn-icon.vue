<template>
  <div class="content-box">
    <h2 class="demo-title">Icon 图标</h2>
    <p class="demo-introduction">语义化的矢量图形。</p>

    <shn-anchor>
      <shn-anchor-link href="icon-simple" title="使用方法"/>
      <shn-anchor-link href="icon-ofen-list" title="常用图标"/>
      <shn-anchor-link href="icon-list" title="图标集合"/>
    </shn-anchor>

    <div class="demo-tip">
      <p>该项目使用 Ant Design 官方图标库</p>
      <p>
        <a
          href="https://www.iconfont.cn/collections/detail?spm=a313x.7781069.1998910419.de12df413&cid=9402"
          target="_blank"
        >https://www.iconfont.cn/collections/detail?spm=a313x.7781069.1998910419.de12df413&cid=9402</a>
      </p>
    </div>
    <shn-backtop :target="'router_view_box'" :visibilityHeight="200"/>

    <div class="shn-icon" id="icon-simple">
      <!-- 使用方法DEMO -->
      <shn-el-demo-block
        :height="294"
        :introduction="'直接通过设置类名为 iconfont，icon-iconName 来使用即可。例如：'"
        :title="'使用方法'"
      >
        <template v-slot:demo>
          <i class="iconfont icon-calendar-check" style="margin: 0 20px;"></i>
          <i class="iconfont icon-share" style="margin: 0 20px;"></i>
          <i class="iconfont icon-search" style="margin: 0 20px;"></i>
          <i class="iconfont icon-star-fill" style="margin: 0 20px;"></i>
          <i class="iconfont icon-edit-fill" style="margin: 0 20px;"></i>
          <i class="iconfont icon-alipay" style="margin: 0 20px;"></i>
          <i class="iconfont icon-taobao" style="margin: 0 20px;"></i>
          <i class="iconfont icon-QQ" style="margin: 0 20px;"></i>
          <i class="iconfont icon-weibo" style="margin: 0 20px;"></i>
          <i class="iconfont icon-wechat-fill" style="margin: 0 20px;"></i>
          <i class="iconfont icon-github-fill" style="margin: 0 20px;"></i>
        </template>
        <template v-slot:code>
          <code class="html">{{fCode(simple.code.html)}}</code>
        </template>
      </shn-el-demo-block>

      <!-- 常用图标 -->
      <div id="icon-ofen-list">
        <h3 class="demo-table-title">常用图标</h3>
        <ul class="icon-list">
          <li
            :class="{'rigth_block':index % 5 === 4}"
            :key="item"
            v-for="(item,index) in ofen_icon_list"
          >
            <div>
              <i :class="item" class="iconfont"></i>
              <p class="icon-name">{{item}}</p>
            </div>
          </li>
        </ul>
      </div>

      <!-- 图标集合 -->
      <div id="icon-list">
        <h3 class="demo-table-title">图标集合</h3>
        <ul class="icon-list">
          <li
            :class="{'rigth_block':index % 5 === 4}"
            :key="item"
            v-for="(item,index) in icon_list"
          >
            <div>
              <i :class="item" class="iconfont"></i>
              <p class="icon-name">{{item}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'shnIcon',
  data() {
    return {
      //基础用法DEMO
      simple: {
        code: {
          html: `
          <i class="iconfont icon-calendar-check"></i>
          <i class="iconfont icon-share"></i>
          <i class="iconfont icon-search"></i>
          <i class="iconfont icon-star-fill"></i>
          <i class="iconfont icon-edit-fill"></i>
          <i class="iconfont icon-alipay"></i>
          <i class="iconfont icon-taobao"></i>
          <i class="iconfont icon-QQ"></i>
          <i class="iconfont icon-weibo"></i>
          <i class="iconfont icon-wechat-fill"></i>
          <i class="iconfont icon-github-fill"></i>
          
          `
        }
      },
      ofen_icon_list:[
        'icon-reload',
        'icon-message',
        'icon-poweroff',
        'icon-setting',
        'icon-eye',
        'icon-export',
        'icon-location',
        'icon-edit-square',
        'icon-play-square',
        'icon-adduser',
        'icon-addteam',
        'icon-user',
        'icon-file-image',
        'icon-file-unknown',
        'icon-file',
        'icon-like',
        'icon-unlike',
        'icon-cloud-upload',
        'icon-cloud-download',
        'icon-mail',
        'icon-heart',
        'icon-star',
        'icon-right',
        'icon-left',
        'icon-up',
        'icon-down',
        'icon-question',
        'icon-close',
        'icon-line',
        'icon-drag',
        'icon-folder-fill',
        'icon-cloud-fill',
        'icon-star-fill',
        'icon-eye-fill',
        'icon-like-fill',
        'icon-unlike-fill',
        'icon-zoomout',
        'icon-zoomin',
        'icon-plus'
      ],
      icon_list: [
        'icon-check-circle',
        'icon-CI',
        'icon-Dollar',
        'icon-compass',
        'icon-close-circle',
        'icon-frown',
        'icon-info-circle',
        'icon-left-circle',
        'icon-down-circle',
        'icon-EURO',
        'icon-copyright',
        'icon-minus-circle',
        'icon-meh',
        'icon-plus-circle',
        'icon-play-circle',
        'icon-question-circle',
        'icon-Pound',
        'icon-right-circle',
        'icon-smile',
        'icon-trademark',
        'icon-time-circle',
        'icon-timeout',
        'icon-earth',
        'icon-YUAN',
        'icon-up-circle',
        'icon-warning-circle',
        'icon-sync',
        'icon-transaction',
        'icon-undo',
        'icon-redo',
        'icon-reload',
        'icon-reloadtime',
        'icon-message',
        'icon-dashboard',
        'icon-issuesclose',
        'icon-poweroff',
        'icon-logout',
        'icon-piechart',
        'icon-setting',
        'icon-eye',
        'icon-location',
        'icon-edit-square',
        'icon-export',
        'icon-save',
        'icon-Import',
        'icon-appstore',
        'icon-close-square',
        'icon-down-square',
        'icon-layout',
        'icon-left-square',
        'icon-play-square',
        'icon-control',
        'icon-codelibrary',
        'icon-detail',
        'icon-minus-square',
        'icon-plus-square',
        'icon-right-square',
        'icon-project',
        'icon-wallet',
        'icon-up-square',
        'icon-calculator',
        'icon-interation',
        'icon-check-square',
        'icon-border',
        'icon-border-outer',
        'icon-border-top',
        'icon-border-bottom',
        'icon-border-left',
        'icon-border-right',
        'icon-border-inner',
        'icon-border-verticle',
        'icon-border-horizontal',
        'icon-radius-bottomleft',
        'icon-radius-bottomright',
        'icon-radius-upleft',
        'icon-radius-upright',
        'icon-radius-setting',
        'icon-adduser',
        'icon-deleteteam',
        'icon-deleteuser',
        'icon-addteam',
        'icon-user',
        'icon-team',
        'icon-areachart',
        'icon-linechart',
        'icon-barchart',
        'icon-pointmap',
        'icon-container',
        'icon-database',
        'icon-sever',
        'icon-mobile',
        'icon-tablet',
        'icon-redenvelope',
        'icon-book',
        'icon-filedone',
        'icon-reconciliation',
        'icon-file-exception',
        'icon-filesync',
        'icon-filesearch',
        'icon-solution',
        'icon-fileprotect',
        'icon-file-add',
        'icon-file-excel',
        'icon-file-exclamation',
        'icon-file-pdf',
        'icon-file-image',
        'icon-file-markdown',
        'icon-file-unknown',
        'icon-file-ppt',
        'icon-file-word',
        'icon-file',
        'icon-file-zip',
        'icon-file-text',
        'icon-file-copy',
        'icon-snippets',
        'icon-audit',
        'icon-diff',
        'icon-Batchfolding',
        'icon-securityscan',
        'icon-propertysafety',
        'icon-safetycertificate',
        'icon-insurance',
        'icon-alert',
        'icon-delete',
        'icon-hourglass',
        'icon-bulb',
        'icon-experiment',
        'icon-bell',
        'icon-trophy',
        'icon-rest',
        'icon-USB',
        'icon-skin',
        'icon-home',
        'icon-bank',
        'icon-filter',
        'icon-funnelplot',
        'icon-like',
        'icon-unlike',
        'icon-unlock',
        'icon-lock',
        'icon-customerservice',
        'icon-flag',
        'icon-moneycollect',
        'icon-medicinebox',
        'icon-shop',
        'icon-rocket',
        'icon-shopping',
        'icon-folder',
        'icon-folder-open',
        'icon-folder-add',
        'icon-deploymentunit',
        'icon-accountbook',
        'icon-contacts',
        'icon-carryout',
        'icon-calendar-check',
        'icon-calendar',
        'icon-scan',
        'icon-select',
        'icon-boxplot',
        'icon-build',
        'icon-sliders',
        'icon-laptop',
        'icon-barcode',
        'icon-camera',
        'icon-cluster',
        'icon-gateway',
        'icon-car',
        'icon-printer',
        'icon-read',
        'icon-cloud-server',
        'icon-cloud-upload',
        'icon-cloud',
        'icon-cloud-download',
        'icon-cloud-sync',
        'icon-video',
        'icon-notification',
        'icon-sound',
        'icon-radarchart',
        'icon-qrcode',
        'icon-fund',
        'icon-image',
        'icon-mail',
        'icon-table',
        'icon-idcard',
        'icon-creditcard',
        'icon-heart',
        'icon-block',
        'icon-error',
        'icon-star',
        'icon-gold',
        'icon-heatmap',
        'icon-wifi',
        'icon-attachment',
        'icon-edit',
        'icon-key',
        'icon-api',
        'icon-disconnect',
        'icon-highlight',
        'icon-monitor',
        'icon-link',
        'icon-man',
        'icon-percentage',
        'icon-pushpin',
        'icon-phone',
        'icon-shake',
        'icon-tag',
        'icon-wrench',
        'icon-tags',
        'icon-scissor',
        'icon-mr',
        'icon-share',
        'icon-branches',
        'icon-fork',
        'icon-shrink',
        'icon-arrawsalt',
        'icon-verticalright',
        'icon-verticalleft',
        'icon-right',
        'icon-left',
        'icon-up',
        'icon-down',
        'icon-fullscreen',
        'icon-fullscreen-exit',
        'icon-doubleleft',
        'icon-doubleright',
        'icon-arrowright',
        'icon-arrowup',
        'icon-arrowleft',
        'icon-arrowdown',
        'icon-upload',
        'icon-colum-height',
        'icon-vertical-align-botto',
        'icon-vertical-align-middl',
        'icon-totop',
        'icon-vertical-align-top',
        'icon-download',
        'icon-sort-descending',
        'icon-sort-ascending',
        'icon-fall',
        'icon-swap',
        'icon-stock',
        'icon-rise',
        'icon-indent',
        'icon-outdent',
        'icon-menu',
        'icon-unorderedlist',
        'icon-orderedlist',
        'icon-align-right',
        'icon-align-center',
        'icon-align-left',
        'icon-pic-center',
        'icon-pic-right',
        'icon-pic-left',
        'icon-bold',
        'icon-font-colors',
        'icon-exclaimination',
        'icon-font-size',
        'icon-infomation',
        'icon-line-height',
        'icon-strikethrough',
        'icon-underline',
        'icon-number',
        'icon-italic',
        'icon-code',
        'icon-column-width',
        'icon-check',
        'icon-ellipsis',
        'icon-dash',
        'icon-close',
        'icon-enter',
        'icon-line',
        'icon-minus',
        'icon-question',
        'icon-rollback',
        'icon-small-dash',
        'icon-pause',
        'icon-bg-colors',
        'icon-crown',
        'icon-drag',
        'icon-desktop',
        'icon-gift',
        'icon-stop',
        'icon-fire',
        'icon-thunderbolt',
        'icon-check-circle-fill',
        'icon-left-circle-fill',
        'icon-down-circle-fill',
        'icon-minus-circle-fill',
        'icon-close-circle-fill',
        'icon-info-circle-fill',
        'icon-up-circle-fill',
        'icon-right-circle-fill',
        'icon-plus-circle-fill',
        'icon-question-circle-fill',
        'icon-EURO-circle-fill',
        'icon-frown-fill',
        'icon-copyright-circle-fil',
        'icon-CI-circle-fill',
        'icon-compass-fill',
        'icon-Dollar-circle-fill',
        'icon-poweroff-circle-fill',
        'icon-meh-fill',
        'icon-play-circle-fill',
        'icon-Pound-circle-fill',
        'icon-smile-fill',
        'icon-stop-fill',
        'icon-warning-circle-fill',
        'icon-time-circle-fill',
        'icon-trademark-circle-fil',
        'icon-YUAN-circle-fill',
        'icon-heart-fill',
        'icon-piechart-circle-fil',
        'icon-dashboard-fill',
        'icon-message-fill',
        'icon-check-square-fill',
        'icon-down-square-fill',
        'icon-minus-square-fill',
        'icon-close-square-fill',
        'icon-codelibrary-fill',
        'icon-left-square-fill',
        'icon-play-square-fill',
        'icon-up-square-fill',
        'icon-right-square-fill',
        'icon-plus-square-fill',
        'icon-accountbook-fill',
        'icon-carryout-fill',
        'icon-calendar-fill',
        'icon-calculator-fill',
        'icon-interation-fill',
        'icon-project-fill',
        'icon-detail-fill',
        'icon-save-fill',
        'icon-wallet-fill',
        'icon-control-fill',
        'icon-layout-fill',
        'icon-appstore-fill',
        'icon-mobile-fill',
        'icon-tablet-fill',
        'icon-book-fill',
        'icon-redenvelope-fill',
        'icon-safetycertificate-f',
        'icon-propertysafety-fill',
        'icon-insurance-fill',
        'icon-securityscan-fill',
        'icon-file-exclamation-fil',
        'icon-file-add-fill',
        'icon-file-fill',
        'icon-file-excel-fill',
        'icon-file-markdown-fill',
        'icon-file-text-fill',
        'icon-file-ppt-fill',
        'icon-file-unknown-fill',
        'icon-file-word-fill',
        'icon-file-zip-fill',
        'icon-file-pdf-fill',
        'icon-file-image-fill',
        'icon-diff-fill',
        'icon-file-copy-fill',
        'icon-snippets-fill',
        'icon-batchfolding-fill',
        'icon-reconciliation-fill',
        'icon-folder-add-fill',
        'icon-folder-fill',
        'icon-folder-open-fill',
        'icon-database-fill',
        'icon-container-fill',
        'icon-sever-fill',
        'icon-calendar-check-fill',
        'icon-image-fill',
        'icon-idcard-fill',
        'icon-creditcard-fill',
        'icon-fund-fill',
        'icon-read-fill',
        'icon-contacts-fill',
        'icon-delete-fill',
        'icon-notification-fill',
        'icon-flag-fill',
        'icon-moneycollect-fill',
        'icon-medicinebox-fill',
        'icon-rest-fill',
        'icon-shopping-fill',
        'icon-skin-fill',
        'icon-video-fill',
        'icon-sound-fill',
        'icon-bulb-fill',
        'icon-bell-fill',
        'icon-filter-fill',
        'icon-fire-fill',
        'icon-funnelplot-fill',
        'icon-gift-fill',
        'icon-hourglass-fill',
        'icon-home-fill',
        'icon-trophy-fill',
        'icon-location-fill',
        'icon-cloud-fill',
        'icon-customerservice-fill',
        'icon-experiment-fill',
        'icon-eye-fill',
        'icon-like-fill',
        'icon-lock-fill',
        'icon-unlike-fill',
        'icon-star-fill',
        'icon-unlock-fill',
        'icon-alert-fill',
        'icon-api-fill',
        'icon-highlight-fill',
        'icon-phone-fill',
        'icon-edit-fill',
        'icon-pushpin-fill',
        'icon-rocket-fill',
        'icon-thunderbolt-fill',
        'icon-tag-fill',
        'icon-wrench-fill',
        'icon-tags-fill',
        'icon-bank-fill',
        'icon-camera-fill',
        'icon-error-fill',
        'icon-crown-fill',
        'icon-mail-fill',
        'icon-car-fill',
        'icon-printer-fill',
        'icon-shop-fill',
        'icon-setting-fill',
        'icon-USB-fill',
        'icon-golden-fill',
        'icon-build-fill',
        'icon-boxplot-fill',
        'icon-sliders-fill',
        'icon-alibaba',
        'icon-alibabacloud',
        'icon-antdesign',
        'icon-ant-cloud',
        'icon-behance',
        'icon-googleplus',
        'icon-medium',
        'icon-google',
        'icon-IE',
        'icon-amazon',
        'icon-slack',
        'icon-alipay',
        'icon-taobao',
        'icon-zhihu',
        'icon-HTML',
        'icon-linkedin',
        'icon-yahoo',
        'icon-facebook',
        'icon-skype',
        'icon-CodeSandbox',
        'icon-chrome',
        'icon-codepen',
        'icon-aliwangwang',
        'icon-apple',
        'icon-android',
        'icon-sketch',
        'icon-Gitlab',
        'icon-dribbble',
        'icon-instagram',
        'icon-reddit',
        'icon-windows',
        'icon-yuque',
        'icon-Youtube',
        'icon-Gitlab-fill',
        'icon-dropbox',
        'icon-dingtalk',
        'icon-android-fill',
        'icon-apple-fill',
        'icon-HTML-fill',
        'icon-windows-fill',
        'icon-QQ',
        'icon-twitter',
        'icon-skype-fill',
        'icon-weibo',
        'icon-yuque-fill',
        'icon-Youtube-fill',
        'icon-yahoo-fill',
        'icon-wechat-fill',
        'icon-chrome-fill',
        'icon-alipay-circle-fill',
        'icon-aliwangwang-fill',
        'icon-behance-circle-fill',
        'icon-amazon-circle-fill',
        'icon-codepen-circle-fill',
        'icon-CodeSandbox-circle-f',
        'icon-dropbox-circle-fill',
        'icon-github-fill',
        'icon-dribbble-circle-fill',
        'icon-googleplus-circle-f',
        'icon-medium-circle-fill',
        'icon-QQ-circle-fill',
        'icon-IE-circle-fill',
        'icon-google-circle-fill',
        'icon-dingtalk-circle-fill',
        'icon-sketch-circle-fill',
        'icon-slack-circle-fill',
        'icon-twitter-circle-fill',
        'icon-taobao-circle-fill',
        'icon-weibo-circle-fill',
        'icon-zhihu-circle-fill',
        'icon-reddit-circle-fill',
        'icon-alipay-square-fill',
        'icon-dingtalk-square-fill',
        'icon-CodeSandbox-square-f',
        'icon-behance-square-fill',
        'icon-amazon-square-fill',
        'icon-codepen-square-fill',
        'icon-dribbble-square-fill',
        'icon-dropbox-square-fill',
        'icon-facebook-fill',
        'icon-googleplus-square-f',
        'icon-google-square-fill',
        'icon-instagram-fill',
        'icon-IE-square-fill',
        'icon-medium-square-fill',
        'icon-linkedin-fill',
        'icon-QQ-square-fill',
        'icon-reddit-square-fill',
        'icon-twitter-square-fill',
        'icon-sketch-square-fill',
        'icon-slack-square-fill',
        'icon-taobao-square-fill',
        'icon-weibo-square-fill',
        'icon-zhihu-square-fill',
        'icon-zoomout',
        'icon-apartment',
        'icon-audio',
        'icon-audio-fill',
        'icon-robot',
        'icon-zoomin',
        'icon-robot-fill',
        'icon-bug-fill',
        'icon-bug',
        'icon-audiostatic',
        'icon-comment',
        'icon-signal-fill',
        'icon-verified',
        'icon-shortcut-fill',
        'icon-videocameraadd',
        'icon-switchuser',
        'icon-whatsapp',
        'icon-appstoreadd',
        'icon-caret-down',
        'icon-backward',
        'icon-caret-up',
        'icon-caret-right',
        'icon-caret-left',
        'icon-fast-backward',
        'icon-forward',
        'icon-fast-forward',
        'icon-search',
        'icon-retweet',
        'icon-login',
        'icon-step-backward',
        'icon-step-forward',
        'icon-swap-right',
        'icon-swap-left',
        'icon-woman',
        'icon-plus',
        'icon-eyeclose-fill',
        'icon-eye-close',
        'icon-clear',
        'icon-collapse',
        'icon-expand',
        'icon-deletecolumn',
        'icon-merge-cells',
        'icon-subnode',
        'icon-rotate-left',
        'icon-rotate-right',
        'icon-insertrowbelow',
        'icon-insertrowabove',
        'icon-table1',
        'icon-solit-cells',
        'icon-formatpainter',
        'icon-insertrowright',
        'icon-formatpainter-fill',
        'icon-insertrowleft',
        'icon-translate',
        'icon-deleterow',
        'icon-sisternode'
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.shn-icon {
  i {
    font-size: 28px;
  }
  .icon-list {
    width: 100%;
    overflow: hidden;
    list-style: none;
    padding: 0 !important;
    border: 1px solid #eaeefb;
    border-radius: 4px;
    .rigth_block {
      border-right: 0 !important;
    }
    li {
      float: left;
      width: 20%;
      text-align: center;
      height: 166px;
      color: #666;
      font-size: 13px;
      border-right: 1px solid #eee;
      border-bottom: 1px solid #eee;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.15s ease-in-out;
      &:hover {
        background: #409eff;
        div {
          color: #fff;
        }
        i {
          color: #fff;
          font-size: 40px;
        }
      }
      div {
        font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
          Microsoft YaHei, SimSun, sans-serif;
        color: #99a9bf;
        transition: all 0.15s ease-in-out;
        i {
          font-size: 32px;
          color: #606266;
          transition: all 0.15s ease-in-out;
        }
        .icon-name {
          padding: 20px 0;
          height: 1em;
        }
      }
    }
  }
}
</style>
