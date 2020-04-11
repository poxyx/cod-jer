<template>
  <nav>
    <v-app-bar color="primary" app class="white--text">
      <v-app-bar-nav-icon
        class="white--text"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>
        <span class="font-weight-light">TODO</span>
        <span>NINJA</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text color="white">
        <span>SIGN OUT</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-subheader>REPORTS</v-subheader>
        <v-list-item-group v-model="item" color="primary">
          <v-list-item v-for="(item, i) in items" :key="i" router :to="item.route">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      item: 1,
      items: [
        { text: "Dashboard", icon: "dashboard", route: "/" },
        { text: "My Projects", icon: "folder", route: "/projects" },
        { text: "Team", icon: "person", route: "/team" }
      ]
    };
  }
};
</script>
