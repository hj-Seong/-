<template>
    <div>
        <p>{{memo.memo}}</p>
    </div>
</template>

<script>
export default {
    async created() { 
      // memo의 id값을 가져오기 위해서, route의 params 사용
      // axios의 반환값도 promise객체
      const promise = await this.$http.get(`/api/memo/${this.$route.params.id}`)
      // awaite를 이용해서 출력
      const response = await promise.data;
      this.memo = response;
  },
  data() {
    return {
      memo :{}
    }
  }
}
</script>