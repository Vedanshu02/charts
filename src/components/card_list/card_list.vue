 <template>
  <v-layout>
    <v-container>
      <v-row v-if="props.groupby_data.key == ''">
        <v-card
          v-for="(data, index) in display_data"
          :key="index"
          variant="elevated"
          class="mx-auto"
          color=""
          max-width="344"
          subtitle="Greyhound divisely hello coldly fonwderfully"
          title="Headline"
        >
          {{ data.fc_name }}
          {{ new Date(data.fc_ts).toLocaleString() }}
        </v-card>
        <div class="text-subtitle-2 mb-2"></div>
      </v-row>
      <v-row v-if="props.groupby_data.key === 'fc_name'">
        <v-expansion-panels>
          <!-- Group 0-9 -->
          <v-expansion-panel v-if="groupsnum.length > 0" :key="'0-9'">
            <v-expansion-panel-title>0-9 ({{ groupsnum.length }})</v-expansion-panel-title>
            <v-expansion-panel-content>
              <v-container>
                <v-row>
                  <v-card
                    v-for="(data, index) in groupsnum"
                    :key="index"
                    variant="elevated"
                    class="mx-auto"
                    color=""
                    max-width="344"
                    subtitle="Greyhound divisely hello coldly fonwderfully"
                    title="Headline"
                  >
                    {{ data.fc_name }}
                    {{ new Date(data.fc_ts).toLocaleString() }}
                  </v-card>
                </v-row>
              </v-container>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <!-- Group A-H -->
          <v-expansion-panel v-if="groupAtoH.length > 0" :key="'A-H'">
            <v-expansion-panel-title>A-H ({{ groupAtoH.length }})</v-expansion-panel-title>
            <v-expansion-panel-content>
              <v-container>
                <v-row>
                  <v-card
                    v-for="(data, index) in groupAtoH"
                    :key="index"
                    variant="elevated"
                    class="mx-auto"
                    color=""
                    max-width="344"
                    subtitle="Greyhound divisely hello coldly fonwderfully"
                    title="Headline"
                  >
                    {{ data.fc_name }}
                    {{ new Date(data.fc_ts).toLocaleString() }}
                  </v-card>
                </v-row>
              </v-container>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <!-- Group I-P -->
          <v-expansion-panel v-if="groupItoP.length > 0" :key="'I-P'">
            <v-expansion-panel-title>I-P ({{ groupItoP.length }})</v-expansion-panel-title>
            <v-expansion-panel-content>
              <v-container>
                <v-row>
                  <v-card
                    v-for="(data, index) in groupItoP"
                    :key="index"
                    variant="elevated"
                    class="mx-auto"
                    color=""
                    max-width="344"
                    subtitle="Greyhound divisely hello coldly fonwderfully"
                    title="Headline"
                  >
                    {{ data.fc_name }}
                    {{ new Date(data.fc_ts).toLocaleString() }}
                  </v-card>
                </v-row>
              </v-container>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <!-- Group Q-Z -->
          <v-expansion-panel v-if="groupQtoZ.length > 0" :key="'Q-Z'">
            <v-expansion-panel-title>Q-Z ({{ groupQtoZ.length }})</v-expansion-panel-title>
            <v-expansion-panel-content>
              <v-container>
                <v-row>
                  <v-card
                    v-for="(data, index) in groupQtoZ"
                    :key="index"
                    variant="elevated"
                    class="mx-auto"
                    color=""
                    max-width="344"
                    subtitle="Greyhound divisely hello coldly fonwderfully"
                    title="Headline"
                  >
                    {{ data.fc_name }}
                    {{ new Date(data.fc_ts).toLocaleString() }}
                  </v-card>
                </v-row>
              </v-container>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>

      <v-row v-if="props.groupby_data.key == 'fc_ts'">
        <v-expansion-panels>
          <v-expansion-panel v-if="yesterdayGroup.length > 0" :key="'yesterday'">
            <v-expansion-panel-title
              >Yesterday ({{ yesterdayGroup.length }})</v-expansion-panel-title
            >
            <v-expansion-panel-content>
              <v-container>
                <v-row>
                  <v-card
                    v-for="(data, index) in yesterdayGroup"
                    :key="index"
                    variant="elevated"
                    class="mx-auto"
                    color=""
                    max-width="344"
                    subtitle="Greyhound divisely hello coldly fonwderfully"
                    title="Headline"
                  >
                    {{ data.fc_name }}
                    {{ new Date(data.fc_ts).toLocaleString() }}
                  </v-card>
                </v-row>
              </v-container>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <!-- Earlier This Week -->
          <v-expansion-panel v-if="earlierThisWeekGroup.length > 0" :key="'earlier-this-week'">
            <v-expansion-panel-title
              >Earlier This Week ({{ earlierThisWeekGroup.length }})</v-expansion-panel-title
            >
            <v-expansion-panel-content>
              <v-container>
                <v-row>
                  <v-card
                    v-for="(data, index) in earlierThisWeekGroup"
                    :key="index"
                    variant="elevated"
                    class="mx-auto"
                    color=""
                    max-width="344"
                    subtitle="Greyhound divisely hello coldly fonwderfully"
                    title="Headline"
                  >
                    {{ data.fc_name }}
                    {{ new Date(data.fc_ts).toLocaleString() }}
                  </v-card>
                </v-row>
              </v-container>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <!-- Last Week -->
          <v-expansion-panel v-if="lastWeekGroup.length > 0" :key="'last-week'">
            <v-expansion-panel-title
              >Last Week ({{ lastWeekGroup.length }})</v-expansion-panel-title
            >
            <v-expansion-panel-content>
              <v-container>
                <v-row>
                  <v-card
                    v-for="(data, index) in lastWeekGroup"
                    :key="index"
                    variant="elevated"
                    class="mx-auto"
                    color=""
                    max-width="344"
                    subtitle="Greyhound divisely hello coldly fonwderfully"
                    title="Headline"
                  >
                    {{ data.fc_name }}
                    {{ new Date(data.fc_ts).toLocaleString() }}
                  </v-card>
                </v-row>
              </v-container>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <!-- Last Month -->
          <v-expansion-panel v-if="lastMonthGroup.length > 0" :key="'last-month'">
            <v-expansion-panel-title
              >Last Month ({{ lastMonthGroup.length }})</v-expansion-panel-title
            >
            <v-expansion-panel-content>
              <v-container>
                <v-row>
                  <v-card
                    v-for="(data, index) in lastMonthGroup"
                    :key="index"
                    variant="elevated"
                    class="mx-auto"
                    color=""
                    max-width="344"
                    subtitle="Greyhound divisely hello coldly fonwderfully"
                    title="Headline"
                  >
                    {{ data.fc_name }}
                    {{ new Date(data.fc_ts).toLocaleString() }}
                  </v-card>
                </v-row>
              </v-container>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <!-- Earlier This Year -->
          <v-expansion-panel v-if="earlierThisYearGroup.length > 0" :key="'earlier-this-year'">
            <v-expansion-panel-title
              >Earlier This Year ({{ earlierThisYearGroup.length }})</v-expansion-panel-title
            >
            <v-expansion-panel-content>
              <v-container>
                <v-row>
                  <v-card
                    v-for="(data, index) in earlierThisYearGroup"
                    :key="index"
                    variant="elevated"
                    class="mx-auto"
                    color=""
                    max-width="344"
                    subtitle="Greyhound divisely hello coldly fonwderfully"
                    title="Headline"
                  >
                    {{ data.fc_name }}
                    {{ new Date(data.fc_ts).toLocaleString() }}
                  </v-card>
                </v-row>
              </v-container>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
    </v-container>
  </v-layout>
