<template>
<div class="announcements">
  <div class="announcements__title">
    <div class="title--small">
      {{$t('announcementsTitleSmall')}}
    </div>
    <div class="title text-decoration">
      {{$t('announcementsTitleBig')}}
    </div>
  </div>
  <div class="announcements__list">
    <announcementsList />
  </div>
</div>
</template>

<script>
import announcementsList from "@/js/components/white/announcementsList";
export default {
  name: "AnnouncementsWhite",
  components: {
    announcementsList
  }
}
</script>

<style scoped lang="scss">
.announcements {

  &__title {
    padding: 160px 160px 0 160px;
  }
}
.title {
  font-size: 200px;
  color: #F8F7F3;

  &--small {
    position: relative;
    margin-bottom: -160px;
    font-size: 40px;
    font-weight: 600;
    color: black;
    text-transform: uppercase;
  }
}

.text-decoration{
  font-weight: 700;
  text-shadow:
      -2px -2px 0 #E4DFD8,
      2px -2px 0 #E4DFD8,
      -2px 2px 0 #E4DFD8,
      2px 2px 0 #E4DFD8;
}
@media only screen and (max-width: 1440px) {
  .announcements {

    &__title {
      padding: 100px 60px 0 60px;
    }
  }
  .title {
    font-size: 120px;

    &--small {
      margin-bottom: -100px;
      font-size: 20px;
    }
  }
}
@media only screen and (max-width: 690px) {
  .announcements {

    &__title {
      padding: 50px 60px 0 60px;
    }
  }
  .title {
    font-size: 70px;

    &--small {
      margin-bottom: -60px;
      font-size: 10px;
    }
  }
}
</style>
