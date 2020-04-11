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

              <v-row>
                <v-col cols="4">
                  <v-text-field v-model="countryCode" label="Country Code" disabled></v-text-field>
                </v-col>
                <v-col cols="8">
                  <v-text-field
                    v-model="phone"
                    :error-messages="phoneErrors"
                    label="Phone Number"
                    type="tel"
                    required
                    @input="$v.phone.$touch()"
                    @blur="$v.phone.$touch()"
                  ></v-text-field>
                </v-col>
              </v-row>

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
                label="Order Type"
                required
                @change="$v.orderTypeSelect.$touch()"
                @blur="$v.orderTypeSelect.$touch()"
              ></v-select>

              <v-select
                v-model="collectionTimeSelect"
                :items="collectionTime"
                :error-messages="collectionTimeSelectErrors"
                label="Collection Time"
                required
                @change="$v.collectionTimeSelect.$touch()"
                @blur="$v.collectionTimeSelect.$touch()"
              ></v-select>

              <v-text-field
                v-model="deliveryFee"
                :error-messages="deliveryFeeErrors"
                label="Delivery Fee"
                type="number"
                required
                @input="$v.deliveryFee.$touch()"
                @blur="$v.deliveryFee.$touch()"
              ></v-text-field>

              <v-text-field
                v-model="minAmountForDelivery"
                :error-messages="minAmountForDeliveryErrors"
                label="Minimum Amount For Delivery"
                type="number"
                required
                @input="$v.minAmountForDelivery.$touch()"
                @blur="$v.minAmountForDelivery.$touch()"
              ></v-text-field>

              <v-select
                v-model="minDeliveryTimeSelect"
                :items="minDeliveryTime"
                :error-messages="minDeliveryTimeSelectErrors"
                label="Minimum Delivery Time"
                required
                @change="$v.minDeliveryTimeSelect.$touch()"
                @blur="$v.minDeliveryTimeSelect.$touch()"
              ></v-select>

              <v-select
                v-model="maxDeliveryTimeSelect"
                :items="maxDeliveryTime"
                :error-messages="maxDeliveryTimeSelectErrors"
                label="Maximum Delivery Time"
                required
                @change="$v.maxDeliveryTimeSelect.$touch()"
                @blur="$v.maxDeliveryTimeSelect.$touch()"
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
    phone: { required },
    cuisineSelect: { required },
    typeSelect: { required },
    deliveryFee: { required },
    minAmountForDelivery: { required },
    maxDeliveryTimeSelect: { required },
    minDeliveryTimeSelect: { required },
    orderTypeSelect: { required },
    collectionTimeSelect: { required },
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
    countryCode:"+6",
    name: "",
    email: "",
    phone: null,
    cuisineSelect: null,
    typeSelect: null,
    deliveryFee: null,
    minAmountForDelivery: null,
    orderTypeSelect: null,
    maxDeliveryTimeSelect: null,
    minDeliveryTimeSelect: null,
    collectionTimeSelect: null,
    cuisine: [
      "Afghan'",
      "African",
      "American",
      "Arabic",
      "Bagels",
      "Balti",
      "Bangladeshi",
      "BBQ",
      "Breakfast",
      "British",
      "Burgers",
      "Cakes",
      "Caribbean",
      "Chicken",
      "Chinese",
      "Curry",
      "Desserts",
      "Drinks",
      "Fish & Chips",
      "Fusion",
      "Gourmet",
      "Gourmet Burgers",
      "Grill",
      "Ice Cream",
      "Indian",
      "Indonesian",
      "Iranian",
      "Italian",
      "Jamaican",
      "Japanese",
      "Kebab",
      "Korean",
      "Kosher",
      "Lebanese",
      "Lunch",
      "Mediterranean",
      "Middle Eastern",
      "Milkshakes",
      "Nigerian",
      "Noodles",
      "Oriental",
      "Pakistani",
      "Peri Peri",
      "Persian",
      "Pizza",
      "Portuguese",
      "South Indian",
      "Steak",
      "Sushi",
      "Thai",
      "Turkish",
      "Vegan",
      "Vegetarian",
      "Vietnamese"
    ],
    type: ["Vegeterian", "Non-Vegeterian", "Both"],
    orderType: ["Collection", "Delivery", "Both"],
    collectionTime: [
      "5 Minutes",
      "10 Minutes",
      "15 Minutes",
      "20 Minutes",
      "25 Minutes",
      "30 Minutes",
      "35 Minutes",
      "40 Minutes",
      "45 Minutes",
      "50 Minutes",
      "55 Minutes",
      "1 Hour"
    ],
    maxDeliveryTime: [
      "5 Minutes",
      "10 Minutes",
      "15 Minutes",
      "20 Minutes",
      "25 Minutes",
      "30 Minutes",
      "35 Minutes",
      "40 Minutes",
      "45 Minutes",
      "50 Minutes",
      "55 Minutes",
      "1 Hour"
    ],
    minDeliveryTime: [
      "5 Minutes",
      "10 Minutes",
      "15 Minutes",
      "20 Minutes",
      "25 Minutes",
      "30 Minutes",
      "35 Minutes",
      "40 Minutes",
      "45 Minutes",
      "50 Minutes",
      "55 Minutes",
      "1 Hour"
    ],
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
    phoneErrors() {
      const errors = [];
      if (!this.$v.phone.$dirty) return errors;
      !this.$v.phone.required && errors.push("Phone Number is required");
      return errors;
    },
    maxDeliveryTimeSelectErrors() {
      const errors = [];
      if (!this.$v.maxDeliveryTimeSelect.$dirty) return errors;
      !this.$v.maxDeliveryTimeSelect.required &&
        errors.push("Maximum Delivery Time is required");
      return errors;
    },
    minDeliveryTimeSelectErrors() {
      const errors = [];
      if (!this.$v.minDeliveryTimeSelect.$dirty) return errors;
      !this.$v.minDeliveryTimeSelect.required &&
        errors.push("Minimum Delivery Time is required");
      return errors;
    },
    collectionTimeSelectErrors() {
      const errors = [];
      if (!this.$v.collectionTimeSelect.$dirty) return errors;
      !this.$v.collectionTimeSelect.required &&
        errors.push("Collection Time is required");
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
      !this.$v.orderTypeSelect.required &&
        errors.push("Order Type is required");
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
    deliveryFeeErrors() {
      const errors = [];
      if (!this.$v.deliveryFee.$dirty) return errors;
      !this.$v.deliveryFee.required && errors.push("Delivery Fee is required.");
      return errors;
    },
    minAmountForDeliveryErrors() {
      const errors = [];
      if (!this.$v.minAmountForDelivery.$dirty) return errors;
      !this.$v.minAmountForDelivery.required &&
        errors.push("Minimum Amount for Delivery is required.");
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
      this.phone = null;
      this.email = "";
      this.password = "";
      this.repeatPassword = "";
      this.cuisineSelect = null;
      this.typeSelect = null;
      this.orderTypeSelect = null;
      this.collectionTimeSelect = null;
      this.maxDeliveryTimeSelect = null;
      this.minDeliveryTimeSelect = null;
      this.description = "";
      this.checkbox = false;
    }
  }
};
</script>
