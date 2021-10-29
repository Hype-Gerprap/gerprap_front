<template>
  <div id="app">
    <div>
      <b-navbar class="" toggleable="lg" type="light" variant="light">
        <b-navbar-brand href="/">Hype</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item>
              <router-link to="/" class="">Home</router-link>
            </b-nav-item>
            <b-nav-item>
              <router-link to="/predio" class="">Predios</router-link>
            </b-nav-item>
            <b-nav-item>
              <router-link to="/apartamento">Apartamentos</router-link>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 10px;
}

b-nav-item a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

  .def{
      background-image: linear-gradient(
    45deg,
    rgb(20, 222, 124) 0%,
    rgb(20, 222, 124) 21%,
    rgb(25, 190, 119) 21%,
    rgb(25, 190, 119) 37%,
    rgb(30, 158, 113) 37%,
    rgb(30, 158, 113) 46%,
    rgb(35, 126, 108) 46%,
    rgb(35, 126, 108) 53%,
    rgb(39, 94, 103) 53%,
    rgb(39, 94, 103) 59%,
    rgb(44, 62, 97) 59%,
    rgb(44, 62, 97) 77%,
    rgb(49, 30, 92) 77%,
    rgb(49, 30, 92) 100%
    );
  }
</style>
