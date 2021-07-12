function switchIt(e) {
    console.log(e.dataset);
}

function quantityButton(element, action) {
    let cQty = document.getElementById('qtyinput').value;
    if (action) {
        var nQty = parseInt(cQty) + 1;
    } else {
        if (cQty > 1) {
            var nQty = parseInt(cQty) - 1;
        } else {
            var nQty = 1;
        }
    }
    document.getElementById('qtyinput').value = nQty;
}
window.addEventListener("load", function () { [...document.querySelectorAll(".related-checkbox")].forEach(function (e) { e.addEventListener("change", e => { if (e.target.checked) if (document.getElementById("related-products-field").value.length > 0) { let t = document.getElementById("related-products-field").value.split(","); t.push(e.target.value), document.getElementById("related-products-field").value = t } else document.getElementById("related-products-field").value = e.target.value; else document.getElementById("related-products-field").value = document.getElementById("related-products-field").value.split(",").filter(t => t != e.target.value) }) }) });

function toggleSearch(element) {
    element.classList.toggle('open');
    document.getElementById('msb').classList.toggle('expanded');
}
function toggleMenu(element) {
    document.getElementsByTagName('html')[0].classList.toggle('open-menu');
    document.getElementById('msb').classList.toggle('open-menu');
}

function changeTab(tab) {
    if (!tab.classList.contains('active')) {
        [...document.getElementsByClassName('tab-switch')].forEach(function (e) {
            if (e.classList.contains('active')) {
                e.classList.toggle('active');
                document.getElementById('tabcontent-' + e.id).style.display = "none";
            }
        });
        tab.classList.toggle('active');
        document.getElementById('tabcontent-' + tab.id).style.display = "block";
    } else if (tab.classList.contains('active') && screen.width < 1024) {
        tab.classList.toggle('active');
        document.getElementById('tabcontent-' + tab.id).style.display = "none";
    }
}

// Sets the display type of the first 'a-full' related products block

if (document.body.classList.contains('catalog-product-view')) {
    let block = document.querySelector('.a-full');
    if(block) {
        block.style.display = 'block';
    }
}