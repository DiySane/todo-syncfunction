<template>
  <ejs-grid
    :dataSource="apiData"
    :query="param"
    :allowPaging="true"
    :pageSettings="pageSettings"
    :allowSorting="true"
    :allowFiltering="true"
    :allowGrouping="true"
  >
    <!-- <e-columns>
      <e-column field="OrderID" headerText="User ID"></e-column>
      <e-column field="CustomerID" headerText="ID"></e-column>
      <e-column field="OrderDate" headerText="Title"></e-column>
      <e-column field="ShipCountry" headerText="Completed"></e-column>
    </e-columns> -->
    <!-- <e-columns>
      <e-column field="id" headerText="User ID"></e-column>
      <e-column field="name" headerText="ID"></e-column>
      <e-column field="year" headerText="Title"></e-column>
      <e-column field="pantone_value" headerText="Completed"></e-column>
    </e-columns> -->
    <e-columns>
      <e-column field="userId" headerText="User ID"></e-column>
      <e-column field="id" headerText="ID"></e-column>
      <e-column field="title" headerText="Title"></e-column>
      <e-column field="completed" headerText="Completed"></e-column>
    </e-columns>
  </ejs-grid>
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
import { DataManager, WebApiAdaptor, Query } from "@syncfusion/ej2-data";
vue.use(GridPlugin);

class CustomAdaptor extends WebApiAdaptor {
  processResponse() {
    let original = super.processResponse.apply(this, arguments);
    return { result: original, count: original.count };
  }
}

export default {
  data: function () {
    return {
      apiData: new DataManager({
        url:
          // "https://ej2services.syncfusion.com/production/web-services/api/Orders?$top=7",
        // "https://reqres.in/api/unknown?page=2",
        "https://jsonplaceholder.typicode.com/todos",
        adaptor: new CustomAdaptor(),
      }),
      param: new Query().addParams("Status", "Closed"),
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
