<template>
  <div class="next-page">
    <nuxt-link role="button" @click="goNextPage()">Next Page</nuxt-link>
  </div>
  <div class="previous-page">
    <nuxt-link role="button" @click="goPreviousPage()">Previous Page</nuxt-link>
  </div>
  <main class="container">
    <div class="center">
      <article id="0" class="page">
        <div>
          <h1>網頁開發</h1>
          <h2>郭兆威</h2>
        </div>
      </article>

      <article id="1" class="page">
        <div>
          <h1>使用框架</h1>
          <h2>前端</h2>
          <h3>Nuxt.js (TypeScript)</h3>
          <h3>Pico CSS</h3>
          <h2>後端</h2>
          <h3>Spring Boot (Java)</h3>
          <h3>MariaDB</h3>
          <h2>驗證（前後端）</h2>
          <h3>Logto（OIDC）</h3>
        </div>
      </article>

      <article id="2" class="page">
        <div>
          <h1>伺服器架構</h1>
          <img src="../assets/workflow.drawio.png" height="622" width="952"/>
        </div>
      </article>

      <article id="3" class="page">
        <div>
          <h1>Nuxt.js 是啥？</h1>
          <h3>Server Side Renader 前後端</h3>
          <h3>基於Vue.js、Nitro以及Vite</h3>
          <hr>
          <h1>為啥使用 Nuxt.js ？</h1>
          <h3>Nuxt.js 狂熱分子推薦</h3>
          <hr>
          <h1>PICO css</h1>
        </div>
      </article>

      <article id="4" class="page">
        <div>
          <h1>驗證流程</h1>
          <img src="../assets/auth_overflow.drawio.png" height="887" width="872"/>
        </div>
      </article>

      <article id="5" class="page">
        <div>
          <h1>OIDC 是啥？</h1>
          <h3>OpenID Connect</h3>
          <h3>認證通訊協定</h3>
        </div>
      </article>

      <article id="6" class="page">
        <div>
          <h1>使用者驗證流程</h1>
          <img src="../assets/user_auth_overflow.png" height="638" width="1104"/>
        </div>
      </article>

      <article id="7" class="page">
        <div>
          <h1>API Access Token</h1>
          <div class="horizon-container">
            <img src="../assets/img.png" height="848" width="643"/>
            <div style="padding-left: 1rem;">
              <h1>JWT Web Token</h1>
              <a href="https://jwt.io/"><h3>https://jwt.io</h3></a>
              <hr>
              <h3>Access Token</h3>
              <h3>Refresh Token</h3>
            </div>
          </div>
        </div>
      </article>

      <article id="8" class="page">
        <div>
          <h1>Spring Boot</h1>
          <h3>Java 應用程式框架</h3>
          <h3>最少化配置設定</h3>
        </div>
      </article>

      <article id="9" class="page">
        <div>
          <h1>RESTful API</h1>
          <h3>統一介面</h3>
          <h3>無狀態</h3>
          <h3>分層系統</h3>
        </div>
      </article>

      <article id="10" class="page">
        <div>
          <h1>WebSocket 是啥 ？</h1>
          <h3>Socket over HTTP</h3>
          <h3>用於即時通訊</h3>
          <h3>允許伺服器主動向客戶端傳資料</h3>
          <h1>為何使用 Websocket ？</h1>
          <h3>即時接收新訊息</h3>
          <h1>Stomp 是啥？</h1>
          <h3>文字訊息傳輸協議</h3>
        </div>
      </article>

      <article id="11" class="page">
        <div>
          <h1>完整 Workflow</h1>
          <h2>1. 使用者登入</h2>
          <h4>遵照 OIDC 取得 Access Code</h4>
          <hr>
          <h2>2. 告知伺服器新增使用者</h2>
          <h4>使用 RESTful API 攜帶 Access Token 向伺服器傳送請求</h4>
          <h4>伺服器取得請求後使用 Logto m2m API 取得使用者 Email</h4>
          <h4>伺服器將該使用者 Email, User ID 存入 mariaDB 資料庫中</h4>
          <hr>
          <h2>3. 取得所有聊天室內的訊息</h2>
          <h4>使用 RESTful API 攜帶 Access Token 向伺服器請求資料</h4>
          <h4>伺服器端從 mariaDB 資料庫中取得所有訊息</h4>
          <h4>轉為 Json 後傳回給客戶端</h4>
          <hr>
          <h2>4. 連接 WebSocket</h2>
          <h4>使用 Access Token 連接 WebSocket</h4>
          <h4>若收到：新增該訊息至HTML</h4>
          <hr>
          <h2>5. 使用者傳送訊息</h2>
          <h4>使用 RESTful API 攜帶 Access Token 向伺服器傳送請求</h4>
          <h4>伺服器將傳送時間、User ID 存入資料庫</h4>
          <h4>將該訊息轉為 Json 後傳至 WebSocket</h4>
          <h4></h4>
        </div>
      </article>

      <article id="12" class="page">
        <div>
          <h1>成品連結</h1>
          <a href="https://chat.devvillie.me"><h3 style="color: dodgerblue;">https://chat.devvillie.me</h3></a>
          <a href="https://github.com/willie-deev/Chat-Server"><h3 style="color: dodgerblue;">https://github.com/willie-deev/Chat-Server</h3></a>
          <a href="https://github.com/willie-deev/chat-client"><h3 style="color: dodgerblue;">https://github.com/willie-deev/chat-client</h3></a>
          <h1>參考資料</h1>
          <a href="https://www.ibm.com/docs/en/sva/11.0.0?topic=support-oauth-20-oidc-workflows"><h3 style="color: dodgerblue;">https://www.ibm.com/docs/en/sva/11.0.0</h3></a>
          <a href="https://docs.logto.io"><h3 style="color: dodgerblue;">https://docs.logto.io</h3></a>
          <a href="https://stomp.github.io/"><h3 style="color: dodgerblue;">https://stomp.github.io</h3></a>
        </div>
      </article>
    </div>
  </main>
</template>

<style>
.page {
  min-height: 100vh;
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 5rem 0;
}
.horizon-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.center {
  text-align: center;
}
h1{
  font-size: 4rem;
}
h2{
  font-size: 3rem;
}
h3{
  font-size: 2.5rem;
}
h4{
  font-size: 2.25rem;
}
.next-page {
  text-align: right;
  position: fixed;
  bottom: 1rem;
  right: 1rem;
}
.previous-page {
  text-align: left;
  position: fixed;
  bottom: 1rem;
  left: 1rem;
}
</style>
<script setup>
  import {navigateTo} from "#app";
  const page = useState('page', () => 0)
  function goNextPage(){
    if(page.value >= 12){
      return
    }
    page.value+=1
    navigateTo('#' + page.value.toString())
  }
  function goPreviousPage(){
    if(page.value <= 0){
      return
    }
    page.value-=1
    navigateTo('#' + page.value.toString())
  }
</script>