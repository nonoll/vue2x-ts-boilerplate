import Vue from 'vue';

export const MyMixin = Vue.extend({
  data: function() {
    return {
      mixinMessage: 'this came from MyMixin!'
    };
  },
  created() {
    console.log('MyMixin.created()');
  },
  mounted() {
    console.log('MyMixin.mounted()');
  },
  methods: {
    mixinOutput(text: string) {
      console.log('mixin says: ' + text);
    }
  }
});
