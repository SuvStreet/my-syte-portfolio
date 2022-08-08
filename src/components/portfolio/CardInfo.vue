<template>
  <div class="project-card">
    <div class="section-title">
      <h2>Name Project</h2>
    </div>

    <div class="row">
      <div class="project-tag padd-15">
        <small>#Category/hashTag</small>
        <small>#Category/hashTag</small>
        <small>#Category/hashTag</small>
      </div>
    </div>

    <div class="row">
      <div class="project-content padd-15">
        <div class="project-title">
          <h3>Description Project:</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum iure,
            nesciunt ducimus debitis ut neque laborum nulla earum sed
            laudantium? Impedit est cum veniam libero optio ex voluptatibus
            autem et. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae ea iste totam amet officiis qui expedita mollitia ullam
            vero. Numquam tempore commodi perferendis dolores dolorum quas, nisi
            ratione eveniet adipisci.
          </p>
        </div>
        <div class="project-tech-title">
          <h3>Info Project:</h3>

          <ul>
            <li><strong>Date</strong> - 2020</li>
            <li><strong>Client</strong> - SuvStreet</li>
            <li><strong>Tools</strong> - html, sass, js, vue</li>
            <li><strong>Web</strong> - www.suvstreet.com</li>
          </ul>
        </div>
      </div>
    </div>
    <hr/>
  </div>
</template>

<script>
export default {}
</script>

<style>
.project-card hr{
  border: 1px solid var(--text-black-900);
  margin: 20px 0;
}

.project-content {
  flex: 0 0 100%;
  max-width: 100%;
}

.project-tag {
  font-size: 15px;
  color: var(--text-black-900);
  margin-bottom: 30px;
  margin-top: -30px;
}

.project-tag small {
  margin-right: 10px;
}

.project-content {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}

.project-content h3 {
  font-size: 24px;
  margin-bottom: 15px;
  font-weight: 700;
  color: var(--text-black-900);
}

.project-content .project-title {
  flex: 3 0 70%;
}

.project-title,
.project-tech-title {
  padding-right: 20px;
}

.project-title p,
.project-tech-title ul {
  font-size: 15px;
  color: var(--text-black-900);
}
</style>
