<template>
  <h4>FREE TEACHER RESOURCES</h4>
  <div class="resources-container">
    <div class="resource" id="resource1">
      <img alt="pink monster" src="../assets/monster-six.png" />
      <a href="https://www.teacherspayteachers.com/">Teachers Pay Teachers</a>
    </div>
    <p>A marketplace for teachers with resources created by teachers.</p>
    <div class="resource" id="resource2">
      <img alt="orange monster" src="../assets/monster-three.png" />
      <a
        href="https://www.learningforjustice.org/magazine/our-new-name-learning-for-justice"
        >Learning for Justice</a
      >
    </div>
    <p>Resources that emphasize social justice and anti-bias.</p>
    <div class="resource" id="resource3">
      <img alt="yellow monster" src="../assets/monster-eight.png" />
      <a href="https://newsela.com/">Newsela</a>
    </div>
    <p>Database of current events stories tailor-made for classroom use.</p>
    <div class="resource" id="resource4">
      <img alt="green monster" src="../assets/monster-five.png" />
      <a href="https://storylineonline.net/">Storyline Online</a>
    </div>
    <p>
      Actors reading children's books alongside creatively produced
      illustrations.
    </p>
    <div class="resource" id="resource5">
      <img alt="blue monster" src="../assets/monster-one.png" />
      <a href="https://www.vooks.com/">Vooks</a>
    </div>
    <p>A collection of animated storybooks for kids!</p>
    <div class="resource" id="resource6">
      <img alt="purple monster" src="../assets/monster-two.png" />
      <a href="https://mysteryscience.com/">Mystery Science</a>
    </div>
    <p>Open-and-go lessons that inspire kids to love science.</p>
  </div>
</template>

<script>
</script>

<style scoped>
h4 {
  background-color: #a67acf;
  color: white;
  font-size: 40px;
  font-family: "pleasewritemeasongmedium";
  margin-bottom: 0px;
  padding: 5px;
  padding-top: 10px;
}
#resource1 {
  margin-top: 5px;
}
.resources-container {
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 20px;
}

img {
  width: 40px;
  margin: 10px;
  margin-bottom: 2px;
}

a {
  font-size: 20px;
  color: #a67acf;
  font-weight: 500;
}
a:hover {
  color: #6a4191;
}
.resources-container p {
  margin-left: 20px;
  color: black;
}

.resource {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
}
</style> 