</template>
  
<script setup lang="ts">
import { ref, watch } from 'vue'
type Card = { fc_name: string; fc_ns: string; fc_ts: number }
type CardList = Card[]

const props = defineProps<{
  card_data: CardList
  filter_data: any
  sort_data: { sort: string; key: string }
  groupby_data: any
  config_data: any
}>()

const groupsnum = ref<any>([])
const groupAtoH = ref<any>([])
const groupItoP = ref<any>([])
const groupQtoZ = ref<any>([])

const yesterdayGroup = ref<CardList>([])
const earlierThisWeekGroup = ref<CardList>([])
const lastWeekGroup = ref<CardList>([])
const lastMonthGroup = ref<CardList>([])
const earlierThisYearGroup = ref<CardList>([])

const display_data = ref()
if (props.card_data) {
  display_data.value = props.card_data
  console.log('display_data.value', display_data.value)
}
function sortData(data: any, key: string, order: string) {
  return data.sort((a: any, b: any) => {
    if (order === 'asce') {
      return a[key] > b[key] ? 1 : -1
    } else {
      return a[key] < b[key] ? 1 : -1
    }
  })
}

function isYesterday(date: Date): boolean {
  const now = new Date()
  const yesterday = new Date(now)
  yesterday.setDate(now.getDate() - 1)
  console.log('isYesterday', date.toDateString() === yesterday.toDateString())
  return date.toDateString() === yesterday.toDateString()
}

