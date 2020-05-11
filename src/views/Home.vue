<template>
  <div class="home">
    <van-nav-bar title="Home">
      <template #left>
        <van-icon
          name="arrow-left"
          color="#323232"
          @click="onClickLeft"
          size="0.16rem"
        />
      </template>
    </van-nav-bar>
    <van-notice-bar mode="closeable" left-icon="volume-o">{{
      notice
    }}</van-notice-bar>

    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
      @change-area="onChangeArea"
    />

    <!-- <van-swipe-cell>
      <van-card
        num="2"
        price="2.00"
        desc="描述信息"
        title="商品标题"
        class="goods-card"
        thumb="https://img.yzcdn.cn/vant/cat.jpeg"
      />
      <template #right>
        <van-button square text="删除" type="danger" class="delete-button" />
      </template>
    </van-swipe-cell> -->
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      notice:
        "足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。",
      areaList: {
        province_list: {
          110000: "北京市",
          120000: "天津市"
        },
        city_list: {
          110100: "北京市",
          110200: "县",
          120100: "天津市",
          120200: "县"
        },
        county_list: {
          110101: "东城区",
          110102: "西城区",
          110105: "朝阳区",
          110106: "丰台区",
          120101: "和平区",
          120102: "河东区",
          120103: "河西区",
          120104: "南开区",
          120105: "河北区"
        }
      },
      searchResult: []
    };
  },
  methods: {
    onClickLeft() {
      this.$toast("返回");
    },
    onSave() {
      this.$toast("save");
    },
    onDelete() {
      this.$toast("delete");
    },
    onChangeDetail(val) {
      console.log(val, "11111111");
      if (val) {
        this.searchResult = [
          {
            name: "黄龙万科中心",
            address: "杭州市西湖区"
          }
        ];
      } else {
        this.searchResult = [];
      }
    },
    onChangeArea(val) {
      console.log(val);
    }
  }
};
</script>

<style scoped>
.home {
  text-align: left;
}
.home .goods-card {
  margin: 0;
  background-color: white;
}

.home .delete-button {
  height: 100%;
}
</style>
