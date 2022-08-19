<template>
  <div>
    <main class="overflow-hidden ">
      <!--Start Breadcrumb Style2-->
      <section class="breadcrumb-area" style="background-image:
      url(src/assets/images/inner-pages/breadcum-bg.png);">
        <div class="container">
          <div class="row">
            <div class="col-xl-12">
              <div class="breadcrumb-content text-center wow fadeInUp animated">
                <h2>Cart</h2>
                <div class="breadcrumb-menu">
                  <ul>
                    <li><a href="index.html"><i class="flaticon-home pe-2"></i>Home</a></li>
                    <li> <i class="flaticon-next"></i> </li>
                    <li class="active">Cart</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!--End Breadcrumb Style2-->
      <!--Start cart area-->
      <section class="cart-area pt-120 pb-120">
        <div class="container">
          <div class="row wow fadeInUp animated">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div class="cart-table-box">
                <div class="table-outer">
                  <table class="cart-table">
                    <thead class="cart-header">
                    <tr>
                      <th class="">Product Name</th>
                      <th class="price">Price</th>
                      <th>Quantity</th>
                      <th>Subtotal</th>
                      <th class="hide-me"></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="product in this.products">
                      <td>
                        <div class="thumb-box"> <a href="shop-details-1.html" class="thumb">
                          <img :src="product.image_url" alt="">
                        </a> <a href="shop-details-1.html" class="title">
                          <h5> {{ product.title }} </h5>
                        </a> </div>
                      </td>
                      <td>${{ product.price }}</td>
                      <td class="qty">
                        <div class="qtySelector text-center">
                          <span @click.prevent="minusQty(product.id)"
                                class="decreaseQty"><i class="flaticon-minus"></i></span>
                          <input type="number" class="qtyValue" :value="product.qty" />
                          <span @click.prevent="plusQty(product.id)" class="increaseQty"> <i class="flaticon-plus"></i>
                          </span>
                        </div>
                      </td>
                      <td class="sub-total">${{ product.price * product.qty }}</td>
                      <td>
                        <div class="remove"> <i @click.prevent="removeProd(product.id)" class="flaticon-cross"></i>
                        </div>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xl-12">
              <div class="cart-button-box">
                <div class="apply-coupon wow fadeInUp animated">
                  <div class="apply-coupon-input-box mt-30 "> <input type="text" name="coupon-code"
                                                                     value="" placeholder="Coupon Code"> </div>
                  <div class="apply-coupon-button mt-30"> <button class="btn--primary style2"
                                                                  type="submit">Apply Coupon</button> </div>
                </div>
                <div class="cart-button-box-right wow fadeInUp animated"> <button class="btn--primary mt-30"
                                                                                  type="submit">Continue Shopping</button> <button class="btn--primary mt-30"
                                                                                                                                   type="submit">Update Cart</button> </div>
              </div>
            </div>
          </div>
          <div class="row pt-120">
            <div class="col-xl-6 col-lg-7 wow fadeInUp animated">
              <div class="cart-total-box">
                <div class="inner-title">
                  <h3>Cart Totals</h3>
                </div>
              </div>
            </div>
          </div>
          <div class="row mt--30">
            <div class="col-xl-6 col-lg-5 wow fadeInUp animated">
              <div class="cart-check-out mt-30">
                <h3>Check Out</h3>
                <ul class="cart-check-out-list">
                  <li>
                    <div class="left">
                      <p>Total Price:</p>
                    </div>
                    <div class="right">
                      <p>${{ totalPrice }}</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!--End cart area-->
    </main>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      products: [],
    }
  },
  mounted() {
    this.getCartProducts()
  },
  computed: {
    totalPrice() {
      let total = 0
      this.products.forEach( prod => {
        total += prod.price * prod.qty
      })
      return total
    }
  },
  methods: {
    getCartProducts() {
      this.products = JSON.parse(localStorage.getItem('cart'));
    },
    minusQty(id) {
      this.products.forEach( prod => {
        if (prod.id === id) {
          if (prod.qty === 0) return
          prod.qty--
        }
      })
      this.updateCart()
    },
    plusQty(id) {
      this.products.forEach( prod => {
        if (prod.id === id) {
          prod.qty++
        }
      })
      this.updateCart()
    },
    removeProd(id) {
      this.products = this.products.filter( prod => {
        return prod.id !== id
      })
      this.updateCart()
    },
    updateCart() {
      localStorage.setItem('cart', JSON.stringify(this.products))
    },
    addToCart(id) {
      let newProduct = [{
        'id': id,
        'qty': 1
      }]
      let cart = localStorage.getItem('cart');
      if (!cart) {
        localStorage.setItem('cart', JSON.stringify(newProduct))
      } else {
        cart = JSON.parse(cart)
        cart.forEach( product => {
            if (product.id === id) {
              newProduct = null
              product.qty = Number(product.qty) + 1
            }
          })
        Array.prototype.push.apply(cart, newProduct)
        localStorage.setItem('cart', JSON.stringify(cart))
      }
    }
  }
}
</script>

<style scoped>

</style>