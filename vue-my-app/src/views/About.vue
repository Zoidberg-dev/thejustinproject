<template>
<div class="spinner">
  <PixelSpinner
    :animation-duration="1000"
    :size="10"
    :color="'#ff1d5e'"
  />
</div>
</template>

<script>
import PixelSpinner from '@bit/epicmaxco.epic-spinners.pixel-spinner'

export default (
  {
    components: {
      PixelSpinner
    }
  }
)
</script>

<style>
.spinner {
  margin-left: 200px;
}
</style>
