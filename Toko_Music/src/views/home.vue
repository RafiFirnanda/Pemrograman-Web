<script setup>

</script>

<template>
    <div class="home-metal p-5 mb-4 rounded-3">
        <div class="container-fluid py-5 text-center">
            <h1 class="display-5 fw-bold metal-title">Rafi Music Studio</h1>
            <p class="col-md-8 fs-4 mx-auto metal-subtitle">
                Music Never Die Rock and Roll Forever
            </p>
            <!-- History Section -->
      <div class="history-section mt-4">
        <h3 class="fw-bold">A Brief History of Music</h3>
        <p class="col-md-8 mx-auto fs-6 text-white">
          Music has been an integral part of human culture for thousands of years. From the ancient rhythms of tribal drums 
          to the symphonies of the classical era, and the electrifying sounds of modern genres like rock and metal, music 
          continues to evolve and inspire. It is a universal language that bridges cultures, emotions, and time itself.
        </p>
        <p class="col-md-8 mx-auto fs-6 text-white">
          In the 20th century, rock and roll revolutionized the world with its bold rhythms and rebellious spirit, giving 
          birth to countless subgenres, including the powerful and intense realm of metal. Today, metal music symbolizes 
          passion, resilience, and a relentless pursuit of freedom.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-metal {
    background: linear-gradient(45deg, #1a1a1a, #333);
    color: #e0e0e0;
    border: 2px solid #444;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
}

.metal-title {
    color: #0072ff;
    font-family: 'Metal Mania', sans-serif;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
}

.metal-subtitle {
    color: #cccccc;
    font-family: 'Roboto', sans-serif;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

.text-muted {
    font-style: italic;
    color: #999;
}

.container-fluid {
    border-radius: 10px;
    padding: 20px;
}
</style>
