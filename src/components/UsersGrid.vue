<template>
    <ejs-grid
      :dataSource="localData"
      :allowPaging="true"
      :pageSettings="pageSettings"
      :allowSorting="true"
      :allowFiltering="true"
      :allowGrouping="true"
    ></ejs-grid>
</template>

<script>
import vue from "vue";
import {
  GridPlugin,
  Page,
  Sort,
  Filter,
  Group,
} from "@syncfusion/ej2-vue-grids";
vue.use(GridPlugin);

export default {
  data: function () {
    return {
      localData: [
        { UserId: 1, UserName: "DiySane", Role: "Software Engineer" },
        { UserId: 2, UserName: "Ninja", Role: "Principal Software Engineer" },
        { UserId: 3, UserName: "Habibi", Role: "Software Architecht" },
        { UserId: 4, UserName: "Albert", Role: "Product Owner" },
        { UserId: 5, UserName: "Peekaboo", Role: "Scrum Master" },
        { UserId: 6, UserName: "Mike", Role: "Senior Software Engineer" },
        { UserId: 7, UserName: "Fred", Role: "Team Lead" },
        { UserId: 8, UserName: "Ela", Role: "UX Designer" },
        { UserId: 9, UserName: "Pluto", Role: "Engineering Manager" },
      ],
      pageSettings: { pageSize: 5 },
    };
  },
  provide: {
    grid: [Page, Sort, Filter, Group],
  },
};
</script>

<style>
@import url("https://cdn.syncfusion.com/ej2/material.css");
</style>
