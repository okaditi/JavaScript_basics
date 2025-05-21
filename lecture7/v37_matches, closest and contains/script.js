let one = document.getElementById("id1")
console.log(id1)
console.log(id1.matches(".class"))
console.log(id1.matches(".box"))

console.log(sp1.closest(".box"))
console.log(sp1.closest("#sp1"))

console.log(id1.conagins(sp1))
console.log(sp1.conagins(sp1))
console.log(sp1.conagins(id1))
//elem.matches(cc) -> to check if elem matches the given css selector

//elem.closest(css) -> to look for the nearest ancestor that matches the given css selector. the elem itself is also checked

//elemA.contains(elemB) -> returns true if elemB is inside elemA or when elemA==elemB