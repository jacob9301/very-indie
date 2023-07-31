import { reactive } from 'vue'

export const store = reactive({
  genreIndex: 0,
  setGenreIndex(i) {
    this.genreIndex = i;
  },
  maxFollowers: 0,
  setMaxFollowers(max) {
    this.maxFollowers = max;
  },
  minFollowers: 0,
  setMinFollowers(min) {
    this.minFollowers = min;
  },
  toSubmit: false,
  submit() {
    this.toSubmit = true;
  },
  submitHandled() {
    this.toSubmit = false;
  }
})