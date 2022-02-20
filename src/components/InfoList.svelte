<script>
  import { storeInfo } from '~/store/info'
  import InfoCard from '~/components/InfoCard.svelte'
</script>

<div 
  class="info-list">
  <div class="info">
    {#each $storeInfo as sInfo (sInfo.id)}
      <InfoCard {sInfo} />
    {/each}
  </div>
</div>

<style lang="scss">
  .info-list {
    margin-top: 30px;
    padding: 10px;
    background-color: $color--area;
    border-radius: 4px;
    text-align: center;
    &.no-result {
      padding: 70px 0;
    }
    .message {
      color: $color--primary;
      font-size: 20px;
      text-align: center;
    }

    .info {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
</style>
