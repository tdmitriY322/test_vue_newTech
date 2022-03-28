<template>
  <div class="start">
    <div class="container">
      <div class="start__wrapper">
        <div class="start__item">
          <input
            class="input input_id"
            type="text"
            name="name"
            v-model="post_data.category_id"
            oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');"
            placeholder="Введите id категории"
          />
          <button class="button button_start" @click="sendId()">
            Загрузить
          </button>
        </div>
        <div v-if="this.category_list.length > 1">
          <div
            class="start__list"
            v-for="(item, index) in category_list"
            :key="index"
          >
            <input
              class="input input_list"
              :type="item.type"
              v-model="item.index"
              :placeholder="item.name"
              :required="item.is_required"
            />
          </div>
        </div>
        <button class="button button_start" @click="sendProduct()">
          Отправить
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      post_data: {
        attribute_type: "ALL",
        category_id: [17034410],
        language: "DEFAULT",
      },
      category_list: [],
    };
  },
  async created() {},
  methods: {
    ...mapActions({
      post_category: "POST_CATEGORY",
    }),
    async sendId() {
      let myResponse = await this.post_category(this.post_data);
      this.$set(this, "category_list", myResponse.result[0].attributes);
      console.log(this.category_list);
    },
    sendProduct() {},
  },
};
</script>

