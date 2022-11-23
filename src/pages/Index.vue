<template>
  <div class="Home">
    <v-container fluid >
      <v-row>
        <v-col cols="12">
          <v-row v-resize="onResize" :style="style" >
            <v-col cols="12" md="12" lg="12">
                <v-card height="100%">
                    <v-card-title>Card 1</v-card-title>
                    <v-card-text>Text</v-card-text>
                </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

  export default {
    name: 'Home',
    data: () => ({
      windowSize: {
        x: 0,
        y: 0,
      },
      iconSize: 0 
    }),

    mounted () {
      this.onResize()
    },

    computed: {
      style () {
        return 'height: ' + this.windowSize.y * 0.8 + 'px;'
      }
    },

    methods: {
      onResize () {
        this.windowSize = { x: window.innerWidth, y: window.innerHeight }
        this.iconSize = window.innerHeight * 0.1
      },
    },
    components: {
    },
  }
</script>