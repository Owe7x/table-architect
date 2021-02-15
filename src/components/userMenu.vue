<template>
  <div class="text-center">
    <v-menu
    :close-on-content-click="false"
    offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-avatar
          v-bind="attrs"
          v-on="on"
          color="primary"
          size="35"
        >
          <img
            :src="user.photoURL"
            :alt="user.name"
          >
        </v-avatar>
      </template>
      <v-card
        class="mx-auto"
        max-width="344"
        outlined
      >
        <v-list-item three-line>
          <v-list-item-content>
            <div class="overline mb-4">
              User menu
            </div>
            <v-list-item-title class="headline mb-1">
              {{user.name}} {{user.lastName}}
            </v-list-item-title>
            <v-list-item-subtitle>
              {{user.email}}
            </v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-avatar
            tile
            size="100"
            color="grey"
          >
            <v-img :src="user.photoURL"></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-card-actions>
          <v-btn
            outlined
            @click="logOut()"
            text
          >
            Log out
          </v-btn>
          <v-spacer></v-spacer>
          <v-switch v-model="$vuetify.theme.dark"></v-switch>
        </v-card-actions>
      </v-card>
    </v-menu>
  </div>
</template>

<script>
import {get,sync} from 'vuex-pathify'

  export default {
    data: () => ({
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
    }),
    computed: {
      user: get("general/user"),
    },
    methods: {
      logOut() {
        this.$store.dispatch("general/logOut")
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>