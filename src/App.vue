<template>
  <v-app>
    <div class="grey lighten-4">
      <Navbar />
      <v-main class="mx-10 mb-10">
        <router-view></router-view>
      </v-main>
    </div>
    <!-- <div>
      <UsersGrid />
    </div> -->
    <!-- <div>
      <APIDataManager />
    </div> -->
    <!-- <div>
      <EditGrid />
    </div> -->
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
// import UsersGrid from "@/components/UsersGrid";
// import APIDataManager from "@/components/APIDataManager";
// import EditGrid from "@/components/EditGrid";

export default {
  name: "App",
  components: { Navbar },
  data: () => ({
    //
  })
};
</script>