function isEarlierThisWeek(date: Date): boolean {
  const now = new Date()
  const startOfWeek = new Date(now.setDate(now.getDate() - now.getDay() - 7))
  const endOfWeek = new Date(now.setDate(startOfWeek.getDate() + 6))
  console.log('isEarlierThisWeek', date >= startOfWeek && date <= endOfWeek)
  return date >= startOfWeek && date <= endOfWeek
}

function isLastWeek(date: Date): boolean {
  const now = new Date()
  const startOfLastWeek = new Date(now.setDate(now.getDate() - now.getDay() - 14))
  const endOfLastWeek = new Date(now.setDate(startOfLastWeek.getDate() + 6))
  console.log('isLastWeek', date >= startOfLastWeek && date <= endOfLastWeek)
  return date >= startOfLastWeek && date <= endOfLastWeek
}

function isLastMonth(date: Date): boolean {
  const now = new Date()
  const startOfLastMonth = new Date(now.setMonth(now.getMonth() - 1, 1))
  const endOfLastMonth = new Date(now.setMonth(now.getMonth(), 0))
  console.log('isLastMonth', date >= startOfLastMonth && date <= endOfLastMonth)
  return date >= startOfLastMonth && date <= endOfLastMonth
}

function isEarlierThisYear(date: Date): boolean {
  const now = new Date()
  const startOfYear = new Date(now.getFullYear(), 0, 1)
  const endOfYear = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  console.log('isEarlierThisYear', date >= startOfYear && date < endOfYear)
  return date >= startOfYear && date < endOfYear
}

watch(
  () => props.sort_data,
  (newVal) => {
    if (newVal && newVal.key && newVal.sort) {
      const sortedData = sortData(props.card_data, newVal.key, newVal.sort)
      display_data.value = sortedData
    }
  },
  { deep: true, immediate: true }
)

watch(
  () => props.filter_data,
  (newVal) => {
    if (newVal && newVal.value) {
      const query = newVal.value.toLowerCase()
      const filtered = props.card_data.filter(
        (item) =>
          item.fc_name.toLowerCase().includes(query) ||
          new Date(item.fc_ts).toLocaleDateString().includes(query)
      )
      display_data.value = filtered
    }
    if (newVal.value.length < 0) {
      display_data.value = props.card_data
    }
  },
  { deep: true, immediate: true }
)

