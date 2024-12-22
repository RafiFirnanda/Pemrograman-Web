<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-gradient">
      <div class="container">
        <!-- Logo -->
        <router-link :to="{ name: 'home' }" class="navbar-brand fw-bold" href="#">
          🎵 MusicStore
        </router-link>
        
        <!-- Toggle Button for Mobile -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Navbar Links -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link 
                :to="{ name: 'alats.index' }" 
                class="nav-link text-uppercase fw-bold hover-effect"
                aria-current="page"
              >
                Alats
              </router-link>
            </li>
            <li class="nav-item">
              <router-link 
                :to="{ name: 'customers.index' }" 
                class="nav-link text-uppercase fw-bold hover-effect"
                aria-current="page"
              >
                Customers
              </router-link>
            </li>
          </ul>

          <!-- Login Button -->
          <ul class="navbar ms-auto mb-2 mb-lg-0">
            <a 
              href="#" 
              target="_blank" 
              class="btn btn-login rounded-pill px-4 py-2 text-white"
            >
              Login
            </a>
          </ul>
        </div>
      </div>
    </nav>

    <router-view></router-view>
  </div>
</template>

<style scoped>
/* Gradient Background */
.bg-gradient {
  background: linear-gradient(90deg, #6a11cb, #2575fc);
}

/* Navbar Link Hover Effect */
.hover-effect {
  position: relative;
  transition: color 0.3s;
}

.hover-effect::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: white;
  transition: width 0.3s;
}

.hover-effect:hover::after {
  width: 100%;
}

.hover-effect:hover {
  color: #f5f5f5;
}

/* Button Style */
.btn-login {
  background: linear-gradient(90deg, #00c6ff, #0072ff);
  box-shadow: 0 4px 10px rgba(0, 114, 255, 0.3);
  transition: transform 0.3s, box-shadow 0.3s;
}

.btn-login:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 15px rgba(0, 114, 255, 0.5);
}

/* Font Styles */
.navbar-brand {
  font-family: 'Poppins', sans-serif;
  font-size: 1.5rem;
}

.nav-link {
  font-family: 'Roboto', sans-serif;
}
</style>
