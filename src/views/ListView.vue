<template>
  <v-container>{{ result }}
    <v-card>
      <v-data-table
        :headers="headers"
        :items="result"
        class="elevation-1"
      >
        <template v-slot:items="props">
          <td>{{ props.item.name }}</td>
          <td>{{ props.item.email }}</td>
          <td>{{ props.item.regDate }}</td>
          
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
  import axios from 'axios'
  export default {
    data :() =>({
      result:[],
      headers: [
          // {
          //   text: 'Dessert (100g serving)',
          //   align: 'left',
          //   sortable: false,
          //   value: 'name'
          // },
          { text: '이름', value: 'name' },
          { text: '이메일', value: 'email' },
          { text: '가입일자', value: 'regDate' },
          // { text: 'Protein (g)', value: 'protein' },
          // { text: 'Iron (%)', value: 'iron' }
        ]
    }),
    created () {
      console.log(process.env.VUE_APP_BASEURL,'List');//, this.$store.state.user)
      this.getData()
    },
    methods :{
      getData () {
      axios
        .post(process.env.VUE_APP_BASEURL + '/findAll')
        .then((response) => {(this.result = response.data.result)
          console.log(response.data.result)
          console.log(process.env.VUE_APP_BASEURL)
        })
        .catch((error) => console.log(error))
    }
    }
  }
</script>
