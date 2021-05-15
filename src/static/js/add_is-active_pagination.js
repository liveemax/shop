export const addActivePagination = (e) => {
    const target = e.currentTarget
    const curr = "is-current"
    const currReg = /(is-current)/
    const previousReg = /(pagination-previous)/
    const nextReg = /(pagination-next)/
    if (!target.attributes.disabled && !target.classList.value.match(currReg)) {
        let next=0
        //pagination-next|pagination-previous handler
        if (target.classList.value.match(/(pagination-next)|(pagination-previous)/)) {
            document.querySelectorAll(".pagination__item").forEach((el,ind) => {
                if(next)
                {
                    next=0
                    return
                }
                if (el.classList.value.match(currReg) && target.classList.value.match(previousReg)) {
                    el.previousElementSibling.classList.add(curr)
                    el.classList.remove(curr)
                    if(el.previousElementSibling.previousElementSibling.classList.value.match(previousReg)) {
                        document.querySelectorAll(".pagination-previous").forEach((prev) => {
                            prev.setAttribute("disabled","disabled")
                        })
                    }
                }
                else if(el.classList.value.match(currReg) && target.classList.value.match(nextReg)) {
                    el.nextElementSibling.classList.add(curr)
                    el.classList.remove(curr)
                    if(el.nextElementSibling.nextElementSibling.classList.value.match(nextReg)) {
                        document.querySelectorAll(".pagination-next").forEach((next) => {
                            next.setAttribute("disabled","disabled")
                        })
                    }
                    next=1
                }
                    el.removeAttribute("disabled")
            })
            return
        }
        //reset all. Set is-active if it is a digital button
        document.querySelectorAll(".pagination__item").forEach((el) => {
            if(target.nextElementSibling.classList.value.match(nextReg)) {
                document.querySelectorAll(".pagination-next").forEach((prev) => {
                    prev.setAttribute("disabled","disabled")
                })
            }
            if(target.previousElementSibling.classList.value.match(previousReg)) {
                document.querySelectorAll(".pagination-previous").forEach((next) => {
                    next.setAttribute("disabled","disabled")
                })
            }
            if (el.classList.value.match(currReg)) {
                el.classList.remove(curr)
            }
            if (el.innerHTML === target.innerHTML) {
                el.classList.add(curr)
            }
            el.removeAttribute("disabled")

        })
    }

}
