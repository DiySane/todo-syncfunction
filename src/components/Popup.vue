<template>
  <v-dialog max-width="600px" v-model="dialog">
    <template v-slot:activator="{ on, attrs }">
      <v-btn text v-bind="attrs" v-on="on" class="success">Add new project</v-btn>
    </template>
    <v-card>
      <v-card-title>
        <h2>Add a New Project</h2>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3" ref="form">
          <v-text-field label="Title" v-model="title" prepend-icon="mdi-folder" :rules="inputRules"></v-text-field>
          <v-textarea
            label="Information"
            v-model="content"
            prepend-icon="mdi-pencil"
            :rules="inputRules"
          ></v-textarea>

          <v-menu v-model="menu" :close-on-content-click="false">
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                :value="formattedDate"
                v-bind="attrs"
                v-on="on"
                color="grey"
                clearable
                label="Due Date"
                prepend-icon="mdi-calendar"
                :rules="inputRules"
              ></v-text-field>
            </template>
            <v-date-picker v-model="due" @change="menu = false"></v-date-picker>
          </v-menu>
          <v-spacer></v-spacer>

          <v-btn
            flat
            class="success mx-0 mt-3"
            :loading="loading"
            :disabled="loading"
            @click="submit"
          >Add project</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import format from "date-fns/format";
import db from "@/fb";

export default {
  data() {
    return {
      title: "",
      content: "",
      due: null,
      menu: false,
      inputRules: [v => v.length >= 3 || "Minimum length is 3 characters"],
      loading: false,
      dialog: false,
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        // console.log(this.title, this.content);
        this.loading = true;
        const project = {
          title: this.title,
          content: this.content,
          due: format(new Date(this.due), "do MMM yyyy"),
          person: "The Net Ninja",
          status: "ongoing"
        };
        db.collection("projects")
          .add(project)
          .then(() => {
            console.log("added to db");
            this.loading = false;
            this.dialog = false;
            this.$emit('projectAdded')
          });
      }
    }
  },
  computed: {
    formattedDate() {
      console.log(this.due);
      return this.due ? format(new Date(this.due), "do MMM yyyy") : "";
    }
  }
};
</script>