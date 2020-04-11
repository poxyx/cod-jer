<template>
  <v-app>
    <v-content>
      <Navbar />
      <v-container class="mt-5">
        <v-row no-gutters>
          <v-col cols="12">
            <form>
              <v-text-field
                v-model="name"
                :error-messages="nameErrors"
                :counter="10"
                label="Name"
                required
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
              ></v-text-field>
              <v-text-field
                v-model="email"
                :error-messages="emailErrors"
                label="E-mail"
                required
                @input="$v.email.$touch()"
                @blur="$v.email.$touch()"
              ></v-text-field>

              <v-text-field
                v-model="password"
                :error-messages="passwordErrors"
                label="Password"
                required
                type="password"
                @change="$v.password.$touch()"
                @blur="$v.password.$touch()"
              ></v-text-field>

              <v-text-field
                v-model="repeatPassword"
                :error-messages="repeatPasswordErrors"
                label="Repeat Password"
                required
                type="password"
                @change="$v.repeatPassword.$touch()"
                @blur="$v.repeatPassword.$touch()"
              ></v-text-field>

              <v-textarea v-model="description" clearable clear-icon="cancel" label="Description"></v-textarea>

              <v-select
                v-model="cuisineSelect"
                :items="cuisine"
                :error-messages="cuisineErrors"
                label="Cuisine"
                required
                @change="$v.cuisineSelect.$touch()"
                @blur="$v.cuisineSelect.$touch()"
              ></v-select>

              <v-select
                v-model="typeSelect"
                :items="type"
                :error-messages="typeErrors"
                label="Type"
                required
                @change="$v.typeSelect.$touch()"
                @blur="$v.typeSelect.$touch()"
              ></v-select>

              <v-select
                v-model="orderTypeSelect"
                :items="orderType"
                :error-messages="orderTypeSelectErrors"
                label="Type"
                required
                @change="$v.orderTypeSelect.$touch()"
                @blur="$v.orderTypeSelect.$touch()"
              ></v-select>

              <v-btn class="mt-5 mr-4" @click="submit">submit</v-btn>
              <v-btn @click="clear" class="mt-5">clear</v-btn>
            </form>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { validationMixin } from "vuelidate";
import {
  required,
  minLength,
  sameAs,
  maxLength,
  email
} from "vuelidate/lib/validators";
import Navbar from "@/components/RestaurantGuestNavbar";

export default {
  name: "RestaurantRegister",
  components: {
    Navbar
  },
  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(10) },
    email: { required, email },
    cuisineSelect: { required },
    typeSelect: { required },
    orderTypeSelect: { required },
    password: {
      required,
      minLength: minLength(6)
    },
    repeatPassword: {
      required,
      sameAs: sameAs("password")
    }
  },

  data: () => ({
    name: "",
    email: "",
    cuisineSelect: null,
    typeSelect: null,
    orderTypeSelect: null,
    cuisine: ["Item 1", "Item 2", "Item 3", "Item 4"],
    type: ["Item 1", "Item 2", "Item 3", "Item 4"],
    orderType: ["Item 1", "Item 2", "Item 3", "Item 4"],
    password: "",
    repeatPassword: "",
    description: ""
  }),

  computed: {
    cuisineErrors() {
      const errors = [];
      if (!this.$v.cuisineSelect.$dirty) return errors;
      !this.$v.cuisineSelect.required && errors.push("Cuisine is required");
      return errors;
    },
    typeErrors() {
      const errors = [];
      if (!this.$v.typeSelect.$dirty) return errors;
      !this.$v.typeSelect.required && errors.push("Type is required");
      return errors;
    },
        orderTypeSelectErrors() {
      const errors = [];
      if (!this.$v.orderTypeSelect.$dirty) return errors;
      !this.$v.orderTypeSelect.required && errors.push("Order Type is required");
      return errors;
    },
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength &&
        errors.push("Name must be at most 10 characters long");
      !this.$v.name.required && errors.push("Name is required.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.minLength &&
        errors.push("Password must be at minimum 6 characters long");
      !this.$v.password.required && errors.push("Password is required");
      return errors;
    },
    repeatPasswordErrors() {
      const errors = [];
      if (!this.$v.repeatPassword.$dirty) return errors;
      !this.$v.repeatPassword.sameAs &&
        errors.push("Passwords must be identical.");
      !this.$v.repeatPassword.required && errors.push("Password is required");
      return errors;
    }
  },

  methods: {
    submit() {
      console.log(this.cuisineSelect);
      this.$v.$touch();
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.email = "";
      this.password = "";
      this.repeatPassword = "";
      this.cuisineSelect = null;
      this.typeSelect = null;
      this.orderTypeSelect = null;
      this.description = "";
      this.checkbox = false;
    }
  }
};
</script>
