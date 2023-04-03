

const CartWidget = () => {
  return (
    <div className="cart-icon">
        <a href="">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart" width="45" height="45" viewBox="0 0 24 24" stroke-width="2" stroke="#125952" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <circle cx="6" cy="19" r="2" />
            <circle cx="17" cy="19" r="2" />
            <path d="M17 17h-11v-14h-2" />
            <path d="M6 5l14 1l-1 7h-13" />
        </svg>
        </a>

        <div className="counter">
            <p>3</p>
        </div>

  </div>
  )
}

export default CartWidget