watch(
  () => props.groupby_data,
  (newVal) => {
    if (newVal && newVal.key == 'fc_name') {
      props.card_data.forEach((item) => {
        const firstChar = item.fc_name.charAt(0).toUpperCase()
        if (/[0-9]/.test(firstChar)) {
          groupsnum.value.push(item)
        } else if (/[A-H]/.test(firstChar)) {
          groupAtoH.value.push(item)
        } else if (/[I-P]/.test(firstChar)) {
          groupItoP.value.push(item)
        } else if (/[Q-Z]/.test(firstChar)) {
          groupQtoZ.value.push(item)
        }
      })
    }
    if (newVal.key == 'fc_ts') {
      groupsnum.value = []
      groupAtoH.value = []
      groupItoP.value = []
      groupQtoZ.value = []
      props.card_data.forEach((item: Card) => {
        const itemDate = new Date(item.fc_ts)
        console.log('itemDate', itemDate)
        if (isYesterday(itemDate)) {
          yesterdayGroup.value.push(item)
          console.log('yesterdayGroup.value', yesterdayGroup.value)
        } else if (isEarlierThisWeek(itemDate)) {
          earlierThisWeekGroup.value.push(item)
          console.log('earlierThisWeekGroup', earlierThisWeekGroup.value)
        } else if (isLastWeek(itemDate)) {
          lastWeekGroup.value.push(item)
          console.log('earlierThisWeekGroup', lastWeekGroup.value)
        } else if (isLastMonth(itemDate)) {
          lastMonthGroup.value.push(item)
          console.log('earlierThisWeekGroup', lastMonthGroup.value)
        } else if (isEarlierThisYear(itemDate)) {
          earlierThisYearGroup.value.push(item)
          console.log('earlierThisWeekGroup', earlierThisYearGroup.value)
        }
      })
    }
    if (newVal.key == '') {
      groupsnum.value = []
      groupAtoH.value = []
      groupItoP.value = []
      groupQtoZ.value = []
    }
  },
  { deep: true, immediate: true }
)
</script>
  


   <!-- <template>
//     <div ref="chart" class="vega-chart"></div>
//   </template>
  
//   <script setup lang="ts">
//   import { ref, onMounted } from 'vue'
//   import vegaEmbed from 'vega-embed'
  
//   const chart = ref<HTMLDivElement | null>(null)
  
