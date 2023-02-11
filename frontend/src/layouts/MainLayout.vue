<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-dark">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Data Visualization
        </q-toolbar-title>

        <div>Dominic Wojewodka</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-dark text-white"
    >
      <q-list>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Dashboard',
    icon: 'home',
    path: '/',
  },
  {
    title: 'Stonks',
    icon: 'show_chart',
    path: '/stonks/',
  },
  {
    title: 'Steam Hours',
    icon: 'videogame_asset',
    path: '/steamHours/',
  },
  {
    title: 'Screen Time',
    icon: 'phone_iphone',
    path: '/screenTime',
  },
  {
    title: 'Fitness',
    icon: 'fitness_center',
    path: '/fitness/',
  },
  {
    title: 'Overall',
    icon: 'assessment',
    path: '/overall',
  }
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
