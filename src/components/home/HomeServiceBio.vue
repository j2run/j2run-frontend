<template>
  <div class="wrapper">
    <div class="xeo-top"></div>
    <v-container class="h-100">
      <v-row justify="center" class="h-100" align="center">
        <div class="text-center mt-15 mb-13 mx-2 text-h4 font-unbounded">
          Xây dựng Bio Link sắp ra mắt
          <br />
          <div class="mt-10">
            <v-icon>mdi-emoticon-excited-outline</v-icon>
          </div>
        </div>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
.wrapper {
  position: relative;
  margin-top: 100px;
  height: calc(80vh - 160px);
  background-color: #6b7c99;
  color: white;

  .xeo-top {
    position: absolute;
    top: -50px;
    left: 0;
    height: 100px;
    width: 100%;
    overflow: hidden;

    &::after {
      content: '';
      position: absolute;
      display: inline-block;
      top: 50px;
      left: -20px;
      width: calc(100% + 40px);
      height: 100px;
      transform-origin: 100% 50%;
      background-color: #6b7c99;
      transform: rotateZ(1deg);
      z-index: 1;
    }
  }

}

</style>