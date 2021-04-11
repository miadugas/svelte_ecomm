<script>
   // import CartButton from "../Cart/CartButton.svelte";
    import { link } from "svelte-routing";
    // import globalStore from "../../stores/globalStore";
    // let openSidebar = globalStore.toggleItem;
    </script>

    <nav class="navbar">
    <div class="nav-center">
    <!-- sidebar toggle -->
    <button class="btn-sidebar-toggle">
        <i class="fas fa-bars" />
    </button>
    <!-- logo -->
    <a href="/" use:link class="nav-logo">
        <img src="/assets/images/logo.png" class="logo" alt="razors logo" />
    </a>
    <!-- cart button -->
    <button>cart</button>
    <!-- <CartButton /> -->
    </div>
</nav>