//   const spec = {
//     "$schema": "https://vega.github.io/schema/vega/v5.json",
//     "width": 800,
//     "height": 400,
//     "padding": 5,
//     "data": [
//       {
//         "name": "table",
//         "values": [
//           {"fc_name":"John Doe","fc_ns":"123e4567-e89b-12d3-a456-426614174000","fc_ts":1701705600000},
//           {"fc_name":"Jane Smith","fc_ns":"123e4567-e89b-12d3-a456-426614174001","fc_ts":1701668041000},
//           {"fc_name":"Alice Johnson","fc_ns":"123e4567-e89b-12d3-a456-426614174002","fc_ts":1701244800000},
//           {"fc_name":"Bob Brown","fc_ns":"123e4567-e89b-12d3-a456-426614174003","fc_ts":1698883200000},
//           {"fc_name":"Charlie Davis","fc_ns":"123e4567-e89b-12d3-a456-426614174004","fc_ts":1684204800000},
//           {"fc_name":"David Evans","fc_ns":"123e4567-e89b-12d3-a456-426614174005","fc_ts":1701705601000},
//           {"fc_name":"Eve Foster","fc_ns":"123e4567-e89b-12d3-a456-426614174006","fc_ts":1701668042000},
//           {"fc_name":"Frank Harris","fc_ns":"123e4567-e89b-12d3-a456-426614174007","fc_ts":1701244801000},
//           {"fc_name":"Grace Kelly","fc_ns":"123e4567-e89b-12d3-a456-426614174008","fc_ts":1698883201000},
//           {"fc_name":"Hank Lewis","fc_ns":"123e4567-e89b-12d3-a456-426614174009","fc_ts":1684204801000},
//           {"fc_name":"Ivy Martinez","fc_ns":"123e4567-e89b-12d3-a456-426614174010","fc_ts":1701705602000},
//           {"fc_name":"Jack Nguyen","fc_ns":"123e4567-e89b-12d3-a456-426614174011","fc_ts":1701668043000},
//           {"fc_name":"Karen Olson","fc_ns":"123e4567-e89b-12d3-a456-426614174012","fc_ts":1701244802000},
//           {"fc_name":"Larry Perez","fc_ns":"123e4567-e89b-12d3-a456-426614174013","fc_ts":1698883202000},
//           {"fc_name":"Mona Roberts","fc_ns":"123e4567-e89b-12d3-a456-426614174014","fc_ts":1684204802000},
//           {"fc_name":"Nina Scott","fc_ns":"123e4567-e89b-12d3-a456-426614174015","fc_ts":1701705603000},
//           {"fc_name":"Oscar Thompson","fc_ns":"123e4567-e89b-12d3-a456-426614174016","fc_ts":1701668044000},
//           {"fc_name":"Pauline Upton","fc_ns":"123e4567-e89b-12d3-a456-426614174017","fc_ts":1701244803000},
//           {"fc_name":"Quincy Vaughn","fc_ns":"123e4567-e89b-12d3-a456-426614174018","fc_ts":1698883203000},
//           {"fc_name":"Rachel Wilson","fc_ns":"123e4567-e89b-12d3-a456-426614174019","fc_ts":1684204803000},
//           {"fc_name":"Sam Young","fc_ns":"123e4567-e89b-12d3-a456-426614174020","fc_ts":1701705604000},
//           {"fc_name":"Tina Zhang","fc_ns":"123e4567-e89b-12d3-a456-426614174021","fc_ts":1701668045000},
//           {"fc_name":"Uma Anderson","fc_ns":"123e4567-e89b-12d3-a456-426614174022","fc_ts":1701244804000},
//           {"fc_name":"Vince Carter","fc_ns":"123e4567-e89b-12d3-a456-426614174023","fc_ts":1698883204000},
//           {"fc_name":"Wendy Diaz","fc_ns":"123e4567-e89b-12d3-a456-426614174024","fc_ts":1684204804000},
//           {"fc_name":"Xander Foster","fc_ns":"123e4567-e89b-12d3-a456-426614174025","fc_ts":1701705605000},
//           {"fc_name":"Yara Glover","fc_ns":"123e4567-e89b-12d3-a456-426614174026","fc_ts":1701668046000},
//           {"fc_name":"Zane Hill","fc_ns":"123e4567-e89b-12d3-a456-426614174027","fc_ts":1701244805000},
//           {"fc_name":"Amy Ingram","fc_ns":"123e4567-e89b-12d3-a456-426614174028","fc_ts":1698883205000},
//           {"fc_name":"Brian Jenkins","fc_ns":"123e4567-e89b-12d3-a456-426614174029","fc_ts":1684204805000}
//         ],
//         "format": {"parse": {"fc_ts": "date"}}
//       }
//     ],
//     "scales": [
//       {
//         "name": "xscale",
//         "type": "time",
//         "domain": {"data": "table", "field": "fc_ts"},
//         "range": "width"
//       },
//       {
//         "name": "yscale",
//         "domain": {"data": "table", "field": "fc_name"},
//         "range": "height",
//         "nice": true
//       }
//     ],
//     "axes": [
//       { "orient": "bottom", "scale": "xscale", "title": "Timestamp" },
//       { "orient": "left", "scale": "yscale", "title": "Name" }
//     ],
//     "marks": [
//       {
//         "type": "point",
//         "from": {"data": "table"},
//         "encode": {
//           "enter": {
//             "x": {"scale": "xscale", "field": "fc_ts"},
//             "y": {"scale": "yscale", "field": "fc_name"},
//             "fill": {"value": "steelblue"},
//             "size": {"value": 100}
//           }
//         }
//       }
//     ]
//   }
  
//   onMounted(() => {
//     if (chart.value) {
//       vegaEmbed(chart.value, spec)
//         .then(result => {
//           // Visualization is now rendered
//         })
//         .catch(error => {
//           console.error(error)
//         })
//     }
//   })
//   </script>
  
//   <style scoped>
//   .vega-chart {
//     width: 100%;
//     height: 500px;
//   }
//   </style>
  
//    -->