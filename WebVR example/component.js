AFRAME.registerComponent("foo", {
    init: function() {
      window.addEventListener("wheel", (e) => {
        let scaleFactor = e.deltaY > 0 ? 0.9 : 1.1
        let scale = this.el.getAttribute("scale").clone()
        scale.multiplyScalar(scaleFactor)
        this.el.setAttribute("scale", scale)
      })
    }
  })