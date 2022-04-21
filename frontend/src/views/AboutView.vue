<template>
  <div class="about">
    <h1>메모</h1>
    <table v-for="(memo, i) in memo" :key="i">
      <tr>
        <td>{{memo.id}}</td>
        <td>{{memo.writer}}</td>
        <td>{{memo.title}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  created() { 
    // 메모값을 vue가 생성될때 들고옴
    // axios fetch와 사용법 유사
    this.$http.get('/api/memo')
    .then((response)=>{
      console.log(response.data)
      this.memo = response.data
    })
  },
  data() {
    return {
      memo :[]
    }
  }
}
</script>
