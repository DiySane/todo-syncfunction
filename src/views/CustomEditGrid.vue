<template>
  <ejs-grid
    :dataSource="apiData"
    :editSettings="editOptions"
    :toolbar="toolBarOptions"
    :enablePersistence="false"
    :allowExcelExport="true"
    :actionComplete="actionHandler"
  >
    <!-- <e-columns>
      <e-column field="OrderID" headerText="Order ID" editType="numericedit"></e-column>
      <e-column field="CustomerID" headerText="Customer ID"></e-column>
      <e-column field="OrderDate" headerText="Order Date"></e-column>
      <e-column field="ShipCountry" headerText="Ship Country"></e-column>
      <e-column field="ShipAddress" headerText="Ship Postal Code" :editTemplate="editTemplate"></e-column>
    </e-columns> -->
    <e-columns>
      <!-- e-column
        field="id"
        headerText="Order ID"
        editType="numericedit"
      ></e-column> -->
      <e-column
        field="email"
        headerText="Email"
        editType="dropdownedit"
      ></e-column>
      <e-column field="first_name" headerText="Order Date"></e-column>
      <e-column field="last_name" headerText="Ship Country"></e-column>
      <e-column field="avatar" headerText="Avatar"></e-column>
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
  // WebApiAdaptor,
  // RemoteSaveAdaptor,
  Query,
  // JsonAdaptor
} from "@syncfusion/ej2-data";
// import { MaskedTextBoxPlugin } from "@syncfusion/ej2-vue-inputs";
vue.use(GridPlugin);
// vue.use(MaskedTextBoxPlugin);
// import { TabPlugin } from "@syncfusion/ej2-vue-navigations";
// import { Ajax } from "@syncfusion/ej2-base";
// vue.use(TabPlugin);
// import DummyTab from "@/components/DummyTab.vue";

// class CustomAdaptor extends WebApiAdaptor {
//   processResponse() {
//     console.log("in process response")
//     let original = super.processResponse.apply(this, arguments);
//     return { result: original.data, count: original.total };
//     // return { result: result, count: original.total };
//   }
// }

// class CustomSaveAdaptor extends RemoteSaveAdaptor {
//   processResponse() {
//     console.log("in process response")
//     let original = super.processResponse.apply(this, arguments);
//     return { result: original.value, count: original.total };
//     // return { result: result, count: original.total };
//   }
// }

let json = [
  {
    id: 7,
    email: "michael.lawson@reqres.in",
    first_name: "Michael",
    last_name: "Lawson",
    avatar: "https://reqres.in/img/faces/7-image.jpg",
  },
  {
    id: 8,
    email: "lindsay.ferguson@reqres.in",
    first_name: "Lindsay",
    last_name: "Ferguson",
    avatar: "https://reqres.in/img/faces/8-image.jpg",
  },
  {
    id: 9,
    email: "tobias.funke@reqres.in",
    first_name: "Tobias",
    last_name: "Funke",
    avatar: "https://reqres.in/img/faces/9-image.jpg",
  },
  {
    id: 10,
    email: "byron.fields@reqres.in",
    first_name: "Byron",
    last_name: "Fields",
    avatar: "https://reqres.in/img/faces/10-image.jpg",
  },
  {
    id: 11,
    email: "george.edwards@reqres.in",
    first_name: "George",
    last_name: "Edwards",
    avatar: "https://reqres.in/img/faces/11-image.jpg",
  },
  {
    id: 12,
    email: "rachel.howell@reqres.in",
    first_name: "Rachel",
    last_name: "Howell",
    avatar: "https://reqres.in/img/faces/12-image.jpg",
  },
];

