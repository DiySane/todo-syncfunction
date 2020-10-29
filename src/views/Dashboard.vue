<template>
  <div class="dashboard">
    <h1 class="subheading grey--text">Dashboard</h1>

    <v-container class="my-5">

      <v-layout row class="mb-3">
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn small text color="grey" @click="sortBy('title')" v-bind="attrs" v-on="on">
              <v-icon left small>mdi-folder</v-icon>
              <span class="caption text-lowercase">by project name</span>
            </v-btn>
          </template>
          <span>Sort projects by project name</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn small text color="grey" @click="sortBy('person')" v-bind="attrs" v-on="on">
              <v-icon left small>mdi-account</v-icon>
              <span class="caption text-lowercase">by person</span>
            </v-btn>
          </template>
          <span>Sort projects by person</span>
        </v-tooltip>
      </v-layout>

      <v-card text class="pa-3" v-for="project in projects" :key="project.title">
        <v-layout row wrap :class="`pa-3 project ${project.status}`">
          <v-flex xs12 md6>
            <div class="caption grey--text">Project Title</div>
            <div>{{project.title}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Person</div>
            <div>{{project.person}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Due By</div>
            <div>{{project.due}}</div>
          </v-flex>
          <v-flex xs2 sm4 md2>
            <div class="right" id="chips-container">
              <!-- <v-chip :class="project.status" class="white--text my-2 caption">{{ project.status }}</v-chip> -->
              <v-chip
                small
                :class="`${project.status}`"
                class="white--text my-2 caption"
              >{{ project.status }}</v-chip>
            </div>
            <!-- <div>
              <v-chip small :class="`${project.status} white--text caption my-2`">{{ project.status }}</v-chip>
            </div>-->
            <!-- <div class="caption grey--text">Status</div>
            <div>{{project.status}}</div>-->
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>
      <!-- <v-layout row wrap>
        <v-flex xs12 md6 >
          <v-btn outline block class="primary">1</v-btn>
        </v-flex>
        <v-flex xs4 md2 >
          <v-btn outline block class="primary">2</v-btn>
        </v-flex>
        <v-flex xs4 md2 >
          <v-btn outline block class="primary">3</v-btn>
        </v-flex>
        <v-flex xs4 md2 >
          <v-btn outline block class="primary">4</v-btn>
        </v-flex>
      </v-layout>

      <v-layout row wrap justify-space-between>
        <v-flex xs4 md3 >
          <v-btn outline block class="success">1</v-btn>
        </v-flex> 
        <v-flex xs4 md3 >
          <v-btn outline block class="success">2</v-btn>
        </v-flex> 
      </v-layout>-->
    </v-container>

    <!-- #6 breakpoints an visibility -->
    <!-- <v-btn class="hidden-sm-and-down"> click me</v-btn>
    <v-btn class="hidden-sm-and-up"> click me</v-btn>
    <v-btn class="hidden-sm-only"> click me</v-btn>-->

    <!-- buttons -->

    <!-- <v-btn class="pink white--text">click me</v-btn>
    <v-btn depressed color="pink">click me</v-btn>
    <v-btn text color="pink" dark>click me</v-btn>

    <v-btn depressed class="pink white--text">
      <v-icon left>mdi-email</v-icon>
      <span>email me</span>
    </v-btn>

    <v-btn depressed small class="pink white--text">
      <v-icon left small>mdi-email</v-icon>
      <span>email me</span>
    </v-btn>

    <v-btn depressed large class="pink white--text">
      <span>email me</span>
      <v-icon right large>mdi-email</v-icon>
    </v-btn>

    <v-btn fab depressed small dark color="purple">
      <v-icon>mdi-heart</v-icon>
    </v-btn>-->

    <!-- paragraphs -->

    <!-- <p class="red white--text" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum maiores libero facilis facere illum quae ullam perspiciatis earum error fuga, aperiam placeat, laboriosam impedit aliquam ea consequatur, quidem atque sit!</p>
    <p class="pink lighten-4 red--text text--darken-4" >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga natus provident molestias vero, dolorem quam consequatur voluptatum recusandae rerum alias commodi repellat voluptas molestiae sint id reprehenderit iure ullam eaque.</p>
    <h1 class="display-4">Massive Display</h1>
    <h4 class="display-1">Smaller Display</h4>
    <h1>Original Massive Display</h1>
    <p class="headline">This is a headline</p>
    <p class="subheading">This is a subheading</p>
    <p class="subheading font-weight-bold">This is a bold subheading</p>
    <p class="caption">This is a caption</p>-->
  </div>
</template>

<script>

import db from '@/fb'

// @ is an alias to /src

export default {
  data() {
    return {
      projects: [
        {
          title: "Design a new website",
          person: "The Net Ninja",
          due: "1st Jan 2019",
          status: "ongoing",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
        },
        {
          title: "Code up the homepage",
          person: "Chun Li",
          due: "10th Jan 2019",
          status: "complete",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
        },
        {
          title: "Design video thumbnails",
          person: "Ryu",
          due: "20th Dec 2018",
          status: "complete",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
        },
        {
          title: "Create a community forum",
          person: "Gouken",
          due: "20th Oct 2018",
          status: "overdue",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
        }
      ]
    };
  },
  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => a[prop] > b[prop]);
    }
  },
  created() {
    db.collection('projects').onSnapshot(res => {
      const changes = res.docChanges();
      changes.forEach(change => {
        if(change.type === 'added') {
          this.projects.push({
            ...change.doc.data(),
            id: change.doc.id
          })
        }
      });
    })
  }
};
</script>

<style>
.project.complete {
  border-left: 4px solid #3cd1c2;
}
.project.ongoing {
  border-left: 4px solid #ffaa2c;
}
.project.overdue {
  border-left: 4px solid #f83e70;
}
#chips-container .v-chip.complete {
  background: #3cd1c2;
}
#chips-container .v-chip.ongoing {
  background: #ffaa2c;
}
#chips-container .v-chip.overdue {
  background: #f83e70;
}
</style>
