export default defineNuxtRouteMiddleware((to, from) => {
  useNuxtApp().hook("page:finish", () => {
    console.log("page:finish");
    let div = document.getElementById("__nuxt");
    if (div) {
      //if there is #feature in the url show that div to top
      if (to.hash) {
        let element = document.getElementById(to.hash.replace("#", ""));
        if (element) {
          //scroll smothly to the element
          setTimeout(() => element.scrollIntoView({ behavior: "instant", }), 100);
        } else {
          setTimeout(() => div.scrollTop = 0, 0);
        }
      } else {
        setTimeout(() => div.scrollTop = 0, 0);
      }
    }
  });
});