export default {
  data: function() {
    return {
      // apiData: new DataManager({
      //   // url: "https://ej2services.syncfusion.com/production/web-services/api/Orders?$top=7",
      //   // url: "https://jsonplaceholder.typicode.com/todos",
      //   // adaptor: new CustomAdaptor(),
      //   // json: this.result,
      //   // adaptor: new JsonAdaptor(),
      //   // url: "https://reqres.in/api/users?page=2",
      //   json: json,
      //   // adaptor: new RemoteSaveAdaptor(),
      //   // adaptor: new CustomSaveAdaptor(),
      //   // crudUrl: "https://reqres.in/api/users/2",
      // }),
      apiData: new DataManager(json),
      param: new Query().addParams("Status", "Closed"),
      pageSettings: { pageSize: 5 },
      dropData: [{ email: "a@abc.com" }, { email: "b@abc.com" }],
      employeeParams: {
        params: {
          dataSource: this.dropData,
          fields: { text: "Customer ID", value: "email" },
          query: new Query(),
        },
      },
      editOptions: {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        mode: "Dialog",
  //       template: function() {
  //         return {
  //           template: vue.component("DailogTemplate", {
  //             template: `<div id="wrapper" style="margin-top: 20px">
  //   <div>
  //     <ejs-tab id="element" ref="element">
  //       <e-tabitems>
  //         <e-tabitem :header="headerText0" :content="content0"></e-tabitem>
  //         <e-tabitem :header="headerText1" :content="content1"></e-tabitem>
  //         <e-tabitem :header="headerText2"></e-tabitem>
  //       </e-tabitems>
  //     </ejs-tab>
  //   </div>
  // </div>`,
  //             data: function() {
  //               return {
  //                 headerText0: { text: "Email" },
  //                 headerText1: { text: "Name" },
  //                 headerText2: { text: "Avatar" },
  //                 content0:
  //                   "Facebook is an online social networking service headquartered in Menlo Park, California. Its website was " +
  //                   "launched on February 4, 2004, by Mark Zuckerberg with his Harvard College roommates and fellow students Eduardo " +
  //                   "Saverin, Andrew McCollum, Dustin Moskovitz and Chris Hughes.The founders had initially limited the website' " +
  //                   "membership to Harvard students, but later expanded it to colleges in the Boston area, the Ivy League, and Stanford " +
  //                   "University. It gradually added support for students at various other universities and later to high-school students.",

  //                 content1:
  //                   "WhatsApp Messenger is a proprietary cross-platform instant messaging client for smartphones that operates " +
  //                   "under a subscription business model. It uses the Internet to send text messages, images, video, user location and " +
  //                   "audio media messages to other users using standard cellular mobile numbers. As of February 2016, WhatsApp had a user " +
  //                   "base of up to one billion,[10] making it the most globally popular messaging application. WhatsApp Inc., based in " +
  //                   "Mountain View, California, was acquired by Facebook Inc. on February 19, 2014, for approximately US$19.3 billion.",
  //               };
  //             },
  //           }),
  //         };
        // },
        // template: DummyTab,
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
    // editTemplate: function() {
    //   return {
    //     template: vue.component("MaskEditTextBox", {
    //       template: `<ejs-maskedtextbox id="ShipAddress" v-model="data.ShipAddress" mask="00-00"  ></ejs-maskedtextbox>`,
    //       data() {
    //         return {
    //           data: {},
    //         };
    //       },
    //     }),
    //   };
    // },
    actionHandler: function(args) {
      /* if (args.requestType === "beginEdit" || args.requestType === "add") {
        let dialog = args.dialog;
        dialog.height = 400;
        // change the header of the dialog
        dialog.header =
          args.requestType === "beginEdit"
            ? "Record of " + args.rowData["email"]
            : "New Customer";
        dialog.content += "<div>hi hi</div>"
      } */
      if (args.requestType === "save") {
        // grid.autoFitColumns(['alias', 'description'])
        console.log("Save invoked!");
        console.log(args);
        var message = "oldValue:\t\t" + args.previousData.first_name;
        message += "\n";
        message += "newValue:\t\t" + JSON.stringify(args.data.first_name);
        alert(message);
      }
    },
  },
};
</script>

<style>
@import url("https://cdn.syncfusion.com/ej2/material.css");
</style>
