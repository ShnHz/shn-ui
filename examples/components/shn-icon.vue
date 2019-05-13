<template>
  <div class="content-box">
    <h2 class="demo-title">shn 图标</h2>
    <p class="demo-introduction">语义化的矢量图形。</p>

    <shn-anchor>
      <shn-anchor-link href="shn-simple" title="使用方法"/>
      <shn-anchor-link href="shn-ofen-list" title="常用图标"/>
      <shn-anchor-link href="shn-list" title="图标集合"/>
    </shn-anchor>

    <div class="demo-tip">
      <p>该项目使用 Ant Design 官方图标库</p>
      <p>
        <a
          href="https://www.shni.cn/collections/detail?spm=a313x.7781069.1998910419.de12df413&cid=9402"
          target="_blank"
        >https://www.shni.cn/collections/detail?spm=a313x.7781069.1998910419.de12df413&cid=9402</a>
      </p>
    </div>
    <shn-backtop :target="'router_view_box'" :visibilityHeight="200"/>

    <div class="shn-shn" id="shn-simple">
      <!-- 使用方法DEMO -->
      <shn-el-demo-block
        :height="294"
        :introduction="'直接通过设置类名为 iconfont，icon-iconName 来使用即可。例如：'"
        :title="'使用方法'"
      >
        <template v-slot:demo>
          <i class="shni shn-calendar-check" style="margin: 0 20px;"></i>
          <i class="shni shn-share" style="margin: 0 20px;"></i>
          <i class="shni shn-search" style="margin: 0 20px;"></i>
          <i class="shni shn-star-fill" style="margin: 0 20px;"></i>
          <i class="shni shn-edit-fill" style="margin: 0 20px;"></i>
          <i class="shni shn-alipay" style="margin: 0 20px;"></i>
          <i class="shni shn-taobao" style="margin: 0 20px;"></i>
          <i class="shni shn-QQ" style="margin: 0 20px;"></i>
          <i class="shni shn-weibo" style="margin: 0 20px;"></i>
          <i class="shni shn-wechat-fill" style="margin: 0 20px;"></i>
          <i class="shni shn-github-fill" style="margin: 0 20px;"></i>
        </template>
        <template v-slot:code>
          <code class="html">{{fCode(simple.code.html)}}</code>
        </template>
      </shn-el-demo-block>

      <!-- 常用图标 -->
      <div id="shn-ofen-list">
        <h3 class="demo-table-title">常用图标</h3>
        <ul class="shn-list">
          <li
            :class="{'rigth_block':index % 5 === 4}"
            :key="item"
            v-for="(item,index) in ofen_icon_list"
          >
            <div>
              <i :class="item" class="shni"></i>
              <p class="shn-name">{{item}}</p>
            </div>
          </li>
        </ul>
      </div>

      <!-- 图标集合 -->
      <div id="shn-list">
        <h3 class="demo-table-title">图标集合</h3>
        <ul class="shn-list">
          <li
            :class="{'rigth_block':index % 5 === 4}"
            :key="item"
            v-for="(item,index) in icon_list"
          >
            <div>
              <i :class="item" class="shni"></i>
              <p class="shn-name">{{item}}</p>
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
          <i class="shni shn-calendar-check"></i>
          <i class="shni shn-share"></i>
          <i class="shni shn-search"></i>
          <i class="shni shn-star-fill"></i>
          <i class="shni shn-edit-fill"></i>
          <i class="shni shn-alipay"></i>
          <i class="shni shn-taobao"></i>
          <i class="shni shn-QQ"></i>
          <i class="shni shn-weibo"></i>
          <i class="shni shn-wechat-fill"></i>
          <i class="shni shn-github-fill"></i>
          
          `
        }
      },
      ofen_icon_list:[
        'shn-reload',
        'shn-message',
        'shn-poweroff',
        'shn-setting',
        'shn-eye',
        'shn-export',
        'shn-location',
        'shn-edit-square',
        'shn-play-square',
        'shn-adduser',
        'shn-addteam',
        'shn-user',
        'shn-file-image',
        'shn-file-unknown',
        'shn-file',
        'shn-like',
        'shn-unlike',
        'shn-cloud-upload',
        'shn-cloud-download',
        'shn-mail',
        'shn-heart',
        'shn-star',
        'shn-right',
        'shn-left',
        'shn-up',
        'shn-down',
        'shn-question',
        'shn-close',
        'shn-line',
        'shn-drag',
        'shn-folder-fill',
        'shn-cloud-fill',
        'shn-star-fill',
        'shn-eye-fill',
        'shn-like-fill',
        'shn-unlike-fill',
        'shn-zoomout',
        'shn-zoomin',
        'shn-plus'
      ],
      icon_list: [
        'shn-check-circle',
        'shn-CI',
        'shn-Dollar',
        'shn-compass',
        'shn-close-circle',
        'shn-frown',
        'shn-info-circle',
        'shn-left-circle',
        'shn-down-circle',
        'shn-EURO',
        'shn-copyright',
        'shn-minus-circle',
        'shn-meh',
        'shn-plus-circle',
        'shn-play-circle',
        'shn-question-circle',
        'shn-Pound',
        'shn-right-circle',
        'shn-smile',
        'shn-trademark',
        'shn-time-circle',
        'shn-timeout',
        'shn-earth',
        'shn-YUAN',
        'shn-up-circle',
        'shn-warning-circle',
        'shn-sync',
        'shn-transaction',
        'shn-undo',
        'shn-redo',
        'shn-reload',
        'shn-reloadtime',
        'shn-message',
        'shn-dashboard',
        'shn-issuesclose',
        'shn-poweroff',
        'shn-logout',
        'shn-piechart',
        'shn-setting',
        'shn-eye',
        'shn-location',
        'shn-edit-square',
        'shn-export',
        'shn-save',
        'shn-Import',
        'shn-appstore',
        'shn-close-square',
        'shn-down-square',
        'shn-layout',
        'shn-left-square',
        'shn-play-square',
        'shn-control',
        'shn-codelibrary',
        'shn-detail',
        'shn-minus-square',
        'shn-plus-square',
        'shn-right-square',
        'shn-project',
        'shn-wallet',
        'shn-up-square',
        'shn-calculator',
        'shn-interation',
        'shn-check-square',
        'shn-border',
        'shn-border-outer',
        'shn-border-top',
        'shn-border-bottom',
        'shn-border-left',
        'shn-border-right',
        'shn-border-inner',
        'shn-border-verticle',
        'shn-border-horizontal',
        'shn-radius-bottomleft',
        'shn-radius-bottomright',
        'shn-radius-upleft',
        'shn-radius-upright',
        'shn-radius-setting',
        'shn-adduser',
        'shn-deleteteam',
        'shn-deleteuser',
        'shn-addteam',
        'shn-user',
        'shn-team',
        'shn-areachart',
        'shn-linechart',
        'shn-barchart',
        'shn-pointmap',
        'shn-container',
        'shn-database',
        'shn-sever',
        'shn-mobile',
        'shn-tablet',
        'shn-redenvelope',
        'shn-book',
        'shn-filedone',
        'shn-reconciliation',
        'shn-file-exception',
        'shn-filesync',
        'shn-filesearch',
        'shn-solution',
        'shn-fileprotect',
        'shn-file-add',
        'shn-file-excel',
        'shn-file-exclamation',
        'shn-file-pdf',
        'shn-file-image',
        'shn-file-markdown',
        'shn-file-unknown',
        'shn-file-ppt',
        'shn-file-word',
        'shn-file',
        'shn-file-zip',
        'shn-file-text',
        'shn-file-copy',
        'shn-snippets',
        'shn-audit',
        'shn-diff',
        'shn-Batchfolding',
        'shn-securityscan',
        'shn-propertysafety',
        'shn-safetycertificate',
        'shn-insurance',
        'shn-alert',
        'shn-delete',
        'shn-hourglass',
        'shn-bulb',
        'shn-experiment',
        'shn-bell',
        'shn-trophy',
        'shn-rest',
        'shn-USB',
        'shn-skin',
        'shn-home',
        'shn-bank',
        'shn-filter',
        'shn-funnelplot',
        'shn-like',
        'shn-unlike',
        'shn-unlock',
        'shn-lock',
        'shn-customerservice',
        'shn-flag',
        'shn-moneycollect',
        'shn-medicinebox',
        'shn-shop',
        'shn-rocket',
        'shn-shopping',
        'shn-folder',
        'shn-folder-open',
        'shn-folder-add',
        'shn-deploymentunit',
        'shn-accountbook',
        'shn-contacts',
        'shn-carryout',
        'shn-calendar-check',
        'shn-calendar',
        'shn-scan',
        'shn-select',
        'shn-boxplot',
        'shn-build',
        'shn-sliders',
        'shn-laptop',
        'shn-barcode',
        'shn-camera',
        'shn-cluster',
        'shn-gateway',
        'shn-car',
        'shn-printer',
        'shn-read',
        'shn-cloud-server',
        'shn-cloud-upload',
        'shn-cloud',
        'shn-cloud-download',
        'shn-cloud-sync',
        'shn-video',
        'shn-notification',
        'shn-sound',
        'shn-radarchart',
        'shn-qrcode',
        'shn-fund',
        'shn-image',
        'shn-mail',
        'shn-table',
        'shn-idcard',
        'shn-creditcard',
        'shn-heart',
        'shn-block',
        'shn-error',
        'shn-star',
        'shn-gold',
        'shn-heatmap',
        'shn-wifi',
        'shn-attachment',
        'shn-edit',
        'shn-key',
        'shn-api',
        'shn-disconnect',
        'shn-highlight',
        'shn-monitor',
        'shn-link',
        'shn-man',
        'shn-percentage',
        'shn-pushpin',
        'shn-phone',
        'shn-shake',
        'shn-tag',
        'shn-wrench',
        'shn-tags',
        'shn-scissor',
        'shn-mr',
        'shn-share',
        'shn-branches',
        'shn-fork',
        'shn-shrink',
        'shn-arrawsalt',
        'shn-verticalright',
        'shn-verticalleft',
        'shn-right',
        'shn-left',
        'shn-up',
        'shn-down',
        'shn-fullscreen',
        'shn-fullscreen-exit',
        'shn-doubleleft',
        'shn-doubleright',
        'shn-arrowright',
        'shn-arrowup',
        'shn-arrowleft',
        'shn-arrowdown',
        'shn-upload',
        'shn-colum-height',
        'shn-vertical-align-botto',
        'shn-vertical-align-middl',
        'shn-totop',
        'shn-vertical-align-top',
        'shn-download',
        'shn-sort-descending',
        'shn-sort-ascending',
        'shn-fall',
        'shn-swap',
        'shn-stock',
        'shn-rise',
        'shn-indent',
        'shn-outdent',
        'shn-menu',
        'shn-unorderedlist',
        'shn-orderedlist',
        'shn-align-right',
        'shn-align-center',
        'shn-align-left',
        'shn-pic-center',
        'shn-pic-right',
        'shn-pic-left',
        'shn-bold',
        'shn-font-colors',
        'shn-exclaimination',
        'shn-font-size',
        'shn-infomation',
        'shn-line-height',
        'shn-strikethrough',
        'shn-underline',
        'shn-number',
        'shn-italic',
        'shn-code',
        'shn-column-width',
        'shn-check',
        'shn-ellipsis',
        'shn-dash',
        'shn-close',
        'shn-enter',
        'shn-line',
        'shn-minus',
        'shn-question',
        'shn-rollback',
        'shn-small-dash',
        'shn-pause',
        'shn-bg-colors',
        'shn-crown',
        'shn-drag',
        'shn-desktop',
        'shn-gift',
        'shn-stop',
        'shn-fire',
        'shn-thunderbolt',
        'shn-check-circle-fill',
        'shn-left-circle-fill',
        'shn-down-circle-fill',
        'shn-minus-circle-fill',
        'shn-close-circle-fill',
        'shn-info-circle-fill',
        'shn-up-circle-fill',
        'shn-right-circle-fill',
        'shn-plus-circle-fill',
        'shn-question-circle-fill',
        'shn-EURO-circle-fill',
        'shn-frown-fill',
        'shn-copyright-circle-fil',
        'shn-CI-circle-fill',
        'shn-compass-fill',
        'shn-Dollar-circle-fill',
        'shn-poweroff-circle-fill',
        'shn-meh-fill',
        'shn-play-circle-fill',
        'shn-Pound-circle-fill',
        'shn-smile-fill',
        'shn-stop-fill',
        'shn-warning-circle-fill',
        'shn-time-circle-fill',
        'shn-trademark-circle-fil',
        'shn-YUAN-circle-fill',
        'shn-heart-fill',
        'shn-piechart-circle-fil',
        'shn-dashboard-fill',
        'shn-message-fill',
        'shn-check-square-fill',
        'shn-down-square-fill',
        'shn-minus-square-fill',
        'shn-close-square-fill',
        'shn-codelibrary-fill',
        'shn-left-square-fill',
        'shn-play-square-fill',
        'shn-up-square-fill',
        'shn-right-square-fill',
        'shn-plus-square-fill',
        'shn-accountbook-fill',
        'shn-carryout-fill',
        'shn-calendar-fill',
        'shn-calculator-fill',
        'shn-interation-fill',
        'shn-project-fill',
        'shn-detail-fill',
        'shn-save-fill',
        'shn-wallet-fill',
        'shn-control-fill',
        'shn-layout-fill',
        'shn-appstore-fill',
        'shn-mobile-fill',
        'shn-tablet-fill',
        'shn-book-fill',
        'shn-redenvelope-fill',
        'shn-safetycertificate-f',
        'shn-propertysafety-fill',
        'shn-insurance-fill',
        'shn-securityscan-fill',
        'shn-file-exclamation-fil',
        'shn-file-add-fill',
        'shn-file-fill',
        'shn-file-excel-fill',
        'shn-file-markdown-fill',
        'shn-file-text-fill',
        'shn-file-ppt-fill',
        'shn-file-unknown-fill',
        'shn-file-word-fill',
        'shn-file-zip-fill',
        'shn-file-pdf-fill',
        'shn-file-image-fill',
        'shn-diff-fill',
        'shn-file-copy-fill',
        'shn-snippets-fill',
        'shn-batchfolding-fill',
        'shn-reconciliation-fill',
        'shn-folder-add-fill',
        'shn-folder-fill',
        'shn-folder-open-fill',
        'shn-database-fill',
        'shn-container-fill',
        'shn-sever-fill',
        'shn-calendar-check-fill',
        'shn-image-fill',
        'shn-idcard-fill',
        'shn-creditcard-fill',
        'shn-fund-fill',
        'shn-read-fill',
        'shn-contacts-fill',
        'shn-delete-fill',
        'shn-notification-fill',
        'shn-flag-fill',
        'shn-moneycollect-fill',
        'shn-medicinebox-fill',
        'shn-rest-fill',
        'shn-shopping-fill',
        'shn-skin-fill',
        'shn-video-fill',
        'shn-sound-fill',
        'shn-bulb-fill',
        'shn-bell-fill',
        'shn-filter-fill',
        'shn-fire-fill',
        'shn-funnelplot-fill',
        'shn-gift-fill',
        'shn-hourglass-fill',
        'shn-home-fill',
        'shn-trophy-fill',
        'shn-location-fill',
        'shn-cloud-fill',
        'shn-customerservice-fill',
        'shn-experiment-fill',
        'shn-eye-fill',
        'shn-like-fill',
        'shn-lock-fill',
        'shn-unlike-fill',
        'shn-star-fill',
        'shn-unlock-fill',
        'shn-alert-fill',
        'shn-api-fill',
        'shn-highlight-fill',
        'shn-phone-fill',
        'shn-edit-fill',
        'shn-pushpin-fill',
        'shn-rocket-fill',
        'shn-thunderbolt-fill',
        'shn-tag-fill',
        'shn-wrench-fill',
        'shn-tags-fill',
        'shn-bank-fill',
        'shn-camera-fill',
        'shn-error-fill',
        'shn-crown-fill',
        'shn-mail-fill',
        'shn-car-fill',
        'shn-printer-fill',
        'shn-shop-fill',
        'shn-setting-fill',
        'shn-USB-fill',
        'shn-golden-fill',
        'shn-build-fill',
        'shn-boxplot-fill',
        'shn-sliders-fill',
        'shn-alibaba',
        'shn-alibabacloud',
        'shn-antdesign',
        'shn-ant-cloud',
        'shn-behance',
        'shn-googleplus',
        'shn-medium',
        'shn-google',
        'shn-IE',
        'shn-amazon',
        'shn-slack',
        'shn-alipay',
        'shn-taobao',
        'shn-zhihu',
        'shn-HTML',
        'shn-linkedin',
        'shn-yahoo',
        'shn-facebook',
        'shn-skype',
        'shn-CodeSandbox',
        'shn-chrome',
        'shn-codepen',
        'shn-aliwangwang',
        'shn-apple',
        'shn-android',
        'shn-sketch',
        'shn-Gitlab',
        'shn-dribbble',
        'shn-instagram',
        'shn-reddit',
        'shn-windows',
        'shn-yuque',
        'shn-Youtube',
        'shn-Gitlab-fill',
        'shn-dropbox',
        'shn-dingtalk',
        'shn-android-fill',
        'shn-apple-fill',
        'shn-HTML-fill',
        'shn-windows-fill',
        'shn-QQ',
        'shn-twitter',
        'shn-skype-fill',
        'shn-weibo',
        'shn-yuque-fill',
        'shn-Youtube-fill',
        'shn-yahoo-fill',
        'shn-wechat-fill',
        'shn-chrome-fill',
        'shn-alipay-circle-fill',
        'shn-aliwangwang-fill',
        'shn-behance-circle-fill',
        'shn-amazon-circle-fill',
        'shn-codepen-circle-fill',
        'shn-CodeSandbox-circle-f',
        'shn-dropbox-circle-fill',
        'shn-github-fill',
        'shn-dribbble-circle-fill',
        'shn-googleplus-circle-f',
        'shn-medium-circle-fill',
        'shn-QQ-circle-fill',
        'shn-IE-circle-fill',
        'shn-google-circle-fill',
        'shn-dingtalk-circle-fill',
        'shn-sketch-circle-fill',
        'shn-slack-circle-fill',
        'shn-twitter-circle-fill',
        'shn-taobao-circle-fill',
        'shn-weibo-circle-fill',
        'shn-zhihu-circle-fill',
        'shn-reddit-circle-fill',
        'shn-alipay-square-fill',
        'shn-dingtalk-square-fill',
        'shn-CodeSandbox-square-f',
        'shn-behance-square-fill',
        'shn-amazon-square-fill',
        'shn-codepen-square-fill',
        'shn-dribbble-square-fill',
        'shn-dropbox-square-fill',
        'shn-facebook-fill',
        'shn-googleplus-square-f',
        'shn-google-square-fill',
        'shn-instagram-fill',
        'shn-IE-square-fill',
        'shn-medium-square-fill',
        'shn-linkedin-fill',
        'shn-QQ-square-fill',
        'shn-reddit-square-fill',
        'shn-twitter-square-fill',
        'shn-sketch-square-fill',
        'shn-slack-square-fill',
        'shn-taobao-square-fill',
        'shn-weibo-square-fill',
        'shn-zhihu-square-fill',
        'shn-zoomout',
        'shn-apartment',
        'shn-audio',
        'shn-audio-fill',
        'shn-robot',
        'shn-zoomin',
        'shn-robot-fill',
        'shn-bug-fill',
        'shn-bug',
        'shn-audiostatic',
        'shn-comment',
        'shn-signal-fill',
        'shn-verified',
        'shn-shortcut-fill',
        'shn-videocameraadd',
        'shn-switchuser',
        'shn-whatsapp',
        'shn-appstoreadd',
        'shn-caret-down',
        'shn-backward',
        'shn-caret-up',
        'shn-caret-right',
        'shn-caret-left',
        'shn-fast-backward',
        'shn-forward',
        'shn-fast-forward',
        'shn-search',
        'shn-retweet',
        'shn-login',
        'shn-step-backward',
        'shn-step-forward',
        'shn-swap-right',
        'shn-swap-left',
        'shn-woman',
        'shn-plus',
        'shn-eyeclose-fill',
        'shn-eye-close',
        'shn-clear',
        'shn-collapse',
        'shn-expand',
        'shn-deletecolumn',
        'shn-merge-cells',
        'shn-subnode',
        'shn-rotate-left',
        'shn-rotate-right',
        'shn-insertrowbelow',
        'shn-insertrowabove',
        'shn-table1',
        'shn-solit-cells',
        'shn-formatpainter',
        'shn-insertrowright',
        'shn-formatpainter-fill',
        'shn-insertrowleft',
        'shn-translate',
        'shn-deleterow',
        'shn-sisternode'
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.shn-shn {
  i {
    font-size: 28px;
  }
  .shn-list {
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
        .shn-name {
          padding: 20px 0;
          height: 1em;
        }
      }
    }
  }
}
</style>
