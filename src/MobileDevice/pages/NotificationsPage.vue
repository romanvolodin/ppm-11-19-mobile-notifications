<script setup>
import { useRoute } from 'vue-router'

import TopBar from '@/MobileDevice/components/TopBar.vue'
import BottomBar from '@/MobileDevice/components/BottomBar.vue'
import TimeWidget from '@/MobileDevice/components/TimeWidget.vue'
import NotificationBox from '@/MobileDevice/components/NotificationBox.vue'

const route = useRoute()
const renderBgOnly = Boolean(route.query.bgOnly === 'true')
const renderNotificationsOnly = Boolean(route.query.notificationsOnly === 'true')
</script>

<template>
  <main class="wrapper bg" :class="{ greenScreen: renderNotificationsOnly }">
    <TopBar class="top-bar" />
    <div class="main">
      <TimeWidget class="time-widget" />

      <template v-if="!renderBgOnly">
        <NotificationBox icon-color="#ffb465" sender="Лисиц" time="1 мин" body="Как ты там?" />
        <NotificationBox
          icon-color="#81d981"
          sender="Нинель"
          time="5 мин"
          body="Коша, держись! Всё буд..."
        />
        <NotificationBox
          icon-color="#81d981"
          sender="Нинель"
          time="15 мин"
          body="Пропущенный вызов (2)"
        />
        <NotificationBox
          icon-color="#d9cf81"
          sender="Макар"
          time="20 мин"
          body="Пропущенный вызов"
        />
        <NotificationBox
          icon-color="#ffb465"
          sender="Лисиц"
          time="33 мин"
          body="Пропущенный вызов"
        />
      </template>
    </div>
    <BottomBar class="bottom-bar" />
  </main>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.bg {
  background-image: url(screen.jpg);
  background-position: center;
  background-size: cover;
}
.main {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 15px;
}
.header {
  margin: 0;
}
.device {
  margin-bottom: 20px;
  font-size: 18px;
}
.greenScreen {
  background-image: none;
  background-color: #0f0;
}
.greenScreen > .main > .time-widget {
  opacity: 0;
}
.greenScreen > .top-bar,
.greenScreen > .bottom-bar {
  opacity: 0;
}
</style>
