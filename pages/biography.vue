<template>
  <div>
    <div class="headlineBox">
      <h1 class="headline">Biography</h1>
    </div>
    <div class="container">
      <h1>ASAKURA Kazuki a.k.a. Arthur</h1>
      <h2 class="headline2">{{ $t('biography.history.title') }}</h2>
      <dl class="historyList" v-if="$i18n.locale === 'ja'">
        <dt>{{ $t('biography.history.list[0].date') }}</dt>
        <dd>{{ $t('biography.history.list[0].description') }}</dd>
        <dt>{{ $t('biography.history.list[1].date') }}</dt>
        <dd>{{ $t('biography.history.list[1].description') }}</dd>
        <dt>{{ $t('biography.history.list[2].date') }}</dt>
        <dd>{{ $t('biography.history.list[2].description') }}</dd>
        <dt>{{ $t('biography.history.list[3].date') }}</dt>
        <dd>{{ $t('biography.history.list[3].description') }}</dd>
      </dl>
      <dl class="historyList-en" v-else>
        <dt>{{ $t('biography.history.list[0].date') }}</dt>
        <dd>{{ $t('biography.history.list[0].description') }}</dd>
        <dt>{{ $t('biography.history.list[1].date') }}</dt>
        <dd>{{ $t('biography.history.list[1].description') }}</dd>
        <dt>{{ $t('biography.history.list[2].date') }}</dt>
        <dd>{{ $t('biography.history.list[2].description') }}</dd>
      </dl>
      <h2 class="headline2">{{ $t('biography.currentAffiliation.title') }}</h2>
      <ul>
        <li>{{ $t('biography.currentAffiliation.list[0]') }}</li>
        <li>
          <a href="https://titech.app/" target="_blank" rel="noopener" :aria-label="$t('biography.currentAffiliation.list[1]')">
            {{ $t('biography.currentAffiliation.list[1]') }}
          </a>
        </li>
        <li>
          <a href="https://www.mdi.c.titech.ac.jp/" target="_blank" rel="noopener" :aria-label="$t('biography.currentAffiliation.list[2]')">
            {{ $t('biography.currentAffiliation.list[2]') }}
          </a>
        </li>
      </ul>
      <h2 class="headline2">{{ $t('biography.formerAffiliation.title') }}</h2>
      <ul>
        <li>{{ $t('biography.formerAffiliation.list[0]') }}</li>
        <li>{{ $t('biography.formerAffiliation.list[1]') }}</li>
        <li>{{ $t('biography.formerAffiliation.list[2]') }}</li>
        <li>{{ $t('biography.formerAffiliation.list[3]') }}</li>
        <li>{{ $t('biography.formerAffiliation.list[4]') }}</li>
      </ul>
      <h2 class="headline2">{{ $t('biography.awards.title') }}</h2>
      <ul>
        <li>{{ $t('biography.awards.list[0]') }}</li>
        <li>{{ $t('biography.awards.list[1]') }}</li>
        <li>{{ $t('biography.awards.list[2]') }}</li>
      </ul>
      <h2 class="headline2">{{ $t('biography.qualifications.title') }}</h2>
      <ul>
        <li>{{ $t('biography.qualifications.list[0]') }}</li>
        <li>{{ $t('biography.qualifications.list[1]') }}</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: 'Biography',
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Biography',
        },
      ],
    }
  }
}
</script>
<style scoped lang="scss">
.headlineBox {
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAG0lEQVQYV2NkYGD4z8DAwMgABXAGNgGwSgwVAFbmAgXQdISfAAAAAElFTkSuQmCC'), url('~assets/img/headline_bg/biography.jpg');
}

.historyList, .historyList-en {
  display: flex;
  flex-wrap: wrap;
}
.historyList > dt {
  width: 5em;
}
.historyList > dd {
  width: calc(100% - 5em);
}
.historyList-en > dt {
  width: 12em;
}
.historyList-en > dd {
  width: calc(100% - 12em);
}
</style>
