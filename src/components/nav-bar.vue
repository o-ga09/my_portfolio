<template>
    <v-app>
      <v-navigation-drawer app v-model="drawer" clipped>
      <v-container>
        <v-list-item>
          <v-list-item-content>
            <v-row>
              <v-col cols="6">
                <v-list-item-title class="title grey--text text--darken-2">menu</v-list-item-title>
              </v-col>
              <v-col cols="6">
                <v-btn icon text @click="onClose">
                  <v-icon >mdi-close</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
      </v-container>
      <v-list nav dense>
        <v-list-item-group>
          <v-list-item v-for="nav_list in nav_lists" :key="nav_list.name" :to="nav_list.link">
            <v-list-item-icon>
              <v-icon>{{ nav_list.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ nav_list.name }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    </v-app>
</template>