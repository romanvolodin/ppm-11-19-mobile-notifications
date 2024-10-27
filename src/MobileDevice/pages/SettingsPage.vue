<script setup>
import TopBar from '@/MobileDevice/components/TopBar.vue'
import BottomBar from '@/MobileDevice/components/BottomBar.vue'

import chevron_icon from '@/MobileDevice/assets/icons/chevron-right.svg'

import mobile_network_icon from '@/MobileDevice/assets/icons/arrow-down-up.svg'
import updates_icon from '@/MobileDevice/assets/icons/arrow-up-circle-fill.svg'
import battery_icon from '@/MobileDevice/assets/icons/battery-full.svg'
import sun_icon from '@/MobileDevice/assets/icons/brightness-high-fill.svg'
import brush_icon from '@/MobileDevice/assets/icons/brush-fill.svg'
import flower_icon from '@/MobileDevice/assets/icons/flower3.svg'
import gear_icon from '@/MobileDevice/assets/icons/gear-wide.svg'
import geo_icon from '@/MobileDevice/assets/icons/geo-alt-fill.svg'
import phone_icon from '@/MobileDevice/assets/icons/phone.svg'
import wifi_icon from '@/MobileDevice/assets/icons/wifi_settings.svg'
</script>

<template>
  <main class="wrapper bg">
    <TopBar />
    <div class="main">
      <h1 class="header">Настройки</h1>
      <h2 class="device">Устройство "Александр"</h2>

      <div class="box">
        <span class="title">
          <img class="icon" :src="phone_icon" />
          О телефоне
        </span>
        <img :src="chevron_icon" style="width: 18px" />
      </div>
      <div class="box">
        <span class="title">
          <img class="icon" :src="updates_icon" />
          Обновления
        </span>
        <img :src="chevron_icon" style="width: 18px" />
      </div>
      <div class="box">
        <span class="title">
          <img class="icon" :src="wifi_icon" />
          Wi-Fi
        </span>
        <img :src="chevron_icon" style="width: 18px" />
      </div>
      <div class="box">
        <span class="title">
          <img class="icon" :src="mobile_network_icon" />
          Мобильная сеть
        </span>
        <img :src="chevron_icon" style="width: 18px" />
      </div>
      <div class="box">
        <span class="title">
          <img class="icon" :src="flower_icon" />
          Обои
        </span>
        <img :src="chevron_icon" style="width: 18px" />
      </div>
      <div class="box">
        <span class="title">
          <img class="icon" :src="brush_icon" />
          Темы
        </span>
        <img :src="chevron_icon" style="width: 18px" />
      </div>
      <div class="box">
        <span class="title">
          <img class="icon" :src="sun_icon" />
          Экран и яркость
        </span>
        <img :src="chevron_icon" style="width: 18px" />
      </div>
      <div class="box">
        <span class="title">
          <img class="icon" :src="geo_icon" />
          Геопозиция
        </span>
        <img :src="chevron_icon" style="width: 18px" />
      </div>
      <div class="box">
        <span class="title">
          <img class="icon" :src="gear_icon" />
          Приложения
        </span>
        <img :src="chevron_icon" style="width: 18px" />
      </div>
      <div class="box">
        <span class="title">
          <img class="icon" :src="battery_icon" />
          Батарея
        </span>
        <img :src="chevron_icon" style="width: 18px" />
      </div>
    </div>
    <BottomBar />
  </main>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
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
.box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  border-radius: 10px;
  background-color: hsl(208, 0%, 95%);
  padding: 12px 15px;
  width: 100%;
}
.title {
  font-weight: bold;
  font-size: 19px;
}
.icon {
  margin-right: 5px;
  width: 20px;
}
</style>
