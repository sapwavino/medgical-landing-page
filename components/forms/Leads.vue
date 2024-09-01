<template>
  <div>
    <div v-if="sent">
      <h3 class="text-2xl font-semibold text-gray-900 mb-2">
        {{ $t("contactform.thankyou") }}
      </h3>
      <p class="text-sm text-gray-600 mb-5">
        {{ $t("contactform.success_message") }}
      </p>
      <MedgicalButton type="primary" :loading="false" @click="closeAction()">
        {{ $t("contactform.close") }}
      </MedgicalButton>
    </div>
    <div v-else-if="!sent">
      <h3
        v-if="ctaReason == 'contact'"
        class="text-2xl font-semibold text-gray-900 mb-2"
      >
        {{ $t("contactform.contactus") }}
      </h3>
      <h3
        v-else-if="ctaReason == 'hospital_clinics_license'"
        class="text-2xl font-semibold text-gray-900 mb-2"
      >
        {{ $t("contactform.hospital_license") }}
      </h3>
      <h3 v-else class="text-2xl font-semibold text-gray-900 mb-2">
        {{ $t("contactform.try") }}
      </h3>
      <p
        v-if="ctaReason == 'try' || ctaReason == 'medical_license'"
        class="text-sm text-gray-600 mb-1.5"
      >
        {{ $t("contactform.try_message") }}
      </p>
      <p v-else class="text-sm text-gray-600 mb-1.5">
        {{ $t("contactform.contact_message") }}
      </p>
      <div class="flex flex-col gap-3 pt-3 mb-2">
        <MedgicalInput
          ref="nameRef"
          :placeholder="$t('contactform.name') + '*'"
          :disabled="sending"
          type="text"
          v-model="name"
          :error="nameError"
        />
        <MedgicalInput
          ref="emailRef"
          :disabled="sending"
          :placeholder="$t('contactform.email') + '*'"
          type="email"
          v-model="email"
          :error="emailError"
        />
        <MedgicalInput
          ref="phoneRef"
          :disabled="sending"
          :placeholder="$t('contactform.phone')"
          type="tel"
          v-model="phone"
          :error="phoneError"
        />
        <MedgicalInput
          ref="organizationRef"
          :disabled="sending"
          :placeholder="$t('contactform.organization')"
          type="text"
          v-model="organization"
          :error="organizationError"
        />
        <MedgicalInput
          v-if="
            ctaReason == 'hospital_clinics_license' || ctaReason == 'contact'
          "
          ref="roleRef"
          :placeholder="$t('contactform.role')"
          :disabled="sending"
          type="text"
          v-model="role"
          :error="roleError"
        />
        <div class="flex items-center gap-2 mb-0.5 ml-4">
          <input
            type="checkbox"
            id="newsletter"
            name="newsletter"
            v-model="newsletter"
            class="medgical-checkbox"
          />
          <label for="newsletter" class="text-sm text-gray-600 select-none ml-1">
            {{ $t("contactform.subscribe_newsletter") }}
          </label>
        </div>
      </div>
      <MedgicalButton
        type="primary"
        :loading="sending"
        :disabled="
          email.length == 0 ||
          emailError.length > 0 ||
          name.length == 0 ||
          nameError.length > 0 ||
          organizationError.length > 0 ||
          roleError.length > 0
        "
        @click="sendData()"
      >
        {{ $t("contactform.send_data") }}
      </MedgicalButton>
      <div
        class="text-xs text-slate-400 max-w-80 mx-auto text-center leading-5 mt-3"
      >
        {{ $t("contactform.footer") }}
        <nuxt-link :to="localePath('/terms')" target="_blank">{{
          $t("contactform.usage_terms")
        }}</nuxt-link>
        {{ $t("contactform.footer2") }}
        <nuxt-link :to="localePath('/privacy')" target="_blank">{{
          $t("contactform.privacy_policy")
        }}</nuxt-link
        >.
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: {
    cta: {
      type: String,
      default: null
    },
    extraData: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      sending: false,
      sent: false,
      name: "",
      nameError: "",
      email: "",
      emailError: "",
      newsletter: false,
      phone: "",
      phoneError: "",
      organization: "",
      organizationError: "",
      role: "",
      roleError: "",
    };
  },
  methods: {
    validateEmail(email) {
      var re = /\S+@\S+\.\S+/;
      return re.test(email);
    },
    async sendData() {
      //verify if all fields are valid
      if (this.validateEmail(this.email) && this.name.length > 0) {
        const runtimeConfig = useRuntimeConfig();
        this.sending = true;
        try {
          let result = await axios.post(
            runtimeConfig.public.API_ENDPOINT + "/v1/contact_requests",
            {
              name: this.name,
              email: this.email,
              phone_number: this.phone,
              organization: this.organization,
              contact_reason: this.ctaReason + ' - ' + this.extraData,
              role: this.role,
              opt_in_newsletter: this.newsletter,
            }
          );
          //change page to sucess page
          console.log("Data sent successfully:", result);
          this.sent = true;
        } catch (error) {
          console.error("Error sending data:", error);
        } finally {
          this.sending = false;
        }
      } else {
        //show error message
        this.emailError = this.validateEmail(this.email)
          ? ""
          : this.$t("contactform.invalid_email");
        this.nameError =
          this.name.length > 0 ? "" : this.$t("contactform.invalid_name");
      }
    },
  },
  computed: {
    ctaReason() {
      return this.cta ? this.cta : this.$store.state.cta;
    },
  },
  watch: {
    email(val) {
      if (val.length > 0 && !this.validateEmail(val)) {
        this.emailError = this.$t("contactform.invalid_email");
      } else {
        this.emailError = "";
      }
    },
  },
};
</script>
