<template>
  <div class="content-box">
    <h2 class="demo-title">ImgCard 图片卡片</h2>
    <shn-img-card
      :imgBoxHeight="240"
      :key="index"
      :title="item.description"
      v-for="(item,index) in data"
      :margin="'20px 30px 0 0'"
    >
      <template v-slot:img>
        <img
          :src="item.img"
          @mouseenter="imgHover(index,'mouseenter')"
          @mouseleave="imgHover(index,'mouseleave')"
          alt
          class="video-img"
        >
      </template>
      <template v-slot:one>
        <div class="num-box">
          <div>
            <i class="iconfont icon-message"></i>
            {{item.comment_count}}
          </div>
          <div>
            <i class="iconfont icon-like"></i>
            {{item.digg_count}}
          </div>
        </div>
      </template>
      <template v-slot:two>
        <div class="user-box">
          <img :src="item.author.avatar_url" alt>
          <span>{{item.author.nickname}}</span>
        </div>
      </template>
    </shn-img-card>
  </div>
</template>

<script>
export default {
  name: 'shn-img-card-demo',
  data() {
    return {
      data: [
        {
          description: '多么有力的一声  兄弟回家了多么有力的一声  兄弟回',
          cover:
            'https://p3-dy.bytecdn.cn/large/178c400123d7504519ca0.jpeg',
          // cover:
          // 'https://p3-dy.bytecdn.cn/aweme/300x400/1793c00062cbca0242ba8.jpeg',
          play_addr:
            'https://aweme.snssdk.com/aweme/v1/playwm/?video_id=v0300f520000bik1k72bli71ui35393g&line=0',
          dynamic_cover: 'https://p9-dy.bytecdn.cn/obj/1e81d00000dff2a2d1b6a',
          create_time: '2019-04-06 11:17:05',
          digg_count: 2647000,
          comment_count: 5363,
          duration: '00:26',
          author: {
            author_user_id: '104329381120',
            nickname: '墙壁下的影子',
            gender: '未知',
            signature: '',
            avatar_url:
              'https://p3-dy.bytecdn.cn/aweme/720x720/fcd300019405110c9acb.jpeg'
          }
        },
        {
          description:
            '暖心！环卫工大爷抱着车祸女孩安慰，还有手捂住她的眼睛，不让她看被扎的左腿。大爷真的心好暖～',
          cover:
            'https://p3-dy.bytecdn.cn/large/17a1300032adf79a63bce.jpeg',
          play_addr:
            'https://aweme.snssdk.com/aweme/v1/playwm/?video_id=v0300fb30000bir9rqchpahuqnhugmlg&line=0',
          dynamic_cover: 'https://p9-dy.bytecdn.cn/obj/1f2e70006c92032d5ac3e',
          create_time: '2019-04-17 11:31:03',
          digg_count: 3596033,
          comment_count: 831,
          duration: '00:23',
          author: {
            author_user_id: '96805121863',
            nickname: '中国网',
            gender: '未知',
            signature: '关注我，总有一些温暖与你不期而遇(✿◡‿◡)',
            avatar_url:
              'https://p3-dy.bytecdn.cn/aweme/720x720/c81e001daaf04d9cdd35.jpeg'
          }
        },
        {
          description:
            '"我坐飞机、坐火车、坐汽车，专门来这里看看大家。"习近平总书记在重庆调研时同村民代表共话脱贫攻坚。',
          cover:
            'https://p3-dy.bytecdn.cn/large/1f2880000704badd96cfd.jpeg',
          play_addr:
            'https://aweme.snssdk.com/aweme/v1/playwm/?video_id=v0200f530000biqnuhnqaba97pnai26g&line=0',
          dynamic_cover: 'https://p9-dy.bytecdn.cn/obj/1f0e1000726f5526f0079',
          create_time: '2019-04-16 15:07:58',
          digg_count: 3170000,
          comment_count: 100261,
          duration: '00:32',
          author: {
            author_user_id: '66598046050',
            nickname: '央视新闻',
            gender: '未知',
            signature: '本宝宝暂时还没想到个性签名',
            avatar_url:
              'https://p3-dy.bytecdn.cn/aweme/720x720/fe0c000071b3a35cf833.jpeg'
          }
        }
      ]
    }
  },
  created() {
    for (let i = 0; i < this.data.length; i++) {
      this.data[i].img = this.data[i].cover
    }
  },
  methods: {
    imgHover(index, type) {
      if (type == 'mouseenter') {
        this.data[index].img = this.data[index].dynamic_cover
      } else {
        this.data[index].img = this.data[index].cover
      }
      this.data.splice(index, 1, this.data[index])
    }
  }
}
</script>
<style lang="scss" scoped>
.content {
  .video-img {
    width: 216px;
    &:hover {
      overflow: hidden;
    }
  }
  .num-box {
    display: flex;
    align-items: center;
    text-align: left;
    font-size: 12px;
    color: #99a2aa;
    > div {
      flex: 1;
      align-items: center;
      i {
        position: relative;
        top: 1px;
        margin-right: 5px;
      }
    }
  }
  .user-box {
    display: flex;
    align-items: center;
    img {
      height: 36px;
      width: 36px;
      border-radius: 100%;
    }
    span {
      margin-left: 10px;
      font-size: 12px;
    }
  }
}
</style>

