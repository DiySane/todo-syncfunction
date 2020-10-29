<template>
  <ejs-grid
    :dataSource="apiData"
    :editSettings="editOptions"
    :toolbar="toolBarOptions"
  >
    <e-columns>
      <e-column field="OrderID" headerText="Order ID" editType="dropdownedit"></e-column>
      <e-column field="CustomerID" headerText="Customer ID" editType="numericedit"></e-column>
      <e-column field="OrderDate" headerText="Order Date"></e-column>
      <e-column field="ShipCountry" headerText="Ship Country"></e-column>
      <e-column field="ShipAddress" headerText="Ship Postal Code" :editTemplate="editTemplate"></e-column>
    </e-columns>
    <!-- <e-columns>
      <e-column
        field="userId"
        headerText="User ID"
        editType="dropdownedit"
      ></e-column>
      <e-column field="id" headerText="ID" editType="numericedit"></e-column>
      <e-column field="title" headerText="Title"></e-column>
      <e-column field="completed" headerText="Completed"></e-column>
    </e-columns> -->
  </ejs-grid>
</template>

<script>
import vue from "vue";
import { GridPlugin, Edit, Toolbar } from "@syncfusion/ej2-vue-grids";
import {
  DataManager,
  WebApiAdaptor,
  // Query
} from "@syncfusion/ej2-data";
import { MaskedTextBoxPlugin } from "@syncfusion/ej2-vue-inputs";
vue.use(GridPlugin);
vue.use(MaskedTextBoxPlugin);

class CustomAdaptor extends WebApiAdaptor {
  processResponse() {
    let original = super.processResponse.apply(this, arguments);
    return { result: original.result, count: original.count };
  }
}

export default {
  data: function () {
    return {
      apiData: new DataManager({
        url:
          "https://ej2services.syncfusion.com/production/web-services/api/Orders?$top=7",
        // url: "https://jsonplaceholder.typicode.com/todos",
        adaptor: new CustomAdaptor(),
      }),
      // param: new Query().addParams("Status", "Closed"),
      pageSettings: { pageSize: 5 },
      editOptions: {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        mode: "Dialog",
        // mode: "Normal", // inline
        // mode: "Batch",
      },
      toolBarOptions: ["Add", "Edit", "Delete", "Update", "Cancel"],
    };
  },
  provide: {
    // grid: [Page, Sort, Filter, Group, Edit, Toolbar],
    grid: [Edit, Toolbar],
  },
  methods: {
    editTemplate: function () {
      return {
        template: vue.component("MaskEditTextBox", {
          template: `<ejs-maskedtextbox id="ShipAddress" v-model="data.ShipAddress" mask="00-00"  ></ejs-maskedtextbox>`,
          data() {
            return {
              data: {},
            };
          },
        }),
      };
    },
  },
};
</script>

<style>
@import url("https://cdn.syncfusion.com/ej2/material.css");
</style>
