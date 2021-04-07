<template>
  <div>
    <div class="headlineBox">
      <h1 class="headline">Skills</h1>
    </div>
    <div class="container">
      <p>
        <font-awesome-icon class="icon icon-good" :icon="['fas', 'smile']" />:
        Familier<br />
        <font-awesome-icon class="icon icon-soso" :icon="['fas', 'meh']" />:
        Beginner
      </p>
      <h2 class="headline2">Programming Languages</h2>
      <ul class="skillList">
        <skill-element name="C" level="good" />
        <skill-element name="PHP" level="good" />
        <skill-element name="JavaScript (ES2015)" level="good" />
        <skill-element name="Python3" level="good" />
        <skill-element name="Java" level="good" />
        <skill-element name="HTML5, CSS3" level="good" />
        <skill-element name="SQL" level="good" />
        <skill-element name="TypeScript" level="soso" />
        <skill-element name="Scala" level="soso" />
        <skill-element name="Perl5" level="soso" />
        <skill-element name="Scheme" level="soso" />
        <skill-element name="x86-64 Assembly Language" level="soso" />
        <skill-element name="MATLAB" level="soso" />
        <skill-element name="Google Apps Script" level="soso" />
      </ul>
      <h2 class="headline2">Frameworks (Front-end)</h2>
      <ul class="skillList">
        <skill-element name="Vue.js" level="good" />
        <ul class="skillList">
          <skill-element name="Vuex" level="good" />
          <skill-element name="Nuxt.js" level="good" />
        </ul>
        <skill-element name="React" level="soso" />
        <ul class="skillList">
          <skill-element name="Next.js" level="soso" />
        </ul>
      </ul>
      <h2 class="headline2">Frameworks (Server-side)</h2>
      <ul class="skillList">
        <skill-element name="FuelPHP" level="good" />
        <skill-element name="Laravel" level="good" />
        <ul class="skillList">
          <skill-element name="Laravel Mix" level="good" />
          <skill-element name="Laravel Echo" level="good" />
          <skill-element name="Laravel Sanctum" level="good" />
        </ul>
        <skill-element name="Play Framework" level="soso" />
        <skill-element name="Express" level="soso" />
      </ul>
      <h2 class="headline2">HTTP Servers</h2>
      <ul class="skillList">
        <skill-element name="Nginx" level="good" />
        <skill-element name="Apache" level="soso" />
      </ul>
      <h2 class="headline2">Virtual Environments</h2>
      <ul class="skillList">
        <skill-element name="Docker" level="soso" />
        <skill-element name="Vagrant" level="soso" />
      </ul>
      <h2 class="headline2">Cloud Services</h2>
      <ul class="skillList">
        <skill-element name="Amazon Web Services" level="soso" />
        <ul class="skillList">
          <skill-element name="Amazon S3" level="soso" />
          <skill-element name="Amazon SQS" level="soso" />
          <skill-element name="AWS Lambda" level="soso" />
        </ul>
      </ul>
      <h2 class="headline2">Continuous Integrations</h2>
      <ul class="skillList">
        <skill-element name="CircleCI" level="soso" />
      </ul>
      <h2 class="headline2">Operating Systems</h2>
      <ul class="skillList">
        <skill-element name="Windows" level="good" />
        <skill-element name="macOS" level="good" />
        <skill-element name="Linux (CentOS, Ubuntu)" level="good" />
      </ul>
      <h2 class="headline2">Misc</h2>
      <ul class="skillList">
        <skill-element name="LaTeX, XeLaTeX" level="good" />
        <skill-element name="git" level="good" />
        <skill-element name="CTF" level="soso" />
        <skill-element name="Public Address" level="soso" />
      </ul>
    </div>
  </div>
</template>
<script>
import SkillElement from "@/components/SkillElement.vue";
export default {
  components: { SkillElement },
  head() {
    return {
      title: "Skills",
      meta: [
        {
          hid: "og:title",
          property: "og:title",
          content: "Skills"
        }
      ]
    };
  }
};
</script>
<style scoped lang="scss">
@import "@/assets/scss/variables.scss";
.headlineBox {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAG0lEQVQYV2NkYGD4z8DAwMgABXAGNgGwSgwVAFbmAgXQdISfAAAAAElFTkSuQmCC"),
    url("~assets/img/headline_bg/skills.jpg");
}

.skillList {
  padding-left: 1em;
  list-style-type: none;
}

.icon {
  margin-right: 0.5em;
}
.icon-good {
  color: $green;
}
.icon-soso {
  color: $blue;
}
</style>
