<template>
  <d2-container :filename="filename">
    <template slot="header">Page 1 header</template>
    Hello World
  </d2-container>
</template>

<script>
import { AccountLogin } from '@api/sys.login'
export default {
  name: 'page1',
  data () {
    return {
      filename: __filename
    }
  },
  created() {
    console.log(AccountLogin)
    AccountLogin({
      userName: 'xiaohu',
      password: 'qwer1234'
    }).then(e => {
      console.log(e)
    }).catch(e => {
      alert(e)
    })
  }
}
</script>
