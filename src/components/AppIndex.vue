<template>
  <v-layout height="100%" style="background-color: #eceff1">
    <!-- nav -->
    <v-app-bar scroll-behavior="elevate" elevation="3" color="#E0F2F1">
      <v-col cols="12" md="3">
        <v-text-field
          v-model.trim="filter_data.value"
          dense
          filled
          rounded
          clearable
          placeholder="Search"
          variant="solo-filled"
          prepend-inner-icon="mdi-magnify"
          class="pt-6"
        ></v-text-field>
      </v-col>
      <v-spacer></v-spacer>

      <v-col cols="12" md="3">
        <div class="text-center">
          <v-select
            v-model="sort_key"
            :items="sorts"
            item-text="name"
            item-value="value"
            class="pt-6"
            label="Sort by"
          ></v-select>
        </div>
      </v-col>
      <v-btn icon="mdi-sort-ascending" @click="sort_data.sort = 'asce'"> </v-btn>
      <v-btn icon="mdi-sort-descending" @click="sort_data.sort = 'desc'"> </v-btn>
      <v-col cols="12" md="3">
        <div class="text-center">
          <v-select
            v-model="group_key"
            :items="groups"
            item-text="name"
            item-value="value"
            class="pt-6"
            label="Group by"
          ></v-select>
        </div>
      </v-col>
    </v-app-bar>
    <!-- main  -->
    <v-main>
      <CardList
        v-if="card_data.length > 0"
        :card_data="card_data"
        :filter_data="filter_data"
        :sort_data="sort_data"
        :groupby_data="groupby_data"
        :config_data="config_data"
      />
    </v-main>
  </v-layout>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import CardList from '@/components/card_list/card_list.vue'
import axios from 'axios'

const sort_key = ref('Name')
const group_key = ref('None')
const sorts = ['Name', 'Date']

const groups = ['None', 'Text', 'Date']
const card_data = ref<Array<{ fc_name: string; fc_ns: string; fc_ts: number }>>([])

const filter_data = ref({
  value: ''
})
const sort_data = ref({
  sort: 'asce',
  key: 'fc_name'
})

const groupby_data = ref({
  key: ''
})

const config_data = {
  fc_ts: { name: 'Date', data_type: 'date' },
  fc_name: { name: 'Name', data_type: 'text' }
}

const fetchPlotdata = async () => {
  const response = await axios.get(`/api/v1/plots`)
  console.log(response.data)
  card_data.value = response.data
  console.log('card_data.value', card_data.value)
}
watch(
  () => sort_key.value,
  (newVal) => {
    if (newVal) {
      if (newVal == 'Name') {
        sort_data.value.key = 'fc_name'
      } else {
        sort_data.value.key = 'fc_ts'
      }
    }
  }
)
watch(
  () => group_key.value,
  (newVal) => {
    if (newVal) {
      if (newVal == 'Text') {
        groupby_data.value.key = 'fc_name'
      } else if (newVal == 'Date') {
        groupby_data.value.key = 'fc_ts'
      } else {
        groupby_data.value.key = ''
      }
    }
  }
)
onMounted(() => {
  fetchPlotdata()
})
</script>
