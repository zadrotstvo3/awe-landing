<template>
<div class="team">
  <div class="team__title">
    <div class="title--small">
      {{$t('ourTeamSmall')}}
    </div>
    <div class="title text-decoration">
      {{$t('ourTeamBig')}}
    </div>
  </div>
  <div class="team-list">
    <teamList />
  </div>
</div>
</template>

<script>
import teamList from "@/js/components/white/teamList";
export default {
name: "ourTeam",
  components: {
    teamList
  }
}
</script>

<style scoped lang="scss">
.team {
  padding:  160px 160px 0 160px;
  background-image: url('~@/js/assets/SVG/DNA.svg');
  background-position: top right;
  background-size: cover;
  background-repeat: no-repeat;
}
.title {
  font-size: 200px;
  color: white;

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
  .team {
      padding: 100px 60px 0 60px;
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
  .team {
      padding: 50px 20px 0 20px;
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
