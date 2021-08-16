import Vue from 'vue';
import IntaSend from 'intasend-inlinejs-sdk';

Vue.use(IntaSend, {
    host: 'http://localhost:4621',
    publicAPIKey: "ISPubKey_test_1d05f642-f7b6-40c1-8cf7-76f712f68df0",
    live: false //or false for sandbox environment
})