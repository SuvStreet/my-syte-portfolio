<template>
  <div :class="['padd-15', className]">

    <h3 class="title">{{ qTitle }}</h3>

    <div class="row">
      <div class="timeline-box padd-15">
        <div class="timeline shadow-dark">
          <div class="timeline-item">
            <div class="circle-dot"></div>
            <h3 class="timeline-date">
              <i class="fa fa-calendar"></i> 2013 - 2015
            </h3>
            <h4 class="timeline-title">Мастер компьютерных наук</h4>
            <p class="timeline-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              aspernatur cupiditate aut atque voluptatem, ut natus, fugit sequi
              ratione accusamus mollitia molestias, maiores ad. Repudiandae
              numquam, ab sunt sed atque magni enim doloribus.
            </p>
          </div>

          <div class="timeline-item">
            <div class="circle-dot"></div>
            <h3 class="timeline-date">
              <i class="fa fa-calendar"></i> 2013 - 2015
            </h3>
            <h4 class="timeline-title">Мастер компьютерных наук</h4>
            <p class="timeline-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              aspernatur cupiditate aut atque voluptatem, ut natus, fugit sequi
              ratione accusamus mollitia molestias, maiores ad. Repudiandae
              numquam, ab sunt sed atque magni enim doloribus.
            </p>
          </div>

          <div class="timeline-item">
            <div class="circle-dot"></div>
            <h3 class="timeline-date">
              <i class="fa fa-calendar"></i> 2013 - 2015
            </h3>
            <h4 class="timeline-title">Мастер компьютерных наук</h4>
            <p class="timeline-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              aspernatur cupiditate aut atque voluptatem, ut natus, fugit sequi
              ratione accusamus mollitia molestias, maiores ad. Repudiandae
              numquam, ab sunt sed atque magni enim doloribus.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['className', 'qTitle'],
  setup() {
  },
}
</script>

<style></style>
