<template>
  <div>
    <v-flex xs11 md6>
      <v-select
        :items="dbms"
        v-model="dbmsSelected"
        label="Database"
      ></v-select>
    </v-flex>
    <v-flex xs11 md6>
      <v-slider
        v-model="columnsCnt"
        :label="Columns"
        :thumb-color="red"
        max="40"
        thumb-label="always"
      ></v-slider>
    </v-flex>
    <v-flex xs11 md6>
      <v-slider
        v-model="rowsCnt"
        :label="Rows"
        :thumb-color="red"
        thumb-label="always"
      ></v-slider>
    </v-flex>
    <v-flex xs11 md6>
      Estimated size: {{estSize}} Mb
    </v-flex>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        dbmsSelected : null,
        dbms : ["Oracle", "MS SQL"],
        rowsCnt : 50,
        columnsCnt : 10,
      }
    },
    computed: {
      estSize() {
        return this.rowsCnt * this.columnsCnt
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>